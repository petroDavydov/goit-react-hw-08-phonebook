import axios from "axios";
// дефолтний URL
// axios.defaults.baseURL = "https://61962ffbaf46280017e7debe.mockapi.io";
const BASE_URL = "https://61962ffbaf46280017e7debe.mockapi.io"; //дефолтний URL перенесений в переменную
// Запрос
export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
}
// Добавление
export async function addContact(contact) {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
  return data;
}
// Удаление по Id
export async function deleteContact(id) {
  await axios.delete(`${BASE_URL}/contacts/${id}`);
  return id;
}
