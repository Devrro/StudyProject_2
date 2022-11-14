import {environment} from "../environments/environment"

const {URL} = environment;

export const user_urls = {
  register: `${URL}/users/sign_up`,
  login: `${URL}/auth/token`,
  refresh: `${URL}/auth/token/refresh`
}

export const boards_url = {
  me: `${URL}/users/me`,
  profile: `${URL}/users/profile`,
  all_users: `${URL}/users/all`,
  all_doctors: `${URL}/doctors`,
  all_patients: `${URL}/patients`,
}

export const doctors_urls = {
  doctor_patients: 'staff/doctor'
}
