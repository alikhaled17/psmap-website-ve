import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  .star_img {
    position: relative;
    width: fit-content;
    @media ${StyledTheme.media.laptop} {
      width: unset;
    }
    &--l_star_img,
    &--r_star_img,
    &--dots_img {
      position: absolute;
      @media ${StyledTheme.media.laptop} {
        scale: 0.8;
      }
    }
    &--dots_img {
      bottom: -10px;
      right: -20px;
    }
    &--r_star_img {
      top: 20px;
      right: 20px;
    }
    &--l_star_img {
      left: -20px;
      bottom: 150px;
    }

    &--main_img {
      border-radius: 8px;
      @media ${StyledTheme.media.laptop} {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default Container;
