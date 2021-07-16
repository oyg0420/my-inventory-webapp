import { createGlobalStyle } from 'styled-components';

export type ColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light';

interface Color {
  backgroundColor: string;
  borderColor: string;
  color: string;
  onHover: {
    backgroundColor: string;
    borderColor: string;
  };
}

export interface ThemeType {
  button: { [key in ColorType]: Color };
}

export const theme: ThemeType = {
  button: {
    primary: {
      color: '#fff',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      onHover: {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
      },
    },
    secondary: {
      color: '#fff',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
      onHover: {
        backgroundColor: '#5a6268',
        borderColor: '#545b62',
      },
    },
    success: {
      color: '#fff',
      backgroundColor: '#28a745',
      borderColor: '#28a745',
      onHover: {
        backgroundColor: '#218838',
        borderColor: '#1e7e34',
      },
    },
    danger: {
      color: '#fff',
      backgroundColor: '#dc3545',
      borderColor: '#dc3545',
      onHover: {
        backgroundColor: '#c82333',
        borderColor: '#bd2130',
      },
    },
    warning: {
      color: '#212529',
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      onHover: {
        backgroundColor: '#e0a800',
        borderColor: '#d39e00',
      },
    },
    light: {
      color: '#212529',
      backgroundColor: '#f8f9fa',
      borderColor: '#f8f9fa',
      onHover: {
        backgroundColor: '#e2e6ea',
        borderColor: '#dae0e5',
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    height: 100%;
    font-size: 18px;
    line-height: 1.6;
    font-style: normal;
    padding: 0;
    margin: 0;
    color: rgb(46, 68, 78);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
  }

  b, strong {
    font-weight: bold;
  }
`;
