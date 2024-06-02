import { ThemeApp } from "@components/wrappers/context";
import { IGetContentCms } from "@services/cms/type";
import React, { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  project: IGetContentCms | null;
  openModal: (project: IGetContentCms) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { themeApp } = useContext(ThemeApp);

  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<IGetContentCms | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (project: IGetContentCms) => {
    setProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProject(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapePress);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, project, openModal, closeModal }}>
      {children}
      {isOpen && (
        <>
          <style>{'html, body { overflow-y: hidden; }'}</style>

          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#00000080] transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              ref={modalRef}
              className={`relative p-4 m-4 w-full max-w-3xl transition-transform transform rounded-lg shadow ${themeApp === "dark" ? "bg-slate-900 dark:text-gray-300" : "bg-[#242540] dark:text-slate-300"} duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
            >
              <div className="flex items-center p-2 justify-between border-b rounded-t dark:border-gray-600">
                <h3 className="text-center w-full text-xl font-semibold text-gray-900 dark:text-sky-200">
                  {project?.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
                  onClick={closeModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex justify-center items-center flex-wrap min-h-96 mt-2">
                <figure className="md:flex rounded-xl md:p-0">
                  {project?.img[0]?.url ? (
                    <img
                      className="w-full h-44 md:w-48 md:h-auto rounded mx-auto"
                      src={project?.img[0].url}
                      alt="Print do projeto" width="384" height="512" />
                  ) : (
                    <div className="flex items-center w-full md:h-32 md:w-32 justify-center bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                      <svg className="w-full md:h-32 md:w-32 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  )}

                  <div className="pt-6 md:p-8 text-center md:text-left text-slate-300 border border-sky-800 rounded-md p-2">
                    <blockquote>
                      <p className="text-lg font-medium">
                        {project?.description}
                      </p>
                    </blockquote>
                  </div>
                </figure>
                <figcaption className="w-full font-medium border-t dark:border-gray-600 lg:mt-0">
                  <div className="text-sky-500 dark:text-sky-400 text-center">
                    <a href={project?.link} target="_blank">
                      Visite o site
                      {' '}
                      {project?.link}
                    </a>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};
