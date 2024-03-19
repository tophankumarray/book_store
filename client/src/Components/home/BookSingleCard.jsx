import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
  return (
      <div
        key={book._id}
        className="p-6 bg-white rounded-lg shadow-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl gap-4"
      >
        <h2 className=" top-1 right-2 px-2 py-1 bg-red-300 rounded-lg w-14">
          {book.publishYear}
        </h2>
        {/* <h4 className="my-2 text-gray-500">{book._id}</h4> */}
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>
      </div>
  );
};

export default BookSingleCard;
