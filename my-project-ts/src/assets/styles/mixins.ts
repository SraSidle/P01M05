import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const logoStyle = () => css`
    font-family: ${constants.logoFontFamily};
    font-size: ${constants.logoFontSize};
`;

export const mixins = {
    logoStyle,
};