/* Componente Flex */
import { Flex } from '@chakra-ui/react'
export function FlexComponent(props) {
  const { gap = 2 } = props
  const { children } = props
  return (
    <Flex gap={gap}>{children}</Flex>
  )
}
