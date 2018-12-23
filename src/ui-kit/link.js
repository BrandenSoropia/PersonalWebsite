import React from 'react';
import { Link as _Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledLink = styled(_Link)`
  display: inline-block;
  line-height: 1;
  text-decoration: none;

  &:visited {
    color: black;
  }

  &:hover {
    text-decoration: none;
  }

  &.active {
    border-bottom: 2px solid black;
  }
`;

export const Link = ({ text, to, className }) => {
  return (
    <StyledLink className={className} activeClassName="active" to={to}>
      {text}
    </StyledLink>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
    }),
  ]),
  className: PropTypes.string,
};

Link.defaultProps = {
  className: null,
};
