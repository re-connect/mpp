import React from 'react';
import styled from "styled-components";

interface FormProps {
  children: React.ReactNode;
  onSubmit: Function;
}

const StyledForm = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;


const Form: React.FC<FormProps> = ({children}) => {
  return <StyledForm>{children}</StyledForm>
}

export default Form;
