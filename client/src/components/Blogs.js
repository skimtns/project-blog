import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Segment, Button, Icon, Card, Grid, Container, Image, List} from 'semantic-ui-react';
import axios from 'axios';
import BlogForm from './BlogForm';
import BackgroundImage from './BackgroundImage'


class Blogs extends React.Component {
    state = { blogs: [], showForm: false };

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => this.setState({ blogs: res.data, }));
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm}
    })
  };

  form = () => {
    return <BlogForm submit={this.submit} />
  };

  submit = (blog) => {
    axios.post(`/api/blogs`, { blog })
        .then(res => {
          this.setState({ blogs: [res.data, ...this.state.blogs], showForm: false})
        })
  };

  deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
        .then(res => {
          const {blogs} = this.state;
          this.setState({blogs: blogs.filter(t => t.id !== id)})
        });
  };

  renderBlogs = () => {
    return this.state.blogs.map (b => {
      return (
      
            <Grid.Column floated='left' width={5} key={b.id}>
              {/* <Card> */}
              <List>
                <List.Item>
                {/* <Card.Content> */}
                  <Link to={`/blogs/${b.id}`}>
                    <Header as= 'h3'>{b.title}</Header>
                    <Header as= 'h5'>{b.category}</Header>
                  </Link>
                  <Button    
                      icon
                      bordered
                      color="grey"
                      size="mini"
                      onClick={() => this.deleteBlog(b.id)}
                      style={{marginLeft: "5px"}}>
                      <Icon name="trash" />
                  </Button>
                  </List.Item>
                {/* </Card.Content> */}
                {/* <Card.Content> */}
              
                {/* </Card.Content> */}
              {/* </Card> */}
              </List>
            </Grid.Column>

          )
      })
  };




  render() {
    const {showForm} = this.state;
    var img = "https://images.unsplash.com/photo-1493767147706-462e7ec5ef11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80"
    return (
      <div style={{margin: '15px'}}>
      <Container>
      <Segment color="black" style={{textAlign:'left'}}>
      
            <Header as="h3">A collection of blogs about making blogs</Header> 
                <Button color="black" onClick={this.toggleForm} >
                    <Icon name={showForm ? 'minus' : 'add'} />
                    Add a new blog
                </Button>
                  { showForm ? this.form() : ''}
                  
          <br/>
          <br/>
          <br/>
            <div style={{backgroundImage: `url(${img})`}}>
              <List>
    
              {/* <BackgroundImage hidden> */}
              { this.renderBlogs() }
              {/* </BackgroundImage>  */}
              </List>
            </div>
               
      </Segment>
      </Container>
      </div>
    )
  }

}

export default Blogs;