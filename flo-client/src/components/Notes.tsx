import React from 'react';
import styled from 'styled-components';
import { deleteNoteById } from '../Utilities/Service';
import { Trash } from '@mountain-ui/icons';
import { Note } from '../interfaces/note';

const ContainerCard = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  gap: 8px;
  padding: 16px;
  list-style: none;
`;

const NotesCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  border: rgb(250, 250, 250) 2px solid;
  background-color: rgb(250, 250, 206);
  width: 240px;
  max-width: 200px;
  height: 170px;
  border-radius: 8px;
  border: rgb(250, 250, 250) 0.2em solid;
  padding: 4px;
  margin-left: 8px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const NoteText = styled.p`
  margin: 12px;
  margin-top: 36px;
`;

const ButtonDelete = styled.button`
  border: none;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  margin: 4px;
  border-radius: 50%;
  height: 24px;
  background-color: rgba(250, 250, 250, 0.9);
`;

interface Notefunction{
  nFunction : (notes : Note[])=> Note[]
}

interface NoteProps{
  journey :string;
  note :Note[];
  setNote : React.Dispatch<React.SetStateAction<Note[]>>
  ;
}
function Notes({ journey, note, setNote }: NoteProps) {
  async function deleteNote(id: string) {
    await deleteNoteById(journey, id);
    return setNote (( prevState  ) => {
      return prevState.filter((el) => el._id !== id);
    });
  }

  return (
    <ContainerCard>
      {note &&
        note.map((el) => {
          return (
            <NotesCard key={el._id}>
              <NoteText>{el.note}</NoteText>
              <ButtonDelete onClick={() => deleteNote(el._id)} value={el._id}>
                <Trash color='#737577'></Trash>
              </ButtonDelete>
            </NotesCard>
          );
        })}
    </ContainerCard>
  );
}

export default Notes;
