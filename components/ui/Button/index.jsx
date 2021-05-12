import styled from 'styled-components';

export default styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.light};  
`;