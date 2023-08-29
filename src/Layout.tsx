import Users from "./Users";

export default function Layout() {

    return (
        <>
            <nav className="navbar sticky-top navbar-light bg-light shadow">
                <div className="container">
                    <div className="wrapper d-flex flex-row w-100">
                        <a href="#" className="navbar-brand">
                            <img src="/images/logo.png" alt="Logo Sparkware" className="brand img-fluid" />
                        </a>

                        <div className="ms-auto d-flex flex-row align-items-center">
                            <img src="/images/profile.png" className="profile-photo  img-fluid rounded-circle float-left" alt="Profile Photo" />
                            <div className="profile-info ms-3 d-none d-sm-block">
                                <div className="first-name"><strong>Dragos</strong></div>
                                <div className="last-name">Bucurenci</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container my-4 my-md-5">
                <div className="row">
                    <div className="col">
                        <Users />
                    </div>
                </div>
            </div>
        </>
    )
}