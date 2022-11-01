import React, {useState} from 'react';
import {Chip} from "@mui/material";
import styled from "styled-components";
import UseFetchDataEffect from "../../../Hooks/UseFetchDataEffect";
import {tagsEndpoint} from "../../../Services/requests";
import Grid2 from "@mui/material/Unstable_Grid2";

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

  const tagsByCategories = tags.reduce((accumulator, tag) => {
    const category = tag.category ?? 'misc';
    const categoryTags = category in accumulator ? accumulator[category] : [];

    return {...accumulator, [category]: [...categoryTags, tag]}
  }, {'misc': []});

  return (
    <Grid2 mb={2}>
      {Object.keys(tagsByCategories).map((category) => (
        <Grid2 container spacing={2} justifyContent="center" key={category}>
          {
            tagsByCategories[category].map((tag: any) => (
              <Grid2 key={tag.id}>
                <Chip
                  key={tag.id}
                  label={tag.name}
                  clickable
                  style={{backgroundColor: tag.color ?? '#f8af29', color: 'white',}}
                  onClick={onClick(tag.id)}
                />
              </Grid2>
            ))
          }
        </Grid2>
      ))}
    </Grid2>
  );
}

export default LabelChips;
