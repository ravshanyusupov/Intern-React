import CartItem from "./CartItem";
import data from '../data.json'

function Cart() {
  const data = []
  const dataItem = []
  for (let i = 0; i < localStorage.length; i++) {
      data.push(localStorage.key(i))
  }
  for (let i = 0; i < data.length; i++) {
      dataItem.push(JSON.parse(localStorage.getItem(data[i])))
  }
  console.log(!dataItem);
  return ( 
        <div className="container"><br/>
      <div class="row">
        {
          dataItem.map((value, index) => (
            <CartItem 
            name={value.name} last={value.l_name} 
            region={value.region} st={value.st} key={index} id={index}/>
          ))
        }
        {dataItem.length == 0 && <h3 className="text-center">Arizalar mavzud emas</h3>}
      </div>
        </div>
     );
}

export default Cart;