import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import toggleOpen from '../decorators/toggleOpen'
import Loader from './Loader'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import {mapToArr} from '../utils'
import {commentsSelectorFactory} from '../selectors'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    componentWillReceiveProps({ isOpen, article}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoaded)
        {
            this.props.loadArticleComments(article.id)
        }
    }

    render() {
        const actionText = this.props.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.props.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen, comments,loading} = this.props
        if (!isOpen) return null
        if (loading) return <Loader />


        const {id} = this.props.article
        if (!comments.size) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentsList = comments.map(comment => {
            return <li key={comment.id}><Comment comment={comment} /></li>;
        })
        return <div>
            <ul>{commentsList}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }
}

export default connect((state, props) => {
    const commentsSelector = commentsSelectorFactory();
    return {
        comments: commentsSelector(state, props),
        loading: state.comments.isLoading
    }
}, { loadArticleComments })(toggleOpen(CommentList));