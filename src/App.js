import React from 'react';

import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const url = 'https://public-api.wordpress.com/wp/v2/sites/dangstuffandjunk.home.blog/posts?_fields=id,date,link,title,content,categories,tags,jetpack_featured_media_url';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ data: data }));
  }


  render() {
    if (this.state.data) {
      const cards = this.state.data.map((cardData, i) => {
        return <Card key={i} data={cardData} />
      });

      return (
        <main>
          {cards}
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
