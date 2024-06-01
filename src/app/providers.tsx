'use client';

import { Box } from '@components/commons/Box';
import { ModalProvider } from 'hooks/Modal';
import React from 'react';
import Header from '../components/commons/Header';
import { ThemeGlobalApp } from '../components/wrappers/context';
import { ToastProvider } from '../hooks/Toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeGlobalApp>
      <Box>
        <ToastProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </ToastProvider>
      </Box>
    </ThemeGlobalApp>
  );
}