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
};

/* Alerts State */

export type TAlertState = {
  currentElement: any | null;
  isOpen: boolean;
};
