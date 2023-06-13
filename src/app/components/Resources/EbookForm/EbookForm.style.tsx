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

  .form {
    padding: 32px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    margin-bottom: 24px;
    width: 470px;
    position: relative;
    @media ${StyledTheme.media.laptop} {
      width: 80%;
      padding: 12px;
    }

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
      font-size: 18px;
      margin-bottom: 16px;
      line-height: 32px;
      text-align: center;
      color: #2f354d;
      @media ${StyledTheme.media.laptop} {
        font-size: 18px;
        line-height: 26px;
      }
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      margin-bottom: 16px;
      text-align: center;
      line-height: 24px;
      width: 80%;
      margin: 0 auto 16px;
      @media ${StyledTheme.media.laptop} {
        font-size: 14px;
        line-height: 22px;
      }
    }

    &--download_btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-shrink: 0;
      width: inherit;
      @media ${StyledTheme.media.laptop} {
        flex: 0 0 220px;
        margin: 0 0 0;
      }
    }

    @media ${StyledTheme.media.laptop} {
      box-shadow: unset;
      width: unset;
      width: 340px;
    }
  }

  .desc {
    font-size: 16px;
    color: ${StyledTheme.colors.secondaryFont};
    margin-bottom: 16px;
    text-align: center;
    line-height: 24px;
    @media ${StyledTheme.media.laptop} {
      font-size: 14px;
      line-height: 22px;
    }
  }

  .form_input {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    &--end {
      color: red;
      font-weight: bold;
      margin-top: 6px;
    }
  }

  .acceptions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  .submit_btn {
    background-color: ${StyledTheme.colors.primary};
    color: ${StyledTheme.colors.primaryBackground};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-shrink: 0;
    min-width: 400px;
    margin: 0 auto 24px;
    @media ${StyledTheme.media.laptop} {
      min-width: 200px;
    }
  }
`;

export default Container;
