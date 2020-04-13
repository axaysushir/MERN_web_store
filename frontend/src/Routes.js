import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory'
import ManageCategory from './admin/ManageCategory'
import AddProduct from './admin/AddProduct'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import UpdateCategory from './admin/updateCategory'
import Orders from './admin/Orders'
import Cart from './core/Cart'
import Contact from './core/Contact'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/cart' exact component={Cart} />
                <Route path='/contact' exact component={Contact} />
                <PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashBoard} />
                <AdminRoute path='/admin/create/category' exact component={AddCategory} />
                <AdminRoute path='/admin/categories' exact component={ManageCategory} />
                <AdminRoute path='/admin/create/product' exact component={AddProduct} />
                <AdminRoute path='/admin/products' exact component={ManageProducts} />
                <AdminRoute path='/admin/product/update/:productId' exact component={UpdateProduct} />
                <AdminRoute path='/admin/category/update/:categoryId' exact component={UpdateCategory} />
                <AdminRoute path='/admin/orders' exact component={Orders} />
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes