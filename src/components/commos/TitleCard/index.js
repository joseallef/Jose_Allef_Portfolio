import React from 'react';
import styled from 'styled-components';

const StyleTitleCard = styled.h2`
  margin: 0px;
  text-align: center;
  vertical-align: 50px;
  width: 100%; 
  padding: 10px;
`;

const StyleDescriptionCard = styled.p`
  margin: 0px;
  text-align: center;
  vertical-align: 50px;
  padding-bottom: 20px;
`;

// eslint-disable-next-line react/prop-types
export default function TitleCard({ description, title }) {
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
