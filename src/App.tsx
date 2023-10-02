import React, { useState } from "react";
import './App.css';
type ButtonProps = {
  id:string;
  name: string;
  price: number;
  count: number;
  setItem: (id: string) => void;
};
type Item = {
  id: string;
  name: string;
  price: number;
  count: number;
};
function Button({id,name,price,count,setItem}: ButtonProps){
  const handleButtonClick = () => {
    setItem(id); // ボタンがクリックされたときにアイテムの id を渡す
  };
  return (
<>
<div className="wrap_btn">
        <button onClick={handleButtonClick} className="btn js-btn" id={id} >
          <span className="name">{name}</span><div><span className="js-price">{price}</span>円</div>
        </button>
        <div className="counter" id="coffee-count">{count}</div>
</div>
</>  
)}
function App() {
  //先にITemを定義する
  const items: Item[]  = [
    {id:"1",name:"コーヒー",price:480,count:0},
    {id:"2",name:"紅茶",price:280,count:0},
    {id:"3",name:"ミルク",price:180,count:0},
    {id:"4",name:"コーラ",price:190,count:0},
    {id:"5",name:"ビール",price:580,count:0}
  ]
  //useStateで管理するようにする
  const [itemsState, setItemsState] = useState<Item[]>(items);
  //クリックしたときの処理。
  const handleItemClick = (itemId: string) => {
    setItemsState((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return updatedItems;
    });
  };
 const totalCount = itemsState.reduce((count,item)=>count + item.count,0)
 const totalPrice = itemsState.reduce((price,item)=>price + item.count*item.price,0)
  return (
    <div className="App">
  <div id="wrap_contents">
    <div id="left-content">
    {itemsState.map((product, index) => (
            <Button
              id = {product.id}
              name={product.name}
              price={product.price}
              count={product.count}
              setItem={handleItemClick}
            />
      ))}
    </div>
    <div id="right-content">
      <div className="wrap_data">
        <h3>お会計</h3>
        <div>商品数：<span id="count">{totalCount}</span>個</div>
        <div>合計金額：<span id="price">{totalPrice}</span>円</div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
