/* Componente Button */
import { Button } from '@chakra-ui/react'
export function ButtonComponent(props) {
  const { 
    onClick = () => {console.log('click')},
    colorScheme = 'purple', 
    variant = 'solid', 
    label='Button', 
    isLoading=false,
    isActive=false 
  } = props
  return (
    <Button isActive={isActive} onClick={onClick} colorScheme={colorScheme} variant={variant}>{label}</Button>
  )
}

