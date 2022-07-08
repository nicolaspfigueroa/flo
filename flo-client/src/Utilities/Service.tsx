import { Note } from '../interfaces/note';
import { restaurant } from '../interfaces/restaurant'
const baseURL = 'http://localhost:3030/journeys';

//GET JOURNEY
export const getAllJourneys = async () => {
  const res = await fetch(baseURL);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};

//GET JOURNEY/:ID
export const getJourneysById = async (id: string | undefined) => {
  const res = await fetch(baseURL + '/' + id);
  if (res.status < 400) return await res.json();
  return Promise.reject(res);
};

//PUT /journeys/:id/notes
export const addNewNote = async (journeyId: string, note: string) => {
  const res = await fetch(baseURL + `/${journeyId}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ note }),
  });
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};

// DELETE journeys/:journeyId/notes/:id
export const deleteNoteById = async (journeyId: string, id: string) => {
  await fetch(baseURL + `/${journeyId}/notes/${id}`, {
    method: 'PUT',
  });
};

// PUT journeys/:journeyId/restaurants/:id
export const addNewRestaurant = async (journeyId: string, restaurant: any) => {
  const res = await fetch(baseURL + `/${journeyId}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });
  if (res.status < 400) return res.json();
  return Promise.reject(res);
};

//DELETE journeys/:journeyId/restaurants/:id
export const deleteRestaurantById = async (journeyId: string, id: string) => {
  await fetch(baseURL + `/${journeyId}/restaurants/${id}`, {
    method: 'PUT',
  });
};
