import styles from "./page.module.css";
import { CampoDeBusca } from "./components/CampoDeBusca/CampoDeBusca";
import Topo from "./components/Topo/Topo";
import Cards from "./components/Cards";


export default function Home() {
  
  return (
    <div>
      <Topo/>
      <CampoDeBusca/>
      <Cards/>
    </div>
  );
}
