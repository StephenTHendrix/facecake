import React from 'react';

import facebook from '_images/facebook.svg';
import twitter from '_images/twitter.svg';
import instagram from '_images/instagram.svg';
import youtube from '_images/youtube.svg';
import { Container, Text, Social, Icon } from './styledComponents';

export const Footer = () => {
  return (
    <Container>
      <Text>Follow us on:</Text>
      <Social>
        <Icon src={facebook} />
        <Icon src={twitter} />
        <Icon src={instagram} />
        <Icon src={youtube} />
      </Social>
      <Text>© 2020 Cake. All Rights Reserved.</Text>
    </Container>
  );
};
