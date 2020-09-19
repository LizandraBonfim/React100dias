import styled from 'styled-components'


export const Calendario = styled.section`

   
   display: grid;
   grid-template-columns: 1fr 1fr 1fr ;
   gap: 2rem;

   table{
    text-align: center;

    td > span{
        cursor: pointer;
        background: rgb(136, 136, 136);
        border-radius: 50%;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        width: 20px;
        height: 20px;
    }
   }

`;

export const BotoesHumor = styled.div`

    button{
        border: none;
        background: none;
        outline: none;
        padding: .2rem;
        height: 2rem;
        width: 2rem;

        cursor: pointer;

        &:nth-child(1) {

            > svg{
                fill:#2d6b5f;
            }

            &:focus {
                background: #2d6b5f;  
            }
        } 

        &:nth-child(2){

            &:focus {
                background: #72e3a6;  
            }

            > svg{
                fill:#72e3a6;

            }
        }

        &:nth-child(3){

            &:focus {
                background: #8ab559;  
            }

            > svg{
                fill:#8ab559;

            }
        } 

        &:nth-child(4) {

            &:focus {
                background: #edbf98;  
            }

            > svg{
                fill:#edbf98;
            }
           
        }

        &:nth-child(5) {

            &:focus {
                background: #ea3d36;  
            }

            > svg{
            fill:#ea3d36;
            
            
            }

        }


        &:focus {
            border-radius: 50%;
           
            & > svg{
                 fill:#ffffff;

            }
        }
    }
`;

export const Dia = styled.span`
    background-color: ${({ cor }) => cor ?? 'blue'} !important;
`;