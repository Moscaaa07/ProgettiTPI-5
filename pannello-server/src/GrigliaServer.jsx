// src/GrigliaServer.jsx

import SchedaServer from "./SchedaServer";

export default function GrigliaServer({ servers }) {
  return (
    <section className="griglia">
      <SchedaServer server={servers[0]} />
      <SchedaServer server={servers[1]} />
      <SchedaServer server={servers[2]} />
      <SchedaServer server={servers[3]} />
      <SchedaServer server={servers[4]} />
      <SchedaServer server={servers[5]} />
    </section>
  );
}