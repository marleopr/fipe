import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import Header from "../components/Header"
import SearchPlaca from "../pages/SearchPlaca"
import SearchTabela from "../pages/SearchTabela"
import Info from "../pages/Info"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="placa" element={<SearchPlaca />} />
                <Route path="tabela" element={<SearchTabela />} />
                <Route path="info" element={<Info />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}