import { useState, useEffect } from 'react';
import axios from 'axios';
import url from "../utils/baseUrl"
import LoaderSpinner from "./LoaderSpinner"

const UserList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (isLoading) {
    return <LoaderSpinner/>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div>
      <h2>User Details</h2>
      <div>{data.map((data) => (
        <div key={data.id}>
          <h4>{data.name}</h4>
          <p>{data.profession}</p>
          <p>{data.age}</p>
          <br />
        </div>
      ))}

      </div>
    </div>
  )
}

export default UserList
