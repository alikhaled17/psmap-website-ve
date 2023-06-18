import { StyledTheme } from "@/app/core/theme/StyledTheme";
import HeroBgDesktop from "@/app/assets/images/About/HeroSectionDesktop.png";
import HeroBgMobile from "@/app/assets/images/About/HeroSectionMobile.png";

import styled from "styled-components";

const Container = styled.div`
  background: url(${HeroBgDesktop.src});
  background-size: cover;
  background-position: 50% 10%;
  background-repeat: no-repeat;
  @media ${StyledTheme.media.tablet} {
    background: url(${HeroBgMobile.src});
    background-size: cover;
    background-position: 50% 50px;
    background-repeat: no-repeat;
  }

  .abouthero_section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: #fff;
    padding-top: 20px;
    @media ${StyledTheme.media.tablet} {
      padding-top: unset;
      height: 50vh;
      align-items: center;
      text-align: center;
      justify-content: flex-end;
      padding-bottom: 30px;
    }
    &--title {
      font-size: 40px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      max-width: 550px;
      line-height: 48px;
      @media ${StyledTheme.media.laptop} {
        font-size: 32px;
      }
      @media ${StyledTheme.media.tablet} {
        font-size: 24px;
        line-height: 32px !important;
        max-width: 343px;
        margin: 0 auto 24px;
      }
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      margin-bottom: 48px;
      max-width: 550px;
      color: #d5d7d9;
      @media ${StyledTheme.media.tablet} {
        font-size: 14px;
        max-width: 343px;
        width: unset;
        margin: 0 auto;
      }
    }
  }
`;

export default Container;
