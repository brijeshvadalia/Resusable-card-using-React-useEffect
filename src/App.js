import './App.css';
import Card from './components/Card';

import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const { data }  = await axios.get("https://randomuser.me/api/")
    const details = data.results[0]
    setDetails(details)
    console.log(details);
  }

  useEffect(() => {
    fetchDetails()
  }, [])
  

  return (
    <div className="App">
      <>    
        <h1>Referesh the page to get new details.</h1>

      <Card details={details} />
      </>

    </div>
  );
}

export default App;
