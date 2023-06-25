import { Box } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";

const Products = () => {
  const fetchData = async () => {
    const response = await fetch("https://api.npoint.io/be8734b329052728151c");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery("product", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="relative flex bg-white text-gray-800 py-12">
      <Box>
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-5 mt-8 md:mt-16 md:grid-cols-3">
            <div className="lg:flex hidden text-md font-bold">
              <h4>Featured Products</h4>
            </div>
            <div className="lg:flex hidden text-md font-bold">
              <h4>On Sale Products</h4>
            </div>
            <div className="lg:flex hidden text-md font-bold">
              <h4>Top Rated Products</h4>
            </div>
            {data.map((product) => (
              <div key={product.id} className="flex gap-2">
                <img
                  className="object-contain bg-center w-20 h-20 rounded-lg "
                  src={product.image}
                  alt=""
                />

                <div className="flex flex-col gap-1 py-1 lg:mx-6">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-800 hover:underline  "
                  >
                    {product.title}
                  </a>
                  <div className="text-yellow-600 flex gap-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-sm text-purple-500 font-bold ">
                    {product.Price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Products;
