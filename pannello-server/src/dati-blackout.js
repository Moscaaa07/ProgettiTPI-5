// src/dati-blackout.js — NON MODIFICARE. Gli stessi sei server, tutti spenti.
// Dati inventati per l'esercizio.

export const sistema = {
  nome: "Piattaforma Ordini",
  aggiornato: "11/11/2026 alle 03:00"
}

export const servers = [
  { nome: "web-01", ruolo: "Server web", sede: "Milano", ip: "10.0.1.11", online: false, cpu: null, latenza: null, servizi: [] },
  { nome: "web-02", ruolo: "Server web", sede: "Milano", ip: "10.0.1.12", online: false, cpu: null, latenza: null, servizi: [] },
  { nome: "db-01", ruolo: "Database", sede: "Milano", ip: "10.0.2.21", online: false, cpu: null, latenza: null, servizi: [] },
  { nome: "db-02", ruolo: "Database", sede: "Francoforte", ip: "10.1.2.22", online: false, cpu: null, latenza: null, servizi: [] },
  { nome: "cache-01", ruolo: "Cache", sede: "Francoforte", ip: "10.1.3.31", online: false, cpu: null, latenza: null, servizi: [] },
  { nome: "backup-01", ruolo: "Backup", sede: "Francoforte", ip: "10.1.4.41", online: false, cpu: null, latenza: null, servizi: [] }
]

export const avvisi = []