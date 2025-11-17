import { useParams } from "react-router"

export const CoinDetail = () => {
  const {id} = useParams();
  return (
    <div>Coin Detail Page</div>
  )
}