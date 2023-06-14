import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import HeroBgDesktop from "@/app/assets/images/Contact/HeroDesktop.png";
import HeroBgMobile from "@/app/assets/images/Contact/HeroMobile.png";

const Container = styled.div`
  background: url(${HeroBgDesktop.src});
  background-size: contain;
  background-position: 50% 10%;
  background-repeat: no-repeat;
  @media ${StyledTheme.media.laptop} {
    background: url(${HeroBgMobile.src});
    background-size: contain;
    background-position: 50% 50px;
    background-repeat: no-repeat;
  }

  .contact_hero_section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: #fff;
    padding-top: 20px;
    @media ${StyledTheme.media.laptop} {
      height: 30vh;
      align-items: center;
      padding-top: 45px;
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

  .screen-container {
    .contacts_container {
      background-color: #2f354d;
      display: flex;
      justify-content: space-evenly;
      padding: 40px 0px;
      direction: ltr;
      @media ${StyledTheme.media.mobile_large} {
        padding: 18px 0px;
      }

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

    .form-container {
      background-color: #fff;
      padding-top: 40px;
      padding-bottom: 32px;
    }
  }
`;

export default Container;
