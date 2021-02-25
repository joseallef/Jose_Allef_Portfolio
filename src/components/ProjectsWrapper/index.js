import styled, {css} from 'styled-components';
import {breakpointsMedia} from './../../theme/Utils/breakpointsMedia';

// clip-path: polygon(0px 0px, 100% 115px, 100% 100%, 0px 100%);
export const StyleWrapperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;   
    

    ${breakpointsMedia({
       xs: css`
        font-family: 'Rubik', sans-serif;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 18px
        `,

      sm: css`
        max-width: initial;
        display: flex;
        justify-content: center;
        aling-items: center;
      
      `,
      md: css`
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
    `,
      lg: css`
        margin-top: 0px;
        max-width: 1160px;
        `,
      xl: css`
        margin-top: 0px;
        display: flex;
        justify-content: center;
        aling-items: center;
        max-width: 1200px;
        height: 100vh;
      `,
    })}    
`;
