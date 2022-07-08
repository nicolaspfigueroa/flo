import React from 'react';
import styled from 'styled-components';
import { Todos } from '../interfaces/todos';

const Title = styled.div`
  border-radius: 32px;
  font-size: 24px;
  font-weight: 600;
  margin: 8px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border: rgb(250, 250, 250) 0.2em solid;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 8px;
`;

const Name = styled.h2`
  font-size: 16px;
  color: #25292d;
  margin: 8px;
`;

const Checkmark = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 16px;
  margin: 2px;
  padding: 2px;
  font-weight: normal;
  color: #25292d;
`;

interface Props{
  daysDescription : {
    title: string;
    description: string;
    todos : Todos[]

  }
}
const Day: React.FC<Props> = ({ daysDescription }) => {
  return (
    <Detail>
      <Title key={daysDescription.title}>
        {daysDescription.title} - {daysDescription.description}
      </Title>
      {daysDescription.todos.map((el) => {
        return (
          <Name key={el.title}>
            <Checkmark type='checkbox'></Checkmark>
            <Label>{el.name}</Label>
          </Name>
        );
      })}
    </Detail>
  );
}

export default Day;
