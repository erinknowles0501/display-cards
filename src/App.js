import React from 'react';

import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'both'
    };
    this.getCards();

    this.handleChange = this.handleChange.bind(this);
  }

  getCards(type) {
    let url = '';
    if (type === 'dog') {
      url = 'https://public-api.wordpress.com/wp/v2/sites/dangstuffandjunk.home.blog/posts?_fields=id,date,link,title,content,categories,tags,jetpack_featured_media_url&tags=1798';
    } else if (type === 'cat') {
      url = 'https://public-api.wordpress.com/wp/v2/sites/dangstuffandjunk.home.blog/posts?_fields=id,date,link,title,content,categories,tags,jetpack_featured_media_url&tags=5308';
    } else {
      url = 'https://public-api.wordpress.com/wp/v2/sites/dangstuffandjunk.home.blog/posts?_fields=id,date,link,title,content,categories,tags,jetpack_featured_media_url';
    }

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({ data: data }));
  }

  handleChange(e) {
    this.setState({
      type: e.target.value
    }, () => {
      this.getCards(this.state.type);
    console.log("handleChange says, "+this.state.type); 
    });

    
  }


  render() {
    if (this.state.data) {
      const cards = this.state.data.map((cardData, i) => {
        return <Card key={i} data={cardData} />
      });

      return (
        <>
          <header>
            <label htmlFor="dog">Dogs</label>
            <input type="radio" name="type" value="dog" id="dog" checked={this.state.type === 'dog'} onChange={this.handleChange} />
              
            <label htmlFor="cat">Cats</label>
            <input type="radio" name="type" value="cat" id="cat" checked={this.state.type === 'cat'} onChange={this.handleChange} />

            <label htmlFor="both">Both</label>
            <input type="radio" name="type" value="both" id="both" checked={this.state.type === 'both'} onChange={this.handleChange} />
          </header>
          <main>
            {cards}
          </main>
        </>
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
