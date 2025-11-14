import { fetchCryptos } from "../api/coinGecko";
export const Home = () => {
 const fetchCryptoData = async () => {
    const data = await fetchCryptos();
    console.log(data);
 }
 return <div>This is the home page</div>
}
