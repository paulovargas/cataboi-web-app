/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export const AnimaisForm = (mode) => {
  const [animais, setAnimais] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [modo, setMode] = useState(mode);

  useEffect(() => {
    const loadAnimais = async () => {
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
    <>
      <div className="container">
        <h3 className="mb-5">Adicionar</h3>
        <form class="row g-3">
          <div class="col-md-3">
            <label class="form-label">
              Brinco
            </label>
            <input type="email" class="form-control" />
          </div>
          <div class="col-md-3">
            <label for="inputPassword4" class="form-label">
              Espécie
            </label>
            <input type="password" class="form-control" />
          </div>
          <div class="col-md-3">
            <label class="form-label">
              Data de nascimento
            </label>
            <input
              type="date"
              class="form-control"
            />
          </div>
          <div class="col-md-3">
            <label class="form-label">
              Status
            </label>
            <select class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="inputAddress2" class="form-label">
              Raça
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-3">
            <label for="inputCity" class="form-label">
              Pelagem
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          
          <div class="col-md-3">
            <label class="form-label">
              Peso
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-3">
            <label class="form-label">
              Rebanho
            </label>
            <select class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">
              Propriedade
            </label>
            <select class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">
              Descrição
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
          {/* <div className="d-grid">
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary">
              Sign in
            </button>
          </div>
          </div> */}

          <div className="col-12 d-flex justify-content-end mt-5 p-3">
            <button
              className="btn btn-secondary"
              style={{ width: "200px" }}
              onClick={() => {
                setMode("form");
              }}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "200px" }}
              onClick={() => {}}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
