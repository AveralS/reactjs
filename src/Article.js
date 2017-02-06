import React, {Component} from 'react'
import CommentList from './CommentList';
import Button from './Button'
export default class Article extends Component {
    state = {
        isOpen: false,
       //Лучше внести этот стейт в CommentList
       commentsIsOpen: false
    }

    render() {
        const {article} = this.props;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        return (
            <section>
                {this.props.article.text}
                <br />
                {this.getCommentsButton()}
                {this.getComments()}
            </section>
        )
    }

    getCommentsButton(){
        const {article} = this.props;
        if(!article.comments){
            return null;
        }
        const text = this.state.commentsIsOpen ? 'Скрыть комментарии' : 'Показать комментарии';
        return <Button text={text} onClick={this.changeCommentState}/>
    }

    getComments(){
        const {article} = this.props;
    //Я б эту проверку спрятал в CommentList
        if(!article.comments || !this.state.commentsIsOpen){
            return null;
        }
        return(
            <CommentList comments={article.comments} />
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    changeCommentState = (ev) => {
        this.setState({
            commentsIsOpen: !this.state.commentsIsOpen
        });
    }
}
