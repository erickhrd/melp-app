import React, { useState, useEffect } from 'react';
import './Home.css';
import Restaurant from './Restaurant';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


function Home(props) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [handleChange, setHandleChange] = useState({sort: "default"});

 
    useEffect(() => {
      setLoading(true);
        const fetchPosts = async () => {
          const res = await axios.get('/data_melp.json');
          setRestaurants(res.data);
          setLoading(false);
        }
        fetchPosts();
      }, []);

      const options = [
        {
          label: "Sort By: Default",
          value: "default",
        },
        {
          label: "Alphabetically",
          value: "alphabetically",
        },
        {
          label: "Highest Rating",
          value: "rating",
        }
      ];

    
        const onChange = (e) => {
        console.log("Sort Selected!!");
        setHandleChange({ sort: e.target.value });
        }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const totalPosts = Math.ceil(restaurants.length/postsPerPage);
  

   //create a new array by filtering the original array
   const filteredData = restaurants.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.toLowerCase().includes(props.input)
    }
})
 

  while(loading){
    return <div className="loading"><h1>Loading...</h1></div>;
  } 

  if (handleChange.sort === "alphabetically") {
    return (


      <div className="home">
              <div className="home__title">
                   <h1>Find the Best Restaurants in Town(Alphabetically...)</h1>
              </div>
              <div className="sortBy">
              <select value={handleChange.sort} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
      </div>
      <div className="datapoint">
            <Grid container spacing={2}>
            {
              filteredData.sort((a, b) => a.name.localeCompare(b.name))
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((data) => {
                return (
                
        
                  <Grid item key={data.id} xs={12} sm={6} md={6}>
                      <Restaurant name={data.name} site={data.contact.site} email={data.contact.email} phone={data.contact.phone} street={data.address.street} city={data.address.city} state={data.address.state} lat={data.address.location.lat} lng={data.address.location.lng} rating={data.rating}  />
                  </Grid>
           
                  
                );
              })}
              </Grid>
              </div>
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
  } else if (handleChange.sort === "rating"){
    return (


    <div className="home">
            <div className="home__title">
                 <h1>Find the Best Restaurants in Town(Rating...)</h1>
            </div>
            <div className="sortBy">
            <select value={handleChange.sort} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
    </div>
    <div className="datapoint">
            <Grid container spacing={2}>
            {
              filteredData.sort((a, b) => b.rating - a.rating)
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((data) => {
                return (
                
        
                  <Grid item key={data.id} xs={12} sm={6} md={6}>
                      <Restaurant name={data.name} site={data.contact.site} email={data.contact.email} phone={data.contact.phone} street={data.address.street} city={data.address.city} state={data.address.state} lat={data.address.location.lat} lng={data.address.location.lng} rating={data.rating}  />
                  </Grid>
           
                  
                );
              })}
              </Grid>
              </div>
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
  else {
    return (
        <div className="home">
            <div className="home__title">
                 <h1>Find the Best Restaurants in Town</h1>
            </div>
            <div className="sortBy">
            <select value={handleChange.sort} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
            </div>
            <div className="datapoint">
            <Grid container spacing={2}>
            {
              filteredData.slice(indexOfFirstPost, indexOfLastPost)
              .map((data) => {
                return (
                
                 
                  <Grid item  key={data.id} xs={12} sm={6} md={6}>
                      <Restaurant name={data.name} site={data.contact.site} email={data.contact.email} phone={data.contact.phone} street={data.address.street} city={data.address.city} state={data.address.state} lat={data.address.location.lat} lng={data.address.location.lng} rating={data.rating}  />
                  </Grid>
           
                  
                );
              })}
              </Grid>
              </div>
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
            
    )}
    
}


export default Home;
