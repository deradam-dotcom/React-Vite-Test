
export type User = {
  id: number;
  name: string;
  email: string;
  phone:string;
  username:string;
  website:string;
  address:Address;
  company:Company;
}

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

type Geo ={
  lat: string;
  lng: string;
}

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}