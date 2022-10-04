export interface IUserModel{
  email:string,
  password:string,
  profile:IProfile,
}

export interface IProfile{
  age:string,
  first_name:string,
  second_name:string,
  last_name:string,
}
