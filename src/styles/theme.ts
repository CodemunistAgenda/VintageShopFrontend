type ThemeMode = 'light' | 'dark';

interface ThemeColors {
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
}

interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
  fontSizes: Record<string, string>;
  fontWeights: Record<string, number>;
  space: Record<string, string>;
  radii: Record<string, string>;
  shadows: Record<string, string>;
  transitions: Record<string, string>;
}

const theme: Record<ThemeMode, Theme> = {
  light: {
    mode: 'light',
    colors: {
      primary: "#d9a441",
      primaryHover: "#c18b2e",
      secondary: "#c2d941",
      accent: "#d95841",
      hero: "#121212",
      background: "#ffffff",
      backgroundSecondary: "#f7f7f2",
      backgroundAlt: "#f9f9f9",
      text: "#121212",
      textSecondary: "#555555",
      textLight: "#ffffff",
      border: "#dddddd",
      danger: "#d95841",
      collectionCard: "#ffffff",
      sectionBackground: "#f7f7f2"
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Raleway', sans-serif"
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    },
    fontWeights: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    },
    space: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      8: "2rem",
      12: "3rem",
      16: "4rem"
    },
    radii: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      circle: "50%"
    },
    shadows: {
      light: "0 2px 5px rgba(0, 0, 0, 0.1)",
      medium: "0 4px 10px rgba(0, 0, 0, 0.1)",
      strong: "0 8px 16px rgba(0, 0, 0, 0.1)"
    },
    transitions: {
      fast: "0.2s ease",
      normal: "0.3s ease",
      slow: "0.4s ease"
    }
  },
  dark: {
    mode: 'dark',
    colors: {
      primary: "#d9a441",
      primaryHover: "#e3b355",
      secondary: "#c2d941",
      accent: "#d95841",
      hero: "#121212",
      background: "#121212",
      backgroundSecondary: "#1e1e1e",
      backgroundAlt: "#242424",
      text: "#f7f7f2",
      textSecondary: "#b0b0b0",
      textLight: "#ffffff",
      border: "#333333",
      danger: "#d95841",
      collectionCard: "#1e1e1e",
      sectionBackground: "#121212"
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Raleway', sans-serif"
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    },
    fontWeights: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    },
    space: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      8: "2rem",
      12: "3rem",
      16: "4rem"
    },
    radii: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      circle: "50%"
    },
    shadows: {
      light: "0 2px 5px rgba(0, 0, 0, 0.2)",
      medium: "0 4px 10px rgba(0, 0, 0, 0.2)",
      strong: "0 8px 16px rgba(0, 0, 0, 0.2)"
    },
    transitions: {
      fast: "0.2s ease",
      normal: "0.3s ease",
      slow: "0.4s ease"
    }
  }
};

export default theme;