export type User = {
    id: string,
    name: string,
    email: string,
};

export type Query = {
    allUsers: User[]
};

export type RealApiData = {
    id: number,
    userId: number,
    title: string,
    completed: boolean,
};

export type ConcatenatedData = {
    id: string;
    email: string;
    name: string;
    title: string;
    completed: boolean;
}

export type SingleUserData = {
    id: string;
    userId: number;
    title: string;
    completed: boolean;
}
