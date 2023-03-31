import { useDisclosure } from '@chakra-ui/react'

// Componentes de UI
import { BoxComponent } from '@/components/ui/Box'
import { IconButtonComponent } from '@/components/ui/IconButton'
import { ButtonComponent } from '@/components/ui/Button'
import { FlexComponent } from '@/components/ui/Flex'
import { SpacerComponent } from '@/components/ui/Spacer'
import { ModalComponent } from '@/components/ui/Modal'
import { useRouter } from 'next/router'

export function AppBar(props: { active?: string }) {
  const router = useRouter()
  const { active } = props
  // Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickHamburger = () => {console.log('click4')}
  const onClickHome = () => {router.push('/')}
  const onClickUsuario = () => {router.push('/usuarios')}
  const onClickEmergencia = () => {router.push('/emergencias')}
  return (
    <BoxComponent>
      <ModalComponent isOpen={isOpen} onClose={onClose} />
      <FlexComponent>
        <IconButtonComponent variant={'ghost'} onClick={onClickHamburger} />
        <ButtonComponent isActive={'/'==active} onClick={onClickHome} variant={'ghost'} label={'Home'} />
        <ButtonComponent isActive={'/usuarios'==active} onClick={onClickUsuario} variant={'ghost'} label={'Usuários'} />
        <ButtonComponent isActive={'/emergencias'==active} onClick={onClickEmergencia} variant={'ghost'} label={'Emergências'} />
        <SpacerComponent />
        <ButtonComponent onClick={onOpen} label={'Login'} />
      </FlexComponent>
    </BoxComponent>
  )
}
