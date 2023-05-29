import { Link } from "react-router-dom";


function CartItem({ name, last, st, region, id }) {
    return ( 
        <>
         <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card text-center" style={{marginBlock: '3%'}}>
        <h6 className="card-header text-end">Sana: 19:23</h6>
      <div className="card-body">
        <h5 className="card-title">{name} {last}</h5>
        <p className="card-text">Manzil: {region}; {st}</p>
        <Link className="btn btn-primary" to={`/${id}`}>Batafsil</Link>
      </div>
    </div>
  </div>
        </>
     );
}

export default CartItem;