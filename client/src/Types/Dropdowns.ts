import { Entity } from "./Entity";

export interface Dropdown {
  [key: string]: Entity;
}

export interface Dropdowns {
  [key: string]: Dropdown;
}
