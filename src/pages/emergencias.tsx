import { AppBar } from '@/components/AppBar'
import { TableHome } from '@/components/TableHome'

export default function Emergencias() {
  return (
    <>
      <AppBar active={'/emergencias'} />
      <TableHome />
    </>
  )
}
