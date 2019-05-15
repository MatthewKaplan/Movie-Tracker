import newsReducer from "../newsReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const news = MockData.newsResults;

describe("newsReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = newsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of news", () => {
    const expected = news;
    const result = newsReducer(undefined, actions.fetchNews(news));

    expect(result).toEqual(expected);
  });
});
