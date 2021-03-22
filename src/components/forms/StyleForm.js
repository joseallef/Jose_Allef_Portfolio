import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/Utils/breakpointsMedia';

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 40vw;
    padding: 12px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 10px 2px #ccc;
    overflow: hidden;

    ${breakpointsMedia({
    xs: css`
        width: 90vw;
        font-size: 12px
      `,
    sm: css`
      width: 70vw;
    `,
    md: css`
      width: 50vw;
    `,
    lg: css`
      width: 40vw;
      font-size: 15px
    `,
    xl: css`
      width: 30vw;
    `,
  })}

`;

StyledForm.Input = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 17px;
    border: .5px solid #555;
    font-size: 17px;
    
    &:focus {
        outline: none;
    }
`;

StyledForm.Button = styled.button`
    color: #888;
    font-size: 18px;
    padding: 10px;
    border-radius: 15px;
    background: #fff;
    vertical-align: middle;
    width: 150px;
    height: 45px;

    &:hover,
    &:focus {
        cursor: not-allowed;
        background: #999;
        border-color: #999;
        box-shadow: 0 0 3px 2px #ccc;
        outline: none;
    }

    ${({ disabled }) => {
    if (disabled) {
      return css`
                &:hover,
                &:focus {
                    cursor: not-allowed;
                    background: #aaa;
                    border-color: #999;
                    box-shadow: 0 0 5px 1px #ccc;
                }
            `;
    }

    return css`
            &:hover,
            &:focus {
                cursor: pointer;
                background: #999;
                color: #fff;
                border-color: #999;
                box-shadow: 0 0 5px 1px #ccc;
            }
        
        `;
  }}
`;

StyledForm.TextArea = styled.textarea`
    width: 100%;
    height: 80px;
    margin-bottom: 17px;
    resize: none;
    
      font-size: 20px;

`;

StyledForm.Span = styled.span`
    display: inline;
    float: right;
    border: 1px solid black;
    border-radius: 90%;
    cursor: pointer;
    margin-top: -10px;
    margin-bottom: 35px;

    font-family: verdana;

    ${breakpointsMedia({
    xs: css`
          padding: 5px;
        `,
    lg: css`
        padding: 5px;
    `,
  })}

`;

StyledForm.IconButton = styled.div`
    width: 30px;
    height: 20px;
    display: flex;
    float: right;
`;

StyledForm.MessageCad = styled.div`
    margin-top: 25px;
    font-size: 20px;
`;

export default StyledForm;
