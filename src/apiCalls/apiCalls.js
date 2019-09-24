import { BASE_URL } from '../util/path';

const fetchData = url => {
	return fetch(url).then(response => {
		if (!response.ok) {
			throw new Error('Fetch failed');
		} else {
			return response.json();
		}
	});
};

const fetchUserData = url => {
	return fetch(url).then(response => {
		if (!response.ok) {
			throw new Error('Fetch failed');
		} else {
			return response.json();
		}
	});
};

const fetchPost = async (url, options) => {
	try {
		const response = await fetch(url, options);
		return response.json();
	} catch (e) {
		console.log('Unable to Add a new note', e);
	}
};

const fetchAddUser = async (name, email, password) => {
  const url = `${BASE_URL}/users`;
	const body = { email, name, password };
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
  };
  
	try {
		const response = await fetch(url, options);
		return response.json();
	} catch (e) {
		console.log('Unable to Add a new note', e);
	}
};

const fetchUserLogin = async (email, password) => {
  const url = `${BASE_URL}/users/login`;
  const body = {email, password};
  const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
  };
  
  try {
		const response = await fetch(url, options);
		return response.json();
	} catch (e) {
		console.log('Unable to Add a new note', e);
	}
};

const fetchFavoriteMovies = async (id) => {
  const url = `${BASE_URL}/movies/favorites/${id}`;

  try {
    const favorites = await fetch(url);
    return favorites.json();
  } catch (e) {
    console.log('Unable to Add a new note', e);
  }
}

export { fetchPost, fetchData, fetchUserData, fetchAddUser, fetchUserLogin, fetchFavoriteMovies };
