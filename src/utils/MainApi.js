class MainApi {
  constructor({headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(response, handleLogOut) {
    if(response.ok)
      return response.json()   
    if(response.status === 401) {
      handleLogOut()
    }
    return Promise.reject(`Ошибка ${response.status}`)
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
      if(response.ok)
        return response.json()   
        throw new Error("Что-то пошло не так...")
    })
    .then((res) => {
      return res;
    })
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
    .then((response) => {
      if(response.ok)
        return response.json()   
      if(response.status === 401) throw new Error("Неверный логин или пароль")
      throw new Error("Что-то пошло не так...")
    }
    )
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        return data;
      } 
    })
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
    .then(response => {
      if(response.ok)
        return response.json()   
      if(response.status === 401) throw new Error("Пользователь не авторизован")
        throw new Error("Что-то пошло не так...")
    })
    .then(data => data)
  }

  getUserInfo(handleLogOut) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this.getHeader(),
  })
   .then(res => this._checkResponse(res, handleLogOut))
  }

  patchUserInfo(name, email, handleLogOut) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this.getHeader(),
        body: JSON.stringify({
            name,
            email
      })
    })
    .then(res => this._checkResponse(res, handleLogOut))
  }

  getMovies(handleLogOut) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this.getHeader(),
    })
    .then(res => this._checkResponse(res, handleLogOut))
  }

  addMovies(data, handleLogOut) {
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
    .then(res => this._checkResponse(res, handleLogOut))
  }

  deleteMovies(movieId, handleLogOut) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.getHeader(),
    })
    .then(res => this._checkResponse(res, handleLogOut))
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