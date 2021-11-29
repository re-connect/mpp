import {Chip} from '@material-ui/core';
import React from 'react';

const ChipList = ({list}: any) => {
  return (list.map((listItem: any) => (
    <Chip key={listItem.id} label={listItem.name} variant='outlined'/>
  )));
};

export default ChipList;
