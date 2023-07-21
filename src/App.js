import CardDetyles from './components/CardDetyles';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar'
import FormInput from './components/FormInput'
import { Button } from 'react-bootstrap';


function App() {

  const data = [
    { title: 'tit1', descr: "desc1" },
    { title: 'tit2', descr: "desc2" },
    { title: 'tit3', descr: "desc3" },
    { title: 'tit4', descr: "desc4" },
  ]

  const clickMy = (massge) => {
    console.log("this is " + massge)
  }

  const printTitle = () => {
    console.log("this from app  " )
  }

  const onChangeHandler = (e) => {
    
    console.log( e.target.value)
  }

  const result = true;

  return (
    <div className="App">

      <NavBar />
      <Button onClick={printTitle} className='btn btn-info p-2 m-2'>Click</Button>
      <input className='p-2 m-2' onChange={onChangeHandler} />
      <FormInput />

      {result ? (data.map((item, index) => (
        <CardDetyles key={index} title={item.title} descr={item.descr} onClick={clickMy} >
          <h1>Hello</h1>
          <p>anther Hello</p>
        </CardDetyles>
      ))
      ) : (
        <NotFound color="danger" masssege="not Found yoo!" />
      )
      }


    </div>
  );
}

export default App;
