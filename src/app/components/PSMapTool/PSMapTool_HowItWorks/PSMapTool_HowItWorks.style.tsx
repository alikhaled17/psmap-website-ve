import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
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
    .item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 70px;
      align-items: stretch;

      &_image {
        width: 45%;
        padding-bottom: 40px;
        img {
          width: 100%;
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
        &--title {
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        &--desc {
          font-size: 16px;
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
    }
  }
`;

export default Container;
