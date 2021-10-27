import React, { useState } from 'react/cjs/react.development';
import './App.css';
import Input from './components/Input';
import Update from './components/Update';
import View from './components/View';


function App() {
  let [cards, setCards] = useState([])
  function addCards(name1, number, img) {
    let obj = {
      name: name1,
      phone: number,
      image: img,
      id: Date.now(),
    }
    let cardsArr = [...cards, obj]
    setCards(cardsArr)
  }
  function deleteCards(id) {
    console.log(id)
    let newArr = cards.filter(item => {
      return item.id !== id
    })
    setCards(newArr)
  }
  function updateCards(indexOfCard, values) {
    // console.log(values)
    let newArr = cards.map((item, index) => {
      if (indexOfCard === index) {
        item.name = values[0]
        item.phone = values[1]
        item.image = values[2]
      }
      return item
    })
    setCards(newArr)
  }
  return (
    <>
      <Input addCards={addCards} />
      <View cards={cards} updateCards={updateCards} deleteCards={deleteCards} />
    </>
  );
}

export default App;