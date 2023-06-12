import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 48px;
  .horizontal_card {
    overflow: hidden;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;

    @media ${StyledTheme.media.laptop} {
      flex-direction: column;
      align-items: center;
      box-shadow: unset;
      border-radius: unset;
    }

    &--img {
      margin: 0;
      padding: 0;
      @media ${StyledTheme.media.laptop} {
        margin: 16px 16px 0;
      }
      img {
        scale: 1.04;
        @media ${StyledTheme.media.laptop} {
          scale: unset;
          width: 100%;
          border-radius: 8px;
        }
      }
    }
    &--content {
      padding: 32px 42px 0;
      text-align: left;
      flex-grow: 1;
      @media ${StyledTheme.media.laptop} {
        padding: 0 0 24px;
        text-align: center;
      }
      &--title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        @media ${StyledTheme.media.laptop} {
          font-size: 18px;
        }
      }
      &--desc {
        font-size: 16px;
        color: ${StyledTheme.colors.secondaryFont};
      }
      &--btn {
        display: flex;
        width: 100%;
        @media ${StyledTheme.media.laptop} {
          justify-content: center !important;
        }
        .button {
          background-color: ${StyledTheme.colors.primary};
          color: ${StyledTheme.colors.primaryBackground};
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: fit-content;
          margin: 24px 0 0;
          @media ${StyledTheme.media.laptop} {
            flex: 0 0 220px;
            width: fit-content;
            margin: 24px 0 0;
          }
        }
      }
    }
  }
`;

export default Container;
