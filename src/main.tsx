/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './presentation/App';
import { ChakraProvider } from '@chakra-ui/react';
import { themes } from './presentation/styles/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
