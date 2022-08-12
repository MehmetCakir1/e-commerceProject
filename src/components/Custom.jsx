import { GiCompass,GiDiamondHard,GiScrollUnfurled } from "react-icons/gi";

const Custom = () => {
  return (
    <main className="p-5 pb-0 pt-lg-0  custom">
      <div className="custom-inner container ">
      <div className="d-flex justify-content-between align-items-center row mb-md-2">
        <h3 className="col-lg-6 h2">Custom Furniture <br /> Built Only For You</h3>
        <p className="col-lg-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero.</p>
      </div>
      <div className="row mt-md-1 card-div">
        <div className="col-md-6 col-lg-4 p-3">
          <div className="card text-center p-3">
          <span className="fs-1 bg-light icon m-auto ">
            <GiCompass/>
          </span>
          <h4 className="my-3">Mission</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 p-3">
          <div className="card text-center p-3">
        <span className="fs-1 bg-light icon m-auto">
            <GiDiamondHard/>
          </span>
          <h4 className="my-3">Vision</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
        </div>
        </div>
        <div className="col-md-6 col-lg-4 p-3">
            <div className="card text-center p-3">
        <span className="fs-1 bg-light icon m-auto">
            <GiScrollUnfurled/>
          </span>
          <h4 className="my-3">History</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
        </div>
        </div>
      
      </div>
      </div>
 
    </main>
  )
}

export default Custom


