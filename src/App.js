import React from "react";
import "./App.css"; 
import Header from './Header'; 
import MainContent from './MainContent'; 
import Description from './Description'; 
import Footer from './Footer'; 
import Greetings from './Greetings'; 
export default function App() {
  return (
    <div>
      <Header />
      <Greetings user="Kent" /> 
      <MainContent />
      <Description />
      <Footer /> 
    </div>
  );
}
