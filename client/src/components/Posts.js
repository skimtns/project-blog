import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { Button, Icon, Grid, Card, Header } from 'semantic-ui-react'
 
class Posts extends React.Component {
    state = { posts: [], showForm: true }
  
    // componentDidMount() {
    //     axios.get(`/api/departments/${this.props.match.params.department_id}/products`)
    //     .then( res => {
    //       this.setState({ products: res.data });
    //     })
    //     .catch( err => {
    //       console.log(err);
    //     })
    // }

    toggleForm = () => {
        this.setState(state => {
          return { showForm: !state.showForm }
        })
      }
    
      form = () => {
        return <PostForm submit={this.submit} />
      }

      renderPosts = () => {
        return this.props.posts.map(p => {
          return (
               <Grid.Row key={p.id} style={{margin: '10px'}}>
                 <Card>
                   <Card.Content>
                       <Header as="h3">
                           <Link
                               to={`/blogs/${this.props.id}/posts/${p.id}`}
                               >{p.name}</Link>
                       </Header>
                       <p>{p.description}</p>
                       <p>{p.body}</p>
                       <p>{p.date}</p>
                   </Card.Content>
                   <Card.Content>
                   <Button
                       icon
                       color="grey"
                       size="tiny"
                       onClick={() => this.deletePost(p.id)}
                       style={{marginLeft: "10px"}}
                   >
                       <Icon name="trash" />
                   </Button>
                   </Card.Content>
                 </Card>
               </Grid.Row>
           )
        })
      }

      submit = (post) => { 
        axios.post(`/api/blogs/${this.props.id}/posts`, {post})
          .then( res => {
            const { posts } = this.state
            this.setState({ posts: [...posts, res.data]})
            window.location.href=`/blogs/${this.props.id}`
          })
          .catch( err => {
            console.log(err)
          })
      }


      deletePost = (id) => {
        axios.delete(`/api/blogss/${this.props.id}/posts/${id}`)
        .then ( res => {
            const { posts } = this.state
            this.setState({ posts: posts.filter( t => t.id===!id )})
            window.location.href=`/blogs/${this.props.id}`
        } )
    }
    

    render () {
      return (
        <div style={{margin: '15px'}}>
             <Header as="h4" style={{color: 'black'}}>Add Post</Header>
            { this.form() }
          <div>
             <Grid columns="four">
             { this.renderPosts() }
             </Grid>
          </div>
       </div>
    
     )
    }
};

export default Posts;