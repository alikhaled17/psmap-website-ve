import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  .signup_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    width: 100%;
    @media ${StyledTheme.media.laptop} {
      padding: 16px 0;
    }
    &--title {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 24px;
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
      margin-bottom: 32px;
      text-align: center;
      line-height: 24px;
      @media ${StyledTheme.media.laptop} {
        font-size: 14px;
        line-height: 22px;
      }
    }
    &--sup_title {
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 16px;
      color: ${StyledTheme.colors.primary};
      margin-bottom: 24px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        font-size: 24px;
      }
    }
  }
`;

export default Container;
