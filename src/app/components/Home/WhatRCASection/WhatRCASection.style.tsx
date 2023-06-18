import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";
import VideoPlayerBg from "@/app/assets/images/Home/video_player.png";

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
  }
  @media ${StyledTheme.media.tablet} {
    padding-top: 16px;
    min-height: unset;
    padding-bottom: 12px;
  }
  .what_rca {
    width: 100%;
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 32px;
      text-align: center;
      @media ${StyledTheme.media.laptop} {
        font-size: 24px;
        margin-bottom: 20px;
      }
      @media ${StyledTheme.media.tablet} {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
    &--video {
      background: url(${VideoPlayerBg.src});
      background-repeat: no-repeat;
      background-size: cover;
      width: 90%;
      height: 650px;
      padding: 24px 5%;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${StyledTheme.media.tablet} {
        height: 300px;
        width: 90%;
        padding: 24px 5%;
      }
      .youtube {
        width: 100%;
        height: 100%;
        border: 0;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
        border-radius: 8px;
        @media ${StyledTheme.media.tablet} {
          width: 90%;
        }
      }
    }
  }
`;

export default Container;
