import React, { useState } from 'react';
import './Home.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Restaurant from './Restaurant';
import Grid from '@material-ui/core/Grid';
import useFetch from './useFetch';




function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const { response, error, loading } = useFetch(
      '/data_melp.json',
      {
        query: {
          page: currentPage,
          pageSize: 5,
        },
      }
    );

  if (loading) {
    return <div className="loading"><h1>Loading...</h1></div>;
  }
  if (error) {
    return <div className="error">{JSON.stringify(error)}</div>;
  }
    return (
        <div className="home">
            <div className="home__title">
                 <h1>Find the Best Restaurants in Town</h1>
            </div>
            <div className="sortBy">
               <button className="sortBy-btn">Sort: <strong>Default</strong><ArrowDropDownIcon/></button>
            </div>
      {!loading &&
        response.map((data) => {
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
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Go to page {currentPage + 1}
        </button>
      </div>
        </div>
            
    )
}

export default Home;
