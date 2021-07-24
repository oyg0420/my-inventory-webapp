import { createGlobalStyle } from 'styled-components';

export type ColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light';

export type InputColorType = 'default' | 'error';

type ButtonColor = {
  backgroundColor: string;
  borderColor: string;
  color: string;
  onHover: {
    backgroundColor: string;
    borderColor: string;
  };
};

type ParagraphColor = { color: string };

type InputColor = { borderColor: string; onFocus: { borderColor: string; boxShadow: string } };

export interface ThemeType {
  button: { [key in ColorType]: ButtonColor };
  paragraph: { [key in ColorType]: ParagraphColor };
  input: { [key in InputColorType]: InputColor };
}

export const theme: ThemeType = {
  input: {
    default: {
      borderColor: '#ced4da',
      onFocus: { borderColor: '#80bdff', boxShadow: ' 0 0 0 0.2rem rgb(0 123 255 / 25%)' },
    },
    error: { borderColor: '#dc3545', onFocus: { borderColor: '#dc3545', boxShadow: 'none' } },
  },
  paragraph: {
    primary: { color: '#007bff' },
    secondary: { color: '#6c757d' },
    success: { color: '#28a745' },
    danger: { color: '#dc3545' },
    warning: { color: '#ffc107' },
    light: { color: '#f8f9fa' },
  },
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
