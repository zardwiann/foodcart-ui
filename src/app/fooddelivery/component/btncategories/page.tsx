import './page.module.css'

export default function BtnCategories(props:any){
      return (
          
        <button className='btn btn-danger btn-sm text-white mx-2'>{props.name}</button>
      )
}