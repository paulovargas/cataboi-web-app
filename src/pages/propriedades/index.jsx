/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Propriedades = () => {
  const [Propriedades, setPropriedades] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadPropriedades = async () => {
      try {
        const response = await api.get(
          `api/Propriedade?page=${currentPage}&pageSize=10`
        );

        if (response.data.error) {
          alert(response.data.error);
        } else {
          setPropriedades(response.data);
          setTotalPages(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching Propriedades:", error);
      }
    };

    loadPropriedades();
  }, [currentPage]);

  useEffect(() => {
    // Log the updated state in the next render cycle
    /* console.log("Propriedades:", Propriedades);
    console.log("currentPage:", currentPage);
    console.log("totalPages:", totalPages); */
  }, [Propriedades]);

  const handleNextPage = () => {
    console.log("totalPages:", Propriedades.length);
    if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    /* console.log("handlePrevPage:", currentPage); */
    if (currentPage > 1) {
      // eslint-disable-next-line no-const-assign
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="fw-bold p-5">Propriedades</h1>
      <div className="container table-responsive">
        {Propriedades ? (
          <div>
            <table className=" table table-hover container-table">
              {/* ... (seu código de tabela) */}
              <thead>
                <tr>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    #
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Nome
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Localidade
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {Propriedades.map((propriedade) => (
                  <tr key={propriedade.id}>
                    <th className="d-sm-table-cell" scope="row">
                      {propriedade.id}
                    </th>
                    <td className="d-sm-table-cell">{propriedade.nomePropriedade}</td>
                    <td>{propriedade.localidade}</td>
                    <td>{propriedade.handle}</td>
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
                disabled={totalPages < 10}
              >
                Próximo
              </button>
            </div>
          </div>
        ) : (
          <p>Loading Propriedades...</p>
        )}
      </div>
    </div>
  );
};
