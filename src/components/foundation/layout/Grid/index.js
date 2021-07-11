/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/Utils/breakpointsMedia';
import { propToStyle } from '../../../../theme/Utils/propToStyle';

const Container = styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
    ${breakpointsMedia({
    xs: css`
    max-width: initial;

    padding-right: 0px;
    padding-left: 0px;
    `,
    sm: css`
    max-width: 576px; 
    `,
    md: css`
    max-width: 768px;
    padding-right: 16px;
    padding-left: 16px; 
    `,
    lg: css`
    max-width: 1160px; 
    `,
    xl: css`
    max-width: 1222px;
    `,
  })}

    ${propToStyle('marginTop')}
    ${propToStyle('paddingRight')}
    ${propToStyle('paddingLeft')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('alignItems')}
    ${propToStyle('color')}
`;

const Col = styled.div`
    padding-right: 16px;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    ${function ({ value }) {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
        `;
    }

    return breakpointsMedia({
      xs: value?.xs ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.xs) / 12}%;
        max-width: ${(100 * value.xs) / 12}%;
        ${value.xs}
        ` : '',
      sm: value?.sm ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.sm) / 12}%;
        max-width: ${(100 * value.sm) / 12}%;
        ${value.sm}
                ` : '',
      md: value?.md ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.md) / 12}%;
        max-width: ${(100 * value.md) / 12}%;
        ${value.md}
        ` : '',

      lg: value?.lg ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.lg) / 12}%;
        max-width: ${(100 * value.lg) / 12}%;
        ${value.lg}
        ` : '',

      xl: value?.xl ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.xl) / 12}%;
        max-width: ${(100 * value.xl) / 12}%;
        ${value.xl}
        ` : '',
    });
  }}

    ${function ({ offset }) {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    return breakpointsMedia({
      xs: offset?.xs ? css`
        margin-left: ${(100 * offset.xs) / 12}%;
      ` : '',
      sm: offset?.sm ? css`
        margin-left: ${(100 * offset.sm) / 12}%;
        ` : '',
      md: offset?.md ? css`
        margin-left: ${(100 * offset.md) / 12}%;
        ` : '',

      lg: offset?.lg ? css`
        margin-left: ${(100 * offset.lg) / 12}%;
        ` : '',

      xl: offset?.xl ? css`
        margin-left: ${(100 * offset.xl) / 12}%;
        ` : '',
    });
  }}

    ${propToStyle('display')}
    ${propToStyle('order')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}
    ${propToStyle('paddingRight')}
    ${propToStyle('paddingLeft')}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${propToStyle('flex')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('justifyContent')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('flexDirection')}
`;

export const Grid = { Container, Col, Row };
