import React from 'react'
import '../../App.scss'
import { Link } from 'react-router-dom'
import { isAuth, setName } from '../../store/ducks/user/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/ducks/user/actionCreators'

const Header = () => {
    const auth = useSelector(isAuth)
    const name = useSelector(setName)
    const dispatch = useDispatch()
    return (
        <div className="header">
            <div className="header__item">
                <div className="header__logoText">
                    <Link to="/">D3OPA</Link>
                </div>
                {auth && (
                    <div className="header__list">
                        <h4>{name}</h4>
                        <Link to={'/list'}>
                            Список слов
                        </Link>
                        <div className="navbar__login" onClick={() => dispatch(logout())}>
                            Выход
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
