import React from "react";
import SearchForm from "./search-form.jsx"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img src="../../src/img/placeholder.jpg" alt=""/>
                <SearchForm placeholder = "Class1, Class2, Class3..."></SearchForm>
            </div>
        );
    }
}
