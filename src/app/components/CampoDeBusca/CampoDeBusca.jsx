'use client';

import { useState } from "react";
import Styles from './CampoDeBusca.module.css'
import { retornarProdutos, buscarProduto, filtrarProdutos } from "../../services";
import Image from "next/image";
import lupa from "../../../../public/assets/search.png"

export const CampoDeBusca = () => {
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
        <div className={Styles.container}>
            <div className={Styles.filters}>
                <button onClick={() => handleFiltrarProdutos("Entradas")}>Entradas</button>
                <button onClick={() => handleFiltrarProdutos("Massas")}>Massas</button>
                <button onClick={() => handleFiltrarProdutos("Carnes")}>Carnes</button>
                <button onClick={() => handleFiltrarProdutos("Bebidas")}>Bebidas</button>
                <button onClick={() => handleFiltrarProdutos("Saladas")}>Saladas</button>
                <button onClick={() => handleFiltrarProdutos("Sobremesa")}>Sobremesas</button>
            </div>
            <div className={Styles.search}>
                <Image src={lupa} alt="search" width={16} height={16}/>
                <input
                    type="text"
                    value={textoBusca}
                    onChange={(event) => handleBuscarProdutos(event.target.value)}
                    placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                />
            </div>
            {/* <div className={Styles.produtos}>
                {listaProdutos.map((produto) => (
                    <div key={produto.id} className={Styles.produto}>
                        <Image src={produto.imagem} alt={produto.nome} width={200} height={200}/>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <span>R$ {produto.preco.toFixed(2)}</span>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

