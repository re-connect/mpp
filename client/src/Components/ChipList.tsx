import { Chip } from '@material-ui/core';
import React from 'react';

interface ChipListProps {
  list: string[];
}

const ChipList: React.FC<ChipListProps> = ({list}) => (
  <>
    {list.map((listItem: string) => (
      <Chip key={listItem} label={listItem} variant='outlined'/>
    ))}
  </>
);

export default ChipList;
