import Link from "next/link";
import RestaurantComponent from "../../component/RestaurantList/page";
import Footer from "../../component/footer/page";

export default function RestaurantList() {
    return (
        <section>
            <div className="container-fluid mt-5">
                <div className="mb-3">
                    <input type="text" className="form-control  rounded" placeholder="Search Restaurant" />
                </div>
                <RestaurantComponent
                    name="Mark Italian Food"
                    description="Lorem ipsum dolor sit amet,consectetur adipisicing elit. "
                    phone="0903947294"
                    location=" sunt eaque eos aspernatur ipsa culpa provident."
                />
                <RestaurantComponent
                    name="Restaurant Name"
                    description="Lorem ipsum dolor sit amet,consectetur adipisicing elit. "
                    phone="093453947294"
                    location=" sunt eaque eos aspernatur ipsa culpa provident."
                />

                <RestaurantComponent
                    name="Restaurant Name2"
                    description="Lorem ipsum dolor sit amet,consectetur adipisicing elit. "
                    phone="0903947294"
                    location=" sunt eaque eos aspernatur ipsa culpa provident."
                />

                <RestaurantComponent
                    name="Restaurant Name3"
                    description="Lorem ipsum dolor sit amet,consectetur adipisicing elit. "
                    phone="0903947294"
                    location=" sunt eaque eos aspernatur ipsa culpa provident."
                />
            </div>
            <Footer/>
        </section>



    )
}