import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: black;
  display: flex;
  margin: 0;
  text-decoration: none;
`;

const ExternalLink = ({ url, children }) => (
  <StyledLink href={url} rel="noopener" target="_blank">
    {children}
  </StyledLink>
);

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
