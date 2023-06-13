import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  .why_us {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${StyledTheme.media.laptop} {
      min-height: unset;
      padding-bottom: 24px;
    }
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 16px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        font-size: 18px;
      }
    }
    &--desc {
      font-size: 14px;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        width: 92%;
        margin: 0 auto 16px;
      }
    }

    &--list__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      gap: 220px;
      @media ${StyledTheme.media.laptop} {
        gap: unset;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 16px;
      }
      &--col {
        width: 50%;
        @media ${StyledTheme.media.laptop} {
          width: 100%;
        }
        ul {
          list-style: none;
          li {
            display: flex;
            align-items: center;
            margin: 32px 15px;
            font-size: 16px;
            @media ${StyledTheme.media.laptop} {
              margin: 24px 0;
              &:last-child {
                margin: 24px 0 0;
              }
            }
            img {
              margin: 0 10px;
              color: ${StyledTheme.colors.primary};
            }
          }
        }
      }
    }

    &--trial_btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-width: fit-content;
      margin: 0 auto;
    }
  }
`;

export default Container;
