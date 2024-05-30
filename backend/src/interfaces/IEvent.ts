import { Date } from "mongoose";
import { ObjectId } from "mongodb";

// interface Location {
//   type: "Point";
//   coordinates: [number, number];
// }

// type AgeRange =
//   | "18-25"
//   | "25-35"
//   | "35-45"
//   | "45-55"
//   | "55-65"
//   | "65+"
//   | "18+"
//   | string;

export interface IEvent {
  _id: ObjectId;
  activity: string;
  user_id: ObjectId;
  // start_time: Date;
  // end_time: Date;
  location: string;
  equipment: string;
  age: string;
  totalParticipant: number;
  participantsMin: number;
  participantsMax: number;
  participants: ObjectId[];
  message: string;
  lat: number;
  lon: number;
  venue: "Inomhus" | "Utomhus" | "Online";
  gender: "female" | "male" | "other";
  language: "svenska" | "engelska";
  price: number;
  experience: "nybörjare" | "mellanliggande" | "avancerad";
}
