import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  padding-top: 40px;
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
    &--video {
      background-image: linear-gradient(#271717 40%, #5a0f00, #d02100);
      width: 85vw;
      height: 600px;
      padding: 24px 86px;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${StyledTheme.media.laptop} {
        height: 300px;
        width: 90vw;
        padding: 24px 16px;
      }
      .youtube {
        width: 100%;
        height: 100%;
        border: 0;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
        border-radius: 8px;
        @media ${StyledTheme.media.laptop} {
          width: 90%;
        }
      }
    }
  }
`;

export default Container;
