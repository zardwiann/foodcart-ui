import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "../../component/ImageComponent/page";

export default function MostPopular() {
    return (
        <div className="m-2">
            <h4 className='p-2'>Most Popular</h4>
            <div className="row row-cols-2 g-3">
                <ImageComponent
                    src="https://images.pexels.com/photos/18273978/pexels-photo-18273978/free-photo-of-lasagna-served-on-a-tray-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    restaurant="Mark Italian Restuarant"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"

                />
                <ImageComponent
                    src="https://images.pexels.com/photos/16681314/pexels-photo-16681314/free-photo-of-pasta-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    restaurant="LoremIpmsume"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"

                />
                <ImageComponent
                    src="https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    restaurant="LoremIpmsume"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"

                />
                <ImageComponent
                    src="https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    restaurant="LoremIpmsume"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"
                />
                <ImageComponent
                    src="https://images.pexels.com/photos/15564193/pexels-photo-15564193/free-photo-of-pancakes-and-maple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    restaurant="LoremIpmsume"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"

                />
                <ImageComponent
                    src="https://images.pexels.com/photos/18275456/pexels-photo-18275456/free-photo-of-fast-food-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    restaurant="LoremIpmsume"
                    title="Title"
                    price="50"
                    link="/fooddelivery/pages/restaurantfood"

                />


            </div>
        </div>

    )
}