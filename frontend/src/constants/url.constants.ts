import {environment} from "../environments/environment"

const {URL} = environment;

export const user_urls = {
  register: `${URL}/api/users`,
  login: `${URL}/api/token`,
  refresh: `${URL}/api/token/refresh`
}

export const boards_url = {
  all_users: `${URL}/users`,
  all_doctors: `${URL}/doctors`,
  all_patients: `${URL}/patient`
}
