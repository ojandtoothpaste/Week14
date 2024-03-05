import React, {Component} from "react";
import StarRating from "./Stars";
import Review from "./Review";

export default class MoviesList extends Component {
//ANCHOR - This is where I am pulling in the movie img, title and info
    constructor() {
        super();

        this.state = {
            movies: [{
                id: 1,
                img: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
                title: "Dune 2",
                info: "Dune: Part Two is a 2024 American epic science fiction film directed and co-produced by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts.",
            },
        
            {
                id: 2,
                img: "https://lh4.googleusercontent.com/proxy/0ANH87_RsjcPVN_BPzv_LHYVYwO44rC9-yozjnYZUF2iqF36uvUJgSStqQuTfmcYHgtToTu7vXdqirFhitZH_XP36KbyZ-_qgxI87CX_Md0sg0Lt",
                title: "Kung Fu Panda 4",
                info: "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.",
        
            },
        
            {
                id: 3,
                img: "https://lh3.googleusercontent.com/proxy/0zqRTMqdNU2aA2zdo7PPYNUT4C9k0zMpcuHxQ8dvYpYif2QPTlUsp-VU_Or_SPqP0y6v6MhB7_EjntbOqi0q5oWb68RR688",
                title: "Madame Web",
                info: "Forced to challenge revelations about her past, she needs to safeguard three young women from a deadly adversary who wants them destroyed.",
            },
        
            {
                id: 4,
                img: "https://www.movieposters.com/cdn/shop/files/lisa_frankenstein_510x.jpg?v=1699987618",
                title: "Lisa Frakenstein",
                info: "After a set of horrific circumstances bring him back to life, the two embark on a journey to find love, happiness - and a few missing body parts",
        },]
    }
}
//ANCHOR - here is where we render the page and call the StarRating and Review components 
    render() {
        return (
            <div className="container">                   
                    <div className="movie">
                        <h1>
                            New Movies out now
                        </h1>
                        <ul>
                        {this.state.movies.map(
                            (movie, index) => {
                                console.log('this is a movie:', movie)
                                return (
                                    <li className="line" key={index}>
                                        <img src={movie.img} alt="movie"/>
                                        <div> 
                                            {movie.title} 
                                            {movie.info}
                                        </div>
                                        <StarRating/>
                                        <Review/>
                                    </li>
                                )
                            }
                        )}
                        </ul>
                    </div>
                </div>
        );
    }
}
