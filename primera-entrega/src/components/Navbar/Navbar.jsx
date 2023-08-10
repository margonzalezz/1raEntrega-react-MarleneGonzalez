import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                {/* BRAND */}
                <a className="navbar-brand border p-3 bg-warning" href="#"> Coffee House </a>
                {/* LINKS */}
                <ul className="navbar-nav me-4">
                    <li className="navbar-item">
                        <a className="nav-link active" href="#">Desayunos y meriendas</a>
                    </li>
                    <li>
                        <a className="nav-link active" href="#">Nuestro café de especialidad</a>
                    </li>
                    <li>
                        <a className="nav-link active " href="#">Promociones</a>
                    </li>
                </ul>
                <CartWidget/>
        </div>
    </nav>
};

export default Navbar;


