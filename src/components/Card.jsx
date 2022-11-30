

function Card({details}) {

  return (
    <div className="card" style={{width: "18rem"}}>
      <h1>Referesh the page to get new details.</h1>
  <img src={details.picture?.large} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Name - {details.name?.first} </h5>
    <h5 className="card-title">Location - {details.location?.country}</h5>
    <h5 className="card-title">Postal Code - {details.location?.postcode}</h5>
    <h5 className="card-title">Gender - {details.gender}</h5>
    <h5 className="card-title">Age - {details.dob?.age}</h5>
    <h5 className="card-title">Contact Number - {details.phone}</h5>
  
    <a href="#" className="btn btn-primary">Details</a>
  </div>
</div>
  )
}

export default Card