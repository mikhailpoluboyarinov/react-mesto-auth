import logoMesto from "../images/logo-mesto.svg";

export default function Header(props) {
    const { userEmail, onSignOut } = props;
    return (
        <header className="header">
            <img className="header__logo" src={logoMesto} alt="Логотип" />
            <div className="header__links">
                <p class="header__text header__email">
                    qaz@qaz.qaz
                </p>
                <button className="header__text header__button" onClick={onSignOut}>
                    Выйти
                </button>
            </div>
        </header>
    )
}

/*
useLocation?

return (
        <header className="header">
            <img className="header__logo" src={logoMesto} alt="Логотип" />
                <div className="header__links">
                    <p className="header__text header__email">
                    </p>
                <Link to="/sign-in" className="header__text header__link">
                </Link>
                <Link to="/sign-up" className="header__text header__link">
                </Link>
                <button
                  onClick={props.onSignOut}
                  className="header__text header__button"
                >
                </button>
                </div>
        </header>
)*/



