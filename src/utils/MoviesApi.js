class MoviesApi {
  constructor({headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: this.getMovies,
      headers: this._headers,
    })
    .then(res => this._checkResponse(res));
  }
}

export const moviwsApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})