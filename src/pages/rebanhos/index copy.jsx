/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Rebanhos = () => {
  const [rebanhos, setRebanhos] = useState(null);

  useEffect(() => {
    const loadRebanhos = async () => {
      try {
        const response = await api.get("api/Rebanho?page=1&pageSize=10");

        if (response.data.error) {
          alert(response.data.error);
        } else {
          setRebanhos(response.data);
        }
      } catch (error) {
        console.error("Error fetching Rebanhos:", error);
      }
    };

    loadRebanhos();
  }, []);

  useEffect(() => {
    // Log the updated state in the next render cycle
    /* console.log("Rebanhos:", rebanhos); */
  }, [rebanhos]);

  return (
    <div>
      <h1 className="fw-bold p-5">Rebanhos</h1>
      <div className="container table-responsive">
        {rebanhos ? (
          <table className=" table table-hover container-table">
            <thead> 
              <tr>
                <th className="d-none d-md-table-cell fw-bold" scope="col">#</th>
                <th className="d-none d-md-table-cell fw-bold" scope="col">Rebanho</th>
                <th className="d-none d-md-table-cell fw-bold" scope="col">Descrição</th>
                <th className="d-none d-md-table-cell fw-bold" scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {rebanhos.map((rebanho) => (
                <tr key={rebanho.id}>
                  <th className="d-sm-table-cell" scope="row">{rebanho.id}</th>
                  <td className="d-sm-table-cell">{rebanho.nomeRebanho}</td>
                  <td>{rebanho.descriRebanho}</td>
                  <td>{rebanho.handle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading Rebanhos...</p>
        )}
      </div>
    </div>
  );
};
