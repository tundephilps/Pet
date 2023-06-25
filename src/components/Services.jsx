import { useQuery } from "react-query";
import React from "react";
import { Box, Card, Grid } from "@mui/material";

const Services = () => {
  const fetchData = async () => {
    const response = await fetch("https://api.npoint.io/badbf7f100a5eda7937f");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery("data", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Box>
      <div className="relative py-4 flex items-center justify-center mx-auto ">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="relative flex w-80 flex-col rounded-xl hover:bg-purple-700 hover:text-white bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={item.image}
                      alt=""
                      className="h-10 w-10 bg-none"
                    />
                    <p className="font-bold">{item.service}</p>
                  </div>

                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {item.text}
                  </p>
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {item.charges}
                  </h5>
                </div>
                <div className="p-2 pt-0 ">
                  <a className="!font-medium " href="#">
                    <button
                      className="flex select-none items-center justify-start gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-dark="true"
                    >
                      Get Service
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Services;
