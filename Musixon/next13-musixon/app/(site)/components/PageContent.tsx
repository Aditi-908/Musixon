

"use client";

import { Song } from "@/types";

import SongItem from "@/components/SongItem";
import { useCallback } from 'react';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


interface PageContentProps {
  songs: Song[];
}
const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    color: {
      value: "#800080",
    },
    shape: {
      type: "circle",
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

const PageContent: React.FC<PageContentProps> = ({
  songs
}) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        No songs available.
      </div>
    )
  }
 

  return ( 
    <div>
   
  
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
    >
      {songs.map((item) => (
        <SongItem 
          onClick={(id: string) => onPlay(id)} 
          key={item.id} 
          data={item}
        />
      ))}
    </div>
    </div>
  );
}
 
export default PageContent;