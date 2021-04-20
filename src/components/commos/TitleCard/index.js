import React from 'react';
import styled from 'styled-components';

const StyleTitleCard = styled.h2`
  margin: 0px;
  text-align: center;
  vertical-align: 50px;
  width: 100%; 
  padding: 10px;
  font-weight: 400;
  font-family: normal;
  font-stretch: condensed; 
`;

const StyleDescriptionCard = styled.p`
  margin: 0px;
  padding: 2px;
  text-align: center;
  vertical-align: 50px;
  width: 100%;
  padding-bottom: 20px;
`;

// eslint-disable-next-line react/prop-types
export default function TitleCard({ description = '', title }) {
  return (
    <>
      <StyleTitleCard>
        {title}
      </StyleTitleCard>
      <StyleDescriptionCard>
        {description}
      </StyleDescriptionCard>
    </>
  );
}
