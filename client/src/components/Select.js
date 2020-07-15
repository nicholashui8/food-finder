import React, { Component } from 'react'
//import '../App.css';

class Select extends Component {
    state = {
        title: '',
        price: "1",
        radius: "5000",
    }
    //when user clicks "search", send all user preference data to App.js
    handleClick = (e) => {
        e.preventDefault();
        console.log('Button has been clicked');
        this.props.clientData(this.state);
    }

    keyPress = (e) => {
        
        if(e.keyCode === 13){
            console.log('Enter key has been clicked');
            e.preventDefault();
            this.props.clientData(this.state);
        }
    }
    textChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    onPriceChange = (e) => {
        console.log('Changed price button!');
        this.setState({
            price: e.target.value
        });
    }
    onRadiusChange = (e) => {
        console.log('Changed radius button!');
        this.setState({
            radius: e.target.value
        });
    }
    render() {
        return (
            <div className="Select">
                <div className="top-half-container">     
                    <div className="enter-food-container">
                        <p>Enter Type of Food!</p>
                    </div>
                    <div className = "text-input-container">
                        <div className = "text-input-box">
                            <form action="" method="get" className="form">
                                <input type="text" id="input-box" value={this.state.title} placeholder="Ex. Boba, Chinese, Mexican"onChange={this.textChange} onKeyDown={this.keyPress} />
                                <div className="btn-icon">
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="radio-box">
                        <div className="price-radio-button-container">
                            <input type="radio" id="male" name="price" value="1" checked={this.state.price === "1"} onChange={this.onPriceChange}/>
                            <label for="$">$</label>
                            <input type="radio" id="female" name="price" value="2" checked={this.state.price === "2"} onChange={this.onPriceChange} />
                            <label for="$$">$$</label>
                            <input type="radio" id="other" name="price" value="3" checked={this.state.price === "3"} onChange={this.onPriceChange} />
                            <label for="$$$">$$$</label>
                        </div>
                        <div className="radius-radio-button-container">
                            <input type="radio" id="male" name="radius" value="5000" checked={this.state.radius === "5000"} onChange={this.onRadiusChange}/>
                            <label for="3">3 Miles</label>
                            <input type="radio" id="female" name="radius" value="16000" checked={this.state.radius === "16000"} onChange={this.onRadiusChange} />
                            <label for="10">10 Miles</label>
                            <input type="radio" id="other" name="radius" value="32000" checked={this.state.radius === "32000"} onChange={this.onRadiusChange} />
                            <label for="20">20 Miles</label>
                        </div>
                    </div>
                    <div className="sort-options-container">
                        <div className="sort-options">
                            <form action = "" method = "POST" className = "sort-form">
                                <label>Sort By</label>
                                <select id = "sort-select">
                                    <option value= "best_match">Best Match</option>
                                    <option value= "rating">Rating</option> 
                                    <option value= "distance">Distance</option> 
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className = "search-button-container">
                    <input type = "button" id = "submit-button" value = "Search" onClick={this.handleClick} />
                </div>

                <div className="result-container">
                    <div id="node">
                    </div>
                    <ul>
                        <li className="list-results"></li>
                        <li className="list-results"></li>
                        <li className="list-results"></li>
                        <li className="list-results"></li>
                        <li className="list-results"></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;
