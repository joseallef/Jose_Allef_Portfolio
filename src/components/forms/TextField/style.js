import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 17px;
  border: .5px solid #555;
  font-size: 14px;
  
  &:focus {
      outline: none;
  }

  ${breakpointsMedia({
    md: css`
    font-size: 17px;
    `,
  })}
`;

export default Input;
