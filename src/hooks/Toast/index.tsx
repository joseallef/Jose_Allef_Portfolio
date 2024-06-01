import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IToastProps {
  status: "success" | "error" | "info" | "warning";
  message: string;
  showCloseButton?: boolean;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'top-center';
}

type IStatusClass = "success" | "error" | "warning" | "info";

interface IToastProvider {
  children: ReactNode
}

interface IToastContext {
  showToast: (props: IToastProps) => void;
}

const statusIcons = {
  success: (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
    </svg>
  ),
};

const statusClass: Record<IStatusClass, string> = {
  success: 'green',
  error: 'red',
  info: 'blue',
  warning: 'orange',
};

const ToastContext = createContext<IToastContext | undefined>(undefined);

export const ToastProvider: React.FC<IToastProvider> = ({ children }) => {
  const [isShowToast, setIsShowToast] = useState(false);
  const [progress, setProgress] = useState(100);
  const defaultDuration = 3000;
  const [toastProps, setToastProps] = useState<IToastProps | null>({
    showCloseButton: true,
    message: '',
    status: "success",
    duration: defaultDuration,
    position: "top-center"
  });

  const showToast = (props: IToastProps) => {
    setIsShowToast(true);
    setProgress(100);
    setToastProps(props);
  };

  const getPositionStyles = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'center':
      default:
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  };

  const value: IToastContext = {
    showToast,
  };

  useEffect(() => {
    if (isShowToast && toastProps) {
      const timer = setTimeout(() => {
        setToastProps({
          showCloseButton: true,
          message: '',
          status: "success",
          duration: defaultDuration,
          position: "top-center"
        });
        setIsShowToast(false);
      }, toastProps.duration || defaultDuration);

      const interval = setInterval(() => {
        setProgress((prev) => prev - (100 / (toastProps.duration || defaultDuration / 100)));
      }, 100);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isShowToast, toastProps, setProgress]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {isShowToast && toastProps && (
        <div
          id="toast"
          className={`fixed z-50 ${getPositionStyles(toastProps.position || 'top-center')} flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
          role="alert"
        >
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${statusClass[toastProps.status]}-500 bg-${statusClass[toastProps.status]}-700 rounded-lg dark:bg-${statusClass[toastProps.status]}${toastProps?.status === "warning" || toastProps?.status === "info" ? `-700` : `-800`} dark:text-${statusClass[toastProps.status]}-200`}
          >
            {statusIcons[toastProps.status]}
            <span className="sr-only">{`${toastProps.status.toLowerCase()} icon`}</span>
          </div>
          <div className="ml-3 text-sm font-normal">{toastProps.message}</div>
          {(toastProps?.showCloseButton ?? true) && (
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast"
              aria-label="Close"
              onClick={() => setIsShowToast(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          )}
          <div className="absolute bottom-0 left-0 h-1 bg-green-700 dark:bg-green-600 rounded" style={{ width: `${progress}%`, transition: 'width 100ms linear' }}></div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
