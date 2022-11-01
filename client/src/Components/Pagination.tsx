import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import {paginationCount} from "../Services/requests";
import styled from "styled-components";
import {UseNumberActions} from "react-hanger/array/useNumber";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

interface Props {
  currentPage: number;
  totalItems: number;
  actions: UseNumberActions;
}

const Pagination: React.FC<Props> = ({currentPage, totalItems, actions}) => (
  <PaginationContainer>
    <MuiPagination
      count={Math.ceil(totalItems / paginationCount)}
      variant="outlined"
      page={currentPage}
      onChange={(event: any, value: any) => actions.setValue(value)}
    />
  </PaginationContainer>
);

export default Pagination;
