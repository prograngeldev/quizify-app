import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

interface MantineUIProviderProps {
  children: React.ReactNode;
}

function MantineUIProvider({ children}: MantineUIProviderProps) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  )
};

export default MantineUIProvider;