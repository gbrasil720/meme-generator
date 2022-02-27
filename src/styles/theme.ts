import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Nunito',
  },
  styles: {
    global: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      body: {
        bg: '#121212',
      },
    },
  },
})
