import './Netflix.css';
function NetflixHeader() {
    return ( 
        
           <header>
                    <div>
                        <span className="brand-title">NETFLIX</span>
                    </div>
                    <div>
                        <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select className="form-select">
                                <option>Language</option> 
                                <option>English</option>
                                <option>हिंदी</option>
                            </select>
                            <button className="btn btn-danger ms-2">Signin</button>
                        </div>
                    </div>
                </header> 

     );
}

export default NetflixHeader;