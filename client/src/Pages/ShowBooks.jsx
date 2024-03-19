import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./../Services/AxiosInstance";
import Spinner from "./../Components/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-r from-orange-400 to-red-400">
      <div className="py-12 mx-auto max-w-sm flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold text-white">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="bg-white rounded-md shadow-lg p-6 w-96">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title :</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author :</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year :</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time :</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Latest Update Time :
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBooks;
