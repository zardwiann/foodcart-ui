import { faCircle, faCheck, faHouse, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faShop } from "@fortawesome/free-solid-svg-icons"

export default function RestaurantComponent(props: any) {

    return (

        <div className="card shadow-lg border border-success mt-2 rounded-full p-2">
            <div className="card-header bg-white text-black fw-bold">
                <h6><FontAwesomeIcon icon={faShop} className="mx-1 text-success" /> {props.name}</h6>
            </div>
            <div className="p-2">
                <small className="card-text"><FontAwesomeIcon icon={faCheck} className="text-success mx-2" /> Open</small> <br />
                <small className="card-text"><FontAwesomeIcon icon={faPhone} className="text-success mx-2" />+{props.phone}</small> <br />
                <small className="card-text"><FontAwesomeIcon icon={faLocationDot} className="text-success mx-2" />{props.location}</small> <br />
            </div>
            <Link href="/fooddelivery/pages/restaurantfood" className="btn btn-danger btn-sm rounded">
                Order Food
            </Link>
        </div>
    )
}