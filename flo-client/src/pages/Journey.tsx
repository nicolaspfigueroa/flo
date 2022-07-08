import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getJourneysById } from '../Utilities/Service';
import { journey } from '../interfaces/journey';
import styled from 'styled-components';
import Schedule from '../components/Schedule';
import Restaurant from '../components/Restaurants';
import AddNotes from '../components/AddNotes';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import Container from '../components/Container';

const Photo = styled.div<StyleProps>`
  width: 100%;
  min-height: 300px;
  height: 25vw;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  color: whitesmoke;
`;

const ContainerPage = styled(Container)`
  width: 900px;
  padding: 12px;
`;

const RestaurantContainer = styled.div`
  border: rgb(250, 250, 250) 0.2em solid;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  border-radius: 8px;
`;

const Section = styled.h2`
  bottom: 32px;
  border-radius: 32px;
  font-size: 24px;
  color: #25292d;
`;

interface StyleProps {
  src: string;
}


const Journey: React.FC = () => {
  let { id } = useParams();

  const [journey, setJourney] = useState<journey>({
    coordinates: {
      lat: 0,
      lng: 0
    },
    coverImg: '',
    durationInDays: 0,
    title: '',
    _id: '',
    accomodation: '',
    stages: [],
    restaurants: [],
    notes: []
  });

  const journeyById = useCallback(
    async (id: string | undefined) => {
      const journeyData = await getJourneysById(id);
      setJourney(journeyData);
    },
    [setJourney]
  );

  useEffect(() => {
    journeyById(id);
  }, [journeyById, id]);

  const onChange = () => {
    return true;
  }

  return (
    <FullContainer data-testid = "journey">
      <FullContainer>
        <Header onChange = {onChange}/>
        <Photo src={journey.coverImg}></Photo>
        <TitleContainer>
          <Container>
            <Title data-testid = "journey-title">{journey.title}</Title>
          </Container>
        </TitleContainer>
      </FullContainer>
      <ContainerPage>
        <Section data-testid = "journey-date">Numbers of days: {journey.durationInDays}</Section>
        <Schedule days={journey.stages}></Schedule>
        <Section>Restaurants</Section>
        <RestaurantContainer>
          <Restaurant journeyId={journey._id} place={journey.restaurants} />
        </RestaurantContainer>

        <AddNotes
          journey={journey}
          notes={journey.notes}
          setJourney={setJourney}
        ></AddNotes>
      </ContainerPage>
    </FullContainer>
  );
}

export default Journey;
