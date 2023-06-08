import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

import ResourcesHeroBgEn from "@/app/assets/images/Resources/resources_hero_bg_en.svg";
import ResourcesHeroBgAr from "@/app/assets/images/Resources/resources_hero_bg_ar.svg";
import ResourcesHeroBgMob from "@/app/assets/images/Resources/resources_hero_bg_mob.svg";

const Container = styled.div`
  padding-top: 80px;
  &.ar {
    background: url(${ResourcesHeroBgAr.src});
    background-size: cover;
    background-position: 0 20%;
    background-repeat: no-repeat;
    @media ${StyledTheme.media.laptop} {
      padding-top: 0;
      background: url(${ResourcesHeroBgMob.src});
      background-size: 100%;
      background-position: 0 35%;
      background-repeat: no-repeat;
    }
  }
  &.en {
    background: url(${ResourcesHeroBgEn.src});
    background-size: cover;
    background-position: 0 35%;
    background-repeat: no-repeat;
    @media ${StyledTheme.media.laptop} {
      padding-top: 0;
      background: url(${ResourcesHeroBgMob.src});
      background-size: 100%;
      background-position: 0 35%;
      background-repeat: no-repeat;
    }
  }

  .resources_hero_container {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .resources_hero_section {
      width: 50%;

      &--title {
        font-size: 56px;
        width: 80%;
        font-weight: bold;
        margin: 0;
        padding: 0;
        margin-bottom: 34px;
        line-height: 75px;
      }
      &--desc {
        width: 80%;
        font-size: 16px;
        color: ${StyledTheme.colors.secondaryFont};
        margin-bottom: 24px;
        width: 600px;
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
        margin-top: 24px;
        @media ${StyledTheme.media.laptop} {
          flex: 0 0 220px;
          width: fit-content;
          margin: 0 0 24px;
        }
      }
    }
    .resources_hero_img {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50%;
        height: auto;
      }
    }
  }

  .mobile_screen {
    display: none;
  }
  @media ${StyledTheme.media.laptop} {
    .resources_hero_container {
      min-height: unset;
      padding-top: 100px;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      row-gap: 24px;
      .resources_hero_img {
        padding-top: 20px;
        width: 50%;
        flex-grow: 1;
        justify-content: center;
        img {
          width: 70%;
        }
      }
      .resources_hero_section {
        width: 50%;
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        &--title {
          width: unset;
          min-width: unset;
          font-size: 20px;
          margin-bottom: 0;
          &.ar {
            line-height: 34px !important;
          }
          &.en {
            line-height: 24px !important;
          }
        }
        &--desc {
          width: unset;
          min-width: unset;
          font-size: 14px;
          text-align: center;
          &:last-child {
            margin-bottom: 0;
          }
        }
        &:last-child {
          width: 100%;
        }
      }
    }
    .desktop_screen {
      display: none;
    }
    .mobile_screen {
      display: flex;
    }
  }
`;

export default Container;
