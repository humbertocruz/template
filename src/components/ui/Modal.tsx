import { Input, Modal, ModalBody, 
  ModalCloseButton, ModalContent, 
  ModalFooter, 
  ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react"
import { ButtonComponent } from "./Button"

/* Componente Modal */
export function ModalComponent(props) {
  
  const { 
    isOpen,
    onOpen,
    onClose,
    color = 'purple', 
    title = 'Login',
    size = 'sm'
  } = props
  return (
    <Modal isCentered size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={color}>{title}</ModalHeader>
        <ModalCloseButton color={color} />
        <ModalBody>
          <VStack>
            <Input placeholder={'Email'} />
            <Input placeholder={'Senha'} />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <ButtonComponent color={color} label={'Entrar'} onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
