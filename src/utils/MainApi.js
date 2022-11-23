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
      headers: this.getHeader(),
  })
   .then(res => this._checkResponse(res))
  }

  patchUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this.getHeader(),
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
      headers: this.getHeader(),
    })
    .then(res => this._checkResponse(res))
  }

  addMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this.getHeader(), // this._headers,
      body: JSON.stringify({
        image: (`https://api.nomoreparties.co/${data.image.url}`),
        year: data.year,        
        duration: data.duration,
        director: data.director,
        description: data.description,
        country: data.country || 'Данных нет',
        trailerLink: data.trailerLink || 'https://www.youtube.com',
        thumbnail: (`https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`),
        movieId: data.id,
        nameRU: data.nameRU || 'Данных нет',
        nameEN: data.nameEN || 'Данных нет'})
    })
    .then(res => this._checkResponse(res))
  }

  deleteMovies(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.getHeader(),
    })
    .then(res => this._checkResponse(res))
  }

  headersRefresh() {
    this._headers = {
      'Content-Type': 'application/json',
      'Autorization': `Bearer ${localStorage.getItem('token')}`
    };
  }

  getHeader(){
    return {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    };
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.etopchievadp.students.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
  }
});

export default mainApi;