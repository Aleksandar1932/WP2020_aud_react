import React from 'react';

const productTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.price}</td>
            <td scope={"col"}>{props.term.quantity}</td>
            <td scope={"col"}>{props.term.category.name}</td>
            <td scope={"col"}>{props.term.manufacturer.name}</td>
        </tr>
    )
}

export default productTerm;

