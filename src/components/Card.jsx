import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <article style={{width: '300px', height: '400px', background: `url(${this.props.imageURL})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", margin:"50px"}}>
            <div style={{background:"white",color:"black"}}>
              {this.props.name}
            </div>
            <div>
              <a href={this.props.url}>URL</a>
            </div>
            {/* <div>
              <img src={this.props.imageURL}></img>
            </div> */}
        </article>
    )
  }
}
