import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 9;
  background-color: #fff;
  .desktop_nav {
    @media ${StyledTheme.media.laptop} {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--items_section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4em;
      padding: 30px 0;

      &--logo {
        img {
          width: 160px;
        }
      }

      &--items {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-direction: row;

        .item {
          display: flex;
          padding: 5px;
          width: fit-content;
          /* min-width: 60px; */
          &--text {
            color: ${StyledTheme.colors.secondaryFont};
            cursor: pointer;
            &.active,
            &:hover {
              color: ${StyledTheme.colors.primary};
            }
            &:focus {
              font-weight: bold;
            }
          }
        }
      }
    }
    &--community_section {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
      &--join_btn {
        flex: auto;
        background-color: ${StyledTheme.colors.primary};
        color: ${StyledTheme.colors.primaryBackground};
        font-size: 16px;
        padding: 8px 16px;
      }
    }
  }
  .tablet_nav {
    display: none;
    @media ${StyledTheme.media.laptop} {
      display: block;
    }
    &--main {
      display: flex;
      padding: 12px 16px;
      align-items: center;
      justify-content: space-between;
      &--logo {
        img {
          width: 50%;
        }
      }
      &--menu_icon {
        cursor: pointer;
        svg {
          font-size: 30px;
        }
      }
    }
  }
`;

export default Container;
