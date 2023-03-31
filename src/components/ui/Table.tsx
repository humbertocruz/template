/* Componente Box */
import { TableContainer, Table, Tr, Th, Td, Tbody, Thead } from '@chakra-ui/react'
export function TableComponent(props) {
  const { 
    bg = 'gray.200', 
    m = 1, 
    p = 2, 
    borderRadius='md', 
    children 
  } = props
  return (
    <TableContainer p={2}>
      <Table colorScheme='purple' variant={'striped'}>
        <Thead>
          <Tr>
            <Th w={300}>Nome</Th>
            <Th w={100}>Idade</Th>
            <Th>Sexo</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>João</Td>
            <Td>20</Td>
            <Td>Masculino</Td>
          </Tr>
          <Tr>
            <Td>Maria</Td>
            <Td>25</Td>
            <Td>Feminino</Td>
          </Tr>
          <Tr>
            <Td>Joana</Td>
            <Td>30</Td>
            <Td>Feminino</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
