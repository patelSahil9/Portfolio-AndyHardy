import React from "react";
import styled from "styled-components";
import { FaInstagram, FaVimeo, FaFacebook, FaYoutube } from "react-icons/fa";

const SocialContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Icon = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

function SocialLinks() {
  return (
    <SocialContainer>
      <Icon href="#"><FaInstagram /></Icon>
      <Icon href="#"><FaVimeo /></Icon>
      <Icon href="#"><FaFacebook /></Icon>
      <Icon href="#"><FaYoutube /></Icon>
    </SocialContainer>
  );
}

export default SocialLinks;
