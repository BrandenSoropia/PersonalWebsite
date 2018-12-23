import React from 'react';
import { Flex, Link } from '../ui-kit';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin: 0 8px;
`;

const FlexContainer = styled(Flex)`
  padding: 16px;
  width: 100%;
`;

const Navigation = () => (
  <FlexContainer>
    <StyledLink to="/" text="About" />
    <StyledLink to="/portfolio" text="Portfolio" />
    <StyledLink to="/contact" text="Contact" />
  </FlexContainer>
);

export default Navigation;
