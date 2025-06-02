import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import AllProductsPage from './pages/AllProductsPage/AllProductsPage'
import AllSalesPage from './pages/AllSalesPage/AllSalesPage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import CategoryProductPage from './pages/CategoryProductPage/CategoryProductPage'
import CartPage from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function Navigation() {

    return (
        <>

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/categories/:categoryId' element={<CategoryProductPage />} />
                <Route path='/products' element={<AllProductsPage />} />
                <Route path='/products/:productId' element={<SingleProductPage />} />
                <Route path='/categories/:categoryId/products/:productId' element={<SingleProductPage />} />
                <Route path='/sales/:productId' element={<SingleProductPage />} />
                <Route path='/sales' element={<AllSalesPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default Navigation;
