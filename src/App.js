import './index.css'
import Header from './Header';
import Entry from './Entry';
import data from './data';
import Footer from './Footer';
function App() {

  const dist = data.map((distinations) =>{
    return <Entry
              key = {distinations.id}
              {...distinations}
            />
  })

  return (
    <div className="App">
      <Header />
      {dist}
      <Footer/>
    </div>
  );
}

export default App;
