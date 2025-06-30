import { FaBorderAll } from "react-icons/fa6";

import { MdFreeBreakfast } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { RiBowlLine } from "react-icons/ri";

import { CiBowlNoodles } from "react-icons/ci";

import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

const Categories = [
    
    {
        id: 1,
        name: "All",
        icon:  <FaBorderAll className="w-[60px] h-[60px] text-blue-500" />

    },
    {
        id: 2,
        name: "Breakfast",
        icon: <MdFreeBreakfast className="w-[60px] h-[60px] text-blue-500" />

    },
    {
        id: 3,
        name: "soups",
        icon: <RiBowlLine className="w-[60px] h-[60px] text-blue-500" />


    },
    {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-blue-500" />

    },
    {
        id: 5,
        name: "pizza",
        icon: <FaPizzaSlice className="w-[60px] h-[60px] text-blue-500" />

    },
    {
        id: 6,
        name: "burger",
        icon: <FaHamburger className="w-[60px] h-[60px] text-blue-500" />

    },
    {
        id: 7,
        name: "main_course",
        icon: <MdFoodBank className="w-[60px] h-[60px] text-blue-500" />

    }
]

export default Categories