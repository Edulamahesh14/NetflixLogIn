export function NetflixHeader() {
    return (
        <>
            <div className="d-flex justify-content-between p-3">
                <div>
                    <h1 className="text-danger">NETFLIX</h1>
                </div>
                <div className="input-group w-25">
                    <select className="form-select">
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">SignIn</button>
                </div>
            </div>

            <div class="modal fade h-100" id="exampleModal" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">Let's start the Journey</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className="form" >
                                {/* <label for="name">Name</label> */}
                                <input type="text" placeholder="Username or email" name="name" className="form-control mb-2"/>
                                {/* <label for="pwd">Password</label> */}
                                <input type="password" placeholder="Password" name="pwd" className="form-control mb-2"/>
                                <button className="w-100 rounded bg-primary text-light btn mb-2">Login</button>
                                
                                <button className="text-center w-100 text-primary mb-2 btn">Forgotten Password?</button>
                                <div className="w-100 text-center">
                                <button className="text-center w-50 text-light btn " style={{backgroundColor:"green"}} >Create New Account</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}