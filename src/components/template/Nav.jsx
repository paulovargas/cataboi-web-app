/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon justify-content-end"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">Cataboi</a>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/home">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/home/animais">Animais</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/home/eventos">Eventos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/home/rebanhos">Rebanhos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/home/propriedades">Propriedades</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Brinco ..." aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</div>
</nav>