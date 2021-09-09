import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        My name is Toi Vu.
      </SectionTitle>
      <SectionText>
        This is my personal portfolio to showcase my work, my skills and other things about me. Hope you find something interesting!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/' }>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;