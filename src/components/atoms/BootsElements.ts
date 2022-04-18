import { ThemeEntity } from 'assets/Theme';
import styled from 'styled-components';

interface BootsElementsEntity {
  noXl?: boolean,
  xxs?: number,
  xs?: number,
  sm?: number, 
  md?: number, 
  lg?: number,
  xl?: number,
}

export const BootsContainer = styled.div<BootsElementsEntity>`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }: {theme: ThemeEntity}) => theme.media.xsAbove} {
    max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.xs}px;
  }

  ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
    max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.sm}px;
  }

  ${({ theme }: {theme: ThemeEntity}) => theme.media.mdAbove} {
    max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.md}px;
  }

  ${({ theme }: {theme: ThemeEntity}) => theme.media.lgAbove} {
    max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.lg}px;

  ${({ theme }: {theme: ThemeEntity}) => theme.media.xlAbove} {
    max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.xl}px;
  }

  ${({ theme }: {theme: ThemeEntity}) => theme.media.xlAbove} {
    ${({ noXl }) =>
      noXl &&
      `
      {
        max-width: ${({ theme }: {theme: ThemeEntity}) => theme.maxContainerWidth.lg}px;
      }
    `}
  }
`;

export const BootsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  position: relative;
`;

export const BootsColumn = styled.div<BootsElementsEntity>`
  width: 100%;
  padding: 0 15px;
  position: relative;
  ${({ xxs }) =>
    xxs &&
    `
    {
      max-width: ${(xxs / 12) * 100}%;
      flex: 0 0 ${(xxs / 12) * 100}%;
    }
  `}

  ${({ theme }) => theme.media.xsAbove} {
    ${({ xs }) =>
      xs &&
      `
      {
        max-width: ${(xs / 12) * 100}%;
        flex: 0 0 ${(xs / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.smAbove} {
    ${({ sm }) =>
      sm &&
      `
      {
        max-width: ${(sm / 12) * 100}%;
        flex: 0 0 ${(sm / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.mdAbove} {
    ${({ md }) =>
      md &&
      `
      {
        max-width: ${(md / 12) * 100}%;
        flex: 0 0 ${(md / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.lgAbove} {
    ${({ lg }) =>
      lg &&
      `
      {
        max-width: ${(lg / 12) * 100}%;
        flex: 0 0 ${(lg / 12) * 100}%;
      }
    `}
  }

  ${({ theme }) => theme.media.xlAbove} {
    ${({ xl }) =>
      xl &&
      `
      {
        max-width: ${(xl / 12) * 100}%;
        flex: 0 0 ${(xl / 12) * 100}%;
      }
    `}
  }
`;
