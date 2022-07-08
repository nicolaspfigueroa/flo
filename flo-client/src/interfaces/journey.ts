import { Note } from './note';
import { stage } from './stage';
import { restaurant } from './restaurant';

export interface journey {
  coordinates: {
    lat: number,
    lng: number
  },
  coverImg: string,
  durationInDays: number,
  title: string,
  _id: string,
  accomodation: string,
  stages: stage[],
  restaurants: restaurant[],
  notes: Note[]
}