import { ISubscription } from "./subscription";

export interface IOuting {
    id: string;
    label: string;
    descritpion: string;
    time: Date;
    duration: number;
    owner: string;
    place:  string;
    max: number;
    subscriptions: ISubscription[];
}
