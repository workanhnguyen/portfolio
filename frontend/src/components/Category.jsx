import React, { useState } from "react";

import categories from "../data/categories";

const categoryList = categories;

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      {categoryList.map((category, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(category.id)}
          className={`p-2 mb-2 rounded-md ${
            activeIndex === category.id
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
