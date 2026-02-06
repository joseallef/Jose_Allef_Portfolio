'use client';

import { Box } from '@components/commons/Box';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import { ThemeGlobalApp } from '@components/wrappers/context';
import { ModalProvider } from 'hooks/Modal';
import React from 'react';
import { ToastProvider } from '../hooks/Toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeGlobalApp>
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
