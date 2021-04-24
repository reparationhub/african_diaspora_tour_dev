import { nigeriaSlides } from "./nigeriaSlides";
import { southAmericaSlides } from "./southAmericaSlides";
import { europeSlides } from "./europeSlides";
import { carribeanSlides } from "./carribeanSlides";
import { usaSlides } from "./usaSlides";
import { canadaSlides } from "./candaSlides";
import { eastAfricaSlides } from "./eastAfricaSlides";

const westAfricaSlides = [
  ...nigeriaSlides,
  ...southAmericaSlides,
  ...europeSlides,
  ...carribeanSlides,
  ...usaSlides,
  ...canadaSlides,
];

const eastAfricanSlides = [...eastAfricaSlides];

export const slides = [...westAfricaSlides, ...eastAfricanSlides];
