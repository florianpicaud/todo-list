import React from 'react';
import "./input.css";

type InputProps= {
    label: string,
    value: string,
    placeholder: string,
    onChange: (input: string) => void
}

export default class Input extends React.Component<InputProps> {

    render(){
        return (
        <div className="input">
            <label className="input__label">{this.props.label}</label>
            <input 
                value={this.props.value}
                onChange={e => this.props.onChange(e.target.value)}
                className="input__input"
                placeholder={this.props.placeholder}
                />
        </div>
        );
    }
}