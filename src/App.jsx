import { Allroutes } from './routes/Allroutes';
import { Header, Footer } from './components';


function App() {
  

  return (
    <div className='dark:bg-slate-800'>
       <Header/>
       <Allroutes/>
       <Footer/>
    </div>
  )
}

export default App
