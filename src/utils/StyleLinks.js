import React, { Component } from 'react';

export default class StyleLinks extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/primereact@4.2.0/resources/themes/nova-light/theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/primereact@4.2.0/resources/primereact.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/primeicons@2.0.0/primeicons.css"
        />
      </div>
    );
  }
}
