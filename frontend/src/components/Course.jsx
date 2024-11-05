import React, { useEffect, useState } from 'react'
import axios from 'axios';

//import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
    const [book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getBook();
    },[])
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16'>
            <div className='items-center justify-center text-center'>
                <h1 className=' text-2xl
                 font-semibold md:text-4xl'>
                    We're delighted to have you <span className='text-green-500'>here! : )</span>
                 </h1>
                 <p className='mt-8 md:mt-12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt commodi velit labore soluta. Culpa consequuntur officiis tempora ipsam aperiam sunt ex libero quis facilis. Laborum odio vitae obcaecati voluptatum aliquid.
                 </p>
                 <Link to="/">
                 <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-6'>Back</button></Link>
                 
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 md:ml-8'>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Course