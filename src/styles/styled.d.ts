// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    fonts: {
      heading: string;
      body: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeights: {
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
    };
    space: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      8: string;
      12: string;
      16: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      circle: string;
    };
    shadows: {
      light: string;
      medium: string;
      strong: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    colors: {
      [x: string]: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
      backgroundIcon: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
      primary: string;
      primaryHover: string;
      secondary: string;
      accent: string;
      hero: string;
      background: string;
      backgroundSecondary: string;
      backgroundAlt: string;
      text: string;
      textSecondary: string;
      textLight: string;
      border: string;
      danger: string;
      collectionCard: string;
      sectionBackground: string;
    };
  }
}