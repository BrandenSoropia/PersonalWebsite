import React from 'react';
import { Flex, Text, colors } from '../ui-kit';
import styled from 'styled-components';

const Container = styled(Flex)`
  background-color: ${colors.orange};
  flex-direction: column;
  margin-right: 10%;
  padding: 0 2.4rem;
  width: 60%;
`;

const Gallery = () => (
  <Container>
    <Text>Create a scrollable section for screenshots/gifs</Text>
    <Text>Add pop stickers to certain images to highlight something cool</Text>
    <Text>Animate scroll</Text>
  </Container>
);

export default Gallery;
