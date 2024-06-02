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
    <div className="flex flex-wrap justify-center">
      {loading ? (
        <>
          {items.map((item) => (
            <div key={item}>
              <CardContainer>
                <div role="status" className="flex items-center justify-center h-80 w-full xl:h-80 p-2 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <div className="flex items-center w-full lg:w-auto h-72 xl:h-64 justify-center bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-full h-72 md:h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
                <h2 className="animate-pulse m-0 text-center w-full p-5 text-base font-semibold tracking-wider md:text-lg lg:text-xl">
                  <div className="h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700 my-4"></div>
                </h2>
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
            >
              <CardContainer>
                <div className="w-full">
                  <img
                    src={project.img[0].url}
                    alt="Image"
                    className="w-full lg:w-auto h-72 xl:h-64 flex justify-center rounded-lg"
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-sky-200 m-0 text-center w-full p-5 text-base font-semibold tracking-wider md:text-md">
                    {project.title}
                  </h2>
                </div>
              </CardContainer>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
