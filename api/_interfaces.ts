/* Clients API */

export interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: boolean;
  comments?: string;
}

export interface IClientsState {
  clients: IClient[];
}
