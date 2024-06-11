import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand  px-5" to="/">
                    <i className="fa-regular fa-address-book">
                        <span className='px-2'>Private Contact</span></i>
                </Link>
                <div className="collapse navbar-collapse justify-content-end px-5">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourite">Favourite</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
