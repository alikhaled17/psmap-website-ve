import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  min-width: 500px;
  background-color: #3b3b3b;
  color: #fff;
  text-align: center;
  min-height: 100vh;
  .pricing_card {
    flex-grow: 1;
    padding: 32px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--label {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid #fff;
      width: 100%;
    }

    &--title {
      font-size: 32px;
      font-weight: 600;
    }

    &--desc {
      width: 80%;
      margin: 32px 0 48px;
    }

    &--btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px !important;
      gap: 10px;
      width: 295px;
      margin-top: 24px;
    }

    .feature_list {
      text-align: left;
      width: 100%;
      &--header {
        font-size: 18px;
        margin-bottom: 24px;
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
