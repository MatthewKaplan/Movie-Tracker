const fetchData = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Fetch failed");
    } else {
      return response.json();
    }
  });
};

const fetchUserData = url => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error("Fetch failed");
    } else {
      return response.json();
    }
  });
};

const fetchPost = (url, options) => {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error("unable to favorite");
    } else {
      return response.json();
    }
  });
};

export { fetchPost, fetchData, fetchUserData };
