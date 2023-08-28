import React from "react";
import Header from "../components/header/Header.tsx";

type IProps = {
    children: React.ReactNode
}

function MainLayout({children}: IProps) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default MainLayout;