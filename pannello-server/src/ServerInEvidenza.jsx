// src/ServerInEvidenza.jsx

import SchedaServer from "./SchedaServer";

export default function ServerInEvidenza({ cercato, server }) {
  return (
    <section className="evidenza">
      <h2>Server cercato: {cercato}</h2>
      {server === undefined ? (
        <p className="non-trovato">Nessun server si chiama {cercato}</p>
      ) : (
        <SchedaServer server={server} />
      )}
    </section>
  );
}