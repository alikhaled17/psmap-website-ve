import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import PSMapToolHeroSectionImg from "@/app/assets/images/PSMapTool/PSMapTool_HeroSection.svg";

const Container = styled.div`
  padding-top: 150px;
  @media ${StyledTheme.media.tablet} {
    padding-top: 100px;
  }
  .PSMapTool_HeroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--title {
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      width: 754px;
      @media ${StyledTheme.media.laptop} {
        line-height: 32px;
        font-size: 24px;
      }
      @media ${StyledTheme.media.tablet} {
        font-size: 24px;
        line-height: 32px;
        width: unset;
      }
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      margin-bottom: 16px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        line-height: 19px;
      }
      @media ${StyledTheme.media.tablet} {
        font-size: 14px;
        line-height: 19px;
      }
    }
    &--trial_btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: fit-content;
      margin-top: 24px;
      @media ${StyledTheme.media.tablet} {
        margin-bottom: 24px;
        margin-top: 8px;
      }
    }
  }

  .hero_background {
    margin: 32px auto 0;
    min-height: 70vh;
    background: url(${PSMapToolHeroSectionImg.src});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    @media ${StyledTheme.media.laptop} {
      min-height: 350px;
    }
    @media ${StyledTheme.media.tablet} {
      display: none;
    }
  }
`;

export default Container;
