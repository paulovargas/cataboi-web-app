/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Eventos = () => {
  const [eventos, setEventos] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadEventos = async () => {
      try {
        const response = await api.get(
          `api/Evento?page=${currentPage}&pageSize=10`
        );

        if (response.data.error) {
          alert(response.data.error);
        } else {
          setEventos(response.data);
          setTotalPages(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching Eventos:", error);
      }
    };

    loadEventos();
  }, [currentPage]);

  useEffect(() => {
    // Log the updated state in the next render cycle
    /* console.log("Eventos:", eventos);
    console.log("currentPage:", currentPage);
    console.log("totalPages:", totalPages); */
  }, [eventos]);

  const handleNextPage = () => {
    /* console.log("totalPages:", Eventos.length); */
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
      <h1 className="fw-bold p-5">Eventos</h1>
      <div className="container table-responsive">
        {eventos ? (
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
                    Evento
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Local
                  </th>
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Data
                  </th>                  
                  <th className="d-none d-md-table-cell fw-bold" scope="col">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventos.map((evento) => (
                  <tr key={evento.eventoId}>
                    <th className="d-sm-table-cell" scope="row">
                      {evento.eventoId}
                    </th>
                    <td className="d-sm-table-cell">{evento.nomeRebanho}</td>
                    <td>{evento.eventoNome}</td>
                    <td>{evento.eventoLocal}</td>
                    <td>{evento.dataEvento}</td>
                    <td>{evento.handle}</td>
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
          <p>Loading Eventos...</p>
        )}
      </div>
    </div>
  );
};
