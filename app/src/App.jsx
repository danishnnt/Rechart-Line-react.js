import React from 'react'
import styled from 'styled-components'
import Graph from './components/Graph'
import { useState , useEffect } from 'react'

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [timeframe, setTimeframe] = useState('');
  const [data , setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);

     try {
      const response = await fetch(BASE_URL)
      const json = await response.json();
      setData(json);
      setLoading(false);
     }
     catch (error) {
      console.log("There is an error with the server")
     }
  }
     fetchdata()
  },[]);

  const filterDataByTimeframe = (timeframe) => {
    let filtered = [];
    switch (timeframe) {
      case '7':
        filtered = data?.slice(0, 7); 
        break;
      case '15':
        filtered = data?.slice(0, 15); 
        break;
      case '30':
        filtered = data; 
        break;
      default:
        filtered = [data];
        break;
    }
    setFilteredData(filtered);
  };

  const handleTimeframeChange = (event) => {
    const timeframe = event.target.value;
    setSelectedTimeframe(timeframe);
    filterDataByTimeframe(timeframe);
  };


  return (
    <Main>
      <OuterMain>
        <div className='Nav'>
        <div><h2>Graph Widget</h2></div>
        <div>
        <select value={selectedTimeframe} onChange={handleTimeframeChange}>
          <option value="start">Select Timeframe</option>
          <option value="7" >Last 7 Days</option>
          <option value="15" >Last 15 Days</option>
          <option value="30" >Last 30 Days</option>
        </select>
        </div>
        </div>
      <Container>
      <Graph data={filteredData}  />
    </Container>
      </OuterMain>
    </Main>
  )
}

export default App

const Container = styled.div`
  height: 12rem;
  width: 45rem;
  border: 2px solid black;
  border-radius: 3px;
  background-color: #ffffff;
  margin-left: 1.5rem;
`
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

const OuterMain = styled.div`
  height: 19rem;
  width: 48rem;
  border-radius: 5px;
  border: 2px solid black;

  .Nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2rem;
  }
`
