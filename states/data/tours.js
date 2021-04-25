export const tours = [
  {
    id: 1,
    name: "North African Tour",
    available: false,
  },
  {
    id: 2,
    name: "West African Tour",
    locations: [1, 2, 7, 6, 8, 5],
    funFacts: [1, 2, 3, 4, 5, 6],
    darkStories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    startButtons: [2],
    mapState: {
      zoom: 1,
      position: { x: 0, y: 0 },
      dark: 0.5,
      blur: 0,
      freezed: false,
    },
    available: true,
  },
  {
    id: 3,
    name: "East African Tour",
    locations: [10, 13, 14, 15],
    funFacts: [],
    darkStories: [],
    startButtons: [3],
    mapState: {
      zoom: 1,
      position: { x: 0, y: 0 },
      dark: 0.5,
      blur: 0,
      freezed: false,
    },
    available: true,
  },
  {
    id: 4,
    name: "South African Tour",
    availabel: false,
  },
];
