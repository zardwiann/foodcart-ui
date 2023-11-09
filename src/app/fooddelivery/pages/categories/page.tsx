import MostPopular from '../popularfood/page'
import BtnCategories from '../../component/btncategories/page'
import style from './page.module.css'
import Footer from '../../component/footer/page'


export default function Categories() {
      return (
            <div className='container'>
                  <div className="m-2">
                        <div className='mt-4'>
                              <h4 className='p-2'>Categories</h4>
                        </div>
                        <div className="row m-2 ">
                              <div className="col p-2  rounded mt-1">
                                    <div className={style.horizontal_scrollable}>
                                          <BtnCategories name="Pizza" />
                                          <BtnCategories name="Burgers" />
                                          <BtnCategories name="Sandwiches" />
                                          <BtnCategories name="BBQ" />
                                          <BtnCategories name="Noodles" />
                                          <BtnCategories name="Seafood" />
                                          <BtnCategories name="Vegetarian/Vegan" />
                                    </div>
                              </div>
                        </div>
                  </div>
                  <MostPopular></MostPopular>
                  <Footer/>
            </div>



      )
}