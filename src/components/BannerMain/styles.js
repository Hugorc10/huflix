import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height: 80vh;
  color: var(--white);
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`;

const WatchButton = styled.button`
  cursor: pointer;
  background-color: var(--white);
  border: 0;
  border-radius: 4px;
  padding: 16px 24px;
  font-weight: bold;
  outline: none;
  font-size: 16px;
  color: var(--black);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 30%;
    text-align: center;
  }
`;

export default WatchButton;
