import { Link } from 'react-router-dom';
export default function Currencies (props) {
    const currencies = [
      { name: "Bitcoin", symbol: "BTC" },
      { name: "Litecoin", symbol: "LTC" },
      { name: "Ethereum", symbol: "ETH" },
      { name: "Ethereum Classic", symbol: "ETC" },
      { name: "Stellar Lumens", symbol: "XLM" },
      { name: "Dash", symbol: "DASH" },
      { name: "Ripple", symbol: "XRP" },
      { name: "Zcash", symbol: "ZEC" },
    ];
  
  return (
    <div className="currencies">
      {/* Map through the currencies array, for each currency we will get the symbol */}
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link key={coin.name} to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
}