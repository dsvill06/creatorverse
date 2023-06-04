import React, { Component } from 'react'
import supabase from "../Client.js"


export default class AddCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            url: "",
            description: "",
            imageURL: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, url, description, imageURL } = this.state;
        await this.writeDatatoSupabase(name,url,description,imageURL);

    };
    writeDatatoSupabase = async (name, url, description, imageURL) => {
        try {
            const { data, error } = await supabase
                .from('creators')
                .insert([
                    { name:name,url:url,description: description,imageURL: imageURL}]
                );

            if (error) {
                throw error;
            }

            console.log('Data written to Superbase:', data);
            // You can perform further actions after writing to the table, if needed.
        } catch (error) {
            console.error('Error writing data:', error);
        }
    }
    render() {
        return (
            <>
                <h1 style={{ margin: "5px" }}>Add a Creator</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <form class="container" style={{ margin: "15xpx" }} onSubmit={this.handleSubmit}>
                        <div class="grid ">
                            <label for="name">
                                First name
                                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="First name" required />
                            </label>
                            <label for="url">URL
                            <input type="text" id="url" name="url" value={this.state.url} onChange={this.handleInputChange} placeholder="URL" />
                            </label>
                        </div>
                        <label for="image">Image</label>
                        <input type="text" id="image" name="imageURL" value={this.state.imageURL} onChange={this.handleInputChange} placeholder="Image URL" />
                        <label for="description">Description</label>
                        <input type="text" id="describe" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Description" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}
