// src/Avvisi.jsx

export default function Avvisi({ elenco }) {
  return (
    <section className={elenco.length === 0 ? "avvisi avvisi-vuoto" : "avvisi"}>
      <h2>Avvisi ({elenco.length})</h2>
      <p>{elenco.length === 0 ? "Nessun avviso" : elenco.join(" · ")}</p>
    </section>
  );
}