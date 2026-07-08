"use client";
import { MediaPlayer, MediaProvider, Poster, PlayButton } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import { Play } from "lucide-react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

interface VideoHeroProps {
    videoUrl: string;
    posterUrl: string;
}

export function VideoHero({ videoUrl, posterUrl }: VideoHeroProps) {
    return (
        <MediaPlayer
            src={videoUrl}
            poster={posterUrl}
            className="relative aspect-video overflow-hidden rounded-none bg-foreground-muted">
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