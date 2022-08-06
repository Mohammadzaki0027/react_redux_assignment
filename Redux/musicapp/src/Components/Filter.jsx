import React from "react";
import styles from "../Styles/Music.module.css";
import { useSearchParams } from "react-router-dom";
  const Filter = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const initialparams = searchParams.getAll("genre");
  const [category, setCategory] = React.useState(initialparams || []);
  const intisort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = React.useState(intisort || "");

  const handlegenric = (e) => {
    const option = e.target.value;
    let newcategory = [...category];
    let value = newcategory.some((e) => {
      return e === option;
    });
    if (value) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    setCategory(newcategory);
  };
  const handlesort = (e) => {
    setSortBy(e.target.value);
  };
  React.useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);
  // console.log(searchParams.getAll("genre"));

  return (
    <div className={styles.filterapp1}>
      <fieldset>
        <legend>Filter </legend>
        <div>
          <input
            type="checkbox"
            onChange={handlegenric}
            value="K-Pop"
            defaultChecked={category.includes("K-Pop")}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlegenric}
            value="Country"
            defaultChecked={category.includes("Country")}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlegenric}
            value="Pop"
            defaultChecked={category.includes("Pop")}
          />
          <label>Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlegenric}
            value="Holiday"
            defaultChecked={category.includes("Holiday")}
          />
          <label>Holiday</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handlegenric}
            value="Classical Crossover"
            defaultChecked={category.includes("Classical Crossover")}
          />
          <label>Classical Crossover</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Sort </legend>
      <div onChange={handlesort}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Decending</label>
        </div>
   
      </div>
      </fieldset>
    </div>
  );
};

export default Filter;
