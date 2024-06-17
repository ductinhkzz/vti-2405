import styled from 'styled-components';

import { IPerson } from '../../types';

interface PersonItemProps {
  person: IPerson;
}

const PersonItemStyled = styled.li<{ textColor?: string }>`
  display: flex;
  gap: 8px;
  color: ${(props) => props.textColor};
`;

const PersonItem = ({ person }: PersonItemProps) => {
  return (
    <PersonItemStyled textColor={person.color}>
      <div>{person.id}</div>
      <div>{person.name}</div>
      <div>{person.email}</div>
    </PersonItemStyled>
  );
};

export default PersonItem;
