import { ReactElement, ReactChildren } from "react";

/* Clients API */

export type TClient = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: boolean;
  comments?: string;
};

export type TClientsState = {
  clients: TClient[];
  isLoading: boolean;
  error: string | null;
};
