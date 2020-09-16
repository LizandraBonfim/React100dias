import styled from 'styled-components'

export const Content = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    li{
        padding: 3rem 1rem;
        max-height: 3rem;
        background: #fff;
        border-radius: .4rem;
        box-shadow: 0px 0px 4px 0px #928d88;

        &:hover{
            background: #e8e8e8;
            cursor: pointer;
        }
    }
`;