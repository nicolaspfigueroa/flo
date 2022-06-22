import React, { EventHandler , FormEvent } from 'react';
import styled from 'styled-components';
import { addNewRestaurant, deleteRestaurantById } from '../Utilities/Service';
import { useEffect, useState } from 'react';
import { restaurant } from '../interfaces/restaurant';
import { eventReact } from '../interfaces/eventReact';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  gap: 8px;
  padding: 16px;
  list-style: none;
  overflow-y: scroll;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: rgb(250, 250, 250) 2px solid;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 16px;
  width: 240px;
  height: min-content;
  padding: 16px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const Input = styled.input`
  background-color: rgba(250, 250, 250, 0.9);
  height: 30px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
`;

const Button = styled.button`
  background-color: rgba(250, 250, 250, 0.9);
  border: none;
  border-radius: 8px;
  height: 30px;
  width: auto;
  margin: 8px;
  font-size: 12px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  font-size: 12px;
  font-weight: 600;
`;

const ButtonDelete = styled(Button)`
  border: none;
  height: 24px;
  width: 120px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  font-size: 12px;
  font-weight: 600;
`;

const ContainerCard = styled(Container)`
  max-height: 200px;
  width: 800px;
  max-width: 800px;
  display: center;
`;

const RestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 240px;
  max-width: 200px;
  height: 180px;
  ${'' /* background-color: rgba(250, 250, 250, 1.8); */}
  border-radius: 8px;
  border: rgb(250, 250, 250) 0.2em solid;
  padding: 4px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const ResName = styled.h1`
  display: flex;
  font-size: 16px;
  margin: 0px;
`;

const Infos = styled.p`
  display: flex;
  font-size: 12px;
  margin: 0px;
  padding: 2px;
`;

interface Props {
  place: restaurant[],
  journeyId: string
}

const Restaurants: React.FC<Props> = ({ journeyId, place }) => {
  const [restaurant, setRestaurant] = useState<restaurant[]>([]);

  useEffect(() => {
    setRestaurant(place);
  }, [place]);


  async function handleSubmit( event : eventReact ) {
    event.preventDefault();
    const restaurantInput = {
      name: event.target.name.value,
      address: event.target.address.value,
      cuisineTypes: event.target.cuisineTypes.value,
      suggestedFor: event.target.suggestedFor.value,
    };
    const newRestaurant = await addNewRestaurant(journeyId, restaurantInput);
    console.log(newRestaurant.restaurants);
    setRestaurant(newRestaurant.restaurants);
    event.target.reset();
  }

  function myFunction(event :React.FormEvent<HTMLFormElement>) {
    handleSubmit(event as unknown as eventReact);
}

  async function deleteRestaurant(id: string) {
    await deleteRestaurantById(journeyId, id);
    return setRestaurant((prevState) => {
      return prevState.filter((el) => el._id !== id);
    });
  }

  return (
    <Container>
      <ContainerCard>
        {restaurant &&
          restaurant.map((el) => {
            return (
              <RestaurantCard key={el._id}>
                <ResName>{el.name}</ResName>
                <Infos>{el.address}</Infos>
                <Infos>{el.cuisineTypes}</Infos>
                <Infos>{el.suggestedFor}</Infos>
                <ButtonDelete onClick={() => deleteRestaurant(el._id)}>
                  DELETE
                </ButtonDelete>
              </RestaurantCard>
            );
          })}
      </ContainerCard>
      <Form onSubmit={(ev)=>myFunction(ev)}>
        <Input type='text' name='name' placeholder='Name' required></Input>

        <Input
          type='text'
          name='address'
          placeholder='Address'
          required
        ></Input>

        <Input
          type='text'
          name='cuisineTypes'
          placeholder='Cuisine Type'
          required
        ></Input>

        <Input
          type='text'
          name='suggestedFor'
          placeholder='Suggested for'
        ></Input>
        <Button id = 'create' type='submit'>CREATE</Button>
      </Form>
    </Container>
  );
}

export default Restaurants;
