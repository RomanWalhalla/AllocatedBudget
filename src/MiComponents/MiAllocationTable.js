import React, { useContext, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import Context from "../context/MiContext";

import { FcPlus, FcFullTrash } from 'react-icons/fc';
import { BiSolidMinusCircle } from "react-icons/bi"

import { ACTIONS } from "../Reducer/Boilerplate"

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export const RowDataTable = {
    expenses: [
        { id: 0, department: "Marketing", allocatedBudget: 0 },
        { id: 1, department: "Finance", allocatedBudget: 0 },
        { id: 2, department: "Sales", allocatedBudget: 0 },
        { id: 3, department: "Human Resource", allocatedBudget: 0 },
        { id: 4, department: "IT", allocatedBudget: 0 },
        { id: 5, department: "HR", allocatedBudget: 0 },
    ]
}

const MiAllocationTable = () => {
    const { dispatch, state, currency, setSpentSoFar, newBudget, remaining } = useContext(Context)

    useEffect(() => {
        const totalExpenses = state.expenses.reduce((total, item) => total + item.allocatedBudget, 0);
        setSpentSoFar(totalExpenses);
    }, [state.expenses, setSpentSoFar]);

    const renderCellButton = (IconComponent, onClick) => (params) => (
        <button className="buttonsIncDel" onClick={() => onClick(params.rowIndex, params.data.allocatedBudget)}>
            <IconComponent size="35" />
        </button>
    );

    // const renderCellIncrement = (params) => {
    //     return (
    //         <> <button className="buttonsIncDel" onClick={() => onIncrement(params.rowIndex, params.data.numb)}>
    //             <FcPlus size="35" /></button> </>)
    // }
    // const renderCellDelete = (params) => {
    //     return (
    //         <> <button className="buttonsIncDel" onClick={() => onDelete(params.rowIndex)}>
    //             <FcFullTrash size="35" /></button> </>)
    // }

    const onIncrement = (rowIndex, allocatedBudget) => {
        dispatch({ type: ACTIONS.ADD_EXPENSE_10, payload: { rowIndex, allocatedBudget, newBudget } });
    };
    const onDecrement = (rowIndex, allocatedBudget) => {
        dispatch({ type: ACTIONS.REDUCE_EXPENSE_10, payload: { rowIndex, allocatedBudget, newBudget } });
    };

    const onDelete = (rowIndex) => {
        dispatch({ type: ACTIONS.DELETE_EXPENSE, payload: { rowIndex } });
    };

    const onCellValueChanged = (params) => {
        const maxValue = 20000;
        const maxDigits = 5;
        const { newValue, oldValue } = params;
        if ((!isFinite(parseInt(newValue))) || parseInt(newValue) > maxValue || newValue.toString().length > maxDigits) {
            return params.node.setDataValue(params.colDef.field, oldValue);
        }

        else if (newValue !== oldValue) {
            dispatch({
                type: ACTIONS.UPDATE_EXPENSE,
                payload: { rowIndex: params.node.rowIndex, newValue, oldValue, newBudget, remaining }
            });
        }
    };

    const ColumnDataTable = useMemo(() => [
        { headerName: "ID", field: "id", flex: 1, hide: true, },
        { headerName: "Department", field: "department", flex: 1, },
        {
            headerName: "Allocate Budget", field: "allocatedBudget",
            editable: true,
            flex: 1,
            cellRenderer: ({value}) => <span>{currency.icon} {value}</span>,
            onCellValueChanged: onCellValueChanged,
        },
        {
            headerName: "Increase by 10", field: "increased by 10",
            cellRenderer: renderCellButton(FcPlus, onIncrement), flex: 1,
        },
        {
            headerName: "Decrease by 10", field: "decrease by 10",
            cellRenderer: renderCellButton(BiSolidMinusCircle, onDecrement), flex: 1,
        },
        {
            headerName: "Delete", field: "delete",
            cellRenderer: renderCellButton(FcFullTrash, onDelete), flex: 1,
        },
    ], [onIncrement, onDecrement, onDelete, currency])

    return (
        <>
            <div className="ag-theme-quartz" style={{ height: 360, width: "94%", margin: 30 }}>
                <AgGridReact
                    defaultColDef={{ sortable: true, filter: true }}
                    pagination={true}
                    rowData={state.expenses}
                    columnDefs={ColumnDataTable} >
                    onCellValueChanged={onCellValueChanged}
                </AgGridReact>
                <span style={{ color: "red" }}>You can double-click on a value to change it</span>
            </div>
        </>
    );
}

export default MiAllocationTable;
