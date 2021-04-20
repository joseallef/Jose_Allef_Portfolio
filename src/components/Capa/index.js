import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  background-image: url('/image/background-dark.jpg');
  background-size: cover;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: between;
  aling-items: center;   
`;

Background.Name = styled.span`
  color: #fff;
  display: flex;
  justify-content: center;
  aling-items: center;

  margin-top: 50px;
  font-size: 30px;
`;

Background.Image = styled.img`
  background-image: url('/image/avatar.jpg');
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

export default function Capa() {
  return (
    <Background>
      <Background.Image />
      <Background.Name>
        José Allef
      </Background.Name>
    </Background>
  );
}
