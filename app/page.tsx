import Hero from "./components/hero";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan.tsx";

import "./nadda-style.css";

export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      
    </section>
  );
}