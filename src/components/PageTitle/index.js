import React from 'react';
import PageTitleWrapper from './styles';

export default function PageTitle({children}) {
  return (
    <PageTitleWrapper>
      {children}
    </PageTitleWrapper>
  )
}
