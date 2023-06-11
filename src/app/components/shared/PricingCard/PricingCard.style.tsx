import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  min-width: 500px;
  width: 500px;
  background-color: #3b3b3b;
  color: #fff;
  min-height: 120vh;
  @media ${StyledTheme.media.laptop} {
    min-width: unset;
    width: unset;
  }
  .pricing_card {
    flex-grow: 1;
    padding: 32px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${StyledTheme.media.laptop} {
      padding: 24px 16px;
    }
    &--label {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid #fff;
      width: 100%;
      text-align: center;
    }

    &--title {
      font-size: 32px;
      font-weight: 600;
      text-align: center;

      @media ${StyledTheme.media.laptop} {
        font-size: 24px;
      }
    }

    &--desc {
      width: 80%;
      margin: 32px 0 48px;
      text-align: center;

      @media ${StyledTheme.media.laptop} {
        margin: 32px 0;
      }
    }

    &--btn {
      background-color: ${StyledTheme.colors.primaryTwo};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px !important;
      gap: 10px;
      width: 295px;
      margin-top: 24px;
      transition: all 0.1s ease-in-out;
      &:hover {
        background-color: ${StyledTheme.colors.primary};
      }
    }

    .feature_list {
      width: 100%;
      &--header {
        font-size: 18px;
        margin-bottom: 24px;
        @media ${StyledTheme.media.laptop} {
          font-size: 16px;
        }
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          margin: 24px 15px 0 0;
          font-size: 16px;
          @media ${StyledTheme.media.laptop} {
            font-size: 14px;
          }
          svg {
            margin: 0 10px;
            color: #fff;
            border-radius: 50%;
            background-color: #ffffff50;
          }
        }
      }
    }
  }
`;

export default Container;
