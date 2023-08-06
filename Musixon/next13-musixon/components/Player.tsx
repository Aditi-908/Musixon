"use client";

import { useEffect, useState } from "react";
import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";

import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    // Set a small delay before showing the player to trigger the animation
    const delay = setTimeout(() => {
      setPlayerVisible(true);
    }, 50);

    return () => clearTimeout(delay);
  }, []);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className={`
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
        transition-opacity
        ${isPlayerVisible ? "opacity-100" : "opacity-0"} // Apply fade-in animation based on the isPlayerVisible state
      `}
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}

export default Player;
