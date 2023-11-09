
import Link from "next/link"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './page.module.css';

export default function Navigation() {
   return (
      <section className="container">
         <div className="container-fluid ">
            <nav className="p-2 mt-1 rounded text-white  text-center link" >
               <span className="h5">  <FontAwesomeIcon icon={faCartShopping} />  Food Delivery Services</span>
            </nav>
            <div className="row mt-2 text-center">
               <div className="col-sm mt-2 ">
                  <div className="shadow-lg p-2 rounded link">
                     <Link href="/fooddelivery/pages/categories" className={style.link}>Home</Link>
                  </div>
               </div>
               <div className="col-sm mt-2">
                  <div className="shadow-lg p-2 rounded text-white link">
                     <Link href="/fooddelivery/pages/restaurant" className={style.link}>Restaurant</Link></div>
               </div>
               <div className="col-sm mt-2">
                  <div className="shadow-lg p-2 rounded link ">
                     <Link href="/fooddelivery/pages/categories text-white" className={style.link}>Log In</Link>
                  </div>
               </div>
            </div>

         </div>

      </section>

   )
}