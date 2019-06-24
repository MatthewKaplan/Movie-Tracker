const popularMovies = [
  {
    vote_count: 666,
    id: 320288,
    video: false,
    vote_average: 6.2,
    title: "Dark Phoenix",
    popularity: 279.446,
    poster_path: "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
    original_language: "en",
    original_title: "Dark Phoenix",
    genre_ids: [878, 28],
    backdrop_path: "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
    adult: false,
    overview:
      "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    release_date: "2019-06-05",
    favorited: false
  },
  {
    vote_count: 15,
    id: 532321,
    video: false,
    vote_average: 5,
    title: "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow",
    popularity: 276.852,
    poster_path: "/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
    original_language: "ja",
    original_title: "Re:ゼロから始める異世界生活 Memory Snow",
    genre_ids: [16, 12],
    backdrop_path: "/8sNz2DxYiYqGkxk66U8BqvuZZjE.jpg",
    adult: false,
    overview:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    release_date: "2018-10-06",
    favorited: false
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
    favorited: false,
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
    favorited: false,
    adult: false,
    overview:
      "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
    release_date: "2019-05-03"
  }
];

const mockSingleMovie = {
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
  favorited: false,
  adult: false,
  overview:
    "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
  release_date: "2019-05-03"
};

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
    favorited: false,
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
    favorited: false,
    adult: false,
    overview:
      "A simple man is turned into a genius through the application of computer science.",
    release_date: "1992-03-05"
  }
];

const favoritedMoviesArr = [
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
    favorited: true,
    adult: false,
    overview:
      "A simple man is turned into a genius through the application of computer science.",
    release_date: "1992-03-05"
  }
];

const favoritedMovies = {
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
  favorited: false,
  adult: false,
  overview:
    "A simple man is turned into a genius through the application of computer science.",
  release_date: "1992-03-05"
};

const notFavoritedMovie = [
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
    favorited: false,
    adult: false,
    overview:
      "A simple man is turned into a genius through the application of computer science.",
    release_date: "1992-03-05"
  }
];

const filteredMovie = [
  {
    vote_count: 666,
    id: 320288,
    video: false,
    vote_average: 6.2,
    title: "Dark Phoenix",
    popularity: 279.446,
    poster_path: "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
    original_language: "en",
    original_title: "Dark Phoenix",
    genre_ids: [878, 28],
    backdrop_path: "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
    adult: false,
    overview:
      "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    release_date: "2019-06-05",
    favorited: false
  },
  {
    vote_count: 15,
    id: 532321,
    video: false,
    vote_average: 5,
    title: "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow",
    popularity: 276.852,
    poster_path: "/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
    original_language: "ja",
    original_title: "Re:ゼロから始める異世界生活 Memory Snow",
    genre_ids: [16, 12],
    backdrop_path: "/8sNz2DxYiYqGkxk66U8BqvuZZjE.jpg",
    adult: false,
    overview:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    release_date: "2018-10-06",
    favorited: false
  }
];

