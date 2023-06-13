import { StyledTheme } from "@/app/core/theme/StyledTheme";
import BgDesktop from "@/app/assets/images/About/pattern.png";

import styled from "styled-components";

const Container = styled.div`
  background: url(${BgDesktop.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${StyledTheme.media.laptop} {
    background: unset;
  }

  .ourvision_section {
    height: 120vh;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    @media ${StyledTheme.media.laptop} {
      height: auto;
      padding-top: 24px;
      padding-bottom: 16px;
    }
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      max-width: 550px;
      line-height: 48px;
      @media ${StyledTheme.media.laptop} {
        font-size: 18px;
        line-height: 32px !important;
        max-width: 343px;
        margin: 0 auto 16px;
      }
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      margin-bottom: 48px;
      max-width: 550px;
      color: #818e94;
      @media ${StyledTheme.media.laptop} {
        font-size: 14px;
        max-width: 343px;
        width: unset;
        margin: 0 auto;
      }
    }
    &--items {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      @media ${StyledTheme.media.laptop} {
        justify-content: center;
        margin-top: 24px;
      }
      img {
        width: 295px;
        border-radius: 8px;

        &:nth-child(even) {
          margin-top: 150px;
        }
        &.ar {
          &:nth-child(even) {
            margin-top: unset;
          }
          &:nth-child(odd) {
            margin-top: 150px;
          }
        }

        @media ${StyledTheme.media.laptop} {
          margin-top: unset !important;
          width: 162px;
          height: auto;
        }
      }
    }
  }
`;

export default Container;
