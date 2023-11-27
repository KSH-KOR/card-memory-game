import bike from "./assets/images/bike.jpg";
import bicycle from "./assets/images/bicycle.jpg";
import bus from "./assets/images/bus.jpg";
import taxi from "./assets/images/taxi.jpg";
import train from "./assets/images/train.jpg";
import subway from "./assets/images/subway.jpg";

import bicycleGetOn from "./assets/images/bicycle_get_on.jpg";
import busGetOn from "./assets/images/bus_get_on.jpg";
import car from "./assets/images/car.jpg";


const cards = [
  { id: 1, name: "bike", displayName: "오토바이", image: bike, type: "image" },
  { id: 2, name: "bike", displayName: "오토바이", image: bike, type: "word" },
  { id: 3, name: "bicycle", displayName: "자전거", image: bicycle, type: "image" },
  { id: 4, name: "bicycle", displayName: "자전거", image: bicycle, type: "word" },
  { id: 5, name: "bus", displayName: "버스", image: bus, type: "image" },
  { id: 6, name: "bus", displayName: "버스", image: bus, type: "word" },
  { id: 7, name: "taxi", displayName: "택시", image: taxi, type: "image" },
  { id: 8, name: "taxi", displayName: "택시", image: taxi, type: "word" },
  { id: 9, name: "train", displayName: "기차", image: train, type: "image" },
  { id: 10, name: "train", displayName: "기차", image: train, type: "word" },
  { id: 11, name: "subway", displayName: "지하철", image: subway, type: "image" },
  { id: 12, name: "subway", displayName: "지하철", image: subway, type: "word" },

  { id: 13, name: "bicycleGetOn", displayName: "자전거를 타다", image: bicycleGetOn, type: "image" },
  { id: 14, name: "bicycleGetOn", displayName: "자전거를 타다", image: bicycleGetOn, type: "word" },

  { id: 15, name: "busGetOn", displayName: "버스를 타다", image: busGetOn, type: "image" },
  { id: 16, name: "busGetOn", displayName: "버스를 타다", image: busGetOn, type: "word" },

  { id: 17, name: "car", displayName: "자동차", image: car, type: "image" },
  { id: 18, name: "car", displayName: "자동차", image: car, type: "word" },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * cards.length),
  isFlipped: false,
}));
