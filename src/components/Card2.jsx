import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecreaseQnty, IncreaseQnty, RemoveItem } from '../Redux/cartSlice';
import { toast } from 'react-toastify';

function Card2({ name, image, price, id, qnty }) {
  let dispatch = useDispatch();

  const handleDecreaseQnty = () => {
    if (qnty > 1) {
      dispatch(DecreaseQnty(id));
      toast.info(`Decreased quantity of ${name}`);
    } else {
      dispatch(RemoveItem(id));
      toast.error(`${name} removed from cart.`);
    }
  };

  const handleIncreaseQnty = () => {
    dispatch(IncreaseQnty(id));
    toast.info(`Increased quantity of ${name}`);
  };

  const handleRemoveItem = () => {
    dispatch(RemoveItem(id));
    toast.error(`${name} removed from cart.`);
  };

  return (
    <div className='w-full h-[140px] p-2 gap-6 mt-3 shadow-lg rounded-2xl flex justify-between bg-gray-100 dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300'>
      <div className='w-[60%] h-full flex items-center justify-between gap-2 p-2 rounded-lg'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
          <img 
            src={image} 
            alt={name} 
            className='object-cover w-full h-full rounded-lg'
          />
        </div>
        <div className='w-[40%] h-full flex flex-col p-1 gap-3'>
          <div className='text-sm md:text-md font-semibold text-gray-700 dark:text-gray-200'>
            {name}
          </div>
          <div className='w-[100px] h-[30px] text-blue-400 dark:text-blue-300 flex items-center font-semibold border-2 rounded-lg border-blue-400 dark:border-blue-300 overflow-hidden'>
            <button
              className='w-[30%] h-full bg-white dark:bg-gray-700 flex justify-center items-center hover:bg-slate-200 dark:hover:bg-gray-600'
              onClick={handleDecreaseQnty}
            >
              -
            </button>
            <span className='w-[40%] h-full bg-slate-200 dark:bg-gray-600 flex justify-center items-center text-gray-800 dark:text-gray-200'>
              {qnty}
            </span>
            <button
              className='w-[30%] h-full bg-white dark:bg-gray-700 flex justify-center items-center hover:bg-slate-200 dark:hover:bg-gray-600'
              onClick={handleIncreaseQnty}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 p-3 items-end'>
        <span className='text-sm md:text-lg font-semibold text-blue-400 dark:text-blue-300'>
          ₹{price}/-
        </span>
        <RiDeleteBin6Line
          className='w-[20px] md:w-[30px] h-[20px] md:h-[30px] text-red-400 dark:text-red-300 cursor-pointer hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200'
          onClick={handleRemoveItem}
        />
      </div>
    </div>
  );
}

export default Card2;