class MainApi {
  constructor({headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password, 
          })
    })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  };

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
       })
    })
    .then((response => response.json()))
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        return data;
      } 
    })
    .catch(err => console.log(err))
  };

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => data)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
  })
   .then(res => this._checkResponse(res))
  }

  patchUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name,
            email
      })
    })
    .then(res => this._checkResponse(res))
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._checkResponse(res))
  }

  addMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(res => this._checkResponse(res))
  }

  deleteMovies(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => this._checkResponse(res))
  }

  headersRefresh() {
    this._headers = {
      'Content-Type': 'application/json',
      'Autorization': `Bearer ${localStorage.getItem('token')}`
    };
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
  }
});

export default mainApi;