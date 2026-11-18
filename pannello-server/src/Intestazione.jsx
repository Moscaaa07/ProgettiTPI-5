// src/Intestazione.jsx
export default function Intestazione({ nome, aggiornato, online, totale }) {
  return (
    <header className="intestazione">
      <h1>{nome}</h1>
      <p>
        {online} server online su {totale} · aggiornato il {aggiornato}
      </p>
    </header>
  );
}