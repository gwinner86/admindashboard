import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import DataTable from "react-data-table-component";

function Index() {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center justify-start w-full">
          <button
            onClick={(e) => clickHandler(e, row.id)}
            className="bg-red-700 px-4 py-2 text-white rounded-lg"
          >
            Delete
          </button>

          <div className="px-1">
            <button
              onClick={(e) => editClickHandler(e, row.id)}
              className="bg-blue-700 px-4 py-2 text-white rounded-lg"
            >
              Edit
            </button>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 3,
      title: "Daniel Test",
      year: "1974",
    },
    {
      id: 4,
      title: "Godwin ",
      year: "1994",
    },
    {
      id: 5,
      title: "Favor",
      year: "1987",
    },
  ];
  const [records, setRecords] = useState(data);

  const clickHandler = (e, id) => {
    e.preventDefault();
    console.log("Row Id", id);
  };

  const editClickHandler = (e, id) => {
    console.log("edit : ", id);
  };

  const getFilteredData = (event) => {
    const newData = data.filter((row) => {
      return (
        row.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.year.includes(event.target.value)
      );
    });

    setRecords(newData);
  };

  return (
    <div>
      <DashboardLayout subtitle="Analytics">
        <div className="p-4">
          <div className="py-5 flex items-end justify-end ">
            <input
              type="text"
              className="form-search"
              onChange={getFilteredData}
            />
          </div>
          <DataTable columns={columns} data={records} selectableRows="true" />
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Index;
