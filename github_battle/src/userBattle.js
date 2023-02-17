import React from "react";

class Battle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        users:null,
        userOne:null,
        userTwo:null,
        winner: null,
        looser:null,
        isOpen:false
        }
    }


    handleInput = (event) =>{
       const {value} = event.target
        this.setState({
            users:  value
        })
       
    }

    handleOne = () =>{
        fetch(`https://api.github.com/users/${this.state.users}`).then((res)=> res.json()).then((user)=>this.setState({
            userOne:user,
            users:null
        }))

    }

    handleTwo = () =>{
        fetch(`https://api.github.com/users/${this.state.users}`).then((res)=> res.json()).then((user)=>this.setState({
            userTwo:user,
            users:null
        }))

    }

 handleBattle= () => {
    const one = this.state.userOne.followers * 20 + this.state.userOne.public_repos;
    const two = this.state.userTwo.followers * 20 + this.state.userTwo.public_repos
    console.log(one,two)
    if(one > two){
        this.setState({
            winner: this.state.userOne,
            looser:this.state.userTwo,
            isOpen:true,
           
        })
    } else {
        this.setState({
            winner: this.state.userTwo,
            looser:this.state.userOne,
            isOpen:true
        })
    }
 }
 handleReset=()=>{
    this.setState({
        isOpen:false,
        userOne:null,
        userTwo:null,
        users:null,
        winner:null,
        looser:null
    })
 }
 
 handleDeleteOne=() =>{
    this.setState({
        userOne:null,
       
    })
 }
 handleDeleteTwo=() =>{
    this.setState({
        userTwo:null,
       
    })
 }

    render(){
      if(this.state.isOpen == true){
        return (
            <>
            <div className="container-battle">
            <div className="winner">
                <div className="winner-box">
            <h1 className="winner-heading">Winner !</h1>
            <h2>{this.state.winner.login}</h2>
            <img className="winner-img"
             src={this.state.winner.avatar_url}
            />
            </div>
            <h3>Name: {this.state.winner.name}</h3>
            <h3>Location: {this.state.winner.location}</h3>
            <p>Followers: {this.state.winner.followers}</p>
            <p>Repos: {this.state.winner.public_repos}</p>
            </div>
            <div className="looser">
                <div className="looser-box">
            <h1 className="looser-heading">Looser !</h1>
            <h2>{this.state.looser.login}</h2>
            <img className="looser-img"
             src={this.state.looser.avatar_url}
            />
            </div>
             <h3>Name: {this.state.looser.name}</h3>
            <h3>Location: {this.state.looser.location}</h3>
            <p>Followers: {this.state.looser.followers}</p>
            <p>Repos: {this.state.looser.public_repos}</p>
            </div>
            </div>
            <div className="reset">
            <button className="reset-btn" onClick={this.handleReset}
            >Reset</button>
            </div>
            </>
        )
      }
        return (
            <div>
               
            <section className="instruction">
           
           
            <h1 className="heading-battle">Instructions</h1>
            <div className="flex space-around">
            <div>
                <h2>Enter two Github users</h2>
                <i class="fa-solid fa-users"></i>
            </div>
            <div>
                <h2>Battle</h2>
                <i class="fa-brands fa-battle-net"></i>
            </div>
            <div>
                <h2>See the winner</h2>
                <i class="fa-solid fa-trophy"></i>
            </div>
            </div>
            </section>
            <section className="players">
                <h1 className="heading-battle">
                    Players
                </h1>
                <div className="flex space-around">
                <div className="player">
                    <h2>Player One</h2>
                     
                        <input onChange={this.handleInput}
                        type='text'
                        placeholder='github username' 
                         />
                            <button className="player-btn"
                            onClick={this.handleOne}
                            >Submit</button>
                     {this.state.userOne && (
                        <div className="flex battle-user">
                            <img className="pic" src={this.state.userOne.avatar_url}/>
                            <h5 className="battle-user-name">
                                {this.state.userOne.login}
                            </h5>
                            <button
                            className="del"
                            onClick={this.handleDeleteOne}
                            >X</button>
                        </div>
                        
                     )

                     }
                     
                </div>
                <div className="player">
                    <h2>Player Two</h2>
                   
                        <input onChange={this.handleInput}
                        type='text'
                        placeholder='github username' 
                         />
                      <button className="player-btn"
                       onClick={this.handleTwo}>
                        Submit
                      </button>
                              {this.state.userTwo && (
                        <div className="flex battle-user">
                            <img className="pic" src={this.state.userTwo.avatar_url}/>
                            <h5 className="battle-user-name">
                                {this.state.userTwo.login}
                            </h5>
                            <button 
                            className="del"
                            onClick={this.handleDeleteTwo}
                            >X</button>
                        </div>
                        
                     )

                     }
                   
                </div>
                </div>
            </section>
            <div className="btn-container">
                { this.state.userOne && this.state.userTwo &&(
                    <button className="battle-btn"
                    onClick={this.handleBattle}>
                        BATTLE
                    </button>
                )}
            </div>


         
            </div>
            
        )
    }
}

export default Battle