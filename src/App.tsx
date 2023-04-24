import React, { useState } from "react";
import './App.css';
type ButtonProps = {
  name: string;
  price: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Button({name,price,count,setCount}: ButtonProps){
  return (
<>
<div className="wrap_btn">
        <button onClick={() => setCount(count + 1)} className="btn js-btn" id="coffee" >
          <span className="name">{name}</span><div><span className="js-price">{price}</span>円</div>
        </button>
        <div className="counter" id="coffee-count">{count}</div>
</div>
</>  
)}

function App() {
  const [coffee_count, setCoffeeCount] = useState<number>(0);
  const [tea_count, setTeaCount] = useState<number>(0);
  const [milk_count, setMilkCount] = useState<number>(0);
  const [coke_count, setCokeCount] = useState<number>(0);
  const [beer_count, setBeerCount] = useState<number>(0);

  const coffee_price = 480;
  const tea_price = 280;
  const milk_price = 180;
  const coke_price = 190;
  const beer_price = 580;

  const count = coffee_count + tea_count + milk_count + coke_count + beer_count;
  const price = coffee_count*coffee_price + tea_count*tea_price + milk_count * milk_price + coke_count * coke_price + beer_count * beer_price ;

  return (
    <div className="App">
  <div id="wrap_contents">
    <div id="left-content">
      <Button name="コーヒー" price={coffee_price} count={coffee_count} setCount={setCoffeeCount}/>
      <Button name="紅茶" price={tea_price} count={tea_count} setCount={setTeaCount}/>
      <Button name="ミルク" price={milk_price} count={milk_count} setCount={setMilkCount}/>
      <Button name="コーラ" price={coke_price} count={coke_count} setCount={setCokeCount}/>
      <Button name="ビール" price={beer_price} count={beer_count} setCount={setBeerCount}/>
    </div>
    <div id="right-content">
      <div className="wrap_data">
        <h3>お会計</h3>
        <div>商品数：<span id="count">{count}</span>個</div>
        <div>合計金額：<span id="price">{price}</span>円</div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
