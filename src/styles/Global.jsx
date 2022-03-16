import { createGlobalStyle } from 'styled-components';
import {BaseTheme} from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${BaseTheme.colors.background};
    font-family: ${BaseTheme.fontFamily.primary};
  }
`;
 
export default GlobalStyle;