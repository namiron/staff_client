import { IEmployee } from "./IEmployeeTypes";

export interface IUserGet {
  id?: string;
  email: string;
  password: string;
  name: string;
  token?: string | undefined;
  employees?: IEmployee[];
}

export interface IUserSent {
  email: string;
  password: string;
  name?: string;
}
