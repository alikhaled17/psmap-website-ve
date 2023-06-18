import { StyledTheme } from "@/app/core/theme/StyledTheme";
import HeroBgDesktop from "@/app/assets/images/About/comparisonBG.png";

import styled from "styled-components";

const Container = styled.div`
  background: url(${HeroBgDesktop.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media ${StyledTheme.media.tablet} {
    background: unset;
  }
  .aboutcomparison_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    @media ${StyledTheme.media.tablet} {
      min-height: unset;
    }
    .MuiPaper-rounded {
      overflow: hidden;
    }
    &--title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      margin-bottom: 40px;
      max-width: 550px;
      line-height: 48px;
      @media ${StyledTheme.media.laptop} {
        line-height: 32px;
        font-size: 24px;
        margin-bottom: 24px;
      }
      @media ${StyledTheme.media.tablet} {
        font-size: 18px;
        line-height: 32px !important;
        max-width: 343px;
        margin: 0 auto 24px;
      }
    }

    &--table {
      margin-bottom: 40px;
      .table_container {
        width: 700px;
        @media ${StyledTheme.media.tablet} {
          width: unset;
          min-width: 90vw;
        }
      }
      .table_header {
        background-color: #ff2800;
        &--cell {
          width: 30%;

          color: #fff;
          font-size: 24px;
          font-weight: 600;
          @media ${StyledTheme.media.tablet} {
            font-size: 14px;
          }
        }
      }
      .table_body {
        &:nth-child(odd) {
          background-color: #eeeeee;
        }
        &--cell {
          width: 30%;
          border-right: 1px solid #cacaca;
          font-size: 16px;
          &:first-child {
            @media ${StyledTheme.media.tablet} {
              width: 40%;
            }
          }
          @media ${StyledTheme.media.tablet} {
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export default Container;
