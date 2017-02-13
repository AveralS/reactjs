import React, { PropTypes, Component } from 'react';
import {findDOMNode} from 'react-dom';


class AddCommentForm extends Component{
    /*state = {
        user: '',
        text: '',
        id:0
    }*/

    render(){
        return(
            <form ref={this.getFormRef} onSubmit={this.handleSubmit}>
                <input placeholder="user name" type="text"/><br />
                <textarea placeholder="comment"></textarea><br />
                <button type='submit'>Add comment</button>
            </form>
        )
    }

    handleSubmit = (e) => {
        //Не лезь в DOM. держи значения в стейте, хочешь обнулить - просто делаешь setState с ‘’ значениями
        e.preventDefault();
        this.setState({});
        findDOMNode(this.commentForm).reset();
    }

    getFormRef = (ref) => {
        this.commentForm = ref;
    }
}

export default AddCommentForm;
