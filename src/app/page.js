'use client';

import { useState } from "react";
import styles from "./page.module.css";
import { CampoDeBusca } from "./components/CampoDeBusca/CampoDeBusca";
import Topo from "./components/Topo/Topo";
import Cards from "./components/Cards";
import { retornarProdutos } from "./services";


export default function Home() {
  const [listaProdutos, setListaProdutos] = useState(retornarProdutos());
  const [textoBusca, setTextoBusca] = useState("");

  return (
    <div className={styles.wrapper}>
      <Topo/>
      <div className={styles.spacerTopoFiltros}/>
      <CampoDeBusca
        listaProdutos={listaProdutos}
        setListaProdutos={setListaProdutos}
        textoBusca={textoBusca}
        setTextoBusca={setTextoBusca}
      />
      <div className={styles.spacer}/>
      <Cards produtos={listaProdutos}/>
    </div>
  );
}
