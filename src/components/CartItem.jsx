
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="border-b-[3px] mt-1 flex justify-between h-full ">

        <div className="h-[180px] w-[180px] mt-[25px] mb-[25px] ">
          <img src={item.image} className="h-full w-4/5" />
        </div>
        <div className="w-3/5 mt-[25px] mb-[25px]">
          <h1 className="font-bold mb-2">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex mt-[30px] justify-between">
            <p className="text-green-600 font-bold" >${item.price}</p>
            <div
            className=" cursor-pointer shadow-red-400 mr-[50px]"
            onClick={removeFromCart}>
              <MdDelete fill="" className="relative transition-all animate-spin" color="black" fontSize="1.2em"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
