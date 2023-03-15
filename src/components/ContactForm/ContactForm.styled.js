import styled from '@emotion/styled'

export const Form = styled.form`
margin: 20px;
display: flex;
gap: 20px;
flex-direction: column;
align-items: flex-end;
background-color: rgba(152,217,229,255); 
  border-radius: 10px;
  padding: 20px;
`;

export const SubmitButton = styled.button`
margin: 0 auto;
  border: none;
width: 100px;
height: 30px;
border-radius: 5px;
background-color: rgba(18,100,150,255);
border: 1px solid rgba(18,122,177,255);
color: white;
    &:hover {
        background-color: rgb(255, 255, 255);
        transition: all 0.5s ease-out;
        color: rgb(0, 0, 0);
    }
`;