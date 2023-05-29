import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams()
  
  let item = localStorage.key(id)
  let data = localStorage.getItem(item)
  let obj = JSON.parse(data)
    return ( 
        <>
          <div className="card" style={{width: '18rem'}}>
          <Link className="btn btn-primary m-2" to='/'>Orqaga</Link><br/>
          {obj.img 
          ? <img src={obj.img} className="card-img-top" alt="..."/> 
          : <p className="card-text ms-3">Rasm yuklanmagan</p>
          }
          <div className="card-body">
          <p className="card-text">Qolgan malumotlar: {obj.name} <br/> {obj.lastName} <br/> {obj.number}</p>
          </div>
          </div>
        </>
     );
}

export default Detail;