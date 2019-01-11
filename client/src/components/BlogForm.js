import React from 'react';
// import { Form } from 'semantic-ui-react';

class BlogForm extends React.Component {
    defaultValues = { title: '', category: ''}
    state = {...this.defaultValues}
  
    componentDidMount() {
      if(this.props.id) {
        this.setState({...this.props})
      }
    }

    handleChange = (e) => {
      const {name, value} = e.target
      this.setState({ [name]: value})
    }
  
    handleSubmit = (e) => {
      e.preventDefault(); 
      const blog = { ...this.state }
      this.props.submit(blog)
      this.setState({ ...this.defaultValues })
    }
  
    render (){
      return(
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <input
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleChange}
            required
          />
          <button>Submit</button>
        </form>
      )
    }
  }
  
  export default BlogForm;