import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  .Challenge_section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    gap: 125px;
    @media ${StyledTheme.media.laptop} {
      padding: 16px 0 24px;
      flex-direction: column;
      gap: 16px;
    }

    &--content {
      width: 50%;
      @media ${StyledTheme.media.laptop} {
        width: unset;
        text-align: center;
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
    }

    &--main_image {
      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Container;
