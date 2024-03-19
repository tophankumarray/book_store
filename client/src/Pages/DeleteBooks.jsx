import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./../Services/AxiosInstance";
import Spinner from "./../Components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axiosInstance
      .delete(`/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error happened. Please check Console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4 h-screen w-full bg-gradient-to-r from-orange-400 to-red-400">
      <h1 className="text-3xl py-4 text-center text-white"> Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <h3 className="text-2xl">Are You Sure You Want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
