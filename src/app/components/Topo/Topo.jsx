import Styles from './Topo.module.css';


export default function Topo() {
  return (
    <header className={Styles.imgContainer}>
      <img src="/banner.png" alt="Restaurant"/>
      <div className={Styles.container}>
        <h1 className={Styles.texto}>Restaurante</h1>
        <p className={Styles.paragrafo}>
          De Pratos clássicos a criação surpreendentes. 
          Nosso cardápio é um requinte de sabores refinados
        </p>
      </div>
    </header>
  );
}
