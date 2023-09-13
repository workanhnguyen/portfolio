import React, { useState } from "react";

import categories from "../data/categories";
import { useStateContext } from "../contexts/ContextProvider";

const categoryList = categories;

const Category = () => {
  const { categoryIndex, setCategoryIndex } = useStateContext(); 
  return (
    <>
      {categoryList.map((category, index) => (
        <div
          key={index}
          onClick={() => setCategoryIndex(category.id)}
          className={`p-2 mb-2 rounded-md ${
            categoryIndex === category.id
              ? "bg-green-500 text-white active:bg-green-600"
              : "text-black hover:bg-gray-200 active:bg-gray-300"
          } cursor-pointer`}
        >
          {category.nameVN}
        </div>
      ))}
    </>
  );
};

export default Category;
