import { IGetContentCms } from '@services/cms/type';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ModalContextProps {
  isOpen: boolean;
  project: IGetContentCms | null;
  // eslint-disable-next-line no-unused-vars
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

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }, []);

  const handleEscapePress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, []);

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
  }, [isOpen, handleClickOutside, handleEscapePress]);

  return (
    <ModalContext.Provider value={{ isOpen, project, openModal, closeModal }}>
      {children}
      
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Modal Container */}
        <div
          ref={modalRef}
          className={`relative w-full max-w-3xl m-4 bg-card text-card-foreground rounded-xl border border-border shadow-2xl overflow-hidden transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h3 className="text-2xl font-bold tracking-tight">
              {project?.title}
            </h3>
            <button
              type="button"
              className="rounded-full p-2 bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm group">
              {project?.img[0]?.url ? (
                <img
                  src={project.img[0].url}
                  alt={project.title || "Projeto"}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                Sobre o projeto
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project?.description}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-border bg-muted/30 gap-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Fechar
            </button>
            <a
              href={project?.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 shadow-sm hover:shadow-md"
            >
              <span>Visitar Projeto</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {isOpen && <style>{`html, body { overflow: hidden; }`}</style>}
    </ModalContext.Provider>
  );
};
