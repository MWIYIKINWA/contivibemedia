// src/context/RadioContext.tsx
import { createContext, useContext, useState, useRef } from 'react';

const RadioContext = createContext<any>(null);

export const RadioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleRadio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://stream.zeno.fm/j3vnssegkw0uv');
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error('Playback failed:', err));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <RadioContext.Provider value={{ isPlaying, toggleRadio }}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = () => useContext(RadioContext);
