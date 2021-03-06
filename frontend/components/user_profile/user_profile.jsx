import React from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        

    }

    componentDidMount() {
       console.log('in component did mount')
        this.props.fetchUser(this.props.user.id)
        this.props.fetchUserReviews(this.props.user.id)     
    }

    renderFriendsMenu() {

    }

    renderBadge() {
        // if (!this.props.user.reviews.length <)
    }


    render () {
        console.log('inside user profile')
        const user = this.props.user
        const reviews = this.props.reviews
        console.log('USER PROFILE RENDER', reviews)
        // if (this.state.reviews)
        if (!user || !reviews ){ 
            console.log('user: ', user)
            console.log('review: ', reviews)
            return <div>"loading"</div>
        }
        return (
            <div>
                <div className='buffer' />
                <div className = "user-profile-content">
                    <div className="profile-user-info">
                        <div className ="profile-name">
                            Hi, {user.username}!
                        </div>
                        <div className ="profile-icons">
                             <img className='thumbnail' src={user.photoUrl} alt={user.username} />
                             <div>badge placeholder</div> 
                        </div>
                        <div className ="profile-about-user">
                            <p>Country: {user.country}</p>
                        </div>
                    </div>
                    <div className="profile-reviews-info">
                        <div className= 'profile-reviews-header'>
                            Your Reviews
                        </div>
                        <div className= 'profile-reviews-list'>
                            {reviews.map((review) => {
                                return (
                                <li>
                                   Review: 
                                   {review.beer_name}
                                   {review.vintage_year}
                                   {review.body}
                                   {review.rating}
                               </li> )
                            })}
                        </div>
                    </div>
                    <div className="profile-friends-info">
                        <div className= 'profile-friends-header'>
                            
                        </div>
                        <div className= 'profile-friends-list'>
                            
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}


export default UserProfile