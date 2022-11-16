class MainApi {
  constructor({headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
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
  baseUrl: 'localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
  }
});