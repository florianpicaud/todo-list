import React from 'react';
import Button from '../Button/button.component';
import Input from '../Input/input.component';
import './form.css';

type FormProps = {
    inputValue: string;
    setInputValue: (input: string) => void;
    handleSubmit: () => void;
}

export default class FormComponent extends React.Component<FormProps> {

    render () {
        return (
        <div className="d-flex flex-row form">
            <Input
            label={"Todo"}
            value={this.props.inputValue}
            onChange={this.props.setInputValue}
            placeholder={"Type here..."}
            />
            <Button onClick={this.props.handleSubmit} 
            primary
            label="Submit" />
        </div>
        );
    }
}
