import api from "../initial";

export const congratulationsList = {
  get: () =>
    api
      .get(`congratulation`)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  getById: (id) =>
    api
      .get(`congratulation/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  delete: (id) =>
    api
      .delete(`congratulation/${id}`)
      .then((res) => res)
      .catch((error) => console.log(error)),
  post: (book) =>
    api
      .post("congratulation", book)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  put: (book, id) =>
    api
      .put(`congratulation/${id}`, book)
      .then((res) => res.data)
      .catch((error) => console.log(error)),
};
