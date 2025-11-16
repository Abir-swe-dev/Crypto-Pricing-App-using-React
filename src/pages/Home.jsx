import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/coinGecko";
import { CryptoCard } from "../components/CryptoCard";


export const Home = () => {
   const [cryptoList,setCryptoList] = useState([]);
   const [isLoading,setIsLoading] = useState(true);
   const [viewMode, setViewMode] = useState("grid");

   useEffect(() => {
      fetchCryptoData();
   },[]);

 const fetchCryptoData = async () => {

   try {
       const data = await fetchCryptos();
      setCryptoList(data)
   } catch (error) {
      console.error("Error fetching crypto:",err);
   } finally {
      setIsLoading(false);
   }
   
 };

 return <div className="app">

         <div className="controls">
            <div className="filter-group">
               
            </div>
            <div className="view-toggle">
               <button className={viewMode === "grid" ? "active" : ""} 
               onClick={() => setviewMode("grid")}
               >
                  Grid
                  </button>
               <button className={viewMode === "list" ? "active" : ""} 
               onClick={() => setviewMode("list")}>List</button>
            </div>
         </div>

   {isLoading ? (<div className="loading">
      <div className="spinner" />
      <p>Loading Crypto Data</p>
      </div> 
      ): (
         <div className={`crypto-container ${viewMode}`}> 
            {cryptoList.map((crypto,key) =>(
               <CryptoCard crypto={crypto} key={key} />
            ))}
      </div>
   )}
 </div>
}
