import { HamburgerIcon } from '@chakra-ui/icons'
/* Componente IconButton */
import { IconButton } from '@chakra-ui/react'
export function IconButtonComponent(props) {
  const { 
    colorScheme = 'purple', 
    variant = 'solid', 
    onClick = () => {console.log('click')},
    icon=<HamburgerIcon /> 
  } = props
  return (
    <IconButton 
      aria-label={'icon'} 
      onClick={onClick} 
      colorScheme={colorScheme} 
      variant={variant} 
      icon={icon} 
    />
  )
}

