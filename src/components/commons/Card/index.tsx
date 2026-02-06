'use client'

import { ICms } from '@services/cms/type';
import { useModal } from 'hooks/Modal';
import { useEffect, useState } from 'react';
import { CardContainer } from './Container';

export default function Card({ allPageProjects }: ICms) {
  const [loading, setLoading] = useState<boolean>(true);
  const { openModal } = useModal();

  const items: number[] = [0, 1, 2, 3, 4, 5];

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-7xl">
      {loading ? (
        <>
          {items.map((item) => (
            <div key={item} className="w-full">
              <CardContainer>
                <div role="status" className="flex items-center justify-center w-full aspect-video bg-muted animate-pulse rounded-t-lg">
                  <svg className="w-10 h-10 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="w-full p-4">
                  <div className="h-4 bg-muted rounded-full w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded-full w-1/2"></div>
                </div>
              </CardContainer>
            </div>
          ))}
        </>
      ) : (
        <>
          {allPageProjects?.map((project) => (
            <div
              key={project.title}
              onClick={() => openModal(project)}
              className="w-full"
            >
              <CardContainer>
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={project.img[0].url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="w-full p-4">
                  <h3 className="text-lg font-semibold tracking-tight text-center">
                    {project.title}
                  </h3>
                </div>
              </CardContainer>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
