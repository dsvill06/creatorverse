import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <>
                <div>
                    <nav>
                        <ul>
                            <li><strong>Creatorverse</strong></li>
                        </ul>
                        <ul>
                            <li><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>
                            <li><a href="#" role="button">Button</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}
