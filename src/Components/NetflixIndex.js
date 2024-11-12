import './NetflixIndex.css';
import { NetflixHeader } from './NetflixHeader';
import { NetflixMain } from './NetflixMain';
import { NetflixRegister } from './NetflixRegister';
export function NetflixIndex() {
    return(
        <div className="Container-fluid" >
         <div className="box">
               <header>
                <NetflixHeader/>
                </header>
            <section className="d-flex justify-content-center align-items-center">
                <main>
                <NetflixMain/>
                <NetflixRegister/>
                </main>
            </section>
         </div>
        </div>
    )
}