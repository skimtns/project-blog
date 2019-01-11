import React, { Component } from 'react';
// import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  defaultValues = { name: '', description: '', body: '', date: ''}
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
    const post = { ...this.state }
    this.props.submit(post)
    this.setState({ ...this.defaultValues })
  }

  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
          required
        />
           <input
          name="body"
          placeholder="Body"
          value={this.state.body}
          onChange={this.handleChange}
          required
        />
           <input
          name="date"
          placeholder="Date"
          value={this.state.date}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default PostForm;