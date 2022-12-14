class MoviesApi {
  constructor({headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  }

  getMovies() {
    return fetch(moviesApi._baseUrl, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._checkResponse(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default moviesApi