"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const KEY_PREFIX = "course-progress:";
const CHANGE_EVENT = "course-progress-change";

export interface StoredCourseProgress {
  completedTopicIds: string[];
  totalTopics: number;
}

// ---------- storage helpers ----------

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function parseProgress(raw: string | null): StoredCourseProgress | null {
  if (!raw) return null;

  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== "object" || value === null) return null;

    const { completedTopicIds, totalTopics } =
      value as Partial<StoredCourseProgress>;

    if (!Array.isArray(completedTopicIds) || typeof totalTopics !== "number") {
      return null;
    }

    return {
      completedTopicIds: completedTopicIds.filter(
        (id): id is string => typeof id === "string",
      ),
      totalTopics,
    };
  } catch {
    return null;
  }
}

function readCourse(slug: string): string | null {
  try {
    return window.localStorage.getItem(KEY_PREFIX + slug);
  } catch {
    return null;
  }
}

function readAll(): string {
  try {
    const entries: string[] = [];

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);

      if (key?.startsWith(KEY_PREFIX)) {
        entries.push(
          `${key.slice(KEY_PREFIX.length)}\t${window.localStorage.getItem(key)}`,
        );
      }
    }

    return entries.sort().join("\n");
  } catch {
    return "";
  }
}

// ---------- hooks ----------

/** Progress of ONE course — used by the player page. */
export function useCourseProgress(slug: string) {

  const raw = useSyncExternalStore(
    subscribe,
    () => readCourse(slug),
    () => null,
  );

  const completedTopicIds = useMemo(
    () => parseProgress(raw)?.completedTopicIds ?? [],
    [raw],
  );

  const markCompleted = useCallback(
    (topicId: string, totalTopics: number) => {
      const current = parseProgress(readCourse(slug))?.completedTopicIds ?? [];

      if (current.includes(topicId)) return;

      try {
        window.localStorage.setItem(
          KEY_PREFIX + slug,
          JSON.stringify({
            completedTopicIds: [...current, topicId],
            totalTopics,
          } satisfies StoredCourseProgress),
        );
        window.dispatchEvent(new Event(CHANGE_EVENT));
      } catch {
        // storage unavailable (private mode / quota) — progress just won't persist
      }
    },
    [slug],
  );

  return { completedTopicIds, markCompleted };
}

/** Progress of ALL courses keyed by slug — used by the listing page. */
export function useAllCourseProgress(): Record<string, StoredCourseProgress> {
  const raw = useSyncExternalStore(subscribe, readAll, () => "");

  return useMemo(() => {
    const result: Record<string, StoredCourseProgress> = {};

    for (const line of raw ? raw.split("\n") : []) {
      const separator = line.indexOf("\t");
      if (separator === -1) continue;

      const parsed = parseProgress(line.slice(separator + 1));
      if (parsed) result[line.slice(0, separator)] = parsed;
    }

    return result;
  }, [raw]);
}