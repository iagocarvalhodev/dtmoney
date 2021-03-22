import styled from "styled-components";
export function TransactionTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento WebSite</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>22/03/2021</td>
          </tr>
          <tr>
            <td>Compra Material</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Desenvolvimento</td>
            <td>22/03/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    margin-top: 4rem;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);

        &.first-child{
            color: var(--text-title);
        }
        &.deposit {
            color: var(--green);
        }
        &.withdraw {
            color: var(--red);
        }
      }
    }
  `,
};
