import { useState } from 'react';
import './App.css';
import Popup from './components/Popup';

function App() {
  const {user} = true;
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <div className='topBar'>
        <label style={{ color: "white" }} className="topRight">Họ và tên khách hàng</label>
        <i style={{ color: "white" }} className='topLeft'>Logo nè </i>
      </div>
      <h2 className='title'>Xác nhận giao dịch</h2>
      <div className='content'>
        <div className='content-top'>
          <label>Bạn đã đưa</label>
          <label>100.000đ</label>
        </div>
        <div className='content-bot'>
          Cho Họ và tên
        </div>
      </div>
      {/* <div className='bottom'>
        <label style={{ color: "lightcoral" }}>Bạn cần <i style={{marginLeft:"2px"}} className='btn'
            onClick={() => setButtonPopup(true)}>
          Đăng nhập</i> để xem nội dung này
        </label>
      </div> */}
      <button >Đăng nhập</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      </Popup>
    </div>
  );
}

export default App;
