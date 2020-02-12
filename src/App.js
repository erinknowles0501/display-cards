import React from 'react';

import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const url = 'https://public-api.wordpress.com/wp/v2/sites/dangstuffandjunk.home.blog/posts?_fields=id,date,link,content,categories,tags,jetpack_featured_media_url';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ data: data }));
  }


  render() {
    if (this.state.data) {
      return (
        <main>
          <Card />
        </main>
      );
    } else {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      )
    }
  }
}

export default App;
