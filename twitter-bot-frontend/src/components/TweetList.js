import React, { Component } from 'react'
import TweetItem  from './TweetItem';
import faketweets  from '../data';
import './TweetList.css';
import getData from '..services/backendData.js';

export default class TweetList extends Component {  

    state = { data: [] }

     async componentDidMount() {
         const data = await getData()
     }

    render() {
    // const tweets = faketweets
     
    const handleClick = () => {

        this.setState({data: [faketweets[Math.floor(Math.random() * 5)], ...this.state.data]})
    }
    const elementArray = this.state.data.map(tweetObj => {
        return <TweetItem tweet={ tweetObj}/>
    } )
    return (
        <div>
            <button onClick={handleClick}>Tweet</button>
            <p className='tweets'>{elementArray}</p>

        </div>
        )
    }
}