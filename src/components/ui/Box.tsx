/* Componente Box */
import { Box } from '@chakra-ui/react'
export function BoxComponent(props) {
  const { 
    bg = 'gray.200', 
    m = 1, 
    p = 2, 
    borderRadius='md', 
    children 
  } = props
  return (
    <Box borderRadius={borderRadius} bg={bg} m={m} p={p}>{children}</Box>
  )
}
