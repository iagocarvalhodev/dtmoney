import styled from 'styled-components'
import incomeImg from '../assets/entradas.svg'
import outcomeImg from '../assets/saidas.svg'
import totalImg from "../assets/total.svg";

export function Summary() {
    return (
      <S.Container>
        <div>
          <header>
            Entradas
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>

        <div>
          <header>
            Saídas
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>- R$ 500,00</strong>
        </div>

        <div className="highlight-background">
          <header>
            Total
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$ 500,00</strong>
        </div>
      </S.Container>
    );
}

const S = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
      }
      &.highlight-background {
        background: var(--green);
        color: var(--shape);
      }
    }
  `,
};