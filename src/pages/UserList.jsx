import Pagination from "@/components/Pagination";
import axios from "axios";
import path from "path";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import React from "react";
import { PaginationContext } from "@/context/PaginationContext";
import UserListCard from "@/components/user-management/UserListCard";

const UserList = () => {
  const [searchParams] = useSearchParams();

  const {
    currentPage,
    setCurrentPage,
    setData,
    setTotalPages,
    isLoading,
    setIsLoading,
    data,
    totalData,
    setTotalData,
  } = useContext(PaginationContext);
  console.log(currentPage);

  const id = searchParams.get("id");

  const fetchData = (page = 1) => {
    console.log(page);
    axios
      .get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setTotalPages(res.data.total_pages);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  const fetchDataWithId = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData([res.data.data]);
        setTotalPages(1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      fetchDataWithId(id);
    } else {
      fetchData(currentPage);
    }
  }, [id, currentPage]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">List User</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((user) => (
          <UserListCard user={user} />
        ))}
      </div>
      <div className="my-6">
        <Pagination />
      </div>
    </>
  );
};

export default UserList;
