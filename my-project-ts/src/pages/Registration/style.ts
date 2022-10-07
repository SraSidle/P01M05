import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Registration = styled.div`
	height: 100vh;  
	background: ${theme.colors.color1};
`;

export const BackgroundBody = styled.div`
	height: 80vh; 
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	${() => css`
	  @media(max-width: 1200px){
		.background__body {
			flex-direction: column;
		}
	}
  `}
`;

export const formReg = styled.form`
  margin-top: 2rem;
	width:350px;
	padding: 1rem;
	border-radius: .5rem;
	box-shadow: 2px 2px 6px 2px ${theme.colors.shadowColor};
	background-color: ${theme.colors.color3};
  color: ${theme.colors.textColor3};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

  .title__form{
    color: darkcyan;
    font-weight: 600;
    font-size: 1.3rem;
  }

  input {
		width: 90%;
    padding: .5rem;
    border-radius: .5rem;
    border: solid 1px ${theme.colors.borderLine};
    outline: 0;
	}

  input:focus{
    border: solid 1px red;
  }

   button {
		background-color: ${theme.colors.color2};
    color: ${theme.colors.textColor2};
    border: none;
    border-radius: .4rem;
		margin-top: 1rem;
		padding: .7rem 1rem;
    box-shadow: 1px 1px 5px 1px ${theme.colors.shadowColor2};		
	 }

   button:hover {
    cursor: pointer;
   }
`;
