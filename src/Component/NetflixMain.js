import './NetflixMain.css';
import NetflixRegistration from './NetflixRegistration';
function NetflixMain() {
    return (
        <main>
            <div className="text-white text-center">
                <div className="h1">
                    Unlimited movies, TV shows and more
                </div>
                <div className="h3">
                    Watch anywhere. Cancel anytime.
                </div>
                <NetflixRegistration />
            </div>
        </main>
    );
}

export default NetflixMain;
