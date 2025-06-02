import styles from './Cards.module.css';
import Image from 'next/image';
import { produtos } from '../../data/data_produtos';

export default function Cards() {
  // Função para determinar o padrão 3-2
  const getCardClass = (index) => {
    const positionInGroup = index % 5; // Padrão se repete a cada 5 cards (3+2)
    return positionInGroup < 3 ? styles.threeRow : styles.twoRow;
  };

  return (
    <div className={styles.container}>
      {produtos.map((produto, index) => (
        <div key={produto.id} className={`${styles.card} ${getCardClass(index)}`}>
          <div className={styles.imageContainer}>
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.content}>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>R$ {produto.preco.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
