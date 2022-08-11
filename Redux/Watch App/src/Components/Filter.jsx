import React from "react";
import styles from "./Styles.module.css"
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const handlechange=()=>{
    
  }
  return (
    <div className={styles.filtercontainer}>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" 
                      onChange={handlechange}
          
          value="Analog" />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox"
            onChange={handlechange}
          value="Digital" />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" 
            onChange={handlechange}
          
          value="Chronograph"  />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
