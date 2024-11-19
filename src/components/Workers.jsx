"use client"
import React, { useEffect, useState } from 'react'
import NumberTicker from './ui/number-ticker';
import axios from 'axios';

const Workers = () => {

 const [workers, setWorkers] = useState([]);
       useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    const response = await axios.get('/api/maids');
    setWorkers(response.data.maids);
  };
  const workersCount = workers?.length || 0;

  return (
    <div className='w-full py-10 sm:px-10 px-20'>
        <h1 className='text-2xl md:text-4xl text-primary font-bold text-center'> We are proud to announce that we currently have <br/>  <span className='text-secondary'><NumberTicker value={workersCount} className='text-3xl md:text-5xl text-secondary font-extrabold'/> + </span><br/>Trained Professionals at hand to help you ease your work and focus on what matters</h1>
    </div>
  )
}

export default Workers;