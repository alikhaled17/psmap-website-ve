import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2b2b;
  padding: 36px 0;
  @media ${StyledTheme.media.laptop} {
    padding: 24px 16px;
  }
  .PSMapTool_Pricing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--title {
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 48px;
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      color: #fff;
      width: 410px;
      @media ${StyledTheme.media.laptop} {
        width: unset;
        font-size: 18px;
        margin-bottom: 24px;
      }
    }
    &--pricing_types {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      @media ${StyledTheme.media.laptop} {
        flex-direction: column;
      }
    }
  }
`;

export default Container;
