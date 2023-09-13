import React from "react";

import categories from "../data/categories";
import { useStateContext } from "../contexts/ContextProvider";

const categoryList = categories;

const Category = () => {
  const { categoryIndex, setCategoryIndex } = useStateContext(); 
  return (
    <div className="flex flex-col gap-y-3">
      {categoryList.map((category, index) => (
        <div
          key={index}
          onClick={() => setCategoryIndex(category.id)}
          className={`flex gap-x-3 px-2 py-4 mb-1 rounded-md ${
            categoryIndex === category.id
              ? "bg-green-500 text-white active:bg-green-600"
              : "text-black hover:bg-gray-200 active:bg-gray-300"
          } cursor-pointer`}
        >
          {category.icon && <category.icon />}
          <p>{category.nameVN}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
