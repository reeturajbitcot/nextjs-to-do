"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Header from "./Header";
import TitleHeading from "./TitleHeading";
import ShowAllTask from "../tasksUI/ShowAllTask";

const filterDataFunction = (route, data) => {
  if (route === "/all-tasks") {
    return data;
  } else if (route === "/important") {
    let importantData = data.filter((item) => item.isImportant === true);
    return importantData;
  } else if (route === "/completed") {
    let completeData = data.filter((item) => item.toDoStatus === "completed");
    return completeData;
  } else if (route === "/inprogress") {
    let inprogress = data.filter((item) => item.toDoStatus === "inprogress");
    return inprogress;
  } else if (route === "/not-started") {
    let notStartedData = data.filter((item) => item.toDoStatus === "pending");
    return notStartedData;
  }
};

function AllTask() {
  const pathname = usePathname();
  const todoList = useSelector((state) => state.toDo.todoList);
  let routeFilteredData = filterDataFunction(pathname, todoList);
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = () => {
    return routeFilteredData.filter((item) =>
      item.content.toLowerCase().includes(inputSearch.toLowerCase())
    );
  };

  let searchedData = handleSearch();

  return (
    <>
      <div style={{ padding: "16px" }}>
        <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      </div>
      <div style={{ padding: "16px" }}>
        <TitleHeading />

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {searchedData.map((item, index) => (
            <ShowAllTask key={index} data={item} />
          ))}
          {searchedData.length === 0 && <h3>No task available to show</h3>}
        </div>
      </div>
    </>
  );
}

export default AllTask;
