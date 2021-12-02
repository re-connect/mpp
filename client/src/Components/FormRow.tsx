import React from 'react';
import styled from "styled-components";

interface FormRowProps {
  children: React.ReactNode;
}

const StyledFormRow = styled.div`
  display: flex;
  margin-top: 16px;
`;

const FormRow: React.FC<FormRowProps> = ({children}) => {
  return <StyledFormRow>{children}</StyledFormRow>
}

export default FormRow;
