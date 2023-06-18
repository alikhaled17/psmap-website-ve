import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(47, 53, 77, 1);
  color: #fff;
  .footer {
    &--body {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 45px 0 24px;
      @media ${StyledTheme.media.laptop} {
        gap: 20px;
      }
      @media ${StyledTheme.media.tablet} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 45px 0 0;
      }
      .content {
        width: 50%;
        @media ${StyledTheme.media.tablet} {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .psmap_logo {
          width: 150px;
          margin-bottom: 36px;
          @media ${StyledTheme.media.tablet} {
            width: 130px;
            margin-bottom: 24px;
          }
        }
        &--desc {
          font-size: 18px;
          line-height: 28px;
          font-weight: lighter;
          margin-bottom: 24px;
          width: 400px;
          @media ${StyledTheme.media.tablet} {
            width: unset;
            font-size: 16px;
            line-height: 22px;
          }
        }
        &--icons_list {
          display: flex;
          justify-content: flex-start;
          gap: 14px;
          margin-top: 16px;
          .social_icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${StyledTheme.colors.primary};
            @media ${StyledTheme.media.tablet} {
              width: 35px;
              height: 35px;
              svg {
                width: 20px;
              }
            }
          }
        }
      }
      .links {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media ${StyledTheme.media.tablet} {
          /* display: none; */
          width: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 24px 0;
        }
        &--label {
          font-size: 16px;
          font-weight: lighter;
          color: #818e94;
          @media ${StyledTheme.media.tablet} {
            flex: 0 0 100%;
            text-align: center;
          }
        }
        &--route {
          font-size: 18px;
          @media ${StyledTheme.media.tablet} {
            font-size: 16px;
          }
        }
      }
      .contacts {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media ${StyledTheme.media.tablet} {
          width: 100%;
          align-items: center;
          justify-content: center;
          margin-top: 24px;
        }
        &--label {
          font-size: 16px;
          font-weight: lighter;
          color: #818e94;
        }
        &--item {
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
          color: #eeeeee;
          svg {
            color: ${StyledTheme.colors.primary};
          }
          @media ${StyledTheme.media.tablet} {
            min-width: 150px;
            margin: 0 auto;
            small {
              flex-grow: 1;
              text-align: center;
            }
          }
        }
      }
    }
    &--tail {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-top: 1px solid #8e8e8e;
      padding: 24px;
      margin-top: 56px;
      color: #eeeeee;
      @media ${StyledTheme.media.tablet} {
        font-size: 14px;
      }
    }
  }
`;

export default Container;
