import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './form.style.css'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Form() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [group, setGroup] = useState('');
    const [number, setNumber] = useState('');
    const [region, setRegion] = useState('');
    const [st, setSt] = useState('')
    const [img, setImg] = useState('')

    const getImg = (e)=> {
        let img2 = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(img2)
        reader.addEventListener('load', () => {
            let img_url = reader.result;
            setImg(img_url);
        })
    }

    const notify = () => {
      toast.success("Sizning arizangiz qabul qilindi!");
    }
    const collectvalue = (e) => {
        e.preventDefault()
        let obj = {name: name, l_name: lastName, group: group, number: number, region: region, st: st, img: img}
        localStorage.setItem
        (`${name + lastName}`, JSON.stringify(obj));
        notify()
        return navigate('/')

    }
    return ( 
        <>
  <form className="container-form" onSubmit={collectvalue}>
    <div className="container-small-unit">
      <label className="label" htmlFor="">Ism</label>
      <input className="input" name='name' value={name} onChange={ e => setName(e.target.value)} type="text" placeholder="Ism kiriting" required />
    </div>
    <div className="container-small-unit">
      <label className="label" htmlFor="">Familiya</label>
      <input className="input" value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Familiya kiriting" required />
    </div>
    
    <div className="container-small-unit">
      <label className="label" htmlFor="">Guruhingizni tanlang</label>
      <select className="form-control" value={group} onChange={e => setGroup(e.target.value)} name="role"  required>
        <option disabled="" defaultValue="" value="">--------</option>
        <option value="A guruh">A Guruh</option>
        <option value="B guruh">B huruh</option>
        <option value="C guruh">C guruh</option>
        <option value="D guruh">D guruh</option>
      </select>
    </div>
    <div className="container-small-unit">
      <label className="label" htmlFor="">Telefon nomer</label>
      <input className="input" value={number} onChange={e => setNumber(e.target.value)} type="number" placeholder="Telefon nomer kiriting" required />
    </div>
    <div className="container-small-unit">
      <label className="label2">Viloyatni tanlang</label>
      <select className="form-control" value={region} onChange={e => setRegion(e.target.value)} name="role"  required>
        <option disabled="" defaultValue="" value="">---------</option>
        <option value="Andijon">Andijon</option>
        <option value="Buxoro">Buxoro</option>
        <option value="Toshkent">Toshkent</option>
        <option value="Namangan">Namangan</option>
        <option value="Farg'ona">Farg'ona</option>
        <option value="Navoiy">Navoiy</option>
        <option value="Xorazm">Xorazm</option>
        <option value="Jizzax">Jizzax</option>
        <option value="Toshkent vil">Toshkent vil</option>
        <option value="Samarqand">Samarqand</option>
      </select>
    </div>
    <div className="container-small-unit">
      <label className="label" htmlFor="">Tuman va Ko'chani kiriting</label>
      <input className="input" value={st} onChange={e => setSt(e.target.value)} type="text" placeholder="Tuman va Ko'chani kiriting" required />
    </div>
    <div className="container-small-unit">
      <label className="label" htmlFor="passport">Passportni elektron versiyasi</label>
      <input className="input" onChange={getImg} type="file" style={{display: 'none'}} id='passport' placeholder="Tuman va Ko'chani kiriting" />
    </div>
    <button className="btn-form" type="submit">submit</button>
  </form>
      
</>
     );
}

export default Form;