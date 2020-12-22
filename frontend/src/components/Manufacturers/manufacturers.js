import React from "react";

const manufacturers = (props) => {

    return (
      <div className={"container mm-4 mt-5"}>
          <div className={"row"}>
              <div className={"table-responsive"}>
                  <table className={"table table-striped"}>
                      <thead>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Address</th>
                      </thead>

                      <tbody>
                      {props.manufacturers.map((term) => {
                          return (
                              <tr>
                                  <td>{term.name}</td>
                                  <td>{term.address}</td>
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

export default manufacturers;