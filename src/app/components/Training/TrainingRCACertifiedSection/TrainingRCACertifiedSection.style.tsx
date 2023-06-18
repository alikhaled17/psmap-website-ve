import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import RCACertifiedBg from "@/app/assets/images/Training/RCACertified_section_bg.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${RCACertifiedBg.src});
  background-size: 100vw auto;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  padding: 0;
  @media ${StyledTheme.media.tablet} {
    background: unset;
  }
  .RCACertified_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 39px;
      @media ${StyledTheme.media.laptop} {
        font-size: 24px;
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
      margin-bottom: 40px;
      width: 600px;
      @media ${StyledTheme.media.tablet} {
        font-size: 14px;
        max-width: 90%;
        width: unset;
        margin: 0 auto 24px;
      }
    }

    &--main_img {
      position: relative;
      margin-bottom: 50px;
      @media ${StyledTheme.media.tablet} {
        margin-bottom: 24px;
      }
      .certified_img {
        border-radius: 8px;
        @media ${StyledTheme.media.tablet} {
          width: 90vw;
          height: auto;
        }
      }
      .pattern {
        position: absolute;
        right: -60px;
        bottom: -60px;
        z-index: -1;
        @media ${StyledTheme.media.tablet} {
          display: none;
        }
      }
    }

    &--btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-shrink: 0;
      min-width: fit-content;
      margin-bottom: 50px;
      margin-top: 0;
      @media ${StyledTheme.media.tablet} {
        margin-bottom: 40px;
        width: fit-content;
      }
    }
  }
`;

export default Container;
