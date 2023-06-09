import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  .about_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media ${StyledTheme.media.laptop} {
      gap: 26px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media ${StyledTheme.media.tablet} {
      padding-top: 24px;
      flex-direction: column;
      gap: 16px;
    }
    &--content {
      width: 50%;
      @media ${StyledTheme.media.laptop} {
        width: unset;
        order: 2;
        padding: 0 10px;
      }
      @media ${StyledTheme.media.tablet} {
        width: unset;
        order: 2;
        padding: 0 10px;
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
        margin-top: 40px;
        @media ${StyledTheme.media.laptop} {
          margin: 20px auto;
        }
        @media ${StyledTheme.media.tablet} {
          margin: 24px auto;
        }
      }
    }

    &--image {
      @media ${StyledTheme.media.tablet} {
        width: 100%;
      }
    }

    &--content__list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 24px;
      @media ${StyledTheme.media.tablet} {
        gap: 16px;
      }
      &--item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 12px;
        &--orange_star {
          margin-top: 9px;
        }
        &--title {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 16px;
          @media ${StyledTheme.media.laptop} {
            font-size: 16px;
            margin-bottom: 12px;
          }
          @media ${StyledTheme.media.tablet} {
            margin-bottom: 8px;
          }
        }
        &--desc {
          font-size: 16px;
          color: ${StyledTheme.colors.secondaryFont};
        }
      }
    }
  }
`;

export default Container;
