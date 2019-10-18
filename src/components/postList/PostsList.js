import React from 'react';
import Post from '../post/Post';
import stylePostList from '../postList/stylePostList.module.css'

class PostsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterPosts: [],
        };
    }

    componentDidMount(){
        this.setState({
            filterPosts: this.props.posts
        })
    }

    giveFindText = (event) => {
        const text = event.target.value.toLowerCase();
        const filtersPost = this.props.posts.filter((post) => {
            return post.title.indexOf(text) > -1;
        })
        this.setState({
            filterPosts: filtersPost,
        })   
    }
    
    render() {
        return (
            <div>
                filter by title<input type='text' className={stylePostList.findText}
                    onChange={this.giveFindText}
                ></input> 
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Comments</th>
                            <th>Author</th>
                            
                        </tr>
                    </thead>
                    {this.state.filterPosts.map((post) => {
                        return <Post key={post.id} post={post}/>
                    })}
                </table>
            </div>
        )
    }
    
};

export default PostsList

                    