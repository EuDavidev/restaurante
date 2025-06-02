import Styles from './CampoDeBusca.module.css'

export const CampoDeBusca = () => {
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
                <form action=""></form>
            </div>
        </div>
    )
}

