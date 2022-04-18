export interface ThemeEntity {
  breakpoint: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  media: {
    xsAbove: string,
    xsBelow: string,
    smAbove: string,
    smBelow: string,
    mdAbove: string,
    mdBelow: string,
    lgAbove: string,
    lgBelow: string,
    xlAbove: string,
    xlBelow: string,
  },
  maxContainerWidth: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  }
}

const theme = {} as ThemeEntity;

theme.breakpoint = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1550,
};

theme.media = {
  xsAbove: `@media (min-width: ${theme.breakpoint.xs}px)`,
  xsBelow: `@media (max-width: ${theme.breakpoint.xs - 1}px)`,
  smAbove: `@media (min-width: ${theme.breakpoint.sm}px)`,
  smBelow: `@media (max-width: ${theme.breakpoint.sm - 1}px)`,
  mdAbove: `@media (min-width: ${theme.breakpoint.md}px)`,
  mdBelow: `@media (max-width: ${theme.breakpoint.md - 1}px)`,
  lgAbove: `@media (min-width: ${theme.breakpoint.lg}px)`,
  lgBelow: `@media (max-width: ${theme.breakpoint.lg - 1}px)`,
  xlAbove: `@media (min-width: ${theme.breakpoint.xl}px)`,
  xlBelow: `@media (max-width: ${theme.breakpoint.xl - 1}px)`,
};

theme.maxContainerWidth = {
  xs: 540,
  sm: 720,
  md: 960,
  lg: 1184,
  xl: 1400,
};

export default theme;
