const fetchData = (url) => {
  return fetch(`https://api.themoviedb.org/3${url}`)
    .then(response => {
      if(!response.ok) {
        throw new Error("Fetch failed")
      } else {
        return response.json()
      }}
    )
}

const fetchNewsData = (url) => {
  return fetch(`https://api.nytimes.com/svc${url}`)
    .then(response => {
      if(!response.ok) {
        throw new Error("Fetch failed")
      } else {
        return response.json()
      }}
    )
}

const fetchUserData = (url) => {
  return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error("Fetch failed")
      } else {
        return response.json()
      }}
    )
}

const fetchPost = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if(!response.ok) {
        throw new Error("Email or password incorrect")
      } else {
        return response.json()
      }}
    )
}


export { fetchPost, fetchData, fetchNewsData, fetchUserData };
