import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export const CoinDetail = () => {
  const {id} = useParams();
  const [coin,setCoin] = useState(null);
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    localCoinData();
  },[id])

  const localCoinData = async () => {
    try {
      const data = await fetchCoinData();
      setCryptoList(data);
    } catch (err) {
      console.log("Error fetching crypto:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if(!isLoading) {
    return (
      <div className="app">
        <div className="loading">
            <div className="spinner"></div>
            <p>Loading coin data...</p>
        </div>
      </div>
    );
  }

  if(!coin) {
    return (
      <div className="app">
        <div className="no-results">
          <p>Coin not found</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    )
  }
  return (
    <div>Coin Detail Page: {id}</div>
  )
}