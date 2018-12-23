import React from 'react';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import styled from 'styled-components';
import { Flex, Text } from '../ui-kit';
import Navigation from '../components/navigation';

const Main = styled(Flex)`
  width: 40%;
`;

const IndexPage = () => (
  <Layout>
    <Flex>
      <Main direction="column">
        <Navigation />
        <h2>Portfolio</h2>
        <Flex direction="column">
          <h2>Project Name</h2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            imperdiet aliquam lectus, nec lobortis diam aliquam ut. Proin nunc
            erat, fringilla at urna at, vehicula ullamcorper nibh. Integer
            pellentesque leo quis lacus vestibulum faucibus. Nunc id leo nibh.
            Nam varius magna ac libero feugiat, at viverra purus rutrum.
          </Text>
          <Flex direction="column">
            <a href="#">Find it live here</a>
            <a href="#">View the code here</a>
          </Flex>
        </Flex>
      </Main>
      <Gallery />
    </Flex>
  </Layout>
);

export default IndexPage;
