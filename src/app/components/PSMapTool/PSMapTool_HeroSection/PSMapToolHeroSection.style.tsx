import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 150px;
  .PSMapTool_HeroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--title {
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 24px;
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      width: 754px;
    }
    &--desc {
      font-size: 16px;
      color: ${StyledTheme.colors.secondaryFont};
      margin-bottom: 16px;
      text-align: center;
    }
    &--trial_btn {
      background-color: ${StyledTheme.colors.primary};
      color: ${StyledTheme.colors.primaryBackground};
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: fit-content;
      margin-top: 24px;
    }
  }

  .hero_background {
    margin: 32px auto;
    &--img {
      width: 100%;
    }
  }
`;

export default Container;
