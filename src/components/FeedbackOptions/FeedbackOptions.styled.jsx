import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const FeedbackOptionsItem = styled.li`
  display: flex;
  justify-content: center;

  width: ${p => p.theme.space[7]}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  cursor: pointer;

  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: ${p => p.theme.space[3]}px;

  :hover {
    background-color: ${p => p.theme.colors.light};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
