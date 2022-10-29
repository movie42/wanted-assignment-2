import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      mainHover: string;
      error: string;
      success: string;
      warning: string;
      gray100: string;
      gray200: string;
      fontBlack: string;
      fontWhite: string;
      primary: string;
      red: string;
      gray_dark: string;
      gray: string;
      gray_alpha_30: string;
      white_alpha_30: string;
    };
  }
}
