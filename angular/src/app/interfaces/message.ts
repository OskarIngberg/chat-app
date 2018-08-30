import { IMessages } from "src/app/interfaces/messages";
import { IUsers } from "src/app/interfaces/users";

export interface IMessage {
    _id: number,
    image: string,
    messages: Array<IMessages>,
    title: string,
    users: Array<IUsers>
}