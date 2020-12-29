import React from 'react';
import "./button.css";

export type ButtonProps = {
    primary?: boolean,
    secondary?: boolean,
    disabled?: boolean,
    label: string
    onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps> {

    render(){
        let primary: string = this.props.primary ? "btn--primary" : "";
        let secondary: string = this.props.secondary ? "btn--secondary" : "";
        return (<button 
            type="button" 
            disabled={this.props.disabled}
            className={[ "btn", primary, secondary].join(" ")}
            onClick={this.props.onClick}>{this.props.label}
            </button>);
    }
}