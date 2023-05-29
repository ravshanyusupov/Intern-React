import { Link } from "react-router-dom";


function Carousel() {
    const style = {
        borderRadius: '30px',
        width: '150px',
        height: '40px',
        border: 'none',
        marginTop: '5%'
    }

    return ( 
    <>
       <div style={{backgroundImage: 
        `url('https://cdn.vectorstock.com/i/preview-1x/98/98/night-living-room-interior-with-tv-and-furniture-vector-45549898.jpg')`, 
        backgroundRepeat: 'no-repeat', backgroundSize: '100% 400px', width: '100%',  height: '400px', textAlign: 'center', padding: '7%'}}>
                <h5 style={{ color: 'white'}}>75 ming atrofidagi talabalar ijaralarda yashar ekan. Ijara topish, propiskaga qoʻyish, har oy ijara haqini toʻlash muammolari haqidaku soatlab gapirish mumkin.
                    Yangi oʻquv yili boshlanishi bilan yotoqxonaga joylashish muammosi doim talabalarni qiynab keladi. Dekanga yalin, prorektorga kir, rektordan iltimos qil va h.k. Talabalar yotoqxonasiga joylashish boʻyicha aniq Nizom yoki yoʻriqnoma bormikin-a, qidirib topa olmadim. Balki bordir.</h5>
                <Link to='/about'><button style={style}>Batafsil</button></Link>
       </div>
    </>
     );
}

export default Carousel;