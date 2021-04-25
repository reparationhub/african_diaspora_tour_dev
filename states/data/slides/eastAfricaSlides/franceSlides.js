export const franceSlides = [
  {
    tourId: 3,
    type: "stop",
    title: "1ST STOP",
    description: (
      <span>
        Click on the map of <span className="highlighted">France</span> to see
        how africans disappeared into the diaspora.
      </span>
    ),
    mapState: {
      dark: 0.7,
      zoom: 1.5,
      freezed: true,
      blur: 4,
      position: { x: 280, y: 200 },
    },
    locations: [13],
    darkStories: [],
    funFacts: [],
    flags: [],
  },
  ,
  {
    tourId: 3,
    type: "story",
    name: "france",
    mapState: {
      dark: 0.8,
      zoom: 1.5,
      freezed: true,
      blur: 4,
      position: { x: -500, y: -80 },
    },
    flags: [],
    locations: [10],
    darkStories: [],
    funFacts: [],
    image: "/assets/images/slide-eastafrica/1.png",
    title: "",
    description: (
      <span>
        Slavery in the East Africa has a long history, beginning in the ancient
        Nubian and ancient Egyptian times and continuing up to the present.
        Prisoners of war were a regular occurrence in the ancient Nile Valley
        and Africa.
        <br />
        <br />
        During times of conquest and after winning battles, the
        ancient Egyptian were taken as slaves by the ancient nubians . In turn,
        the ancient Nubians took slaves after winning battles with the Libyans,
        Canaanites, and Egyptians.
      </span>
    ),
  },
];
