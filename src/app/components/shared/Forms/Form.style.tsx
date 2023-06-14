import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    padding: 32px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    margin-bottom: 24px;
    width: 30vw;

    @media ${StyledTheme.media.laptop} {
      box-shadow: unset;
      width: unset;
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
    .error-message {
      text-align: inherit;
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
