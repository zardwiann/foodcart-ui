"use client";
import FoodDelivery from './layout';
import Navigation from './component/Navigation/page';
import Categories from './pages/categories/page';
import Footer from './component/footer/page';


export default function Home() {
    return (
        <section className='container mt-5'>
            <Categories />

        </section>
    )
}

Home.getLayout = function getLayout({ page }: { page: any }) {
    return (
        <FoodDelivery>{page}</FoodDelivery>
    )
}