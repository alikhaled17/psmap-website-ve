import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2b2b;
  padding: 36px 0;
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
    }
    &--pricing_types {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default Container;
