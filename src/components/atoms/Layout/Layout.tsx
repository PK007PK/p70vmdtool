import React from 'react';
import { CommonProps } from 'types/CommonProps';
import { LayoutStyle } from './LayoutStyle';

export const Layout: React.FunctionComponent<CommonProps> = ({children}): JSX.Element => {
  return <LayoutStyle><div>{children}</div></LayoutStyle>;
}
