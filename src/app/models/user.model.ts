import {Role} from "./role.enum";

export class User {
  id: number|undefined;
  email: string = "";
  password: string = "";
  name: string = "";
  surName: string = "";
  codiceFiscale: string = "";
  accessToken: string = "";
  refreshToken: string = "";
  role: Role = Role.USER;
}
