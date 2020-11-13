import React from 'react'
import { Button } from '@chakra-ui/button'
import { ChakraProvider } from '@chakra-ui/react'

export interface IChakraUIButtonProps {}

export const ChakraUIButton: React.FC<IChakraUIButtonProps> = (props) => {
  return (
    <div style={{ padding: 50 }}>
      <ChakraProvider>
        <Button colorScheme="green">Button</Button>
      </ChakraProvider>
    </div>
  )
}

export default ChakraUIButton
