let screenWidth =
  typeof window !== "undefined" ? window.innerWidth : global.innerWidth;
let isHd = screenWidth >= 1900 ? true : false;

export const indonesiaSlides = [
  {
    tourId: 4,
    type: "stop",
    slidePosition: "left",
    mapState: {
      dark: 0.8,
      zoom: 1.6,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -750 : -1030, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "",
    title: "3RD STOP",
    description: (
      <span>
        Let’s find out how the Indonesian population in South Africa came about
        as a result of slavery. Click on the map of{" "}
        <span className="highlighted">Indonesia</span> to proceed.
      </span>
    ),
  },

  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.5,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -720 : -1000, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/1.jpg",
    description: (
      <span>
        Previously mentioned, the Dutch East India Company (VOC) founded and
        established a colony at the Cape of Good Hope, as a resupply station for
        ships travelling between Europe and Asia, which developed into the city
        of Cape Town. The Dutch had also colonized the Dutch East Indies
        (present-day Indonesia).
      </span>
    ),
  },

  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.4,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -690 : -970, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/2.jpg",
    description: (
      <span>
        Slave trading was widely carried out during the Dutch colonial period in
        Indonesia. Especially in North Sumatra, human trading for plantation
        workers, known as coolies, was widely practiced.
      </span>
    ),
  },
  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.3,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -660 : -940, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/3.jpg",
    description: (
      <span>
        The Cape Malay community's earliest members were enslaved Javanese
        transported by the Dutch East India Company to the Cape. The Javanese
        people are an ethnic group native to the Indonesian island of Java. With
        approximately 100 million people they form the largest ethnic group in
        Indonesia.
      </span>
    ),
  },
  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.2,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -630 : -910, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/4.jpg",
    description: (
      <span>
        The slaves from Indonesia tended to work in semi-skilled and domestic
        roles, and they made up a disproportionate share of 18th century
        manumissions, who subsequently settled in Bo-Kaap.
      </span>
    ),
  },

  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.1,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -600 : -880, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/5.jpg",
    description: (
      <span>
        An Indonesian slave, Leander van Boegies (he was a member of the
        Buginese tribe in Sulawesi), was the founder around 1730 of a colony of
        runaway slaves at the southeastern tip of False Bay, where Pringle Bay
        is today. The colony existed for about a century and researchers believe
        many of the inhabitants of neighbouring Kleinmond, Hawston and
        Fisherhaven are among their descendants.
      </span>
    ),
  },
  {
    tourId: 4,
    type: "story",
    slidePosition: "left",
    name: "indonesia-slide",
    mapState: {
      dark: 0.8,
      zoom: 1.0,
      freezed: true,
      blur: 4,
      position: { x: isHd ? -570 : -850, y: -200 },
    },
    flags: [],
    locations: [21],
    darkStories: [18],
    funFacts: [15],
    image: "/assets/images/slide-indonesia/6.jpg",
    description: (
      <span>
        Most of the Indonesian exiles and all the 60 000 slaves from the Indian
        subcontinent, Indonesia, Malaysia, Madagascar and Africa brought to the
        Cape left descendants on African soil and their DNA is in many of us.
      </span>
    ),
  },
];
