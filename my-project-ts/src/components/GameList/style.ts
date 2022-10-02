import theme from "assets/styles/theme";
import styled, { css } from "styled-components";

export const GameList = styled.section`
  background-color: ${theme.colors.color3};
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 7px;
  margin: 1px solid ${theme.colors.borderLine};
  box-shadow: 3px 3px 8px 2px ${theme.colors.shadowColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;