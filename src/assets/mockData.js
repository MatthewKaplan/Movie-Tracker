const popularMovies = [
  {
    vote_count: 5113,
    id: 299534,
    video: false,
    vote_average: 8.6,
    title: "Avengers: Endgame",
    popularity: 311.829,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    original_language: "en",
    original_title: "Avengers: Endgame",
    genre_ids: [12, 878, 28],
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    adult: false,
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    release_date: "2019-04-24"
  }
];

const popularShows = [
  {
    original_name: "Game of Thrones",
    genre_ids: [18, 10759, 10765],
    name: "Game of Thrones",
    popularity: 737.954,
    origin_country: ["US"],
    vote_count: 5811,
    first_air_date: "2011-04-17",
    backdrop_path: "/qsD5OHqW7DSnaQ2afwz8Ptht1Xb.jpg",
    original_language: "en",
    id: 1399,
    vote_average: 8.2,
    overview:
      "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
  }
];

const upcomingMovies = [
  {
    vote_count: 314,
    id: 447404,
    video: false,
    vote_average: 7.1,
    title: "Pokémon Detective Pikachu",
    popularity: 224.973,
    poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
    original_language: "en",
    original_title: "Pokémon Detective Pikachu",
    genre_ids: [9648, 10751, 80, 14, 35, 878],
    backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
    adult: false,
    overview:
      "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
    release_date: "2019-05-03"
  }
];

const newsResults = [
  {
    section: "Obituaries",
    subsection: "",
    title: "Doris Day, Movie Star Who Charmed America, Dies at 97",
    abstract:
      "From the perky girl next door in the 1950s to the woman next door in 1960s sex comedies, Ms. Day was the most popular film actress since Shirley Temple.",
    url: "https://www.nytimes.com/2019/05/13/obituaries/doris-day-death.html",
    byline: "By ALJEAN HARMETZ",
    item_type: "Article",
    updated_date: "2019-05-13T13:02:45-04:00",
    created_date: "2019-05-13T09:47:02-04:00",
    published_date: "2019-05-13T09:47:02-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Deaths (Obituaries)",
      "Movies",
      "Actors and Actresses",
      "Music",
      "Animal Abuse, Rights and Welfare"
    ],
    org_facet: [],
    per_facet: ["Day, Doris"],
    geo_facet: [],
    multimedia: [],
    short_url: "https://nyti.ms/30gh4WW"
  }
];

const genreResults = [
  {
    vote_count: 1110,
    id: 429197,
    video: false,
    vote_average: 7.1,
    title: "Vice",
    popularity: 34.671,
    poster_path: "/1gCab6rNv1r6V64cwsU4oEr649Y.jpg",
    original_language: "en",
    original_title: "Vice",
    genre_ids: [18, 36, 35],
    backdrop_path: "/7TTlvADXSxg0yzlGTZFExmw4TSC.jpg",
    adult: false,
    overview:
      "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
    release_date: "2018-12-25"
  }
];

const searchResults = [
  {
    vote_count: 318,
    id: 10163,
    video: false,
    vote_average: 5.4,
    title: "The Lawnmower Man",
    popularity: 29.107,
    poster_path: "/3tWLM3zMyh3KZOactn8mfjHml05.jpg",
    original_language: "en",
    original_title: "The Lawnmower Man",
    genre_ids: [27, 53, 878],
    backdrop_path: "/fXCoMFPV7PSwNBZb02SPRFRp7T4.jpg",
    adult: false,
    overview:
      "A simple man is turned into a genius through the application of computer science.",
    release_date: "1992-03-05"
  }
];

module.exports = {
  popularMovies,
  popularShows,
  upcomingMovies,
  newsResults,
  genreResults,
  searchResults
};
