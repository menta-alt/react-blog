import Header from './components/Header/index.jsx'
import Main from './components/Main/index.jsx'
import Footer from './components/Footer/index.jsx'
import { BackTop } from 'antd';
import './App.less'
import './styles/base.less'

function App() {
  return (
    <div className='bcg'>
      <Header/>
      <Main/>
      <Footer/>
      <BackTop visibilityHeight={200} style={{ right: 25}}/>
    </div>
  );
}

export default App;
