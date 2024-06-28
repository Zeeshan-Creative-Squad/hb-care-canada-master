import React, { useEffect, useRef, useState } from "react";
import styles from "./FiltersPopup.module.css";

const FiltersPopup = ({ close, userProps = {}, onChangeFilter=()=>{} }) => {
  const myRef = useRef();
  const [selectedModuleName, setSelectedModuleName] = useState(null);
 
  const handleClickOutside = (e) => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      close(false);
    }
  };
 
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  const handleCheckboxChange = (moduleName, item) => {
    setSelectedModuleName(moduleName);
    if(onChangeFilter){ 
      onChangeFilter(item);
    }  
  };

  return (
    <div className={styles.main}>
      <div ref={myRef} className={styles.inner}>
        <div className={styles.body}>
          {userProps?.modulesList?.map((item, index) => (
            <div key={index} className={styles.filter}>
              <input
                type="checkbox" 
                checked={selectedModuleName === item.module_name} 
                onChange={() => handleCheckboxChange(item.module_name, item)}
              />
              <h3 className="h3_main">{item.module_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPopup; 