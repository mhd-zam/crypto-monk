import style from './header.module.css'

function Header() {
    return (
        <div>
            <div className={style.background}>
            <div className={style.header}>
                <div className={style.title} >
                    <h1 className={style.heading} >crypto monk</h1>
                </div>
            </div>
            </div>
          
           
        </div>
    )
}

export default Header

