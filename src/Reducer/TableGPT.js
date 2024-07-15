// import { useContext, useEffect, useRef, useReducer } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { TiArrowLoopOutline } from "react-icons/ti";




// function Reducer(state, action) {
//     console.log("Reducer-state", state)
//     console.log("Reducer-action", action)
//     switch (action.type) {
//         // case "increment":
//         //     return {
//         //         ...state,
//         //         rowData: state.rowData.map((item) => 
//         //             item.id === action.id ? { ...item, quantity: item.quantity + 1} : item,
//         //         // console.log("Reducer-item", item)
//         //     ),
//         // };

//         case "increment":
//             return {
//                 ...state,
//                 rowData: state.rowData.map((item) => 
//                     item.name === action.name ? { ...item, quantity: item.quantity + 1} : item,
//                 // console.log("Reducer-item", item)
//             ),
//         };



//         case "decrement":
//             return {
//                 ...state,
//                 rowData: state.rowData.map(item => 
//                     item.name === action.name ? { ...item, quantity: item.quantity - 1} : item
//                 ),
//             };
//             default:
//                 return state;
//     }
// }

//     function MyGridApp() {

//         const InitialState = {
//             rowData: [
//                 {id: 1, name: "it", quantity: 0 },
//                 {id: 2, name: "item", quantity: 0 },
//             ],
//         }

//         const [State, dispatch] = useReducer(Reducer, InitialState);

//         // console.log("State", State) 

//         const renderActionCell = params => {
//             // console.log("cellRenderer-params", params)
//             return (
//                 <>
//             <button onClick={() => onIncrement(params.data.name)}>+</button>
//             {/* <button onClick={() => onDecrement(params.data.id)}>-</button> */}

//             {/* <button onClick={() => dispatch({ type: "increment"})}>+</button> */}
//             <button onClick={() => onDecrement(params.data.name)}>-</button>

//             </>
//         );
//     };
//         const columns = [
//             { headerName: "ID", field: "id"},
//             { headerName: "Name", field: "name"},
//             { headerName: "Quantity", field: "quantity"},
//             { headerName: "Actions", field: "actions", cellRenderer: renderActionCell},

//         ];

//         const onIncrement = name => {
//             // console.log("onIncrement-id", name)
//             dispatch({ type: "increment", name});
//         };

//         const onDecrement = name => {
//             dispatch({ type: "decrement", name});
//         };
        

//     // columns.push ({ headerName: "Actions", field: "actions", cellRenderer: renderActionCell });

//     return (
//         <div className="ag-theme-alpine" style={{ height: 400, width: 700}}>
//             <AgGridReact
//             columnDefs={ columns }
//             rowData={ State.rowData }
//             />
//         </div>
//     );
// }

// export default MyGridApp;