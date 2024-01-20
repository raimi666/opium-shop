import React from "react";

export type RouteType = {
    path: string,
    name: string,
    element: React.ReactNode,
    nodeRef: React.RefObject<unknown>,
}
