// import React from 'react';
// // import ReviewForm from './ReviewForm';
// import axios from 'axios';
// import {Header, Segment, Button, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// // import StarRatings from 'react-star-ratings';

// class Comments extends React.Component {
//     state = { comments: [], showForm: false, edit: false }

//     componentDidMount() {
//         axios.get(`/api/blogs/${this.props.match.params.blog_id}/posts/${this.props.match.params.post_id}/comments`)
//         .then(res => {
//             this.setState({ comments: res.data })
//         })
//     }

//     // toggleForm = () => {
//     //     this.setState( state => {
//     //         return { showForm: !state.showForm }
//     //     } )
//     // }

//     // edit = () => {
//     //     return <ReviewForm {...this.state.review} submit={this.submit} />
//     // }

//     // form = () => {
//     //     return <ReviewForm submit={this.submit} />
//     // }

//     submit = (review) => {
//         axios.post(`/api/departments/${this.props.match.params.department_id}/products/${this.props.match.params.product_id}/reviews`, {review})
//         .then( res => {
//             this.setState({reviews: [res.data, ...this.state.reviews], showForm: false})
//         })
//     }

//     renderReviews = () => {
//         return this.state.reviews.map(p => {
//             return (
//                 <div key={p.id} style={{margin: '15px'}}>
//                     <Segment style={{textAlign: 'left'}}>
//                         <Header as="h2">{p.subject}</Header>
//                             <StarRatings
//                                 rating={p.stars}
//                                 // changeRating={this.changeRating}
//                                 starRatedColor="purple"
//                                 numberOfStars={5}
//                                 name='rating'
//                                 starDimension="20px"
//                             />
//                         <p>{p.body}</p>
//                         <p style={{color: 'grey'}}>{p.date}</p>
//                     <Button>
//                         <Link to={`/departments/${this.props.match.params.department_id}/products/${this.props.match.params.product_id}/reviews/${p.id}`}>
//                         Edit
//                         </Link>
//                     </Button>
//                     <Button
//                         icon 
//                         color="purple"
//                         size="small"
//                         onClick={() => this.deleteReview(p.id)}
//                     >
//                     <Icon name="trash" />
//                     </Button>
//                     </Segment>
//                     </div>
//             )
//         })
//     }

//     deleteReview = (id) => {
//         axios.delete(`/api/departments/${this.props.match.params.department_id}/products/${this.props.match.params.product_id}/reviews/${id}`)
//         .then ( res => {
//             const { reviews } = this.state
//             this.setState({ reviews: reviews.filter( t => t.id !== id)})
//         } )
//     }


//     render () {
//         const { showForm } = this.state
//         return (
//             <div style={{textAlign:'center', margin: '15px'}}>
//             <Header as="h1">Reviews</Header>
//             {/* <Header as="h1">{this.props.name}</Header> */}
//             <div style={{margin: '10px'}}>
//             <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Add Review' }</button>
//             </div>
//             {showForm ? this.form() : this.renderReviews()}
//             </div>
//         )
//     }
// };

// export default Reviews;