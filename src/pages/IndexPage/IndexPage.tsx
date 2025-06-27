import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      Hello, RSS enjoyer
    </Page>
  );
};
