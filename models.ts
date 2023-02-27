export interface IUser {
  userName: string;
  socketID: string;
}

export interface IMessage {
  id: string;
  name: string;
  socketID: string;
  text: string;
}

export type ITyping = string;
