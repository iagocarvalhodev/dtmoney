
import logoImg from '../../assets/logo.svg'
import styled from 'styled-components'

export function Header() {
    return (
      <S.Container>
        <S.Content>
          <img src={logoImg} alt="dt money" />
          <button type="button">Nova transação</button>
        </S.Content>
      </S.Container>
    );
}


const S = {
    Container: styled.header`
        background: var(--blue);
    `,
    Content: styled.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 2rem 1rem 12rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            font-size: 1rem;
            color: var(--shape);
            background : var(--blue-light);
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9)
            }
        }
    `
}