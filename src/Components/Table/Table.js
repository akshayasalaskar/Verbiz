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

  // Search functionality
  const filteredRows = TABLE_ROWS.filter(
    (row) =>
      row.organisationID.toLowerCase().includes(searchTerm.toLowerCase()),
    console.log("Search term", searchTerm.toLowerCase())
  );

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
    <div className="w-full">
      <Card className="h-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Organisations
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                List of organisations
              </Typography>
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
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 cursor-pointer"
                    onClick={() => handleSort(head)}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
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
                    <td className="p-4 border-b border-blue-gray-50">
                      <Tooltip content="Delete Organisation">
                        <IconButton variant="text">
                          <TrashIcon className="h-4 w-4 text-red-500" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handleChangePage("prev")}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "filled" : "outlined"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handleChangePage("next")}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
