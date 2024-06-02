import { ThemeApp } from '@components/wrappers/context';
import React, { ReactNode, useCallback, useContext, useEffect, useRef } from 'react';

interface CardContainerProps {
  children?: ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  const { themeApp } = useContext(ThemeApp);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.8;
      audioRef.current.play();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (audioRef.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 1000);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex justify-center items-center flex-wrap rounded-lg p-0 transition-all duration-300 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} text-white transition duration-300 transform scale-90 hover:shadow-md hover:cursor-pointer hover:scale-95 font-bold text-base md:w-96 lg:max-w-5xl xl:w-96 xl:max-w-7xl`}>
      {children}
      <audio ref={audioRef} src="/audio/efeito-repo.wav" />
    </div>
  );
};

