import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const API = import.meta.env.VITE_REACT_APP_API_URL;
const Search = () => {
    const [info, setInfo] = useState([])
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
      axios
        .get(`${API}/paintings`)
        .then((res) => {
          console.log(res);
          setInfo(res.data);
        })
        .catch((error) => {
          console.log(error)
        });
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
      };
    
      let dataDisplay = info
    if (searchInput) {
        dataDisplay = info.filter((el) => {
          const { name, artist} = el;
      
          const searchLowerCase = searchInput.toLowerCase();
      
          return name.toLowerCase().includes(searchLowerCase) ||
                 artist.toLowerCase().includes(searchLowerCase) 
        });
      }
    
  return (
    <div>
       <Form className="d-flex">
            <Form.Control
              value={searchInput}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Search
