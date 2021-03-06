import Logo from '../../src/logo.svg';


export default function Footer() {
    return (
        <footer className="container-fluid bg-dark footer w-100">
            <div className="row p-2 align-items-center">
                <div className="col-12 col-md-4 social mt-3 text-center text-md-start">
                    <i className="fab fa-2x fa-facebook p-1"></i>
                    <i className="fab fa-2x fa-github p-1"></i>
                    <i className="fab fa-2x fa-slack p-1"></i>
                </div>
                <div className=" col-12 col-md-4 mt-3 text-center">
                    <img
                        alt="logo"
                        src={Logo}
                        width="70"
                        height="70"
                    />
                </div>
            </div>
        </footer>
    )
}
