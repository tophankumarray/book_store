import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./../Services/AxiosInstance";
import Spinner from "./../Components/Spinner";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axiosInstance
      .post("/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
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
    <div className="h-screen w-full bg-gradient-to-r from-orange-400 to-red-400">
      <div className="mx-auto max-w-sm flex flex-col justify-center py-12 ">
        <h1 className="text-center text-2xl font-bold text-white">
          Create Book
        </h1>
        {loading ? <Spinner /> : ""}
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Name..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Email..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Your Phone number..."
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              onClick={handleSaveBook}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
