import React, { ReactElement } from "react";

type LayoutProps = {
    children: ReactElement;
}

export const Layout:React.FC<LayoutProps> = ({ children }) => {
    return(
        <>{{children}}</>
    )
}