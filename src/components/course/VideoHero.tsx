"use client";
import { useRef } from "react";
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  PlayButton,
  type MediaPlayerInstance,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { Play } from "lucide-react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "./VideoHero.css";

interface VideoHeroProps {
  videoUrl: string;
  posterUrl: string;
  onEnded: () => void;
  autoPlay?: boolean;
}

export function VideoHero({
  videoUrl,
  posterUrl,
  onEnded,
  autoPlay = false,
}: VideoHeroProps) {
  const playerRef = useRef<MediaPlayerInstance>(null);
  const autoPlayedSrc = useRef<string | null>(null);

  const handleCanPlay = () => {
    if (!autoPlay || autoPlayedSrc.current === videoUrl) return;

    autoPlayedSrc.current = videoUrl;
    playerRef.current?.play().catch((error: unknown) => {
      if (process.env.NODE_ENV === "development") {
        console.info("Autoplay was blocked:", error);
      }
    });
  };

  return (
    <MediaPlayer
      key={videoUrl}
      ref={playerRef}
      src={videoUrl}
      poster={posterUrl}
      playsInline
      className="relative aspect-video overflow-hidden rounded-none bg-foreground-muted"
      onEnded={onEnded}
      onCanPlay={handleCanPlay}
    >
      <MediaProvider className="absolute inset-0" />
      <Poster className="vds-poster absolute inset-0 z-10 h-full w-full object-cover" />
      <PlayButton className="media-paused:flex hidden absolute inset-0 z-20 items-center justify-center group">
        <span className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play className="h-6 w-6 fill-[#e7477d] text-[#e7477d]" />
        </span>
      </PlayButton>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
}
