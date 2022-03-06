import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

export const BoxInputSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #b3ccff;
  margin-top: 50px;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 3px;

  input {
    padding: 8px;
    font-size: 20px;
    border: none;
    border-radius: 0;
    pointer-events: all;
    text-align: center;    
    margin-bottom: 0;
    color: #5a5a5a
  }

  button {
    border: none;
    background: #2c4dfa54;
    font-size: 18px;
    font-family: Courier;
    font-weight: 600;
    color: #b3ccff;
    padding: 12px 20px;
    cursor: pointer;

  }

  ${breakpointsMedia({
    md: css`

    `,
    lg: css`
      flex-wrap: nowrap;
    `,
  })}
`;

export const WrapperDialog = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 200px;
  margin: 50% 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  span {
    font-size: 20px;
    font-family: Courier;
    font-weight: 600;
  }
  ${breakpointsMedia({
    md: css`
      width: 400px;
    `,
    lg: css`
    `,
  })}

`;

export const Close = styled.div`
  position: absolute;
  display: block;
  margin-top: -140px;
  cursor: pointer;
  right: 20px;
`;
