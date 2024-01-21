/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const AnimaisTable = () => {
  const [animais, setAnimais] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadAnimais = async ( mode ) => {
      try {
        const response = await api.get(
          `api/Animal?page=${currentPage}&pageSize=10`
        );

        if (response.data.error) {
          alert(response.data.error);
        } else {
          setAnimais(response.data);
          // Corrigindo o cálculo do totalPages
          setTotalPages(Math.ceil(response.data.totalItems / 10));
        }
      } catch (error) {
        console.error("Error fetching Animais:", error);
      }
    };

    loadAnimais();
  }, [currentPage]);

  useEffect(() => {
    // Log the updated state in the next render cycle
    /*  console.log("Animais:", animais);
    console.log("currentPage:", currentPage);
    console.log("totalPages:", totalPages); */
  }, [animais]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container table-responsive">
        {animais ? (
          <div>
            <table className=" table table-hover container-table">
              <thead>
                <tr>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    #
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Brinco
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Rebanho
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Propriedade
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Status
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Pelagem
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {animais.map((animal) => (
                  <tr key={animal.idanimal}>
                    <th className="d-sm-table-cell" scope="row">
                      {animal.idanimal}
                    </th>
                    <td className="d-sm-table-cell">{animal.numeroBrincos}</td>
                    <td>{animal.rebanho.nomeRebanho}</td>
                    <td>{/* {animal["propriedade"]["localidade"]} */}</td>
                    {/* <td>{animal.propriedade.data.nomePropriedade}</td> */}
                    <td>{animal.status}</td>
                    <td>{animal.pelagem}</td>
                    <td>{}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center my-5">
              <button
                className="btn btn-secondary me-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Próximo
              </button>
            </div>
          </div>
        ) : (
          <p>Loading Animais...</p>
        )}
      </div>
  );
};
