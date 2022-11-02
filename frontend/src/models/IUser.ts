export interface IUserModelSignUp {
  is_doctor: boolean,
  is_patient: boolean,
  email: string,
  password: string,
  profile: IProfile,
}

export interface IUserModelInfo {
  email: string,
  password: string,
  profile: IProfile,
  user_role: IUserRole[]
}

export interface IProfile {
  age: string,
  first_name: string,
  second_name: string,
  last_name: string,
  avatar:string
}

export interface IUserRole {
  role: string,
  code: number,
}
