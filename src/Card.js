import { Dogs } from "./data.component";
import "./Card.css";

const Card = () => {
  return Dogs.map((val) => {
    return (
      <>
        <div className="card">
          <div className="img-container">
            <img src={val.wikipedia_url} alt={val.name}></img>
          </div>
          <div className="dog-name-container">
            <h3>{val.name}</h3>
          </div>
          <div className="dog-Age-container">
            <p></p>
          </div>
        </div>
        {/* <h1>{val.id}</h1>
        <p>{val.name}</p>
        <img src={val.wikipedia_url} alt="Dog" /> */}
      </>
    );
  });
};

export default Card;
