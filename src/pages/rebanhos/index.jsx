/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

export const Rebanhos = () => {
  const [rebanhos, setRebanhos] = useState(null);

  useEffect(() => {
    const loadRebanhos = async () => {
      try {
        const response = await api.get("api/Rebanho");

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
    console.log("Rebanhos:", rebanhos);
  }, [rebanhos]);

  return (
    <div>
      <h2 className="container-table">Rebanhos</h2>
      {rebanhos ? (
        <table className="table table-hover container-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Rebanho</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {rebanhos.map((rebanho) => (
              <tr key={rebanho.id}>
                <th scope="row">{rebanho.id}</th>
                <td>{rebanho.nomeRebanho}</td>
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
  );
};
