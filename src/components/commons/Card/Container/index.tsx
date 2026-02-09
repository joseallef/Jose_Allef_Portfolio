import React, { ReactNode, useCallback, useEffect, useRef } from 'react';

interface CardContainerProps {
  children?: ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch((error) => {
        // Silently ignore autoplay errors (expected behavior in modern browsers)
        console.warn('Audio play prevented:', error);
      });
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
      className="flex flex-col rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer w-full h-full overflow-hidden"
    >
      {children}
      <audio ref={audioRef} src="/audio/efeito-repo1.wav" />
    </div>
  );
};
