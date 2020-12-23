import './App.css';
import React, {Component} from "react";
import Manufacturers from "../Manufacturers/manufacturers"
import Categories from "../Categories/categories"
import Products from "../Products/ProductList/products"
import Header from "../Header/header"
import EShopService from "../../repository/eshopRepository";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            categories: [],
            products: []
        }

    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Route path={"/manufacturers"} exact
                               render={() => <Manufacturers manufacturers={this.state.manufacturers}/>}/>

                        <Route path={"/categories"} exact
                               render={() => <Categories categories={this.state.categories}/>}/>

                        <Route path={"/products"} exact
                               render={() => <Products products={this.state.products}/>}/>

                        <Redirect to={"/products"}/>
                    </div>
                </main>
            </Router>
        );
    }

    loadManufacturers = () => {
        EShopService.fetchManufacturers().then((data) => {
            this.setState({
                    manufacturers: data.data
                }
            )
        });
    }

    loadCategories = () => {
        EShopService.fetchCategories().then((data) => {
            this.setState({
                    categories: data.data
                }
            )
        });
    }

    loadProducts = () => {
        EShopService.fetchProducts().then((data) => {
            this.setState({
                    products: data.data
                }
            )
        });
    }


    componentDidMount() {
        this.loadManufacturers();
        this.loadProducts();
        this.loadCategories();
    }


}

export default App;
