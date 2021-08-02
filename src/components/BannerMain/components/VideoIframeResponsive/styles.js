import styled from "styled-components";

// export const BannerMainContainer = styled.section

export const VideoContainer = styled.div`
  position: relative;
  top: 50px;
  padding-top: 56.25%;
  width: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
