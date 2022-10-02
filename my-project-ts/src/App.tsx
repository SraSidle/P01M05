import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { BrowserRouter } from "react-router-dom";
import Router from 'router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import mocks from "./mocks";

const queryClient = new QueryClient();

mocks.Initialize();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

