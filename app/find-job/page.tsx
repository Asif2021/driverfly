import FilterResults from "../components/FilterResults/FilterResults"
import Sort from "../components/Sort"

const findJob = () => {
  return (
    <main className='container py-lg-5'>
 <div className='row'>
  <div className='col-lg-4 bg-light'>
    <FilterResults/>
  </div>
  <div className='col-lg-8 bg-light'>
<h4>Showing 1-10 results of 45</h4>
<Sort/>


  </div>
 

 </div>
    </main>
  )
}

export default findJob