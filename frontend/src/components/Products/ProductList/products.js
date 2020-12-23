import React from 'react';
import ProductTerm from '../ProductTerm/productTerm'

const products = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Price</th>
                        <th scope={"col"}>Quantity</th>
                        <th scope={"col"}>Category</th>
                        <th scope={"col"}>Manufacturer</th>
                        </thead>

                        <tbody>
                        {props.products.map((term) => {
                            return (
                                <ProductTerm term={term}/>
                            );
                        })}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default products;