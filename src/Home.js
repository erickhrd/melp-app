import React, { useState, useEffect } from 'react';
import './Home.css';
import Restaurant from './Restaurant';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';




function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('/data_melp.json');
          setRestaurants(res.data);
          setLoading(false);
        }
        fetchPosts();
      }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const totalPosts= Math.ceil(restaurants.length/postsPerPage);

  if (loading) {
    return <div className="loading"><h1>Loading...</h1></div>;
  }
    return (
        <div className="home">
            <div className="home__title">
                 <h1>Find the Best Restaurants in Town</h1>
            </div>
            <div className="sortBy">
               <select>
                        <option value="default">Sort: Default</option>
                        <option value="alphabetically">Alphabetically</option>
                        <option value="rating">Best Rating</option>
                </select>
            </div>
      {!loading &&
        restaurants.slice(indexOfFirstPost, indexOfLastPost).map((data) => {
          return (
            <div className="datapoint">
         <Grid container spacing={2}>
            <Grid item key={data.id} xs={12} sm={6} md={6}>
                <Restaurant name={data.name} site={data.contact.site} email={data.contact.email} phone={data.contact.phone} street={data.address.street} city={data.address.city} state={data.address.state} lat={data.address.location.lat} lng={data.address.location.lng} rating={data.rating}  />
            </Grid>
        </Grid>
            </div>
            
          );
        })}
        <div className="pagination">
            {currentPage > 1 && (
            <button
                onClick={() => {
                setCurrentPage(currentPage - 1);
                }}
            >
                Go to page {currentPage - 1}
            </button>
            )}
            {currentPage < totalPosts && (
            <button
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
            >
               Go to page {currentPage + 1}
            </button>
            )}
        </div>
     </div>
            
    )
}

export default Home;
