class HttpService {
  get(url) {
    return fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((error) => error.message);
  }

  post(url, data) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => error.message);
  }
}
