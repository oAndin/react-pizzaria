import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound/Index";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />} >
                        <Route index element={<Home></Home>} />
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Ways;