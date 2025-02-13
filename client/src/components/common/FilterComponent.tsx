import React, { useState } from "react";
import Button from "./Button";
import FilterDropdown from "./FilterDropdown";
import { categoryOptions } from "../../pages/create/constants";

export type Filters = {
  categories: string[],
  keyword: string,
  sortBy: string;
}
interface IFilterComponentProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

export default function FilterComponent({setFilters}: IFilterComponentProps) {
  const [keyword, setKeyword] = useState("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
  };
  return (
    <div className="mb-8 flex justify-center items-center gap-4">
      <div>
        <input
          type="text"
          className="px-4 py-2 border rounded-l-md"
          value={keyword}
          onChange={changeHandler}
          placeholder="Search..."
        />
        <Button
          type="submit"
          className="px-4 py-2 border rounded-r-md rounded-l-none"
        >
          Submit
        </Button>
      </div>
      <FilterDropdown name={"Categories"} items={categoryOptions} setFilters={setFilters}/>
    </div>
  );
}
