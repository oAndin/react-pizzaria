import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound/Index";
import Cardapio from "../Pages/Cardapio";
import {Suspense} from 'react';

const Ways = () => {
    return (
        <>
        <Suspense>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />} >
                        <Route index element={<Home></Home>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cardapio" element={<Cardapio />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
        </>
    );
};

export default Ways;