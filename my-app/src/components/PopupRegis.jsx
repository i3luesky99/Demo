import React from 'react'
import './popupregis.css'
function PopupRegis(props) {
    return (
        (props.trigger) ? (
            <div className='popup'>
                <div className="popupregis-inner">
                    <h3 className="popup-title">Đăng ký</h3>
                    <form className='popup-login'>
                        <label>Số điện thoại</label>
                        <input type="text" className='popup-input' placeholder='Nhập số điện thoại' />
                        <label>Mật khẩu</label>
                        <input type="password" className='popup-input' placeholder='Nhập mật khẩu' />
                        <label>Mật lại mật khẩu</label>
                        <input type="password" className='popup-input' placeholder='Nhập lại mật khẩu' />
                    </form>
                    <button className='btn btn-accept'>Đăng ký</button>
                    <button className="btn btn-close" onClick={() => props.setTrigger(false)}>Đóng</button>
                    {props.children}
                </div>
            </div>
        ) : ""
    )
}

export default PopupRegis
