import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;
