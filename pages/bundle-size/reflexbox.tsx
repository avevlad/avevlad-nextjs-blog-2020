import React from 'react'
import { Box, Flex } from 'reflexbox'

export interface IReflexboxProps {}

export const Reflexbox: React.FC<IReflexboxProps> = (props) => {
  return (
    <div>
      <Flex p={2} alignItems="center" justifyContent="center">
        <Box p="2">Box A321</Box>
        <Box fontFamily="monospace" fontSize="12px" p={2} bg="red">
          Box B
        </Box>
      </Flex>
    </div>
  )
}
export default Reflexbox
