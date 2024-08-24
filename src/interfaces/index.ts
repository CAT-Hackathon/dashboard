export interface Icompanies {
  id: string;
  name: string;
  description: string;
  logo: string;
  phone: string;
  address: string;
  website: string;
  industry: string;
  email: string;
}

export interface admins {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_link: string;
}

export interface users {
  id: string;
  name: string;
  email: string;
  phone: string;
  image_link: string;
}
export interface addUser {
  name: string;
  email: string;
  phone: string;
  role: string;
  password: string;
}
export interface addCompany {
  phone: string;
  website: string;
  name: string;
  address: string;
  email: string;
  description: string;
  industry: string;
  logo: string;
}
export interface Ijobs {
  name: string;
  description: string;
  company_id?: string;
  contact_email: string;
  contact_phone: string;
  logo: string;
  field: string;
}
export interface ICompany {
  company: Icompanies;
  jobs: Ijobs;
}
