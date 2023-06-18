import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import HeroBgEn from "@/app/assets/images/Training/TrainingHeroBGEN.svg";
import HeroBgAr from "@/app/assets/images/Training/TrainingHeroBGAR.svg";

const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #e7e7e7;

  @media ${StyledTheme.media.tablet} {
    padding-bottom: 0;
    background: unset;
  }
  .training_rca_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 125px;
    @media ${StyledTheme.media.laptop} {
      gap: 50px;
    }
    @media ${StyledTheme.media.tablet} {
      gap: unset;
      min-height: unset;
      flex-direction: column;
    }

    .info_section {
      width: 50%;
      @media ${StyledTheme.media.tablet} {
        width: 100%;
        text-align: center;
        padding-top: 100px;
        @media ${StyledTheme.media.tablet} {
          padding-top: 0;
        }
      }
      &--title {
        font-size: 32px;
        font-weight: bold;
        margin: 0;
        padding: 0;
        margin-bottom: 16px;
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
        margin-bottom: 48px;
        width: 100%;
        @media ${StyledTheme.media.laptop} {
          width: 90%;
        }
        @media ${StyledTheme.media.tablet} {
          font-size: 14px;
          width: 90%;
          width: unset;
          margin: 0 auto;
          margin-bottom: unset;
        }
      }
    }

    .training_rca_img {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      @media ${StyledTheme.media.tablet} {
        width: 100%;
        margin-bottom: 24px;
      }
      img {
        border-radius: 8px;
        height: 100%;
        @media ${StyledTheme.media.tablet} {
          height: unset;
          width: 100%;
        }
      }
    }
  }
`;

export default Container;
