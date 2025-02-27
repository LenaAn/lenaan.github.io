import flatcat from './flatcat.png'
import autoBindReact from 'auto-bind/react'
import React from "react";
import './Cat.css'

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 50,  // Initial position
            top: 50,
            isVisible: true,
            message: ''
        };
        this.timer = null;
        autoBindReact(this);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    startDisappearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        
        this.timer = setTimeout(() => {
            this.setState({
                isVisible: false,
                message: 'Your cat is gone!'
            });
        }, 3000);
    }

    handleClick() {
        // Generate random position between 10% and 90% of the screen
        const newLeft = Math.random() * 80 + 10;
        const newTop = Math.random() * 80 + 10;
        
        this.setState({
            left: newLeft,
            top: newTop,
            isVisible: true,
            message: ''
        });

        this.startDisappearTimer();
        
        // Call the parent's click handler to increment score
        if (this.props.onCatClick) {
            this.props.onCatClick();
        }
    }

    render() {
        return (
            <>
                {this.state.isVisible ? (
                    <div 
                        id="myCat" 
                        className="tile" 
                        onClick={this.handleClick}
                        style={{
                            left: `${this.state.left}%`,
                            top: `${this.state.top}%`
                        }}
                    >
                        <img src={flatcat} alt="cat image"/>
                    </div>
                ) : (
                    <div className="cat-gone-message">
                        {this.state.message}
                    </div>
                )}
            </>
        )
    }
}

export default Cat