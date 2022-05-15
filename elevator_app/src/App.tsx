import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/Reset.scss';
import './css/layout.scss';
import Layout from './components/layout/Layout';
import Fifth from './components/pages/Fifth';
import First from './components/pages/First';
import Fourth from './components/pages/Fourth';
import Second from './components/pages/Second';
import Third from './components/pages/Third';
import Intro from './components/pages/Intro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/fifth" element={<Fifth />}></Route>
            <Route path="/fourth" element={<Fourth />}></Route>
            <Route path="/third" element={<Third />}></Route>
            <Route path="/second" element={<Second />}></Route>
            <Route path="/first" element={<First />}></Route>
            <Route path="/" element={<Intro />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
