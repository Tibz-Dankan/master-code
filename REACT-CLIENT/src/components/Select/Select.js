// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";

// const Select = () => {
//   const [itemsToBeSelected, setItemsToBeSelected] = useState([]);
//   const [initialValue, setInitialValue] = useState("");
//   const updateItems = () => {
//     const itemsArray = [{1:"Female"},{ 2:"Male"}, {3:"I don't to specify"}];
//     setItemsToBeSelected(itemsArray);
//   };

//   useEffect(() => {
//     updateItems();
//   }, []);

//   return (
//     <div>
//       <h3>React Select Form</h3>
//       <form>
//         <select className="select" onChange={(e) => setInitialValue(e.target.value)}>
//           {itemsToBeSelected.map(item =>
//           <option value={}></option>
//             )}
//         </select>
//       </form>
//     </div>
//   );
// };

// export default Select;
