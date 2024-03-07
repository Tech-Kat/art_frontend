import axios from "axios";
import React from "react";
import Pagination from '../Components/Pagination'
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_REACT_APP_API_URL;

const Index = () => {
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/paintings`)
      .then((res) => {
        console.log(res);
        setShowInfo(res.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  return (
    <div className="index">
      <Pagination/>
    </div>
  );
};

export default Index;
