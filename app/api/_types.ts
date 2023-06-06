import { ReactElement, ReactChildren } from "react";

export type TClient = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    status: boolean;
    comments?: string;
}

export type TClientState = {
    clients: TClient[];
    isLoading: boolean;
    error: string | null;
}