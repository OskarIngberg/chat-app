import { Messages } from "src/app/interfaces/messages";
import { Users } from "src/app/interfaces/users";

export interface Message {
    _id: number,
    image: string,
    messages: Array<Messages>,
    title: string,
    users: Array<Users>
}