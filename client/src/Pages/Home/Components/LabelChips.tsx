import React, {useState} from 'react';
import {Chip} from "@mui/material";
import styled from "styled-components";
import UseFetchDataEffect from "../../../Hooks/UseFetchDataEffect";
import {tagsEndpoint} from "../../../Services/requests";

const StyledChipsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  justify-content: space-around;
`;

interface Props {
  onClick: (id: number) => () => void;
}

const LabelChips: React.FC<Props> = ({onClick}) => {
  const [tags, setTags] = useState<any[]>([]);
  UseFetchDataEffect(tagsEndpoint, (data: any) => setTags(data['hydra:member']));

  return (
    <StyledChipsContainer>
      {!tags ? null : tags.map((tag: any) => (
        <Chip
          key={tag.id}
          label={tag.name}
          clickable
          style={{backgroundColor: tag.color ?? '#9b59b6'}}
          onClick={onClick(tag.id)}
        />
      ))}
    </StyledChipsContainer>
  );
}

export default LabelChips;
