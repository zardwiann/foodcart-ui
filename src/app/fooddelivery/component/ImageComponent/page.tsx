import { faCartShopping, faCheckCircle, faPesoSign, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function ImageComponent(props: any) {
    return (
        <div className="col d-flex align-items-stretch ">
            <div className="card border border-success rounded shadow-lg w-100">
                <div className=" p-2 fw-bold text-center ">
                    <small>
                        <a href={props.link} style={{ textDecoration: "none", color: 'black', fontSize: '12px' }} className="text-dark">
                            {props.restaurant}
                        </a>
                    </small>
                </div>
                <div>
                    <img src={props.src} className="img-fluid" style={{ height: '150px', width: '100%' }}
                        alt={props.alt} />
                </div>
                <small className="m-1">
                    <FontAwesomeIcon icon={faUtensils} className="text-success mx-1" />
                    <strong className="mx-1">{props.title}</strong> 
                </small>
                <small className="m-1">
                     <FontAwesomeIcon icon={faPesoSign}className="text-success mx-1"/> 
                     <strong className="mx-1">{props.price}</strong>
                </small>
                <button className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faCartShopping} className="text-sm" /></button>
            </div>
        </div>
    )
}