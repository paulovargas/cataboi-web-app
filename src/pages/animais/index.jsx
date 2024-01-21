/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AnimaisTable } from "../../components/tables/AnimaisTable";
import { AnimaisForm } from "../../components/forms/AnimaisForm";

export const Animais = () => {
  const [animais, setAnimais] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [mode, setMode] = useState("table");

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

  const handleMode = () => {
    setMode("form");
  };
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
    <div className="w-100">
      <div className="flex">
        <h1 className="fw-bold p-5">Animais</h1>
        {mode === "table" ? (
          <div className="">
            <div className="container">
              <button
                className="btn btn-secondary float-end mb-5"
                onClick={handleMode}
              >
                Adicionar Aninal
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {mode === "table" ? <AnimaisTable /> : ""}
      {mode === "form" ? <AnimaisForm /> : ""}
    </div>
  );
};
