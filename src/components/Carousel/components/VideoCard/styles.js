import styled from "styled-components";

export const VideoCardContainer = styled.a`
  /* overflow: hidden; */
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 15%;
  padding-right: 15%;
  border: 2px solid;
  border-radius: 10px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: inline-block;
  height: 197px;
  width: 298px;

  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);

    height: 236px;
    width: 357px;
    /* padding-right: 10px; */
  }
`;
