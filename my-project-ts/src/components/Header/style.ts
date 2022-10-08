import styled from "styled-components";
import theme from "assets/styles/theme";

export const Header = styled.header`
  background-color: ${theme.colors.color2};
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);
  nav {
    width: 50%;
    ul {
      display: flex;     
      justify-content: space-between;
      li {
        min-width: 1.5rem;
        max-width: 2rem;
        margin: 0 1rem;
        list-style: none;
      }
    }
  }
  .credential {
    color: ${theme.colors.textColor2};
    font-weight: 500;
  }
`;

export const LogoHeader = styled.div`
  max-width: 8rem;
  grid-column: 1/2;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-content: center;
  justify-items: space-between;
  .nameLogo{
    grid-column: 2/4;
    font-style: oblique;
    color: ${theme.colors.textColorHover};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
