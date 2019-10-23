import React, { useState, useEffect } from 'react'
import Nav from '../components/nav'
import Grid from '@material-ui/core/Grid';
import Show from '../components/show';
import ShowDialog from '../components/showdialog';
import * as axios from 'axios';

const cardStyle = {
  width: 150,
  height:250
};

const Home = () => {
  const [shows, setShows] = useState([]);
  const [view, setView] = useState(null);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setShows(response.data);
  };

  const openDialog = (showData) => {
    setView(showData);
  };

  useEffect( () => {
    fetchData('http://api.tvmaze.com/schedule?country=US&date=2019-10-22');
  }, []);

  return (
    <div>
      <Nav />

      <Grid container spacing={2}>
        <Grid container justify="center" spacing={2}>
          {shows.map(value => (
            <Grid key={value.id} item onClick={() => openDialog(value.show)}>
              <Show showDetails={value.show}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      
      <ShowDialog details={view} close={() => setView(null)} />
    </div>
  );
}

export default Home
