import React, { useEffect, useState } from "react";
//import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';

const FreeBook = () => {
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
  const filterData = book.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Books</h1>
          <p>
            Unlock a world of knowledge and imagination without spending a dime!
            Explore our exclusive selection of free books, ranging from timeless
            classics to hidden gems across various genres.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {
              filterData.map((item)=>(
                <Cards item={item} key={item.id}/>
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
