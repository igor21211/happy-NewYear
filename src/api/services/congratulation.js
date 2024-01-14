import api from "../initial";

export const congratulationsList = {
  get: () =>
    api
      .get(`congratulation`)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      }),
  getById: (id) =>
    api
      .get(`congratulation/${id}`)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      }),
  delete: (id) =>
    api
      .delete(`congratulation/${id}`)
      .then((res) => res)
      .catch((error) => {
        throw new Error(error);
      }),
  post: (book) =>
    api
      .post("congratulation", book)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      }),
  put: (book, id) =>
    api
      .put(`congratulation/${id}`, book)
      .then((res) => res.data)
      .catch((error) => {
        throw new Error(error);
      }),
};
