import React, { Component } from "react";

import Layout from "./containers/Layout/Layout";
import Clients from "./components/Clients/Clients";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Clients></Clients>
        </Layout>
      </div>
    );
  }
}

export default App;
