import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { NavLink,Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer.jsx';


const AddForSale = ({userID}) => {

   const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [ref,setRef] = useState(false)
    const [name, setName] = useState("")
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    const [availability,setAvailability] = useState("")
    const [discount,setDiscount] = useState(0)
    const [color,setColor] = useState("")
    const [size,setSize] = useState("")



    const prod = {
        Name : name,
        Description : description,
        Price : price,
        Availability : availability,
        Quantity : quantity,
        Discount : discount,
        Color : color,
        Size : size,
        ProductImage : [url],
        userUserID:userID
    }
    console.log("prod",prod)

const navigate = useNavigate()
  const addProd = (newProd) => {
    axios.post('http://localhost:3000/api/products/addProd',newProd).then((res)=>{navigate("/allmysales",{state:{refresh:ref}})})
    .catch((err)=>{console.log(err)})
  }

//Cloudinary //
    const uploadImage = () => {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "Hassen")
      data.append("cloud_name","dlo8zyvcc")
      fetch("https://api.cloudinary.com/v1_1/dlo8zyvcc/image/upload",{
      method:"post",
      body: data
      })
      .then(res => res.json())
      .then(data => {setUrl(data.secure_url) ;console.log("urldata",data)})
      .catch(err => console.log(err))}
//***********************/
  return (
    <div>
      <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
         <NavLink to={'/addforsale'} >Add New Product For Sale</NavLink>
       <NavLink to={'/seller'}>Get Back to Home Page </NavLink>
       </div>

    <div className='grid justify-center align-middle items-center box-border rounded-lg shadow-2xl border-black  mt-30 gap-x-64 bg-gray-200 h-auto w-4/5 ml-36 '>

    <div className="pt-0 mb-3 my-28">
     <input
          type="text"
          placeholder="Product Name"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          required
          onChange={(e)=>{setName(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Quantity to put in stock"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setQuantity(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Product unit Price"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setPrice(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Product Discount"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setDiscount(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type="text"
          placeholder="Product Color"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setColor(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type="text"
          placeholder="Product Size"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setSize(e.target.value)}}
        />
    </div>



    <div className="pt-0 mb-3 ">
    <fieldset>

<div className='flex items-center w-full gap-8'>
<legend>Choose Availability :</legend>
  <div>
    <input type="checkbox"  name="In Stock" value="In Stock" onChange={()=>{setAvailability('In Stock')}} />
    <label for="In Stock">In Stock</label>
  </div>

  <div>
    <input type="checkbox" id="Out of Stock" value="Out of Stock" name="Out of Stock for now" onChange={()=>{setAvailability("Out Of Stock")}}/>
    <label for="Out of Stock">Out of Stock</label>
  </div>
  </div>
</fieldset>
    </div>



    <div className="pt-0 mb-3">
        <textarea
          placeholder="Description"
          className="relative w-full h-96 px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
          required
        />
      </div>
   
    <div className='fit-content mb-4 font-extrabold lg:text-xl'>
 
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
      </Button>

    <Button onClick={()=>{uploadImage()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> Use this Image </Button>
    
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url}/>
      </div>

    </div>
    <div className="pt-0 mb-3">
        <button
          className="hover:shadow-lg px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
          type="button" onClick={()=>{addProd(prod)}}> Put for sale </button>
      </div>
    <Link to="/allmysales"></Link>

    </div>
    
    <Footer/>
     </div>
  )
}

export default AddForSale;