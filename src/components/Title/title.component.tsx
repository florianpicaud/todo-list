import React from "react";
import "./title.css";

export type TitleProps = {
    name: string;
}

export default class TitleComponent extends React.Component<TitleProps> {
    render() {
        return <h1 className="text-centered">{this.props.name}'s Todolist</h1>;
    }
}