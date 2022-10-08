import styled from "styled-components";
import theme from "assets/styles/theme";

export const BackgroundBodyLeft = styled.div`
	width: 40%;
  height: auto;
  padding: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
  }

   .logo__name {
     font-weight: 700;
     font-size: 1rem;
     color: ${theme.colors.textColorHover};
     font-style: oblique;
    }
    
    .logo__game{
      width: 2.5rem;
      margin-right: .2rem;
	  }

  .description_app{ 
    font-style: italic;
  }
`;