const mockNewsResults = [
  {
    section: "Movies",
    subsection: "",
    title: "‘Men in Black: International’ Review: A Case of the Blahs",
    abstract:
      "The fourth installment in this decades-old franchise sputters (while you groan), despite its inherently watchable leads.",
    url:
      "https://www.nytimes.com/2019/06/12/movies/men-in-black-international-review.html",
    byline: "By MANOHLA DARGIS",
    item_type: "Article",
    updated_date: "2019-06-14T00:31:23-04:00",
    created_date: "2019-06-12T17:21:13-04:00",
    published_date: "2019-06-12T17:21:13-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Men in Black: International (Movie)"],
    org_facet: [],
    per_facet: [
      "Hemsworth, Chris",
      "Thompson, Tessa",
      "Neeson, Liam",
      "Gray, F Gary"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14meninblack-1/00meninblack-1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in &ldquo;Men in Black: International.&rdquo;",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14meninblack-1/00meninblack-1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in &ldquo;Men in Black: International.&rdquo;",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14meninblack-1/merlin_156054540_2486747b-7ac0-4b1c-b898-d4ab4199fef8-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in &ldquo;Men in Black: International.&rdquo;",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14meninblack-1/merlin_156054540_2486747b-7ac0-4b1c-b898-d4ab4199fef8-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in &ldquo;Men in Black: International.&rdquo;",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14meninblack-1/merlin_156054540_2486747b-7ac0-4b1c-b898-d4ab4199fef8-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in &ldquo;Men in Black: International.&rdquo;",
        copyright: "Giles Keyte/Columbia Pictures"
      }
    ],
    short_url: "https://nyti.ms/2ZrWH81"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘The Dead Don’t Die’ Review: Zombies Gobbling Up Scraps of Pop Culture",
    abstract:
      "Jim Jarmusch’s movie, starring Bill Murray, Adam Driver, Tilda Swinton and a bunch of other interesting people, respects the genre without committing to it.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/the-dead-dont-die-review.html",
    byline: "By A.O. SCOTT",
    item_type: "Article",
    updated_date: "2019-06-14T06:58:21-04:00",
    created_date: "2019-06-13T13:56:10-04:00",
    published_date: "2019-06-13T13:56:10-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["The Dead Don't Die (Movie)", "Movies"],
    org_facet: [],
    per_facet: [
      "Jarmusch, Jim",
      "Driver, Adam",
      "Murray, Bill",
      "Swinton, Tilda",
      "Gomez, Selena",
      "Sevigny, Chloe",
      "Buscemi, Steve",
      "Glover, Danny",
      "Perez, Rosie",
      "Waits, Tom",
      "Simpson, Sturgill"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13deaddontdie-1/13deaddontdie-1-thumbStandard-v2.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Murray, Chloë Sevigny and Adam Driver in “The Dead Don’t Die.”",
        copyright: "Abbot Genser/Focus Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13deaddontdie-1/13deaddontdie-1-thumbLarge-v2.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Murray, Chloë Sevigny and Adam Driver in “The Dead Don’t Die.”",
        copyright: "Abbot Genser/Focus Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13deaddontdie-1/13deaddontdie-1-articleInline-v2.jpg",
        format: "Normal",
        height: 126,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Murray, Chloë Sevigny and Adam Driver in “The Dead Don’t Die.”",
        copyright: "Abbot Genser/Focus Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13deaddontdie-1/13deaddontdie-1-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Murray, Chloë Sevigny and Adam Driver in “The Dead Don’t Die.”",
        copyright: "Abbot Genser/Focus Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13deaddontdie-1/13deaddontdie-1-superJumbo-v2.jpg",
        format: "superJumbo",
        height: 1363,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Murray, Chloë Sevigny and Adam Driver in “The Dead Don’t Die.”",
        copyright: "Abbot Genser/Focus Features"
      }
    ],
    short_url: "https://nyti.ms/2X9NNhS"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Men in Black: International’ Leads a Parade of Slumping Sequels",
    abstract: "Warner Bros.’s “Shaft” sequel also disappointed this weekend.",
    url:
      "https://www.nytimes.com/2019/06/16/movies/men-in-black-international-box-office.html",
    byline: "By GABE COHN",
    item_type: "Article",
    updated_date: "2019-06-16T22:48:02-04:00",
    created_date: "2019-06-16T13:54:35-04:00",
    published_date: "2019-06-16T13:54:35-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Movies",
      "Men in Black (Movie)",
      "Shaft (Movie)",
      "Dark Phoenix (Movie)"
    ],
    org_facet: [],
    per_facet: ["Thompson, Tessa", "Hemsworth, Chris"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16box-office/merlin_156054531_184061b2-d335-4982-9f2f-8e03056dd11e-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in “Men in Black: International.”",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16box-office/merlin_156054531_184061b2-d335-4982-9f2f-8e03056dd11e-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in “Men in Black: International.”",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16box-office/merlin_156054531_184061b2-d335-4982-9f2f-8e03056dd11e-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in “Men in Black: International.”",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16box-office/merlin_156054531_184061b2-d335-4982-9f2f-8e03056dd11e-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in “Men in Black: International.”",
        copyright: "Giles Keyte/Columbia Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16box-office/merlin_156054531_184061b2-d335-4982-9f2f-8e03056dd11e-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Tessa Thompson and Chris Hemsworth in “Men in Black: International.”",
        copyright: "Giles Keyte/Columbia Pictures"
      }
    ],
    short_url: "https://nyti.ms/2RgBKde"
  },
  {
    section: "Movies",
    subsection: "",
    title: "Review: I’m Talking About ‘Shaft.’ Yes, Again.",
    abstract:
      "How did a bad mother (shut your mouth) turn into a bad dad joke?",
    url: "https://www.nytimes.com/2019/06/13/movies/shaft-review.html",
    byline: "By A.O. SCOTT",
    item_type: "Article",
    updated_date: "2019-06-14T00:31:53-04:00",
    created_date: "2019-06-13T11:41:36-04:00",
    published_date: "2019-06-13T11:41:36-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Shaft (Movie)"],
    org_facet: [],
    per_facet: [
      "Jackson, Samuel L",
      "Roundtree, Richard",
      "Usher, Jessie T",
      "Story, Tim"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13shaft1/13shaft1-thumbStandard-v2.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Jessie T. Usher, Samuel L. Jackson and Richard Roundtree as three generations of John Shafts.",
        copyright: "Kyle Kaplan/Warner Bros."
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13shaft1/13shaft1-thumbLarge-v2.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Jessie T. Usher, Samuel L. Jackson and Richard Roundtree as three generations of John Shafts.",
        copyright: "Kyle Kaplan/Warner Bros."
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13shaft1/13shaft1-articleInline-v2.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Jessie T. Usher, Samuel L. Jackson and Richard Roundtree as three generations of John Shafts.",
        copyright: "Kyle Kaplan/Warner Bros."
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13shaft1/13shaft1-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Jessie T. Usher, Samuel L. Jackson and Richard Roundtree as three generations of John Shafts.",
        copyright: "Kyle Kaplan/Warner Bros."
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13shaft1/13shaft1-superJumbo-v2.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Jessie T. Usher, Samuel L. Jackson and Richard Roundtree as three generations of John Shafts.",
        copyright: "Kyle Kaplan/Warner Bros."
      }
    ],
    short_url: "https://nyti.ms/2RhsuWb"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Rolling Thunder’ Review: A New Ballad of Bob, Sung by Marty",
    abstract:
      "In his new documentary, Martin Scorsese revisits a famous Bob Dylan tour that included Joan Baez and Allen Ginsberg.",
    url:
      "https://www.nytimes.com/2019/06/11/movies/rolling-thunder-bob-dylan-martin-scorsese-review.html",
    byline: "By MANOHLA DARGIS",
    item_type: "Article",
    updated_date: "2019-06-12T21:30:19-04:00",
    created_date: "2019-06-11T13:47:21-04:00",
    published_date: "2019-06-11T13:47:21-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Music",
      "Movies",
      "Documentary Films and Programs",
      "Rolling Thunder Revue: A Bob Dylan Story by Martin Scorsese (Movie)"
    ],
    org_facet: [],
    per_facet: ["Baez, Joan", "Dylan, Bob", "Scorsese, Martin"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/11rollingthunder-1/11rollingthunder-1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Troubadours: Joan Baez and Bob Dylan in “Rolling Thunder Revue.”",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/11rollingthunder-1/11rollingthunder-1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Troubadours: Joan Baez and Bob Dylan in “Rolling Thunder Revue.”",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/11rollingthunder-1/merlin_156053538_f95b5ddb-9df9-4342-b390-738f5be330bb-articleInline.jpg",
        format: "Normal",
        height: 129,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Troubadours: Joan Baez and Bob Dylan in “Rolling Thunder Revue.”",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/11rollingthunder-1/11rollingthunder-1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Troubadours: Joan Baez and Bob Dylan in “Rolling Thunder Revue.”",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/11rollingthunder-1/merlin_156053538_f95b5ddb-9df9-4342-b390-738f5be330bb-superJumbo.jpg",
        format: "superJumbo",
        height: 1389,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Troubadours: Joan Baez and Bob Dylan in “Rolling Thunder Revue.”",
        copyright: "Ken Regan, via Netflix"
      }
    ],
    short_url: "https://nyti.ms/2IDYNeb"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "Watch Emma Thompson and Mindy Kaling Go Head to Head in ‘Late Night’",
    abstract: "The director Nisha Ganatra narrates a scene from the comedy.",
    url: "https://www.nytimes.com/2019/06/14/movies/late-night-clip.html",
    byline: "",
    item_type: "Article",
    updated_date: "2019-06-14T07:03:01-04:00",
    created_date: "2019-06-14T07:03:01-04:00",
    published_date: "2019-06-14T07:03:01-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Late Night (Movie)"],
    org_facet: [],
    per_facet: ["Thompson, Emma", "Kaling, Mindy", "Ganatra, Nisha"],
    geo_facet: [],
    multimedia: [],
    short_url: "https://nyti.ms/2KikUtJ"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "Elton John and Bernie Taupin on How ‘Rocketman’ Captures an R-Rated Life",
    abstract:
      "The pop star’s friendship with his lyricist is a major focus of the biopic. For years, they each tried not looking back.",
    url: "https://www.nytimes.com/2019/06/12/movies/elton-john-rocketman.html",
    byline: "By MELENA RYZIK",
    item_type: "Article",
    updated_date: "2019-06-13T12:58:52-04:00",
    created_date: "2019-06-12T13:47:20-04:00",
    published_date: "2019-06-12T13:47:20-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Pop and Rock Music", "Movies", "Rocketman (Movie)"],
    org_facet: [],
    per_facet: ["Taupin, Bernie", "John, Elton"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12ELTON-JOHN2/12ELTON-JOHN2-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Bernie Taupin, left, and Elton John circa 1971 in London. The lyricist and songwriter’s long partnership began by chance — after both answered an ad in a British music magazine.",
        copyright: "Michael Ochs Archives, via Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12ELTON-JOHN2/12ELTON-JOHN2-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Bernie Taupin, left, and Elton John circa 1971 in London. The lyricist and songwriter’s long partnership began by chance — after both answered an ad in a British music magazine.",
        copyright: "Michael Ochs Archives, via Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12ELTON-JOHN2/12ELTON-JOHN2-articleInline.jpg",
        format: "Normal",
        height: 251,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Bernie Taupin, left, and Elton John circa 1971 in London. The lyricist and songwriter’s long partnership began by chance — after both answered an ad in a British music magazine.",
        copyright: "Michael Ochs Archives, via Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12ELTON-JOHN2/12ELTON-JOHN2-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Bernie Taupin, left, and Elton John circa 1971 in London. The lyricist and songwriter’s long partnership began by chance — after both answered an ad in a British music magazine.",
        copyright: "Michael Ochs Archives, via Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12ELTON-JOHN2/12ELTON-JOHN2-superJumbo.jpg",
        format: "superJumbo",
        height: 2048,
        width: 1549,
        type: "image",
        subtype: "photo",
        caption:
          "Bernie Taupin, left, and Elton John circa 1971 in London. The lyricist and songwriter’s long partnership began by chance — after both answered an ad in a British music magazine.",
        copyright: "Michael Ochs Archives, via Getty Images"
      }
    ],
    short_url: "https://nyti.ms/2XaQ0cM"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "In ‘Toy Story 4,’ the Animators Pulling the Strings Reveal Woody’s Inner Life",
    abstract:
      "Computerized micro-tweaks to facial expressions and movements are as finely coordinated as a central nervous system and shaded with emotion.",
    url: "https://www.nytimes.com/2019/06/14/movies/toy-story-4-woody.html",
    byline: "By DARRYN KING",
    item_type: "Article",
    updated_date: "2019-06-15T19:16:02-04:00",
    created_date: "2019-06-14T05:00:15-04:00",
    published_date: "2019-06-14T05:00:15-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Animated Films", "Toy Story 4 (Movie)", "Movies"],
    org_facet: [],
    per_facet: ["Docter, Pete", "Sweetland, Doug"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16toystory-woody/16toystory-woody-thumbStandard-v2.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Sheriff Woody, voiced by Tom Hanks, and Forky (Tony Hale), a distressed former craft project, in “Toy Story 4.” Animators see the multifaceted Woody as a character with rich potential.",
        copyright: "Pixar/Disney"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16toystory-woody/16toystory-woody-thumbLarge-v2.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Sheriff Woody, voiced by Tom Hanks, and Forky (Tony Hale), a distressed former craft project, in “Toy Story 4.” Animators see the multifaceted Woody as a character with rich potential.",
        copyright: "Pixar/Disney"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16toystory-woody/16toystory-woody-articleInline.jpg",
        format: "Normal",
        height: 80,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Sheriff Woody, voiced by Tom Hanks, and Forky (Tony Hale), a distressed former craft project, in “Toy Story 4.” Animators see the multifaceted Woody as a character with rich potential.",
        copyright: "Pixar/Disney"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16toystory-woody/16toystory-woody-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Sheriff Woody, voiced by Tom Hanks, and Forky (Tony Hale), a distressed former craft project, in “Toy Story 4.” Animators see the multifaceted Woody as a character with rich potential.",
        copyright: "Pixar/Disney"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16toystory-woody/16toystory-woody-superJumbo.jpg",
        format: "superJumbo",
        height: 858,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Sheriff Woody, voiced by Tom Hanks, and Forky (Tony Hale), a distressed former craft project, in “Toy Story 4.” Animators see the multifaceted Woody as a character with rich potential.",
        copyright: "Pixar/Disney"
      }
    ],
    short_url: "https://nyti.ms/2XTUOkd"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Murder Mystery’ Review: A Whodunit on the High Seas",
    abstract:
      "Jennifer Aniston and Adam Sandler reunite for what plays like an updated but sluggish version of “Clue.”",
    url:
      "https://www.nytimes.com/2019/06/14/movies/murder-mystery-review-a-whodunit-on-the-high-seas.html",
    byline: "By ELISABETH VINCENTELLI",
    item_type: "Article",
    updated_date: "2019-06-14T05:00:09-04:00",
    created_date: "2019-06-14T05:00:09-04:00",
    published_date: "2019-06-14T05:00:09-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Murder Mystery (Movie)"],
    org_facet: ["Netflix Inc"],
    per_facet: ["Aniston, Jennifer", "Sandler, Adam"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14murder-mystery/14murder-mystery-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Luke Evans, Adam Sandler and Jennifer Aniston in the Netflix film &ldquo;Murder Mystery.&rdquo;",
        copyright: "Scott Yamano/Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14murder-mystery/14murder-mystery-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Luke Evans, Adam Sandler and Jennifer Aniston in the Netflix film &ldquo;Murder Mystery.&rdquo;",
        copyright: "Scott Yamano/Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14murder-mystery/14murder-mystery-articleInline.jpg",
        format: "Normal",
        height: 139,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Luke Evans, Adam Sandler and Jennifer Aniston in the Netflix film &ldquo;Murder Mystery.&rdquo;",
        copyright: "Scott Yamano/Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14murder-mystery/14murder-mystery-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Luke Evans, Adam Sandler and Jennifer Aniston in the Netflix film &ldquo;Murder Mystery.&rdquo;",
        copyright: "Scott Yamano/Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14murder-mystery/5da11389a9aa4d839950a1aa13fdc654-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "From left, Luke Evans, Adam Sandler and Jennifer Aniston in the Netflix film &ldquo;Murder Mystery.&rdquo;",
        copyright: "Scott Yamano/Netflix"
      }
    ],
    short_url: "https://nyti.ms/2XeMo9N"
  },
  {
    section: "Business",
    subsection: "Media",
    title: "J.J. Abrams Said to Be Near $500 Million Deal With WarnerMedia",
    abstract:
      "WarnerMedia will get a first look at projects developed by the media company run by Mr. Abrams and his wife, which made hits like “Star Trek Beyond.”",
    url:
      "https://www.nytimes.com/2019/06/17/business/media/jj-abrams-warnermedia.html",
    byline: "By BROOKS BARNES and JOHN KOBLIN",
    item_type: "Article",
    updated_date: "2019-06-18T00:25:02-04:00",
    created_date: "2019-06-17T16:56:53-04:00",
    published_date: "2019-06-17T16:56:53-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Movies",
      "Television",
      "Video Recordings, Downloads and Streaming"
    ],
    org_facet: ["Warner Media LLC", "AT&T Inc"],
    per_facet: ["Abrams, J J"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/business/17ABRAMS-01/17ABRAMS-01-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "J.J. Abrams runs the media company Bad Robot with Katie McGrath, his wife. They are negotiating a streaming deal with WarnerMedia.",
        copyright: "Tony Avelar/Associated Press"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/business/17ABRAMS-01/17ABRAMS-01-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "J.J. Abrams runs the media company Bad Robot with Katie McGrath, his wife. They are negotiating a streaming deal with WarnerMedia.",
        copyright: "Tony Avelar/Associated Press"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/business/17ABRAMS-01/merlin_156598293_b53708b1-af89-45e8-8838-109433a7b9b5-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "J.J. Abrams runs the media company Bad Robot with Katie McGrath, his wife. They are negotiating a streaming deal with WarnerMedia.",
        copyright: "Tony Avelar/Associated Press"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/business/17ABRAMS-01/merlin_156598293_b53708b1-af89-45e8-8838-109433a7b9b5-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "J.J. Abrams runs the media company Bad Robot with Katie McGrath, his wife. They are negotiating a streaming deal with WarnerMedia.",
        copyright: "Tony Avelar/Associated Press"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/business/17ABRAMS-01/merlin_156598293_b53708b1-af89-45e8-8838-109433a7b9b5-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "J.J. Abrams runs the media company Bad Robot with Katie McGrath, his wife. They are negotiating a streaming deal with WarnerMedia.",
        copyright: "Tony Avelar/Associated Press"
      }
    ],
    short_url: "https://nyti.ms/2WJrw6d"
  },
  {
    section: "Movies",
    subsection: "",
    title: "Goodbye Yellow Lycra: See Elton John’s ‘Rocketman’ Looks Up Close",
    abstract:
      "The costume designer Julian Day didn’t simply copy the star’s outfits over the years (or those glasses — dozens of pairs were crafted for the film).",
    url:
      "https://www.nytimes.com/2019/06/17/movies/rocketman-elton-john-costumes.html",
    byline: "By RACHEL LEE HARRIS",
    item_type: "Article",
    updated_date: "2019-06-17T16:22:04-04:00",
    created_date: "2019-06-17T16:22:04-04:00",
    published_date: "2019-06-17T16:22:04-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Costumes", "Pop and Rock Music"],
    org_facet: [],
    per_facet: ["John, Elton", "Day, Julian (Costume Designer)"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14rocketman-costumes1/14rocketman-costumes1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Taron Egerton as Elton John in “Rocketman.”",
        copyright: "Gavin Bond/Paramount Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14rocketman-costumes1/14rocketman-costumes1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Taron Egerton as Elton John in “Rocketman.”",
        copyright: "Gavin Bond/Paramount Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14rocketman-costumes1/merlin_156261516_90ffa865-66d9-48c9-9ad7-d502cb9bf011-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Taron Egerton as Elton John in “Rocketman.”",
        copyright: "Gavin Bond/Paramount Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14rocketman-costumes1/merlin_156261516_90ffa865-66d9-48c9-9ad7-d502cb9bf011-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Taron Egerton as Elton John in “Rocketman.”",
        copyright: "Gavin Bond/Paramount Pictures"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14rocketman-costumes1/merlin_156261516_90ffa865-66d9-48c9-9ad7-d502cb9bf011-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Taron Egerton as Elton John in “Rocketman.”",
        copyright: "Gavin Bond/Paramount Pictures"
      }
    ],
    short_url: "https://nyti.ms/2Kn9Xal"
  },
  {
    section: "Books",
    subsection: "",
    title: "‘The Hunger Games’ Prequel Is in the Works",
    abstract:
      "Suzanne Collins’s dystopian trilogy about children fighting to the death, later adapted as a series of blockbuster movies, is getting a prequel.",
    url: "https://www.nytimes.com/2019/06/17/books/hunger-games-prequel.html",
    byline: "By ALEXANDRA ALTER",
    item_type: "Article",
    updated_date: "2019-06-17T16:26:28-04:00",
    created_date: "2019-06-17T10:45:12-04:00",
    published_date: "2019-06-17T10:45:12-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Books and Literature", "The Hunger Games (Movie)"],
    org_facet: [],
    per_facet: ["Collins, Suzanne (1962- )"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/books/17Hungergames/17Hungergames-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Suzanne Collins, right, has not announced the title of her prequel to “The Hunger Games,” scheduled for release next year.",
        copyright:
          "Scholastic, via Associated Press; Jason Merritt/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/books/17Hungergames/17Hungergames-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Suzanne Collins, right, has not announced the title of her prequel to “The Hunger Games,” scheduled for release next year.",
        copyright:
          "Scholastic, via Associated Press; Jason Merritt/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/books/17Hungergames/03a0642609774b7ba7a44e3c5eab621a-articleInline.jpg",
        format: "Normal",
        height: 139,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Suzanne Collins, right, has not announced the title of her prequel to “The Hunger Games,” scheduled for release next year.",
        copyright:
          "Scholastic, via Associated Press; Jason Merritt/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/books/17Hungergames/17Hungergames-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Suzanne Collins, right, has not announced the title of her prequel to “The Hunger Games,” scheduled for release next year.",
        copyright:
          "Scholastic, via Associated Press; Jason Merritt/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/books/17Hungergames/03a0642609774b7ba7a44e3c5eab621a-superJumbo.jpg",
        format: "superJumbo",
        height: 600,
        width: 821,
        type: "image",
        subtype: "photo",
        caption:
          "Suzanne Collins, right, has not announced the title of her prequel to “The Hunger Games,” scheduled for release next year.",
        copyright:
          "Scholastic, via Associated Press; Jason Merritt/Getty Images"
      }
    ],
    short_url: "https://nyti.ms/2KktF6F"
  },
  {
    section: "Arts",
    subsection: "Music",
    title:
      "Franco Zeffirelli, Italian Director With Taste for Excess, Dies at 96",
    abstract:
      "Mr. Zeffirelli’s opera productions sometimes drew critical ire, but audiences generally loved them. He worked in film, too.",
    url:
      "https://www.nytimes.com/2019/06/15/arts/music/franco-zeffirelli-dead.html",
    byline: "By JONATHAN KANDELL",
    item_type: "Article",
    updated_date: "2019-06-17T19:01:35-04:00",
    created_date: "2019-06-15T08:15:17-04:00",
    published_date: "2019-06-15T08:15:17-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Opera", "Deaths (Obituaries)", "Movies"],
    org_facet: [],
    per_facet: ["Zeffirelli, Franco"],
    geo_facet: ["Italy", "Rome (Italy)"],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/world/15zeffirelli-obit/15zeffirelli-obit-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Franco Zeffirelli at home in Rome.",
        copyright: "Kathryn Cook for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/world/15zeffirelli-obit/15zeffirelli-obit-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Franco Zeffirelli at home in Rome.",
        copyright: "Kathryn Cook for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/world/15zeffirelli-obit/merlin_29543854_a7c1d78e-547e-4073-8bbc-0e98d7ec960f-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Franco Zeffirelli at home in Rome.",
        copyright: "Kathryn Cook for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/world/15zeffirelli-obit/15zeffirelli-obit-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Franco Zeffirelli at home in Rome.",
        copyright: "Kathryn Cook for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/world/15zeffirelli-obit/merlin_29543854_a7c1d78e-547e-4073-8bbc-0e98d7ec960f-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Franco Zeffirelli at home in Rome.",
        copyright: "Kathryn Cook for The New York Times"
      }
    ],
    short_url: "https://nyti.ms/2WDHNtu"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘Shaft’ Made Richard Roundtree a Star. But Store Clerks Still Tailed Him.",
    abstract:
      "Returning to the role he originated nearly 50 years ago, the 76-year-old actor considers its disorienting impact on his life.",
    url:
      "https://www.nytimes.com/2019/06/14/movies/shaft-richard-roundtree.html",
    byline: "By REGGIE UGWU",
    item_type: "Article",
    updated_date: "2019-06-16T23:16:46-04:00",
    created_date: "2019-06-14T11:49:32-04:00",
    published_date: "2019-06-14T11:49:32-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Blacks", "Movies", "Actors and Actresses", "Shaft (Movie)"],
    org_facet: [],
    per_facet: ["Roundtree, Richard"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/arts/17Roundtree1/17Roundtree1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Celeste Sloman for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/arts/17Roundtree1/17Roundtree1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Celeste Sloman for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/arts/17Roundtree1/merlin_156413769_fdf5922e-e60a-46e1-9af5-76bd603f7168-articleInline.jpg",
        format: "Normal",
        height: 186,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Celeste Sloman for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/arts/17Roundtree1/17Roundtree1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Celeste Sloman for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/17/arts/17Roundtree1/merlin_156413769_fdf5922e-e60a-46e1-9af5-76bd603f7168-superJumbo.jpg",
        format: "superJumbo",
        height: 2008,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Celeste Sloman for The New York Times"
      }
    ],
    short_url: "https://nyti.ms/2X8Jh3h"
  },
  {
    section: "Arts",
    subsection: "",
    title: "What to Do in New York This Weekend",
    abstract:
      "There’s something for everyone, from classical music in the park to Alvin Ailey at Lincoln Center and four must-not-miss art shows spotlighting women.",
    url:
      "https://www.nytimes.com/2019/06/14/arts/what-to-do-in-new-york-this-weekend.html",
    byline: "By NICOLE HERRINGTON",
    item_type: "Article",
    updated_date: "2019-06-14T09:21:23-04:00",
    created_date: "2019-06-14T09:21:23-04:00",
    published_date: "2019-06-14T09:21:23-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Ounce of Faith (Dance)",
      "The Dead Don't Die (Movie)",
      "Classical Music",
      "Opera",
      "Shaft (Movie)",
      "Men in Black: International (Movie)",
      "Rolling Thunder Revue: A Bob Dylan Story by Martin Scorsese (Movie)"
    ],
    org_facet: [
      "Ailey, Alvin, American Dance Theater",
      "Hauser & Wirth",
      "Koch, David H, Theater",
      "Lincoln Center for the Performing Arts",
      "Metropolitan Opera",
      "New York Philharmonic"
    ],
    per_facet: [
      "Jarmusch, Jim",
      "Pop, Iggy",
      "Sevigny, Chloe",
      "Simpson, Lorna",
      "Swinton, Tilda",
      "Spero, Nancy",
      "Carrington, Leonora"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14Philharmonic-A/14Philharmonic-A-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "The festive atmosphere in Central Park on Wednesday before the New York Philharmonic’s performance.",
        copyright: "Jeenah Moon for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14Philharmonic-A/14Philharmonic-A-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "The festive atmosphere in Central Park on Wednesday before the New York Philharmonic’s performance.",
        copyright: "Jeenah Moon for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14Philharmonic-A/merlin_156381015_9098ef8f-5ea0-4a42-8ee1-7bfc2dc399e6-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "The festive atmosphere in Central Park on Wednesday before the New York Philharmonic’s performance.",
        copyright: "Jeenah Moon for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14Philharmonic-A/merlin_156381015_9098ef8f-5ea0-4a42-8ee1-7bfc2dc399e6-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "The festive atmosphere in Central Park on Wednesday before the New York Philharmonic’s performance.",
        copyright: "Jeenah Moon for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14Philharmonic-A/merlin_156381015_9098ef8f-5ea0-4a42-8ee1-7bfc2dc399e6-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "The festive atmosphere in Central Park on Wednesday before the New York Philharmonic’s performance.",
        copyright: "Jeenah Moon for The New York Times"
      }
    ],
    short_url: "https://nyti.ms/2XMGPMH"
  },
  {
    section: "Movies",
    subsection: "",
    title: "5 Film Series to Catch in N.Y.C. This Weekend",
    abstract: "Our guide to film series and special screenings.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/nyc-this-weekend-film-series.html",
    byline: "By BEN KENIGSBERG",
    item_type: "Article",
    updated_date: "2019-06-13T17:00:05-04:00",
    created_date: "2019-06-13T17:00:05-04:00",
    published_date: "2019-06-13T17:00:05-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies"],
    org_facet: [],
    per_facet: [],
    geo_facet: ["New York City"],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14listings-movies/14listings-movies-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “The Hottest August,” screening at BAMcinemaFest 2019.",
        copyright: "via Brooklyn Academy of Music"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14listings-movies/14listings-movies-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “The Hottest August,” screening at BAMcinemaFest 2019.",
        copyright: "via Brooklyn Academy of Music"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14listings-movies/merlin_156300327_f0c0c351-88bd-430b-9562-d95dc698b760-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “The Hottest August,” screening at BAMcinemaFest 2019.",
        copyright: "via Brooklyn Academy of Music"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14listings-movies/14listings-movies-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “The Hottest August,” screening at BAMcinemaFest 2019.",
        copyright: "via Brooklyn Academy of Music"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/14listings-movies/merlin_156300327_f0c0c351-88bd-430b-9562-d95dc698b760-superJumbo.jpg",
        format: "superJumbo",
        height: 1153,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “The Hottest August,” screening at BAMcinemaFest 2019.",
        copyright: "via Brooklyn Academy of Music"
      }
    ],
    short_url: "https://nyti.ms/2IfQaYh"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "Bill Wittliff, ‘Lonesome Dove’ Screenwriter and Son of Texas, Dies at 79",
    abstract:
      "His screenplays displayed an affinity for the mythology and history of his native state, and he and his wife started an archive devoted to Texas writers.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/bill-wittliff-lonesome-dove-screenwriter-and-son-of-texas-dies-at-79.html",
    byline: "By RICHARD SANDOMIR",
    item_type: "Article",
    updated_date: "2019-06-14T00:14:55-04:00",
    created_date: "2019-06-13T14:47:22-04:00",
    published_date: "2019-06-13T14:47:22-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Lonesome Dove (TV Program)",
      "Deaths (Obituaries)",
      "Writing and Writers",
      "Movies",
      "Television",
      "Archives and Records"
    ],
    org_facet: [],
    per_facet: ["Wittliff, Bill (1940-2019)", "Nelson, Willie"],
    geo_facet: ["Texas"],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/12wittliff3/12wittliff3-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Wittliff in an undated photograph. He was inspired at an early age by the idea that vivid stories could emerge from Texas soil.",
        copyright: "Business Wire"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/12wittliff3/12wittliff3-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Wittliff in an undated photograph. He was inspired at an early age by the idea that vivid stories could emerge from Texas soil.",
        copyright: "Business Wire"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/12wittliff3/12wittliff3-articleInline.jpg",
        format: "Normal",
        height: 133,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Wittliff in an undated photograph. He was inspired at an early age by the idea that vivid stories could emerge from Texas soil.",
        copyright: "Business Wire"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/12wittliff3/12wittliff3-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Wittliff in an undated photograph. He was inspired at an early age by the idea that vivid stories could emerge from Texas soil.",
        copyright: "Business Wire"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/12wittliff3/12wittliff3-superJumbo.jpg",
        format: "superJumbo",
        height: 1193,
        width: 1705,
        type: "image",
        subtype: "photo",
        caption:
          "Bill Wittliff in an undated photograph. He was inspired at an early age by the idea that vivid stories could emerge from Texas soil.",
        copyright: "Business Wire"
      }
    ],
    short_url: "https://nyti.ms/2MM7kAS"
  },
  {
    section: "Theater",
    subsection: "",
    title:
      "Ed Harris to Succeed Jeff Daniels in ‘To Kill a Mockingbird’ on Broadway",
    abstract:
      "Mr. Harris, featured in “Westworld” on television, is a four-time Oscar nominee.",
    url:
      "https://www.nytimes.com/2019/06/13/theater/ed-harris-jeff-daniels-mockingbird-broadway.html",
    byline: "By MICHAEL PAULSON",
    item_type: "Article",
    updated_date: "2019-06-14T15:47:25-04:00",
    created_date: "2019-06-13T13:11:23-04:00",
    published_date: "2019-06-13T13:11:23-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Theater", "To Kill a Mockingbird (Play)"],
    org_facet: [],
    per_facet: ["Harris, Ed", "Daniels, Jeff"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13MOCKINGBIRD-COMBO/13MOCKINGBIRD-COMBO-thumbStandard-v2.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Jeff Daniels, left, will end his run with “To Kill a Mockingbird” in November when Ed Harris takes over.",
        copyright: "From left: Bryan Bedder/Getty Images; Mike Marsland"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13MOCKINGBIRD-COMBO/13MOCKINGBIRD-COMBO-thumbLarge-v2.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Jeff Daniels, left, will end his run with “To Kill a Mockingbird” in November when Ed Harris takes over.",
        copyright: "From left: Bryan Bedder/Getty Images; Mike Marsland"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13MOCKINGBIRD-COMBO/13MOCKINGBIRD-COMBO-articleInline-v2.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Jeff Daniels, left, will end his run with “To Kill a Mockingbird” in November when Ed Harris takes over.",
        copyright: "From left: Bryan Bedder/Getty Images; Mike Marsland"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13MOCKINGBIRD-COMBO/13MOCKINGBIRD-COMBO-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Jeff Daniels, left, will end his run with “To Kill a Mockingbird” in November when Ed Harris takes over.",
        copyright: "From left: Bryan Bedder/Getty Images; Mike Marsland"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13MOCKINGBIRD-COMBO/13MOCKINGBIRD-COMBO-superJumbo-v2.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Jeff Daniels, left, will end his run with “To Kill a Mockingbird” in November when Ed Harris takes over.",
        copyright: "From left: Bryan Bedder/Getty Images; Mike Marsland"
      }
    ],
    short_url: "https://nyti.ms/2Ids5Bq"
  },
  {
    section: "Movies",
    subsection: "",
    title: "Bryan Singer to Settle Sexual Assault Lawsuit for $150,000",
    abstract:
      "A 2017 claim against the “X-Men” director said he assaulted a 17-year-old boy at a party in 2003.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/bryan-singer-cesar-sanchez-guzman.html",
    byline: "By NANCY COLEMAN",
    item_type: "Article",
    updated_date: "2019-06-14T00:30:00-04:00",
    created_date: "2019-06-13T09:51:54-04:00",
    published_date: "2019-06-13T09:51:54-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Sex Crimes",
      "Suits and Litigation (Civil)",
      "Bohemian Rhapsody (Movie)",
      "X-Men (Movie)",
      "Child Abuse and Neglect"
    ],
    org_facet: [],
    per_facet: ["Singer, Bryan", "Sanchez-Guzman, Cesar"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13singer1/13singer1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Bryan Singer denied the claim that he assaulted the teenager, and his lawyer said the settlement was a business decision.",
        copyright: "Hannah Mckay/Reuters"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13singer1/13singer1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Bryan Singer denied the claim that he assaulted the teenager, and his lawyer said the settlement was a business decision.",
        copyright: "Hannah Mckay/Reuters"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13singer1/merlin_150305391_3b7770a0-456e-4123-889d-7c1dd9fb9154-articleInline.jpg",
        format: "Normal",
        height: 154,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Bryan Singer denied the claim that he assaulted the teenager, and his lawyer said the settlement was a business decision.",
        copyright: "Hannah Mckay/Reuters"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13singer1/13singer1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Bryan Singer denied the claim that he assaulted the teenager, and his lawyer said the settlement was a business decision.",
        copyright: "Hannah Mckay/Reuters"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/13singer1/merlin_150305391_3b7770a0-456e-4123-889d-7c1dd9fb9154-superJumbo.jpg",
        format: "superJumbo",
        height: 1655,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Bryan Singer denied the claim that he assaulted the teenager, and his lawyer said the settlement was a business decision.",
        copyright: "Hannah Mckay/Reuters"
      }
    ],
    short_url: "https://nyti.ms/2IdoUJW"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Plus One’ Review: Navigating a Marathon of Nuptials",
    abstract:
      "Maya Erskine and Jack Quaid are single friends who agree to be each other’s dates to a series of weddings.",
    url: "https://www.nytimes.com/2019/06/13/movies/plus-one-review.html",
    byline: "By BEN KENIGSBERG",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:19-04:00",
    created_date: "2019-06-13T07:00:09-04:00",
    published_date: "2019-06-13T07:00:09-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Plus One (Movie)"],
    org_facet: [],
    per_facet: [
      "Erskine, Maya",
      "Rhymer, Andrew",
      "Chan, Jeff (Film Director)",
      "Quaid, Jack (1992- )"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13plusone/merlin_156054717_5809fc90-0589-4039-ac9b-0bcfaa25dc2c-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Maya Erskine and Jack Quaid in &ldquo;Plus One.&rdquo;",
        copyright: "RLJE Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13plusone/merlin_156054717_5809fc90-0589-4039-ac9b-0bcfaa25dc2c-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Maya Erskine and Jack Quaid in &ldquo;Plus One.&rdquo;",
        copyright: "RLJE Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13plusone/merlin_156054717_5809fc90-0589-4039-ac9b-0bcfaa25dc2c-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Maya Erskine and Jack Quaid in &ldquo;Plus One.&rdquo;",
        copyright: "RLJE Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13plusone/merlin_156054717_5809fc90-0589-4039-ac9b-0bcfaa25dc2c-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Maya Erskine and Jack Quaid in &ldquo;Plus One.&rdquo;",
        copyright: "RLJE Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13plusone/merlin_156054717_5809fc90-0589-4039-ac9b-0bcfaa25dc2c-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Maya Erskine and Jack Quaid in &ldquo;Plus One.&rdquo;",
        copyright: "RLJE Films"
      }
    ],
    short_url: "https://nyti.ms/2X458c4"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘Our Time’ Review: An Enthralling and Exasperating Take on Infidelity",
    abstract:
      "The Mexican director Carlos Reygadas explores a couple’s fraught relationship from a languid, deep-focus perspective.",
    url: "https://www.nytimes.com/2019/06/13/movies/our-time-review.html",
    byline: "By GLENN KENNY",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:35-04:00",
    created_date: "2019-06-13T07:00:09-04:00",
    published_date: "2019-06-13T07:00:09-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Our Time (Movie)"],
    org_facet: [],
    per_facet: ["Reygadas, Carlos"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13ourtime/merlin_156054696_1e823956-5ff2-41c4-a740-4ea9e315d706-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Phil Burgers, left, and Carlos Reygadas in &ldquo;Our Time.&rdquo;",
        copyright: "Monument Releasing"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13ourtime/merlin_156054696_1e823956-5ff2-41c4-a740-4ea9e315d706-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Phil Burgers, left, and Carlos Reygadas in &ldquo;Our Time.&rdquo;",
        copyright: "Monument Releasing"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13ourtime/merlin_156054696_1e823956-5ff2-41c4-a740-4ea9e315d706-articleInline.jpg",
        format: "Normal",
        height: 76,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Phil Burgers, left, and Carlos Reygadas in &ldquo;Our Time.&rdquo;",
        copyright: "Monument Releasing"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13ourtime/merlin_156054696_1e823956-5ff2-41c4-a740-4ea9e315d706-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Phil Burgers, left, and Carlos Reygadas in &ldquo;Our Time.&rdquo;",
        copyright: "Monument Releasing"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13ourtime/merlin_156054696_1e823956-5ff2-41c4-a740-4ea9e315d706-superJumbo.jpg",
        format: "superJumbo",
        height: 820,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Phil Burgers, left, and Carlos Reygadas in &ldquo;Our Time.&rdquo;",
        copyright: "Monument Releasing"
      }
    ],
    short_url: "https://nyti.ms/2R9PwOG"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘In the Aisles’ Review: A Store With Everything, Except Fulfillment",
    abstract:
      "Franz Rogowski and Sandra Hüller star in this peculiar not-quite-comedy from Germany.",
    url: "https://www.nytimes.com/2019/06/13/movies/in-the-aisles-review.html",
    byline: "By BEN KENIGSBERG",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:10-04:00",
    created_date: "2019-06-13T07:00:08-04:00",
    published_date: "2019-06-13T07:00:08-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "In the Aisles (Movie)"],
    org_facet: [],
    per_facet: ["Rogowski, Franz", "Stuber, Thomas (1981- )"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/intheaisles1/intheaisles1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Sandra Hüller and Franz Rogowski in “In the Aisles.”",
        copyright: "Anke Neugebauer/Music Box Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/intheaisles1/intheaisles1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Sandra Hüller and Franz Rogowski in “In the Aisles.”",
        copyright: "Anke Neugebauer/Music Box Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/intheaisles1/intheaisles1-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Sandra Hüller and Franz Rogowski in “In the Aisles.”",
        copyright: "Anke Neugebauer/Music Box Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/intheaisles1/intheaisles1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Sandra Hüller and Franz Rogowski in “In the Aisles.”",
        copyright: "Anke Neugebauer/Music Box Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/intheaisles1/intheaisles1-superJumbo.jpg",
        format: "superJumbo",
        height: 1153,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Sandra Hüller and Franz Rogowski in “In the Aisles.”",
        copyright: "Anke Neugebauer/Music Box Films"
      }
    ],
    short_url: "https://nyti.ms/2ReBECN"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Being Frank’ Review: An Embarrassment of Daddy Issues",
    abstract:
      "In Miranda Bailey’s new film, an opportunistic son bonds with an absentee father who turns out to have a second family.",
    url: "https://www.nytimes.com/2019/06/13/movies/being-frank-review.html",
    byline: "By TEO BUGBEE",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:49-04:00",
    created_date: "2019-06-13T07:00:07-04:00",
    published_date: "2019-06-13T07:00:07-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Being Frank (Movie)"],
    org_facet: [],
    per_facet: ["Gaffigan, Jim", "Miller, Logan", "Bailey, Miranda"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13beingfrank/merlin_156053895_d7c08488-b313-418d-8465-32cb47d0af59-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Logan Miller, left, and Jim Gaffigan form a father-son conspiracy in &ldquo;Being Frank.&rdquo;",
        copyright: "The Film Arcade"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13beingfrank/merlin_156053895_d7c08488-b313-418d-8465-32cb47d0af59-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Logan Miller, left, and Jim Gaffigan form a father-son conspiracy in &ldquo;Being Frank.&rdquo;",
        copyright: "The Film Arcade"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13beingfrank/merlin_156053895_d7c08488-b313-418d-8465-32cb47d0af59-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Logan Miller, left, and Jim Gaffigan form a father-son conspiracy in &ldquo;Being Frank.&rdquo;",
        copyright: "The Film Arcade"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13beingfrank/merlin_156053895_d7c08488-b313-418d-8465-32cb47d0af59-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Logan Miller, left, and Jim Gaffigan form a father-son conspiracy in &ldquo;Being Frank.&rdquo;",
        copyright: "The Film Arcade"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13beingfrank/merlin_156053895_d7c08488-b313-418d-8465-32cb47d0af59-superJumbo.jpg",
        format: "superJumbo",
        height: 1152,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Logan Miller, left, and Jim Gaffigan form a father-son conspiracy in &ldquo;Being Frank.&rdquo;",
        copyright: "The Film Arcade"
      }
    ],
    short_url: "https://nyti.ms/2RcQ2vo"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘Blue Note Records’ Review: A Smart, Exhilarating Look at an Influential Label",
    abstract:
      "Featuring Herbie Hancock, Wayne Shorter and other luminaries, a new documentary examines Blue Note’s legacy from Thelonious Monk to hip-hop.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/blue-note-records-beyond-the-notes-review.html",
    byline: "By GLENN KENNY",
    item_type: "Article",
    updated_date: "2019-06-14T00:31:39-04:00",
    created_date: "2019-06-13T07:00:06-04:00",
    published_date: "2019-06-13T07:00:06-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Documentary Films and Programs",
      "Jazz",
      "Blue Note Records: Beyond the Notes (Movie)"
    ],
    org_facet: ["Blue Note Records"],
    per_facet: [
      "Hancock, Herbie",
      "Shorter, Wayne",
      "Monk, Thelonious",
      "Akinmusire, Ambrose",
      "Glasper, Robert",
      "Martin, Terrace",
      "Van Gelder, Rudy (1924-2016)",
      "Huber, Sophie (1971- )"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13bluenote/merlin_156053955_31cf177a-14d4-41ed-8cdf-7f775e4d3b09-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Herbie Hancock in &ldquo;Blue Note Records: Beyond the Notes.&rdquo;",
        copyright: "Mira Film"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13bluenote/merlin_156053955_31cf177a-14d4-41ed-8cdf-7f775e4d3b09-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Herbie Hancock in &ldquo;Blue Note Records: Beyond the Notes.&rdquo;",
        copyright: "Mira Film"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13bluenote/merlin_156053955_31cf177a-14d4-41ed-8cdf-7f775e4d3b09-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Herbie Hancock in &ldquo;Blue Note Records: Beyond the Notes.&rdquo;",
        copyright: "Mira Film"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13bluenote/merlin_156053955_31cf177a-14d4-41ed-8cdf-7f775e4d3b09-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Herbie Hancock in &ldquo;Blue Note Records: Beyond the Notes.&rdquo;",
        copyright: "Mira Film"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13bluenote/merlin_156053955_31cf177a-14d4-41ed-8cdf-7f775e4d3b09-superJumbo.jpg",
        format: "superJumbo",
        height: 1154,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Herbie Hancock in &ldquo;Blue Note Records: Beyond the Notes.&rdquo;",
        copyright: "Mira Film"
      }
    ],
    short_url: "https://nyti.ms/2RgHIL5"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘American Woman’ Review: A Considered, and Cautious, Working-Class Character Study",
    abstract:
      "Sienna Miller is a single mother whose daughter’s disappearance pushes her over several edges, both literal and metaphorical.",
    url: "https://www.nytimes.com/2019/06/13/movies/american-woman-review.html",
    byline: "By GLENN KENNY",
    item_type: "Article",
    updated_date: "2019-06-14T00:33:27-04:00",
    created_date: "2019-06-13T07:00:04-04:00",
    published_date: "2019-06-13T07:00:04-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["American Woman (Movie)", "Movies"],
    org_facet: [],
    per_facet: [
      "Miller, Sienna",
      "Madigan, Amy",
      "Hendricks, Christina",
      "Scott, Jake"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13americanwoman-2/13americanwoman-2-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Sienna Miller in &ldquo;American Woman.&rdquo; The cast includes, background from left, Christina Hendricks, Will Sasso and Amy Madigan.",
        copyright: "Roadside Attractions"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13americanwoman-2/13americanwoman-2-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Sienna Miller in &ldquo;American Woman.&rdquo; The cast includes, background from left, Christina Hendricks, Will Sasso and Amy Madigan.",
        copyright: "Roadside Attractions"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13americanwoman-2/merlin_156053712_a85625d6-eafa-44ee-896e-13f2af3fa8ef-articleInline.jpg",
        format: "Normal",
        height: 80,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Sienna Miller in &ldquo;American Woman.&rdquo; The cast includes, background from left, Christina Hendricks, Will Sasso and Amy Madigan.",
        copyright: "Roadside Attractions"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13americanwoman-2/13americanwoman-2-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Sienna Miller in &ldquo;American Woman.&rdquo; The cast includes, background from left, Christina Hendricks, Will Sasso and Amy Madigan.",
        copyright: "Roadside Attractions"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13americanwoman-2/merlin_156053712_a85625d6-eafa-44ee-896e-13f2af3fa8ef-superJumbo.jpg",
        format: "superJumbo",
        height: 859,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Sienna Miller in &ldquo;American Woman.&rdquo; The cast includes, background from left, Christina Hendricks, Will Sasso and Amy Madigan.",
        copyright: "Roadside Attractions"
      }
    ],
    short_url: "https://nyti.ms/2R9PwhE"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Daughter of the Wolf’ Review: Snow, Ice, and Dramatic Inertia",
    abstract:
      "This kidnapping thriller will leave you cold in more ways than one.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/daughter-of-the-wolf-review.html",
    byline: "By BILGE EBIRI",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:46-04:00",
    created_date: "2019-06-13T07:00:02-04:00",
    published_date: "2019-06-13T07:00:02-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Daughter of the Wolf (Movie)"],
    org_facet: [],
    per_facet: ["Hackl, David", "Dreyfuss, Richard", "Carano, Gina"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13daughter1/daughter1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Gina Carano as a desperate veteran trying to save her son from a group of backwoods kidnappers",
        copyright: "Jessica and Andy Schlamp/Vertical Entertainment"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13daughter1/daughter1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Gina Carano as a desperate veteran trying to save her son from a group of backwoods kidnappers",
        copyright: "Jessica and Andy Schlamp/Vertical Entertainment"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13daughter1/daughter1-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Gina Carano as a desperate veteran trying to save her son from a group of backwoods kidnappers",
        copyright: "Jessica and Andy Schlamp/Vertical Entertainment"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13daughter1/daughter1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Gina Carano as a desperate veteran trying to save her son from a group of backwoods kidnappers",
        copyright: "Jessica and Andy Schlamp/Vertical Entertainment"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/13daughter1/daughter1-superJumbo.jpg",
        format: "superJumbo",
        height: 1151,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Gina Carano as a desperate veteran trying to save her son from a group of backwoods kidnappers",
        copyright: "Jessica and Andy Schlamp/Vertical Entertainment"
      }
    ],
    short_url: "https://nyti.ms/2RgHIe3"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘Hampstead’ Review: A Low-Key and Lively Look at an Unlikely Romance",
    abstract:
      "Diane Keaton and Brendan Gleeson fall in love, with a little help from a picturesque London park.",
    url: "https://www.nytimes.com/2019/06/13/movies/hampstead-review.html",
    byline: "By BILGE EBIRI",
    item_type: "Article",
    updated_date: "2019-06-14T00:32:07-04:00",
    created_date: "2019-06-13T07:00:02-04:00",
    published_date: "2019-06-13T07:00:02-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Hampstead (Movie)"],
    org_facet: [],
    per_facet: ["Keaton, Diane", "Gleeson, Brendan", "Hopkins, Joel"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/hampstead1/hampstead1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Diane Keaton and Brendan Gleeson in &ldquo;Hampstead.&rdquo;",
        copyright: "IFC Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/hampstead1/hampstead1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Diane Keaton and Brendan Gleeson in &ldquo;Hampstead.&rdquo;",
        copyright: "IFC Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/hampstead1/hampstead1-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Diane Keaton and Brendan Gleeson in &ldquo;Hampstead.&rdquo;",
        copyright: "IFC Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/hampstead1/hampstead1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Diane Keaton and Brendan Gleeson in &ldquo;Hampstead.&rdquo;",
        copyright: "IFC Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/14/arts/hampstead1/hampstead1-superJumbo.jpg",
        format: "superJumbo",
        height: 1152,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Diane Keaton and Brendan Gleeson in &ldquo;Hampstead.&rdquo;",
        copyright: "IFC Films"
      }
    ],
    short_url: "https://nyti.ms/2X45e3q"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "‘Back to the Fatherland’ Review: Israelis Who Look to Put History Aside",
    abstract:
      "The documentary follows several young Israelis who move to Germany and Austria, countries that once set out to exterminate Jews.",
    url:
      "https://www.nytimes.com/2019/06/13/movies/back-to-the-fatherland-review.html",
    byline: "By KEN JAWOROWSKI",
    item_type: "Article",
    updated_date: "2019-06-14T00:33:32-04:00",
    created_date: "2019-06-13T07:00:02-04:00",
    published_date: "2019-06-13T07:00:02-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Documentary Films and Programs",
      "Back to the Fatherland (Movie)"
    ],
    org_facet: [],
    per_facet: ["Rohrer, Kat", "Levanon, Gil"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/10/arts/backto1/backto1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “Back to the Fatherland,” directed by Kat Rohrer and Gil Levanon.",
        copyright: "First Run Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/10/arts/backto1/backto1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “Back to the Fatherland,” directed by Kat Rohrer and Gil Levanon.",
        copyright: "First Run Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/10/arts/backto1/backto1-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “Back to the Fatherland,” directed by Kat Rohrer and Gil Levanon.",
        copyright: "First Run Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/10/arts/backto1/backto1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “Back to the Fatherland,” directed by Kat Rohrer and Gil Levanon.",
        copyright: "First Run Features"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/10/arts/backto1/backto1-superJumbo.jpg",
        format: "superJumbo",
        height: 1152,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "A scene from “Back to the Fatherland,” directed by Kat Rohrer and Gil Levanon.",
        copyright: "First Run Features"
      }
    ],
    short_url: "https://nyti.ms/2X4563W"
  },
  {
    section: "Movies",
    subsection: "",
    title: "Sylvia Miles, Actress With a Flair for the Flamboyant, Dies at 94",
    abstract:
      "She won Oscar nominations for “Midnight Cowboy” and “Farewell, My Lovely” and gossip-column attention for her indefatigable partygoing.",
    url: "https://www.nytimes.com/2019/06/12/movies/sylvia-miles-death.html",
    byline: "By ANITA GATES",
    item_type: "Article",
    updated_date: "2019-06-14T15:35:49-04:00",
    created_date: "2019-06-12T17:13:38-04:00",
    published_date: "2019-06-12T17:13:38-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Actors and Actresses",
      "Movies",
      "Theater",
      "Midnight Cowboy (Movie)",
      "Farewell, My Lovely (Movie)",
      "Deaths (Obituaries)"
    ],
    org_facet: [],
    per_facet: ["Miles, Sylvia"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/obituaries/12MILES1/12MILES1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "The actress Sylvia Miles in 1980. She established a reputation for being daring and bawdy and for attending every party she could. But critics took her acting abilities seriously.",
        copyright: "George Rose/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/obituaries/12MILES1/12MILES1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "The actress Sylvia Miles in 1980. She established a reputation for being daring and bawdy and for attending every party she could. But critics took her acting abilities seriously.",
        copyright: "George Rose/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/obituaries/12MILES1/merlin_156360819_3abb9524-397d-4b65-b314-cfce39e182c7-articleInline.jpg",
        format: "Normal",
        height: 273,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "The actress Sylvia Miles in 1980. She established a reputation for being daring and bawdy and for attending every party she could. But critics took her acting abilities seriously.",
        copyright: "George Rose/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/obituaries/12MILES1/12MILES1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "The actress Sylvia Miles in 1980. She established a reputation for being daring and bawdy and for attending every party she could. But critics took her acting abilities seriously.",
        copyright: "George Rose/Getty Images"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/obituaries/12MILES1/merlin_156360819_3abb9524-397d-4b65-b314-cfce39e182c7-superJumbo.jpg",
        format: "superJumbo",
        height: 2048,
        width: 1426,
        type: "image",
        subtype: "photo",
        caption:
          "The actress Sylvia Miles in 1980. She established a reputation for being daring and bawdy and for attending every party she could. But critics took her acting abilities seriously.",
        copyright: "George Rose/Getty Images"
      }
    ],
    short_url: "https://nyti.ms/2ZnL9CB"
  },
  {
    section: "Movies",
    subsection: "",
    title: "How Ermanno Olmi Found Grace in the Daily Labors of Italians",
    abstract:
      "A Film at Lincoln Center retrospective reveals the genius of an Italian director who saw poetry in everyday life.",
    url:
      "https://www.nytimes.com/2019/06/12/movies/ermanno-olmi-lincoln-center.html",
    byline: "By A.O. SCOTT",
    item_type: "Article",
    updated_date: "2019-06-12T23:03:00-04:00",
    created_date: "2019-06-12T14:47:39-04:00",
    published_date: "2019-06-12T14:47:39-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies"],
    org_facet: ["Film at Lincoln Center"],
    per_facet: ["Olmi, Ermanno"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/12olmi-notebook/merlin_156251040_0cb8a2fb-fc5a-407c-8ccf-d6ce1aac5362-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Sandro Panseri, second from right, as Domenico Cantoni in “Il Posto.”",
        copyright: "Janus Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/12olmi-notebook/merlin_156251040_0cb8a2fb-fc5a-407c-8ccf-d6ce1aac5362-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Sandro Panseri, second from right, as Domenico Cantoni in “Il Posto.”",
        copyright: "Janus Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/12olmi-notebook/merlin_156251040_0cb8a2fb-fc5a-407c-8ccf-d6ce1aac5362-articleInline.jpg",
        format: "Normal",
        height: 107,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Sandro Panseri, second from right, as Domenico Cantoni in “Il Posto.”",
        copyright: "Janus Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/12olmi-notebook/12olmi-notebook-mediumThreeByTwo210-v2.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Sandro Panseri, second from right, as Domenico Cantoni in “Il Posto.”",
        copyright: "Janus Films"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/arts/12olmi-notebook/merlin_156251040_0cb8a2fb-fc5a-407c-8ccf-d6ce1aac5362-superJumbo.jpg",
        format: "superJumbo",
        height: 900,
        width: 1600,
        type: "image",
        subtype: "photo",
        caption:
          "Sandro Panseri, second from right, as Domenico Cantoni in “Il Posto.”",
        copyright: "Janus Films"
      }
    ],
    short_url: "https://nyti.ms/2MMzA6y"
  },
  {
    section: "Arts",
    subsection: "Television",
    title: "A Dad Defends Dad Jokes",
    abstract:
      "Babies made him do it. They fell for his corny humor, and he stuck with what worked. Then his audience grew up.",
    url: "https://www.nytimes.com/2019/06/12/arts/television/dad-jokes.html",
    byline: "By JASON ZINOMAN",
    item_type: "Article",
    updated_date: "2019-06-14T22:31:18-04:00",
    created_date: "2019-06-12T11:41:37-04:00",
    published_date: "2019-06-12T11:41:37-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Parenting", "Comedy and Humor", "Dad Joke"],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/15/arts/12dad-jokes-illo/dad-jokes-illo-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Like lazy comics, fathers pander. If the joke gets a laugh, it stays in the set.",
        copyright: "Leif Parsons"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/15/arts/12dad-jokes-illo/dad-jokes-illo-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Like lazy comics, fathers pander. If the joke gets a laugh, it stays in the set.",
        copyright: "Leif Parsons"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/15/arts/12dad-jokes-illo/dad-jokes-illo-articleInline.jpg",
        format: "Normal",
        height: 158,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Like lazy comics, fathers pander. If the joke gets a laugh, it stays in the set.",
        copyright: "Leif Parsons"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/15/arts/12dad-jokes-illo/dad-jokes-illo-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Like lazy comics, fathers pander. If the joke gets a laugh, it stays in the set.",
        copyright: "Leif Parsons"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/15/arts/12dad-jokes-illo/dad-jokes-illo-superJumbo.jpg",
        format: "superJumbo",
        height: 1706,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "Like lazy comics, fathers pander. If the joke gets a laugh, it stays in the set.",
        copyright: "Leif Parsons"
      }
    ],
    short_url: "https://nyti.ms/2MIH9va"
  },
  {
    section: "Movies",
    subsection: "",
    title: "The ‘Paris Is Burning’ Director on Its Message: ‘Be Yourself’",
    abstract:
      "Ahead of the acclaimed documentary’s rerelease in theaters, Jennie Livingston discusses her film and the ways its legacy has gone mainstream.",
    url:
      "https://www.nytimes.com/2019/06/12/movies/paris-is-burning-jennie-livingston.html",
    byline: "By CASSIDY GEORGE",
    item_type: "Article",
    updated_date: "2019-06-13T13:41:51-04:00",
    created_date: "2019-06-12T10:02:05-04:00",
    published_date: "2019-06-12T10:02:05-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Movies",
      "Documentary Films and Programs",
      "Paris Is Burning (Movie)",
      "Pose (TV Program)",
      "Race and Ethnicity",
      "Dancing",
      "Transvestism",
      "Homosexuality and Bisexuality"
    ],
    org_facet: [],
    per_facet: ["Livingston, Jennie"],
    geo_facet: ["New York City"],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12livingston1/12livingston1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "&ldquo;I stepped into a community where people were geniuses at becoming themselves,&rdquo; the director Jennie Livingston said, &ldquo;geniuses at using words and far beyond brilliant at using dance forms to express themselves.&rdquo;",
        copyright: "Sasha Arutyunova for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12livingston1/12livingston1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "&ldquo;I stepped into a community where people were geniuses at becoming themselves,&rdquo; the director Jennie Livingston said, &ldquo;geniuses at using words and far beyond brilliant at using dance forms to express themselves.&rdquo;",
        copyright: "Sasha Arutyunova for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12livingston1/merlin_156266394_1a9339a2-e19c-4c0c-b31b-f1532132b064-articleInline.jpg",
        format: "Normal",
        height: 238,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "&ldquo;I stepped into a community where people were geniuses at becoming themselves,&rdquo; the director Jennie Livingston said, &ldquo;geniuses at using words and far beyond brilliant at using dance forms to express themselves.&rdquo;",
        copyright: "Sasha Arutyunova for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12livingston1/12livingston1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "&ldquo;I stepped into a community where people were geniuses at becoming themselves,&rdquo; the director Jennie Livingston said, &ldquo;geniuses at using words and far beyond brilliant at using dance forms to express themselves.&rdquo;",
        copyright: "Sasha Arutyunova for The New York Times"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/13/arts/12livingston1/merlin_156266394_1a9339a2-e19c-4c0c-b31b-f1532132b064-superJumbo.jpg",
        format: "superJumbo",
        height: 2048,
        width: 1639,
        type: "image",
        subtype: "photo",
        caption:
          "&ldquo;I stepped into a community where people were geniuses at becoming themselves,&rdquo; the director Jennie Livingston said, &ldquo;geniuses at using words and far beyond brilliant at using dance forms to express themselves.&rdquo;",
        copyright: "Sasha Arutyunova for The New York Times"
      }
    ],
    short_url: "https://nyti.ms/2X4pzFB"
  },
  {
    section: "Movies",
    subsection: "",
    title:
      "In ‘Rolling Thunder Revue,’ Scorsese Tries to Capture a Wild Dylan Tour",
    abstract:
      "The director Martin Scorsese mixes fiction and documentary to match the anarchic spirit of the 1975 concerts themselves.",
    url:
      "https://www.nytimes.com/2019/06/12/movies/rolling-thunder-revue-netflix.html",
    byline: "By ALAN LIGHT",
    item_type: "Article",
    updated_date: "2019-06-14T13:05:22-04:00",
    created_date: "2019-06-12T10:00:06-04:00",
    published_date: "2019-06-12T10:00:06-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Pop and Rock Music",
      "Documentary Films and Programs",
      "Rolling Thunder Revue: A Bob Dylan Story by Martin Scorsese (Movie)"
    ],
    org_facet: [],
    per_facet: ["Dylan, Bob", "Scorsese, Martin"],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16Rolling-Thunder-Revue-1/16Rolling-Thunder-Revue-1-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "Makeup, masks and costume were commonplace on the tour.",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16Rolling-Thunder-Revue-1/16Rolling-Thunder-Revue-1-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "Makeup, masks and costume were commonplace on the tour.",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16Rolling-Thunder-Revue-1/16Rolling-Thunder-Revue-1-articleInline.jpg",
        format: "Normal",
        height: 121,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "Makeup, masks and costume were commonplace on the tour.",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16Rolling-Thunder-Revue-1/16Rolling-Thunder-Revue-1-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "Makeup, masks and costume were commonplace on the tour.",
        copyright: "Ken Regan, via Netflix"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16Rolling-Thunder-Revue-1/16Rolling-Thunder-Revue-1-superJumbo.jpg",
        format: "superJumbo",
        height: 1302,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "Makeup, masks and costume were commonplace on the tour.",
        copyright: "Ken Regan, via Netflix"
      }
    ],
    short_url: "https://nyti.ms/2XbmfZk"
  },
  {
    section: "Arts",
    subsection: "",
    title:
      "Hollywood Reconsiders the Bad Female Boss, With a Generational Twist",
    abstract:
      "In projects like “Late Night,” “Little” and “Veep,” the archetype is being used to tell more explicitly feminist tales — and to question power itself.",
    url: "https://www.nytimes.com/2019/06/12/arts/late-night-bad-bosses.html",
    byline: "By AMANDA HESS",
    item_type: "Article",
    updated_date: "2019-06-13T22:51:01-04:00",
    created_date: "2019-06-12T04:00:10-04:00",
    published_date: "2019-06-12T04:00:10-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Women and Girls",
      "Television",
      "Movies",
      "Veep (TV Program)",
      "Amy Schumer Growing (TV Program)",
      "Late Night (Movie)",
      "The Female Persuasion (Book)"
    ],
    org_facet: [],
    per_facet: [
      "Kaling, Mindy",
      "Louis-Dreyfus, Julia",
      "Hall, Regina",
      "Rae, Issa",
      "Schreck, Heidi",
      "Wolitzer, Meg",
      "Schumer, Amy"
    ],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16foeships-illo/16foeships-illo-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Cari Vander Yacht"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16foeships-illo/16foeships-illo-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Cari Vander Yacht"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16foeships-illo/503bb00019f0444cb08644e4328f0ed8-articleInline.jpg",
        format: "Normal",
        height: 158,
        width: 190,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Cari Vander Yacht"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16foeships-illo/16foeships-illo-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Cari Vander Yacht"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/16/arts/16foeships-illo/16foeships-illo-superJumbo.gif",
        format: "superJumbo",
        height: 1697,
        width: 2000,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Cari Vander Yacht"
      }
    ],
    short_url: "https://nyti.ms/2X2YD9r"
  },
  {
    section: "Obituaries",
    subsection: "",
    title: "Yannick Bellon, French Director With Feminist Bent, Dies at 95",
    abstract:
      "“I have treated several aspects of the feminine reality,” Ms. Bellon, whose films included a feature that graphically depicted a gang rape, once said.",
    url:
      "https://www.nytimes.com/2019/06/11/obituaries/yannick-bellon-dead.html",
    byline: "By RICHARD SANDOMIR",
    item_type: "Article",
    updated_date: "2019-06-11T17:19:51-04:00",
    created_date: "2019-06-11T15:21:46-04:00",
    published_date: "2019-06-11T15:21:46-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: [
      "Movies",
      "Rape of Love (Movie)",
      "Deaths (Obituaries)",
      "Women's Rights"
    ],
    org_facet: [],
    per_facet: ["Bellon, Yannick"],
    geo_facet: ["France"],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/11Bellon1/298fe678c5b04cd8bb68b3a59d1fddd0-thumbStandard.jpg",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "The filmmaker Yannick Bellon at a movie theater in Lyon in 1989 being interviewed about the release of &ldquo;Les Enfants du D&eacute;sordre&rdquo; (&ldquo;Children of Disorder&rdquo;), one of eight feature films she directed.",
        copyright: "Serge Mouraret/Alamy"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/11Bellon1/298fe678c5b04cd8bb68b3a59d1fddd0-thumbLarge.jpg",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "The filmmaker Yannick Bellon at a movie theater in Lyon in 1989 being interviewed about the release of &ldquo;Les Enfants du D&eacute;sordre&rdquo; (&ldquo;Children of Disorder&rdquo;), one of eight feature films she directed.",
        copyright: "Serge Mouraret/Alamy"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/11Bellon1/298fe678c5b04cd8bb68b3a59d1fddd0-articleInline.jpg",
        format: "Normal",
        height: 127,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "The filmmaker Yannick Bellon at a movie theater in Lyon in 1989 being interviewed about the release of &ldquo;Les Enfants du D&eacute;sordre&rdquo; (&ldquo;Children of Disorder&rdquo;), one of eight feature films she directed.",
        copyright: "Serge Mouraret/Alamy"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/11Bellon1/298fe678c5b04cd8bb68b3a59d1fddd0-mediumThreeByTwo210.jpg",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "The filmmaker Yannick Bellon at a movie theater in Lyon in 1989 being interviewed about the release of &ldquo;Les Enfants du D&eacute;sordre&rdquo; (&ldquo;Children of Disorder&rdquo;), one of eight feature films she directed.",
        copyright: "Serge Mouraret/Alamy"
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/12/obituaries/11Bellon1/298fe678c5b04cd8bb68b3a59d1fddd0-superJumbo.jpg",
        format: "superJumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption:
          "The filmmaker Yannick Bellon at a movie theater in Lyon in 1989 being interviewed about the release of &ldquo;Les Enfants du D&eacute;sordre&rdquo; (&ldquo;Children of Disorder&rdquo;), one of eight feature films she directed.",
        copyright: "Serge Mouraret/Alamy"
      }
    ],
    short_url: "https://nyti.ms/2Ia3L3e"
  },
  {
    section: "Movies",
    subsection: "",
    title: "‘Frozen 2’ Trailer: Elsa and Anna Get a Little Surreal",
    abstract:
      "The first full-length clip for the sequel includes a horse glowing underwater and a mysterious warning.",
    url: "https://www.nytimes.com/2019/06/11/movies/frozen-2-trailer.html",
    byline: "By BRUCE FRETTS",
    item_type: "Article",
    updated_date: "2019-06-11T09:08:03-04:00",
    created_date: "2019-06-11T09:05:14-04:00",
    published_date: "2019-06-11T09:05:14-04:00",
    material_type_facet: "",
    kicker: "",
    des_facet: ["Movies", "Frozen II (Movie)"],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/11frozen2-trailer/11frozen2-trailer-thumbStandard.png",
        format: "Standard Thumbnail",
        height: 75,
        width: 75,
        type: "image",
        subtype: "photo",
        caption:
          "Anna (voiced by Kristen Bell) and Elsa (Idina Menzel) in a scene from the new trailer.",
        copyright: ""
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/11frozen2-trailer/11frozen2-trailer-thumbLarge.png",
        format: "thumbLarge",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption:
          "Anna (voiced by Kristen Bell) and Elsa (Idina Menzel) in a scene from the new trailer.",
        copyright: ""
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/11frozen2-trailer/11frozen2-trailer-articleInline.png",
        format: "Normal",
        height: 75,
        width: 190,
        type: "image",
        subtype: "photo",
        caption:
          "Anna (voiced by Kristen Bell) and Elsa (Idina Menzel) in a scene from the new trailer.",
        copyright: ""
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/11frozen2-trailer/11frozen2-trailer-mediumThreeByTwo210.png",
        format: "mediumThreeByTwo210",
        height: 140,
        width: 210,
        type: "image",
        subtype: "photo",
        caption:
          "Anna (voiced by Kristen Bell) and Elsa (Idina Menzel) in a scene from the new trailer.",
        copyright: ""
      },
      {
        url:
          "https://static01.nyt.com/images/2019/06/11/arts/11frozen2-trailer/11frozen2-trailer-superJumbo.png",
        format: "superJumbo",
        height: 470,
        width: 1186,
        type: "image",
        subtype: "photo",
        caption:
          "Anna (voiced by Kristen Bell) and Elsa (Idina Menzel) in a scene from the new trailer.",
        copyright: ""
      }
    ],
    short_url: "https://nyti.ms/2R7p6gx"
  }
];

const mockCleanMovie = {
  movie_id: 447404,
  user_id: 1,
  title: "Pokémon Detective Pikachu",
  poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
  release_date: "2019-05-03",
  vote_average: 7.1,
  overview:
    "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective."
};

const favoritedMovie = {
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
  favorited: true,
  adult: false,
  overview:
    "A simple man is turned into a genius through the application of computer science.",
  release_date: "1992-03-05"
};

module.exports = {
  popularMovies,
  popularShows,
  upcomingMovies,
  newsResults,
  genreResults,
  searchResults,
  favoritedMoviesArr,
  filteredMovie,
  notFavoritedMovie,
  mockNewsResults,
  mockSingleMovie,
  mockCleanMovie,
  favoritedMovie,
  favoritedMovies
};
