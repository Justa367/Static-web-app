import './App.css';

function ProductCard(){
  return(
  <article>
    <h2>Wspaniałe kolory puszki coca - cola</h2>
    <img
      src="images/cocacola.png"
      alt="Puszeczka Coca- Cola"
      width='130px'
      height="200px"
    />
    <p>Specyfikacje</p>
    <ul>
      <li>Elegancki kolor czerwoniutki</li>
      <li>Mroczny czarny</li>
    </ul>
    <button>Daj okejke</button>
    <h2>Te wspaniałe farby dekoral</h2>
    <img
      src="images/dekoral.png"
      alt="Farba dekoral"
      width='130px'
      height="130px"
    />
    <p>Specyfikacje</p>
    <ul>
      <li>Żadna farba nie wygląda na twojej ścianie tak dobrze</li>
      <li>Giga dużo palet kolorów do wyboru</li>
      <li>Nawet taką odporną na szrowanie zjadziesz</li>
    </ul>
    <button>Daj mega okejke</button>
    <h2>Pracownicy polecają super książki</h2>
    <img
      src="images/ksiazka.png"
      alt="Ksiazka"
      width='130px'
      height="200px"
    />
    <p>Specyfikacje</p>
    <ul>
      <li>ABC dla prawdziwego PM'a</li>
      <li>Tylko w wersji ang</li>
      <li>Praca jako PM GWARANTOWANA</li>
    </ul>
    <button>Daj giga okejke</button>
  </article>
  
  )
}

function App() {
  return (
    <div className="App">
      <h1>Dlaczego uwielbiamy PPG?</h1>
      <ProductCard/>
    </div>
  );
}

export default App;
