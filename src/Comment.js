import React, {Component} from 'react';

export default class Comment extends Component{
    render() {
        const {user, text} = this.props.comment;
        return (
            <div>
                <h4>{ user }</h4>
                <p>{ text }</p>
            </div>
        )
    }
}