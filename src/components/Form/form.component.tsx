import React from 'react';
import Button from '../Button/button.component';
import Input from '../Input/input.component';
import './form.css';

export type FormProps = {
    inputValue: string;
    setInputValue: (input: string) => void;
    handleSubmit: () => void;
}

type FormState = {
    disabled: boolean;
}

export default class FormComponent extends React.Component<FormProps, FormState> {

    state: FormState;

    constructor(props: FormProps) {
        super(props);
        this.state = {
            disabled: props.inputValue === ""
        };
    }

    componentWillReceiveProps(nProps: FormProps){
        this.setState((state) => ({
            disabled: nProps.inputValue === ""
        }));
    }

    onInputChanged(input: string): void {
        this.props.setInputValue(input);
    } 

    render () {
        return (
        <div className="d-flex flex-row form">
            <Input
            label={"Todo"}
            value={this.props.inputValue}
            onChange={this.onInputChanged.bind(this)}
            placeholder={"Type here..."}
            />
            <Button onClick={this.props.handleSubmit}
             disabled={this.state.disabled}
            primary
            label="Submit" />
        </div>
        );
    }
}
