
import EmailVerification from "../Components/EmailVerifaction"
import "./Packages.scss"
import Sidebar from "./Sidebar"

function Packages() {
    return (
        <>
            <div className="packages-Container">
                <div className="container-fulid">
                    <div className="row g-0">
                        <div className=" col-2 bg-white shadow-lg  ">
                            <div className=" ">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-10">
                            <main className="applications-container my-5 mx-5">
                                <EmailVerification />
                                
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
