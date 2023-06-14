import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  .OurMethodology_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    padding: 32px 0;
    @media ${StyledTheme.media.laptop} {
      padding: 48px 0 24px;
      flex-direction: column;
      gap: 16px;
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
    &--body {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 200px;
      @media ${StyledTheme.media.laptop} {
        gap: 24px;
        flex-direction: column-reverse;
        padding: 16px;
      }
      .content {
        &--list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
          @media ${StyledTheme.media.laptop} {
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
            &--desc {
              font-size: 16px;
              color: ${StyledTheme.colors.secondaryFont};
            }
          }
        }
      }
      .main_image {
        @media ${StyledTheme.media.laptop} {
          width: unset;
        }
        img {
          height: auto;
          @media ${StyledTheme.media.laptop} {
            width: 88vw;
          }
        }
      }
    }
  }
`;

export default Container;
