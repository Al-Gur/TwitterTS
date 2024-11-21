import {createContext} from "react";
import {TwitterContextValue} from "./types.d.ts";

export const TwitterContext = createContext<Partial<TwitterContextValue>>({});
