import { Box, Grid } from "@mui/material";
import React from "react";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useQuery } from "react-query";

const Posts = () => {
  const fetchData = async () => {
    const response = await fetch("https://api.npoint.io/7de1785984e7e39d2c45");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery("Posts", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="py-8 ">
      <Box>
        <div className="pb-4 flex items-center justify-center flex-col gap-3 font-bold ">
          <h2 className="text-3xl font-bold leading-6 text-gray-800">
            Other Posts
          </h2>
        </div>

        <div className="relative mx-auto ">
          <Grid container spacing={4}>
            {data.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <div className="relative flex flex-col mb-12 overflow-hidden cursor-pointer">
                  <div className="absolute top-0 right-0 w-20 h-5 rounded-sm bg-yellow-400">
                    <h4 className="flex items-center justify-center font-bold text-xs">
                      {post.category}
                    </h4>
                  </div>
                  <a href="/post-post">
                    <div className="flex-shrink-0">
                      <img
                        className="object-containe w-full h-48 rounded-lg"
                        src={post.image}
                        alt=""
                      />
                    </div>
                  </a>
                  <div className="flex flex-col justify-between flex-1">
                    <a href="/post-post"></a>
                    <div className="flex-1">
                      <a href="/post-post">
                        <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                          <div className="flex flex-row gap-4 items-center">
                            <div className="flex items-center gap-2">
                              <FaUserAlt className="text-purple-700" />
                              <span>{post.author}</span>
                            </div>
                            <div className=" flex items-center gap-2">
                              <BsFillCalendar3WeekFill className="text-purple-700" />
                              <span>02.01.2022</span>{" "}
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block mt-2 space-y-6">
                        <h3 className="text-1xl font-semibold leading-none tracking-tighter text-neutral-600">
                          {post.title}
                        </h3>
                        <p className="text-lg font-normal text-gray-500">
                          {post.details}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </section>
  );
};

export default Posts;
