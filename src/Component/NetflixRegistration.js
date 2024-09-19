import  './NetflixRegistration.css'
function NetflixRegistration() {
    return ( 
        <div>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="d-flex justify-content-center">
            <form className="input-group input-group-lg w-50">
                <input type="email" placeholder="Your email address" className="form-control" />
                <button className="btn ms-1 btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
            </form>
        </div>
    </div>
     );
}

export default NetflixRegistration;