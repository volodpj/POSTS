import React from 'react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import stylePost from '../post/stylePost.module.css'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shouComments: false
        }

        this.checkComments = () => {
            this.setState((prevState) => ({
                shouComments: !prevState.shouComments,
            }))
        }
    }
    
    render() {
        
        return (
            <tr className={stylePost.post}>
                <td>{this.props.post.id}</td>
                <td>{this.props.post.body}</td>
                <td>Comments</td>
                <td>{this.props.post.user.name}</td>
            </tr>
        )
    }
};

export default Post