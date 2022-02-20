import React from 'react';
import { BootsContainer } from 'components/BootsElements';
import { LayoutStyle } from './LayoutStyle';

export default function Layout({ children }) {
  return <LayoutStyle>{children}</LayoutStyle>;
}
