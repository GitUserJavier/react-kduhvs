import React from 'react';
import './style.css';

const clientId = 'rGEzVxG4jTXY0086udoyIsty2Uvskb7QBs0GxYw_9nU';
const endPoint = 'https://api.unsplash.com/search/photos';

export default class Hello extends React.Component {
  constructor() {
    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      images: []
    };
  }

  search() {
    fetch(`${endpoint}?query=${this.query}&client_id${clientId}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
        this.setState({
          images: jsonResponse.results
        });
      });
  }
  trackQueryValue(ev) {
    this.query = ev.target.value;
  }

  images(){
    return this.state.images.map{image=>{
      return <img src={image.urls.thumb} key={image.id}/>
    } 
   }
 }

  render() {
    return (
      <div>
        <input type="text" onChange={this.trackQueryValue} />
        <button onClick={this.search}>Buscar</button>
        <div>{this.images()}</div>
      </div>
    );
  }
}
