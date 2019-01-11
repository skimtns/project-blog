import React from 'react'
import axios from 'axios'
import PostForm from './PostForm';
// import Reviews from './Reviews';
import { Header, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  state = { post: {}, edit: false }

  componentDidMount() {
    axios.get(`/api/blogs/${this.props.match.params.blog_id}/posts/${this.props.match.params.id}`)
    // axios.get(`/api/blogs/${this.props.match.params.blog_id}/posts`)      
    .then(res => {
        this.setState({ post: res.data })
      })
  }

  toggleEdit = () => {
    this.setState(state => {
      return { edit: !this.state.edit }
    })
  }

  showPost = () => {
    const { post: { name, description, body, date } } = this.state
    return (
      <div style={{padding:'5px}'}}>
        <Header as="h2" color="black">Post name: {name} </Header>
        <Message.Header as="h3" color="blue">{description}</Message.Header>
        <Message.Header as="h4" color="blue">{body}</Message.Header>
        <Message.Header as="h4" color="blue">{date}</Message.Header>
      </div>
    )
  }

  edit = () => {
    return <PostForm  {...this.state.post}  submit={this.submit}/>
  }

  submit = (post) => {
    axios.put(`/api/blogs/${post.blog_id}/posts/${post.id}`, post)
    .then(res => {
      this.setState({ post: res.data, edit: false })
    })
  }

render() {
    const { edit } = this.state
    return (
        <div style={{textAlign: 'left'}}>
        <Segment style={{margin: '15px'}}>
            {edit ? this.edit() : this.showPost()}
            <div style={{margin: '15px'}}>
            <button onClick={this.toggleEdit}>{ edit? 'Cancel' : 'Edit Post'}</button>
            </div>
        </Segment>
        <Segment>
            <Link to={`/blogs/${this.props.match.params.blog_id}/posts/${this.props.match.params.id}/comments/`}>View Comments</Link>
        </Segment>
        </div>
    )
}
}
export default Post;