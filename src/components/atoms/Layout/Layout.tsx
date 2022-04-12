import React from 'react';
import { LayoutStyle } from './LayoutStyle';

export default function Layout({children}: {children: React.ReactNode}) {
  return <LayoutStyle><div>{children}</div></LayoutStyle>;
}
