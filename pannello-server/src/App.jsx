// src/App.jsx

import './App.css'
import { sistema, servers, avvisi } from "./dati"
import { contaPerStato, cpuMedia, piuLento, trovaServer } from "./calcoli"
import Intestazione from "./Intestazione"
import Riepilogo from "./Riepilogo"
import GrigliaServer from "./GrigliaServer"
import ServerInEvidenza from "./ServerInEvidenza"
import Avvisi from "./Avvisi"

function App() {
  const online = servers.filter(s => s.online).length;
  const cercato = "db-01";

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={online}
        totale={servers.length}
      />
      <Riepilogo
        ok={contaPerStato(servers, "ok")}
        attenzione={contaPerStato(servers, "attenzione")}
        critici={contaPerStato(servers, "critico")}
        offline={contaPerStato(servers, "offline")}
        mediaCpu={cpuMedia(servers)}
        lento={piuLento(servers)}
      />
      <GrigliaServer servers={servers} />
      <ServerInEvidenza
        cercato={cercato}
        server={trovaServer(servers, cercato)}
      />
      <Avvisi elenco={avvisi} />
    </div>
  )
}

export default App

/*
  RISPOSTE SFIDA 08:
  1. Se dati-blackout.js avesse sette server, nella griglia se ne vedrebbero comunque solo sei (da servers[0] a servers[5]), perché in GrigliaServer.jsx abbiamo scritto a mano sei componenti <SchedaServer /> con gli indici fissi da 0 a 5 (il settimo server, servers[6], verrebbe contato nei totali ma ignorato dalla griglia). Se invece avesse cinque server, la pagina diventerebbe bianca con un errore in console: <SchedaServer server={servers[5]} /> riceverebbe undefined e il tentativo di leggerne le proprietà fallirebbe.
  2. L'idea è l'interfaccia dichiarativa unita al flusso unidirezionale dei dati (data-driven UI): i componenti non contengono dati fissi, ma descrivono come deve apparire l'interfaccia in funzione delle props che ricevono da App. Cambiando la sorgente dati in cima all'albero (in App), i nuovi valori scendono automaticamente attraverso le props e tutti i componenti si aggiornano di conseguenza senza dover toccare il loro codice.
*/