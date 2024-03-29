/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Rebanhos = () => {
  const [rebanhos, setRebanhos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadRebanhos = async () => {
      try {
        const response = await api.get(
          `api/Rebanho?page=${currentPage}&pageSize=10`
        );

        if (response.data.error) {
          alert(response.data.error);
        } else {
          setRebanhos(response.data);
          setTotalPages(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching Rebanhos:", error);
      }
    };

    loadRebanhos();
  }, [currentPage]);

  useEffect(() => {
    // Log the updated state in the next render cycle
    /* console.log("Rebanhos:", rebanhos);
    console.log("currentPage:", currentPage);
    console.log("totalPages:", totalPages); */
  }, [rebanhos]);

  const handleNextPage = () => {
    console.log("totalPages:", rebanhos.length);
    if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    console.log("handlePrevPage:", currentPage);
    if (currentPage > 1) {
      // eslint-disable-next-line no-const-assign
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="fw-bold p-5">Rebanhos</h1>
      <div className="container table-responsive">
        {rebanhos ? (
          <div>
            <table className=" table table-hover container-table">
              {/* ... (seu código de tabela) */}
              <thead>
                <tr>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    #
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Rebanho
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Descrição
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {rebanhos.map((rebanho) => (
                  <tr key={rebanho.id}>
                    <th className="d-sm-table-cell" scope="row">
                      {rebanho.id}
                    </th>
                    <td className="d-sm-table-cell">{rebanho.nomeRebanho}</td>
                    <td>{rebanho.descriRebanho}</td>
                    <td>{rebanho.handle}</td>
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
          <p>Loading Rebanhos...</p>
        )}
      </div>
    </div>
  );
};
