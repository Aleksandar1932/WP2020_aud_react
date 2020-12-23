import React from 'react';

const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Description</th>
                        </thead>

                        <tbody>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.description}</td>
                                </tr>
                            );
                        })}

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;