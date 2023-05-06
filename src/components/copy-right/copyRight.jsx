import style from './copyright.module.css'
import poogle from '../../assets/poogle2.png'

export const CopyRight = () => {
  return (
    <div className={style.wrapper}>
        <div className='container'>
            <a href='/#'>
                <img src={poogle} alt='poogle logo'/>
            </a>
        </div>
    </div>
  )
}
