import styled from 'styled-components'

export const Content = styled.aside`
    margin-top: 1rem;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 2rem;

   li{
       list-style: circle;
   }
`;

export const Title = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    background: #00c1ff;
    border: none;
    padding: .6rem;
    border-radius: .3rem;
    outline: none;
    cursor: pointer;


    &:hover{
        opacity: .6;
    }
`