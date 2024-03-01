import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const navigate=useNavigate();

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex  mt-5 justify-between max-w-6xl mx-auto ">


      <div className="flex flex-col justify-betwee items-center border-b-4 w-1/2">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between items-start ">

        <div  className="flex flex-col items-start justify-start h-full fixed top-[150px] right-[450px] ">
          <div className="text-green-600 font-bold uppercase">Your Cart</div>
          <div className="text-green-600 font-semibold uppercase text-4xl">Summary</div>
          <p>
            <span className="font-bold text-xl">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="fixed bottom-10 right-[350px]">
          <p className="flex gap-1 font-semibold">Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span></p>
          <button className="bg-green-600 font-semibold text-white px-[100px] py-[10px] rounded-md mt-[20px]">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-semibold">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 px-[50px] py-[10px] rounded-md text-white font-bold mt-5"
        onClick={() => navigate("/")}
        >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
