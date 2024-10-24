import React from "react";
import "../App.css";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import Greetings from "./Greetings";

function App() {
  const imgUrl1 = "https://i.pinimg.com/enabled_lo/564x/da/3f/6d/da3f6dffdf103e9df5e5905574597579.jpg"; 
  const imgUrl2 = "https://i.pinimg.com/enabled_lo/564x/de/f7/cd/def7cd1f11004948fa6248923579ea25.jpg";
  const imgUrl3 = "https://i.pinimg.com/564x/81/4b/32/814b326bac2e8c4d5fc1a535fc45a298.jpg";

  return (
    <div className="app-container">
      <Header />
      <Greetings user="Kent" />
      <div className="cards-container">
        <Cards url={imgUrl1} title="Tokyo Japan" size="250" />
        <Cards url={imgUrl2} title="Paris France" size="250" />
        <Cards url={imgUrl3} title="Sydney Australia" size="250" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
