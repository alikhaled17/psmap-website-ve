import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  @media ${StyledTheme.media.laptop} {
    .warped_container {
      margin: 0;
    }
  }
  .PSMapTool_HowItWorks {
    &--title {
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-top: 24px;
      margin-bottom: 24px;
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      @media ${StyledTheme.media.laptop} {
        background-color: #eeeeee;
        margin-bottom: unset;
        margin-top: unset;
        padding-bottom: 0;
        padding-top: 24px;
      }
    }
  }
  .HowItWorks_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    background-color: #eeeeee;
    border-radius: 8px;
    @media ${StyledTheme.media.laptop} {
      padding: 24px 16px;
      border-radius: 0;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 70px;
      align-items: stretch;

      @media ${StyledTheme.media.laptop} {
        gap: 16px;
        flex-wrap: wrap;
      }
      &_image {
        width: 45%;
        padding-bottom: 40px;
        @media ${StyledTheme.media.laptop} {
          display: none;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      }
      &_separator {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: auto;
        &--number {
          background-color: ${StyledTheme.colors.primary};
          color: #fff;
          width: 30px;
          height: 30px;
          text-align: center;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      &:not(:last-child) {
        .item_separator {
          &:after {
            content: "";
            flex-grow: 1;
            border: 1.25px dotted #cacaca;
          }
        }
      }
      &_content {
        width: 45%;
        @media ${StyledTheme.media.laptop} {
          width: 85%;
        }
        &--title {
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          margin-bottom: 16px;
          @media ${StyledTheme.media.laptop} {
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 800;
          }
        }
        &--desc {
          font-size: 16px;
          @media ${StyledTheme.media.laptop} {
            font-size: 14px;
          }
        }
        .mobile_image {
          display: none;
          padding: 16px 0 32px;
          @media ${StyledTheme.media.laptop} {
            display: unset;
          }
          img {
            margin: 16px 0 32px;
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
        }
      }
    }
    .item:nth-child(even) {
      .item_content {
        order: 1;
      }
      .item_separator {
        order: 2;
      }
      .item_image {
        order: 3;
      }
      @media ${StyledTheme.media.laptop} {
        .item_content {
          order: 2;
        }
        .item_separator {
          order: 1;
        }
        .item_image {
          order: 3;
        }
      }
    }
    .item {
      @media ${StyledTheme.media.laptop} {
        .item_content {
          order: 2;
        }
        .item_separator {
          order: 1;
        }
        .item_image {
          order: 3;
        }
      }
    }
  }
`;

export default Container;
