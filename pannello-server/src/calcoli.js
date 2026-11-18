// src/calcoli.js

export const SOGLIE = { attenzione: 70, critico: 90 };

export function statoServer(server) {
  return !server.online
    ? "offline"
    : server.cpu >= SOGLIE.critico
    ? "critico"
    : server.cpu >= SOGLIE.attenzione
    ? "attenzione"
    : "ok";
}

export function contaPerStato(servers, stato) {
  return servers.filter(s => statoServer(s) === stato).length;
}

// --- RICHIESTA 3 ---

export function cpuMedia(servers) {
  const accesi = servers.filter(s => s.online);
  if (accesi.length === 0) return null;
  const somma = accesi.reduce((acc, s) => acc + s.cpu, 0);
  return somma / accesi.length;
}

export function piuLento(servers) {
  const accesi = servers.filter(s => s.online);
  return accesi.reduce(
    (max, s) => (max === null || s.latenza > max.latenza ? s : max),
    null
  );
}

export function trovaServer(servers, nome) {
  return servers.find(s => s.nome === nome);
}