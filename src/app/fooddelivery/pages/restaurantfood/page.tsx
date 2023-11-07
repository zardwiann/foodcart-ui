import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faCircle, faDollar, faDotCircle, faLocationDot, faPesoSign, faPhone } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "../../component/ImageComponent/page";
import Footer from "../../component/footer/page";
export default function CatergoriesComponent() {
    return (
        <section>
            <div className="container-fluid  p-2">
                <div className="card py-3 px-3 shadow-lg border-0 mt-3">
                    <h6 className="fw-bold mt-2 text-center">Mario Italian Restaurant</h6>
                    <div className="m-1">
                        <small> <FontAwesomeIcon icon={faCheck} className="text-success  mx-1" />Open Now </small> <br />
                        <small><FontAwesomeIcon icon={faLocationDot} className="text-success mx-1" />Lorem ipsum dolor sit amet consecte  </small> <br />
                        <small><FontAwesomeIcon icon={faPhone} className="text-success mx-1" /> +0956392223  </small> <br />
                        <small> <FontAwesomeIcon icon={faPesoSign} className="text-success mx-1" />0-50</small>
                    </div>
                    <div className="">
                        <img src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img-fluid" />
                    </div>
                    <div className=" text-center p-2 mt-4 shadow-lg rounded link">
                        <small className="h5 text-white ">Food Available</small>
                    </div>
                    <div className="mt-3">
                        <div className="row row-cols-2 g-3">

                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"
                            />
                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"

                            />
                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"
                            />
                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"
                            />
                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"
                            />
                            <ImageComponent
                                src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                title="Title"
                                price="50"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>


    )
}