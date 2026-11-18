// src/SchedaServer.jsx

import { statoServer } from "./calcoli";
import BadgeStato from "./BadgeStato";

export default function SchedaServer({ server }) {
  const { nome, ruolo, sede, ip, cpu, latenza, servizi, manutenzione } = server;
  const stato = statoServer(server);

  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>
        {nome} <BadgeStato stato={stato} />
      </h3>
      <p className="ruolo">
        {ruolo} · {sede} · {ip}
      </p>
      <p>CPU: {cpu === null ? "—" : `${cpu}%`}</p>
      <p>Latenza: {latenza === null ? "—" : `${latenza} ms`}</p>
      <p>Servizi: {servizi.length === 0 ? "nessuno" : servizi.join(", ")}</p>
      <p>
        Manutenzione:{" "}
        {manutenzione
          ? `${manutenzione.data}, ${manutenzione.motivo}`
          : "nessuna in programma"}
      </p>
    </div>
  );
}