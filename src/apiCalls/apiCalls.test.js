import { fetchData, fetchUserData, fetchPost } from "./apiCalls";

describe("fetchData", () => {
  let mockUrl;
  let mockData;

  beforeEach(() => {
    mockUrl = "www.someurl.com";
    mockData = {
      first: "Matthew",
      last: "Kaplan"
    };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });

  it("calls fetch with the correct params", () => {
    fetchData(mockUrl);
    expect(fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("should return the correct data", async () => {
    const result = await fetchData(mockUrl);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    try {
      await fetchData(mockUrl);
    } catch (error) {
      expect(error.message).toBe("Fetch failed");
    }
  });
});

describe("fetchUserData", () => {
  let mockUrl;
  let mockData;

  beforeEach(() => {
    mockUrl = "www.someurl.com";
    mockData = {
      first: "Matthew",
      last: "Kaplan"
    };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );
  });

  it("calls fetch with the correct params", () => {
    fetchUserData(mockUrl);
    expect(fetch).toHaveBeenCalledWith(mockUrl);
  });

  it("should return the correct data", async () => {
    const result = await fetchUserData(mockUrl);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    try {
      await fetchUserData(mockUrl);
    } catch (error) {
      expect(error.message).toBe("Fetch failed");
    }
  });
});

describe("fetchPost", () => {
  let mockUrl;
  let mockData;
  let mockOptions;
  let mockBody;

  beforeEach(() => {
    mockUrl = "www.someurl.com";
    mockBody = {
      name: "matt",
      email: "matt@mail.com",
      password: "password",
      status: "",
      error: ""
    };
    mockOptions = {
      method: "POST",
      body: JSON.stringify(mockBody),
      headers: { "Content-Type": "application/json" }
    }
    mockData = {
      name: "matt",
      email: "matt@mail.com",
      password: "password",
      status: "",
      error: ""
    }

    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn(() =>
          Promise.resolve(mockData)
        )
      })
    );
  });

  it("calls fetch with the correct params", async () => {
    await fetchPost(mockUrl, mockOptions);
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it("should return the correct data", async () => {
    const result = await fetchPost(mockUrl, mockOptions);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    try {
      await fetchPost(mockUrl);
    } catch (error) {
      expect(error.message).toBe("unable to favorite");
    }
  });
});
