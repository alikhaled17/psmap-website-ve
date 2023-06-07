import { StyledTheme } from "@/app/core/theme/StyledTheme";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80vh;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  @media ${StyledTheme.media.laptop} {
    .warped_container {
      margin: 0 0;
    }
  }
`;

export default Container;
