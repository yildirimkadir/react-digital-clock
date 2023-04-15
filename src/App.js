import React, { useState } from 'react';
import './App.css';

function App() {

  let zeit = new Date().toLocaleTimeString(); // state baslangic verisi icin yazdik yazmasak da olur.

  const [currentTime, setCurrentTime] = useState(zeit);

  function Time() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  } // Fonksiyon olarak yazmaliyiz ki; setInterval saniyede bir fonksiyonu calistirsin ve fonksiyon oldugunda güncelleyebilsin diger türlü hata verir.

  setInterval(Time, 1000); // bu olmadan funct güncellenmez. Son güncellendigi dk ve sn görünür ekranda sadece. 

  return (
    <div className="App">
      <h1 class="digital-clock">{currentTime}</h1>
    </div>
  );
}

export default App;
