import React from 'react';
import { fetchBeers, fetchVintages } from '../../actions/beer_actions';
import  BeerComboBox  from './combo_boxes';


class CreateReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            beer: this.props.beer ? beer.name : '',
            vintage: '',
            body: '',
            rating: '',
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.findBeer = this.findBeer.bind(this)
        this.findVintage = this.findVintage.bind(this)
    }

    componentDidMount() {
        this.props.fetchBeers();
        this.props.fetchVintages();
    }



    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    updateSelect(field) {
        return input => this.setState({ [field]: input })
    }
    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    handleSubmit(e){
        console.log(this.state.photoFile)
        e.preventDefault()
        const beer = this.findBeer(this.state.beer)
        const vintage = this.findVintage(parseInt(this.state.vintage))
        const formData = new FormData();
        formData.append('review[beer_id]', beer.id)
        formData.append('review[vintage_id]', vintage.id)
        formData.append('review[body]', this.state.body)
        formData.append('review[rating]', this.state.rating)
        if (this.state.photoFile) formData.append('review[photo]', this.state.photoFile)


        $.ajax({
            url: '/api/reviews',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        })

            .then(() =>{ 
                this.props.history.push('/reviews_index')
            });

    }
    
    findBeer(name) {
        let arr = this.props.beers
        let obj = arr.find(beer => {
            return beer.name === name
        })
        return obj
    }

    findVintage(yr) {
        let arr = this.props.vintages

        let obj = arr.find(vin => {
            return vin.year === yr
        })
        return obj
    }


    render(){
        const beers = this.props.beers
        let beerList = null
        if (beers.length > 0) {
            beerList = <BeerComboBox beers={beers} onChange={this.update('beer')} onSelect={this.updateSelect('beer')} />
        }

        return(
            <div>
                <div className = 'buffer'></div>
       
                <form className='beer-form' onSubmit={this.handleSubmit}>
                    <h1 padding="10px">Create A New Review</h1>
                    <label>Beer Name</label>
                    {beerList}
                    {/* <input
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                    /> */}
                    <label>Vintage (Year)</label>
                    <input
                        type="text"
                        value={this.state.vintage}
                        onChange={this.update('vintage')}
                    />
                    <label>Review</label>
                    <textarea
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                    <label>Rating</label>
                    <div>
                        <div className="rating">
                            <input type="radio" name='stars' id='5-star'  value="5" onChange={() => this.state.rating = '5'}/>
                                <label  for='5-star'></label>
                            <input type="radio" name='stars' id='4-star'  value="4" onChange={() => this.state.rating = '4'}/>
                                <label for='4-star'></label>
                            <input type="radio" name='stars' id='3-star' value="3" onChange={() => this.state.rating = '3'}/>
                                <label for='3-star'></label>                                
                            <input type="radio" name='stars' id='2-star' value="2" onChange={() => this.state.rating = '2'}/>
                                <label for='2-star'></label>
                            <input type="radio" name='stars' id='1-star' value="1" onChange={() => this.state.rating='1'}/>
                                <label for='1-star'></label>
                        </div>
                    </div>
                    <br />
                    <label>Add a Photo</label>
                    <input
                        type='file'
                        onChange={this.handleFile.bind(this)}
                    />
                    <br />
                    <button type='submit'>Check in your Brew!</button>

                </form>
            </div>
        )
    }
}

export default CreateReviewForm