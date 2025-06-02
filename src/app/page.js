'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { CampoDeBusca } from "./components/CampoDeBusca/CampoDeBusca";


export default function Home() {
  
  return (
    <div>
      <CampoDeBusca/>
    </div>
  );
}
