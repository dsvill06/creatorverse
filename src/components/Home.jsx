import React, { useEffect, useState } from 'react';
import Card from "./Card.jsx";
import supabase from '../Client.js';

function Home() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*');

        if (error) {
          throw error;
        }

        setCreators(data);
      } catch (error) {
        console.error('Error fetching creators:', error);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div className='grid d-flex row justify-content-center'>
      {creators.map((person) => (
        <div className="col item pt-4" key={person.name} style={{ width: '300px', height: '400px' }}>
          <Card  {...person} />
        </div>
      ))}
    </div>
  );
}

export default Home;