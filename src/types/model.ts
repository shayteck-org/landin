import { Dispatch, SetStateAction } from "react";
export type ApiRes<T> = {
  result: T;
  messages: string[];
  hasError: boolean;
};
export type SharedContextModel = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};
export interface BasicElemetProps {
  className?: string;
  id?: string;
}
