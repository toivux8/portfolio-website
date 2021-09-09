import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:123-245-7459">123-245-7459</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="toix82k@gmail.com">toix82k@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>A total buble distraction</CompanyContainer>
        <SocialIcons href="https://github.com/">
        <AiFillGithub size= "3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/toivuduc/">
          <AiFillLinkedin size= "3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/devils270">
          <AiFillFacebook size= "3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
