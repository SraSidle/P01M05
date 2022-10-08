import theme from "assets/styles/theme";
import styled from "styled-components";

export const DelBody = styled.div`
  text-align: center;
  color: ${theme.colors.textColor2};
`

export const Choice = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.div`
  margin: 0.3rem;
  padding: 0.7rem;
  border-radius: 0.2rem;
  font-weight: 700;
  color: ${theme.colors.textColor2};
  background-color: ${theme.colors.color2};
  box-shadow: 0px 0px 0px 1px #00000030;
`;