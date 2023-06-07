import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import HeroBg from "@/app/assets/images/Home/HeroSectionBg.svg";

const Container = styled.div`
  background: url(${HeroBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 80px;
  @media ${StyledTheme.media.laptop} {
    background: unset;
  }
  .hero_container {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${StyledTheme.media.laptop} {
      min-height: unset;
      flex-direction: column;
    }

    .info_section {
      width: 50%;
      @media ${StyledTheme.media.laptop} {
        width: 100%;
        text-align: center;
        padding-top: 100px;
      }
      &--title {
        font-size: 56px;
        font-weight: bold;
        margin: 0;
        padding: 0;
        margin-bottom: 24px;
        @media ${StyledTheme.media.laptop} {
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
        width: 600px;
        @media ${StyledTheme.media.laptop} {
          font-size: 14px;
          max-width: 343px;
          width: unset;
          margin: 0 auto;
        }
      }
      &--trial {
        display: flex;
        align-items: center;
        gap: 20px;
        @media ${StyledTheme.media.laptop} {
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        &--trial_btn {
          background-color: ${StyledTheme.colors.primary};
          color: ${StyledTheme.colors.primaryBackground};
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-shrink: 0;
          min-width: fit-content;
          @media ${StyledTheme.media.laptop} {
            flex: 0 0 220px;
            width: fit-content;
            margin: 32px 130px 0;
          }
        }
        &--play_btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid rgba(238, 238, 238, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &--watch_btn {
          font-size: 20px;
        }
      }
    }

    .hero_img {
      width: 50%;
      @media ${StyledTheme.media.laptop} {
        display: none;
      }
      img {
        width: 100%;
      }
    }
  }
`;

export default Container;