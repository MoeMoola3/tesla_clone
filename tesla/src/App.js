import React from 'react'
import './App.css';
import Header from "./components/Header";
import Item from "./components/item"
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Accessories from './assets/Desktop-Accessories.jpg'

function App() {
  return (
    <div className="App">
          <Header/>
          <div className="app_itemsContainer">
              <Item
                  title="Lowest Cost Solar Panels in America"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={SolarPanels}
                  leftBtnText="ORDER NOW"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  first
              />
              <Item
                  title="Model S"
                  desc="$69.420"
                  descLink=""
                  backgroundImg={ModelS}
                  leftBtnText="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
              />
              <Item
                  title="Model 3"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={Model3}
                  leftBtnText="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
              />
              <Item
                  title="Model X"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={ModelX}
                  leftBtnText="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
              />
              <Item
                  title="Model Y"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={ModelY}
                  leftBtnText="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
              />
              <Item
                  title="Solar for New Roofs"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={SolarRoof}
                  leftBtnText="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
              />
              <Item
                  title="Accessories"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={Accessories}
                  leftBtnText="SHOP NOW"
                  leftBtnLink=""
                  rightBtnText="LEARN MORE"
                  rightBtnLink=""
              />

          </div>
    </div>
  );
}

export default App;
