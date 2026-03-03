'use client';

import { Box } from '@components/commons/Box';
import Footer from '@components/commons/Footer';
import Header from '@components/commons/Header';
import { ThemeGlobalApp } from '@components/wrappers/context';
import { ModalProvider } from 'hooks/Modal';
import { ToastProvider } from 'hooks/Toast';
import React from 'react';

export function Providers({ children, theme }: { children: React.ReactNode, theme?: string }) {
  return (
    <ThemeGlobalApp initialTheme={theme}>
      <Box>
        <ToastProvider>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
          </ModalProvider>
        </ToastProvider>
      </Box>
    </ThemeGlobalApp>
  );
}
