import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({ books }) => {
  return (
    <table className="border-collapse border border-slate-500 w-full ">
      <thead>
        <tr>
          <th className="border border-slate-600 p-3 text-sm font-semibold tracking-wide text-center text-white">
            No
          </th>
          <th className="border border-slate-600 p-3 text-sm font-semibold tracking-wide text-center text-white">
            Title
          </th>
          <th className="border border-slate-600 p-3 text-sm font-semibold tracking-wide text-center max-md:hidden text-white">
            Author
          </th>
          <th className="border border-slate-600 p-3 text-sm font-semibold tracking-wide text-center max-md:hidden text-white">
            Publish Year
          </th>
          <th className="border border-slate-600 p-3 text-sm font-semibold tracking-wide text-center text-white">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 text-center p-3 text-sm">
              {index + 1}
            </td>
            <td className="border border-slate-700 text-center p-3 text-sm">
              {book.title}
            </td>
            <td className="border border-slate-700 text-center p-3 text-sm max-md:hidden">
              {book.author}
            </td>
            <td className="border border-slate-700 text-center p-3 text-sm max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-slate-700 text-center p-3 text-sm">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
