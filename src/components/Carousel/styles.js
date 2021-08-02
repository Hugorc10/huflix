import styled from "styled-components";

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 30px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  border-radius: 4px;
  display: inline-block;
  font-size: 35px;
  line-height: 1;
  font-weight: normal;
  padding-top: 0px;
  margin-bottom: 16px;
  padding: 20px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 18px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
  overflow-x: auto;

  li {
    margin-right: 16px;
  }
`;
