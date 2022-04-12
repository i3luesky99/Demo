import React, { useState } from 'react'
import './popup.css'
import PopupRegis from './PopupRegis'
function Popup(props) {
  const [buttonPopupRegis, setButtonPopupRegis] = useState(false)
    return (
        (props.trigger) ? (
            <div className='popup'>
                <div className="popup-inner">
                    <h3 className="popup-title">Đăng nhập</h3>
                    <form className='popup-login'>
                        <label>Số điện thoại</label>
                        <input type="text" className='popup-input' placeholder='Nhập số điện thoại' />
                        <label>Mật khẩu</label>
                        <input type="password" className='popup-input' placeholder='Nhập mật khẩu' />
                    </form>
                    <button className='btn btn-accept'>Đồng ý</button>
                    <button className="btn btn-close" onClick={() => props.setTrigger(false)}>Đóng</button>
                    {props.children}
                    <div className='popup-bottom'>
                        <i>Bạn chưa có tài khoản ? <i style={{ color: "teal", cursor:"pointer" }} 
                        onClick={() => setButtonPopupRegis(true)}>Đăng ký</i>
                        </i>
                    </div>
                </div>
                <PopupRegis trigger={buttonPopupRegis} setTrigger={setButtonPopupRegis}>
                </PopupRegis>
            </div>
        ) : ""
    )
}

export default Popup
