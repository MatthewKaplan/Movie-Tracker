import { fetchMovieTvData } from "./index";

describe("fetchMovieTvData", () => {
  let mockApiKey;
  let mockMovieData;
  let mockUrl;
  let mockPath;

  beforeEach(() => {
    mockUrl = "https://api.themoviedb.org/3/discover/movie?";
    mockApiKey = "api_key=bc13bb74ba2ec1d960ae15ea70d535e5";
    mockPath = "&sort_by=popularity.desc";
    mockMovieData = [
      {
        results: [
          {
            adult: false,
            backdrop_path: "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
            id: 456740,
            release_date: "2019-04-10",
            original_title: "Hellboy",
            vote_average: 5.2
          }
        ],
        total_pages: 20750
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovieData)
    }))
  });

  it("calls fetchMovieTvData with the correct params", () => {
    fetchMovieTvData(mockUrl, mockPath);

    expect(fetch).toHaveBeenCalledWith(mockUrl + mockApiKey + mockPath);
  });

  it("should return the correct data", async () => {
    const result = await fetchMovieTvData(mockUrl, mockPath);

    expect(result).toEqual(mockMovieData);
  });

  it('should throw an error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }))

    try {
      await fetchMovieTvData(mockUrl)
    } catch(error) {
      expect(error.message).toBe('Something went wrong')
    }
  })
});
