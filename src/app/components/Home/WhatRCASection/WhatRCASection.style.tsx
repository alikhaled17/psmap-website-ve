import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${StyledTheme.media.laptop} {
    min-height: unset;
    padding-bottom: 12px;
  }
  .what_rca {
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 32px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
`;

export default Container;
