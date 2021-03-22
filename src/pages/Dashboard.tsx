import styled from 'styled-components'
import { Summary } from '../components/Summary'
import { TransactionTable } from '../components/TransactionsTable'

export function Dashboard() {
    return (
        <S.Container>
            <Summary />
            <TransactionTable/>
        </S.Container>
    )
}


const S = {
    Container: styled.main`
        max-width: 1120px;
        margin: 0 auto;
        padding: 2.5rem 1rem;
    `
}