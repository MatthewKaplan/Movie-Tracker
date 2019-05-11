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


export { fetchPost };
