import React, { Component } from "react";

import Layout from "./containers/Layout/Layout";
import Clients from "./components/Clients/Clients";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>FUTURO => Grafici</p>
          <p>ORA => Singola pagina di insert clienti</p>
          <p>Componente in lavorazione</p>
          <Clients></Clients>
        </Layout>
      </div>
    );
  }
}

export default App;
