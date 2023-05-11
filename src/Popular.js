import React, { Component } from "react";
import LanguageButtonHeader from "./LanguageBtnHeader";
import Loader from "./Loader";
import Cards from "./Cards";

export default class Popular extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null,
            Language: "All",
            error: ""
        }
    }

    componentDidMount() {
        let data = fetch(
            "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
        )
            .then((res) => res.json())
            .then((responseData) => {
                this.setState({
                    data: responseData
                })
            })
            .catch((err) => {
                this.setState({
                    error: "Result not found"
                })
            })

    }

    handleClick = ({ target }) => {
        let value = target.innerText
        console.log(value)
        let allUsers = fetch(
            `https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`
        )
            .then((res) => res.json())
            .then((responseData) => {
                this.setState({
                    data: responseData,
                    language: value
                })
            })
    }


    render() {
        return (
            <div className="container">
                <LanguageButtonHeader
                    handleClick={this.handleClick}
                    value={this.state.Language}
                />

                {this.state.data === null || this.state.data === undefined ? (
                    <Loader />
                ) : (<Cards Data={this.state.data.items} />)}
            </div>
        )
    }

}