import nausicaaPoster from "./posters/nausicaa.jpg";
import laputaPoster from "./posters/laputa.jpg";
import totoroPoster from "./posters/totoro.jpg";
import kikiPoster from "./posters/kiki.jpg";
import mononokePoster from "./posters/mononoke.jpg";
import spiritedPoster from "./posters/spirited.jpg";
import howlsPoster from "./posters/howls.jpg";
import ponyoPoster from "./posters/ponyo.jpg";

const IMDB_URL = "https://www.imdb.com/title/";

export const movieList = [
  {
    title: "Nausicaä of the Valley of the Wind",
    poster: nausicaaPoster,
    synopsis:
      "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    releaseYear: "1984",
    rated: "PG",
    duration: "1h 57m",
    imdb: `${IMDB_URL}tt0087544`,
    reviews: [
      {
        name: "Tori",
        stars: "★★★★★",
        content: "Amazing movie!"
      }
    ]
  },
  {
    title: "Castle in the Sky",
    poster: laputaPoster,
    synopsis:
      "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    releaseYear: "1986",
    rated: "PG",
    duration: "2h 5m",
    imdb: `${IMDB_URL}tt0092067`,
    reviews: []
  },
  {
    title: "My Neighbor Totoro",
    poster: totoroPoster,
    synopsis:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    releaseYear: "1988",
    rated: "G",
    duration: "1h 26m",
    imdb: `${IMDB_URL}tt0096283`,
    reviews: []
  },
  {
    title: "Kiki's Delivery Service",
    poster: kikiPoster,
    synopsis:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    releaseYear: "1989",
    rated: "G",
    duration: "1h 43m",
    imdb: `${IMDB_URL}tt0097814`,
    reviews: []
  },
  {
    title: "Princess Mononoke",
    poster: mononokePoster,
    synopsis:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    releaseYear: "1997",
    rated: "PG-13",
    duration: "2h 14m",
    imdb: `${IMDB_URL}tt0119698`,
    reviews: []
  },
  {
    title: "Spirited Away",
    poster: spiritedPoster,
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
    releaseYear: "2001",
    rated: "PG",
    duration: "2h 5m",
    imdb: `${IMDB_URL}tt0245429`,
    reviews: []
  },
  {
    title: "Howl's Moving Castle",
    poster: howlsPoster,
    synopsis:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    releaseYear: "2004",
    rated: "PG",
    duration: "1h 59m",
    imdb: `${IMDB_URL}tt0347149`,
    reviews: []
  },
  {
    title: "Ponyo",
    poster: ponyoPoster,
    synopsis:
      "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
    releaseYear: "2008",
    rated: "G",
    duration: "1h 41m",
    imdb: `${IMDB_URL}tt0876563`,
    reviews: []
  }
]

export default {movieList}