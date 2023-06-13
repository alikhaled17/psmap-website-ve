import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 80px;
  padding-bottom: 72px;
  @media ${StyledTheme.media.laptop} {
    padding-top: 0;
    background: unset;
  }
  .hero_container {
    height: 584px;
    .hero_image {
      width: 99.5vw;
      height: 584px;
      object-fit: cover;
    }
  }

  .hero_section_text {
    position: absolute;
    top: 300px;
    left: 200px;
    @media ${StyledTheme.media.mobile_large} {
      left: 0px;
      right: 0px;
      text-align: center;
      vertical-align: middle;
    }
    .title {
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      margin-bottom: 24px;
      color: #fff;
      @media ${StyledTheme.media.mobile_large} {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        color: #fff;
      }
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #d5d7d9;
      @media ${StyledTheme.media.mobile_large} {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }

  .contacts_container {
    background-color: #2f354d;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
    padding: 40px;
    direction: ltr;
    .icon {
      margin: 0px 9px;
    }
    .contact-info {
      display: flex;
      align-items: center;
      direction: ltr;
      .text {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        @media ${StyledTheme.media.mobile_large} {
          font-weight: 600;
          font-size: 12px;
        }
      }
    }
  }

  .footer_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    @media ${StyledTheme.media.laptop} {
      padding: 40px 0;
    }
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      @media ${StyledTheme.media.laptop} {
        font-size: 24px;
        line-height: 32px !important;
        margin: 0 auto 24px;
      }
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      @media ${StyledTheme.media.laptop} {
        font-size: 14px;
        width: unset;
        margin: 0 auto;
      }
    }
  }
`;

export default Container;
