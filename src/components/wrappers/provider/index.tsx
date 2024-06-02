'use client';

import React from 'react';

import { Box } from '@components/commons/Box';
import Header from '@components/commons/Header';
import { ModalProvider } from 'hooks/Modal';
import { ToastProvider } from 'hooks/Toast';
import { ThemeGlobalApp } from '../context';

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