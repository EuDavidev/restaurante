'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { CampoDeBusca } from "./components/CampoDeBusca";
import { retornarProdutos, buscarProduto, filtrarProdutos } from "./services";

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState(retornarProdutos);
  const [textoBusca, setTextoBusca] = useState("");

  const handleFiltrarProdutos = (plataforma) => {
    setListaProdutos(filtrarProdutos(plataforma));
    setTextoBusca("");
  }

  const handleLimparFiltro = () => {
    setListaProdutos(retornarProdutos());
    setTextoBusca("");
  }

  const handleBuscarProdutos = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaProdutos(buscarProduto(textoDigitado));
  };
  return (
    <div>
      <CampoDeBusca/>
    </div>
  );
}
