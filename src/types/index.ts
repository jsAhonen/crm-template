export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    streetAddress: string;
    zipcode: string;
    city: string;
}

export interface Worker {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    streetAddress: string;
    zipcode: string;
    city: string;
}

export interface Order {
    id: number;
    date: Date;
    title: string;
    status: OrderStatus;
    description: string;
    location: number;
    workers: number[];
}

export interface Location {
    id: number;
    streetAddress: string;
    zipcode: string;
    city: string;
    customer: number;
}

export type OrderStatus = "UNHANDLED" | "ACCEPTED" | "DECLINED" | "COMPLETED" | "PAID"