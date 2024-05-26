import { Dispatch } from "react";

export interface DarkModeInit {
    mode: "on" | "off";
    setMode: Dispatch<"on" | "off"> | null;
}
