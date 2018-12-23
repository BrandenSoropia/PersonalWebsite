import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexContainer = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
`;

export const Flex = props => (
  <FlexContainer {...props}>{props.children}</FlexContainer>
);

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.node)),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

Flex.defaultProps = {
  className: null,
  justifyContent: null,
  alignItems: null,
};

// TODO: Install Typography linter and do that thing that sets 1rem : 10px!
export const Text = styled.p`
  font-size: ${({ size }) => size || '12px;'};
  ${({ lineHeight }) => `line-height: ${lineHeight};`}
  ${({ weight }) => `font-weight: ${weight};`}
`;

Text.propTypes = {
  size: PropTypes.string,
  lineHeight: PropTypes.string,
  weight: PropTypes.string,
};

Text.defaultProps = {
  size: '12px',
  lineHeight: null,
  weight: null,
};
