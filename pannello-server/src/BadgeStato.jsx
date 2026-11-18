// src/BadgeStato.jsx

export default function BadgeStato({ stato }) {
  const etichetta =
    stato === "ok"
      ? "OK"
      : stato === "attenzione"
      ? "Attenzione"
      : stato === "critico"
      ? "Critico"
      : "Offline";

  return <span className={`badge badge-${stato}`}>{etichetta}</span>;
}