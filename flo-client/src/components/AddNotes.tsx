import styled from 'styled-components'; 
import React, { Dispatch, useEffect, useState } from 'react';
import { journey } from '../interfaces/journey';
import { addNewNote } from '../Utilities/Service';
import { eventReact } from '../interfaces/eventReact';
import Notes from './Notes';
import { Note } from '../interfaces/note';
 
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  border: rgb(250, 250, 250) 0.2em solid;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const ContainerNotes = styled.div`
  max-width: 100%;
  display: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionNotes = styled.h2`
  display: flex;
  align-self: flex-start;
  bottom: 32px;
  border-radius: 32px;
  font-size: 24px;
  color: #25292d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 60px;
  border: rgb(250, 250, 250) 2px solid;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 4px;
  margin: 12px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const TypeNote = styled.input`
  background-color: rgba(250, 250, 250, 0.9);
  height: 30px;
  width: 600px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  margin-top: 8px;
`;

const AddNoteButton = styled.button`
  width: 180px;
  border-radius: 4px;
  border: none;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  background-color: rgba(250, 250, 250, 0.9);
  font-size: 12px;
  font-weight: 600;
  margin: 4px;
  margin-right: 18px;
`;

interface Props {
  journey: {_id: string};
  notes: Note[];
  setJourney: Dispatch<journey>;
}
const AddNotes: React.FC<Props> = ({ journey, notes, setJourney }) => {
  const [note, setNote] = useState<Note[]>([] ); // 

  useEffect(() => {
    setNote(notes);
  }, [notes]);

  async function handleSubmit ( event : eventReact) {
    event.preventDefault();
    const noteInput = event.target.note.value;
    const newNote = await addNewNote(journey._id, noteInput);
    setNote(newNote.notes);
    event.target.reset();
  }
  function myFunction(event :React.FormEvent<HTMLFormElement>) {//console.log("myFunction "+ele)
       handleSubmit(event as unknown as eventReact);
  }
 

  return (
    <>
      <TitleContainer>
        <SectionNotes>Notes</SectionNotes>
        <Form onSubmit={(ele ) =>myFunction(ele)}>
          <TypeNote
            type='text'
            name='note'
            placeholder='Type note...'
            required
          ></TypeNote>
          <AddNoteButton id = 'notebutton' type='submit'>ADD NOTE</AddNoteButton>
        </Form>
      </TitleContainer>
      <Container>
        <ContainerNotes>
          <Notes journey = {journey._id } note={note} setNote ={setNote}></Notes>
        </ContainerNotes>
      </Container>
    </>
  );
}

export default AddNotes;
