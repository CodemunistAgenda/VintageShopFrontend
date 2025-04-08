// src/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    backgroundSecondary: string;
    backgroundAlt: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryHover: string;
    primaryDark: string;
    accent: string;
    secondary: string;
    lightBlue: string;
    purple: string;
    buttonText: string;
    heroBackground: string;
    cardBackground: string;
    border: string;
    danger: string;
    sectionBackground: string;
    transparent: {
      primary: string;
      lightBlue: string;
      purple: string;
    };
    primaryTransparent: string;
    primaryTransparentHover: string;
    primaryTransparentActive: string;
    inputBackground: string;
    whiteColor: string;
    darkColor: string;
    hoverBackground: string;
    sectionPaddingLarge: string;
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
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    fontWeights: {
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
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
    transition: {
      fast: string;
      normal: string;
      slow: string;
    };
    layout: {
      headerHeight: string;
      headerHeightScrolled: string;
      sectionPaddingLarge: string;
      sectionPaddingMedium: string;
      sectionPaddingSmall: string;
      containerWidth: string;
      containerPadding: string;
    };
  }
}
