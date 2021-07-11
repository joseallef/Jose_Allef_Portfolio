/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/Utils/propToStyle';
import { breakpointsMedia } from '../../../theme/Utils/breakpointsMedia';
import Link from '../../commos/Link';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    
    `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.titleXS.fontSize};
        font-weight: ${theme.typographyVariants.titleXS.fontWeight};
        line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('display')}
  ${propToStyle('fontWeight')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag, variant, children, href, cmsKey, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase as={tag} href={href} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.protoTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragrah1',
  children: null,
  href: '',
  cmsKey: undefined,
};
