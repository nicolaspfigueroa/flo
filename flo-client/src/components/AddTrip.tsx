import styled from 'styled-components';
import { Plus } from '@mountain-ui/icons';
import React from 'react';
import BlurredBox from './BlurredBox';
import { useState } from 'react';
import { Note } from '../interfaces/note';

const StyledAddTrip = styled(BlurredBox)`
  display: flex;
  gap: 16px;
  position: fixed;
  height: auto;
  top: unset;
  left: unset;
  right: 32px;
  bottom: 32px;
  border-radius: 32px;
  background-color: rgba(250, 250, 250, 0.5);
  font-size: 22px;
  font-weight: 600;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;
//not sure what tyoe should journeys be 
type callBackFunction = () => void;
interface Props {
  journeys: string;
  setJourneys: callBackFunction;
}
const AddTrip: React.FC<Props> = ({ journeys, setJourneys }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <StyledAddTrip onClick={toggleModal}>
        Add new journey
        <IconContainer>
          <Plus fontSize={32} />
        </IconContainer>
      </StyledAddTrip>
    </>
  );
}

export default AddTrip;
