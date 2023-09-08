// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['500', '700'],
    subsets: ['latin']
  })

const theme = extendTheme({
    fonts: {
        heading: poppins.style.fontFamily
    },
    colors: {
        white: {
            500: '#ffffff'
        }
    },
    components: {
        Heading: {
            baseStyle: {
                color: '#ffffff'
            }
        },
        Input: {
            baseStyle: {
                placeholderColor: '#ffffff'
            }
        },
        Text: {
            baseStyle: {
                color: '#ffffff'
            }
        }
    }
})

export function Providers({
    children
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}