import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Main } from "../../pages/main";


export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}