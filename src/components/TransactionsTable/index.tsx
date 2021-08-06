import { useEffect } from "react"
import { Container } from "./styles"

export function TransactionsTable() {
  
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aluguel Apartamento</td>
            <td className='withdraw'>-R$ 850</td>
            <td>Moradia</td>
            <td>01/08/2021</td>
          </tr>
          <tr>
            <td>Venda de Computador</td>
            <td className='deposit'>R$ 1.200</td>
            <td>Vendas</td>
            <td>04/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}