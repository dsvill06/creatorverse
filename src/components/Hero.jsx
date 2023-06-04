import React, { Component } from 'react'
import Nav from "./Nav.jsx"

export default class Hero extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "600px",
                    backgroundImage: "url(https://cdn.mos.cms.futurecdn.net/frQpnhCh9aXKB2TdMQan6L.jpg)",
                    backgroundSize: "cover", backgroundPosition: 'center',
                }}>
                    <h1>
                        Creatorverse
                    </h1>
                    <div style={{display:"flex", gap:"15px"}}>
                    <a href='/home'><button>View all creators</button></a>
                    <a href='/addCreator'><button>Add a creator</button></a>
                    </div>
                </div>
            </div>
        )
    }
}
