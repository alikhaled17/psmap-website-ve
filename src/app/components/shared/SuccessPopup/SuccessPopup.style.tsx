import styled from "styled-components";
import { StyledTheme } from "@/app/core/theme/StyledTheme";

const Container = styled.section`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #38383830;
  display: flex;
  align-items: center;
  justify-content: center;

  .popup {
    padding: 24px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    margin-bottom: 24px;
    width: 470px;
    position: relative;

    &--close {
      position: absolute;
      right: -10px;
      top: -10px;
      background-color: #24272a;
      color: #fff;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    &--title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 32px;
      line-height: 32px;
      text-align: center;
      color: #2f354d;
      @media ${StyledTheme.media.laptop} {
        font-size: 18px;
        line-height: 26px;
      }
    }

    &--close_btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-shrink: 0;
      width: 40%;
      margin: auto;
    }

    @media ${StyledTheme.media.tablet} {
      box-shadow: unset;
      width: unset;
      width: 340px;
    }
    @media ${StyledTheme.media.mobile_large} {
      box-shadow: unset;
      width: unset;
      width: 250px;
    }
  }
`;

export default Container;
