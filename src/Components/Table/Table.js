import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

import { TABLE_ROWS } from "./data";
import { TABLE_HEAD } from "./data";

export function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc"); // 'asc' or 'desc'
  const itemsPerPage = 5;
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchTerm("");
  };

  // Search functionality
  const filteredRows =
    selectedOption === "option1"
      ? TABLE_ROWS.filter((row) =>
          row.organisationID.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : TABLE_ROWS;

  // Sorting functionality
  const sortedRows = [...filteredRows].sort((a, b) => {
    if (!sortBy) return 0;

    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedRows.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedRows.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (action) => {
    if (action === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (action === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };
  return (
    <Card className=" w-full h-[calc(95vh-2rem)] bg-customgray  ">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none flex justify-start items-center p-3 "
      >
        <div className=" ">
          <div className="flex flex-col  bg-customwhite justify-between md:flex-row md:items-center">
            <div className="border border-blue-gray-100 rounded-md">
              <select
                id="selectOptions"
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-20 mr-2  "
              >
                <option value="">Select</option>
                <option value="option1">Organisation Id</option>
              </select>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button
                className="flex items-center gap-3  bg-customblue "
                size="sm"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className=" mx-4 overflow-hidden px-0">
        <table className="w-full min-w-max table-auto text-left  bg-customwhite ">
          <thead>
            <tr>
              <th class="items-center border-y border-blue-gray-100 bg-customblue bg-opacity-20 p-2 cursor-pointer ">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-customblue transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                  />
                  <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-1/4 -translate-y-2/4 -translate-x-1/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </th>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-customblue bg-opacity-20  p-2 cursor-pointer"
                  onClick={() => handleSort(head)}
                >
                  <Typography
                    variant="small"
                    className="font-normal  text-customblue leading-none opacity-70"
                  >
                    {head}
                    {sortBy === head && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </Typography>
                </th>
              ))}
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            {currentItems.map(
              ({
                organisationID,
                organisationName,
                type,
                registrationDate,
                email,
                availability,
              }) => (
                <tr key={organisationID}>
                  <td class="p-2 border-b border-blue-gray-50">
                    <label
                      class="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="check"
                    >
                      <input
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="check"
                      />
                      <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray">
                      {organisationID}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray">
                      {organisationName}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray">
                      {type}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray">
                      {registrationDate}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography variant="small" color="blue-gray">
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={availability}
                      color={availability === "Active" ? "green" : "red"}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 pt-0">
        <div className="results">
          {`Showing  ${indexOfFirstItem + parseInt(123)} to 
          ${indexOfLastItem + parseInt(122)} of ${
            TABLE_ROWS.length + parseInt(122)
          } entries `}
        </div>
        <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handleChangePage("prev")}
            className="mr-2"
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </Button>
                {currentPage > 2 && <span className="mx-1">...</span>}
              </>
            )}
            <Button
              key={currentPage}
              className=" text-white bg-customblue "
              size="sm"
            >
              {currentPage}
            </Button>

            {currentPage < totalPages && (
              <>
                {currentPage < totalPages - 1 && (
                  <span className="mx-1">...</span>
                )}
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </Button>
              </>
            )}
          </div>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handleChangePage("next")}
            className="ml-2"
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
