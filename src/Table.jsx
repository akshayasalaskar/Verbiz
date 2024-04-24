// import { PencilIcon } from "@heroicons/react/24/solid";
// import {
//   ArrowDownTrayIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";
// import { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   Typography,
//   Button,
//   CardBody,
//   Chip,
//   CardFooter,
//   Avatar,
//   IconButton,
//   Tooltip,
//   Input,
// } from "@material-tailwind/react";

// const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

// const TABLE_ROWS = [
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
//     name: "Spotify",
//     amount: "$2,500",
//     date: "Wed 3:00pm",
//     status: "paid",
//     account: "visa",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
//     name: "Amazon",
//     amount: "$5,000",
//     date: "Wed 1:00pm",
//     status: "paid",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
//     name: "Pinterest",
//     amount: "$3,400",
//     date: "Mon 7:40pm",
//     status: "pending",
//     account: "master-card",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
//     name: "Google",
//     amount: "$1,000",
//     date: "Wed 5:00pm",
//     status: "paid",
//     account: "visa",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
//   {
//     img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
//     name: "netflix",
//     amount: "$14,000",
//     date: "Wed 3:30am",
//     status: "cancelled",
//     account: "visa",
//     accountNumber: "1234",
//     expiry: "06/2026",
//   },
// ];

// export function TransactionsTable() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const rowsPerPage = 4;

//   const indexOfLastRow = (currentPage + 1) * rowsPerPage;
//   const indexOfFirstRow = currentPage * rowsPerPage;
//   const currentRows = TABLE_ROWS.slice(indexOfFirstRow, indexOfLastRow);

//   const totalPages = Math.ceil(TABLE_ROWS.length / rowsPerPage);

//   const handlePageClick = (selectedPage) => {
//     setCurrentPage(selectedPage);
//   };
//   return (
//     <Card className="h-full w-full">
//       <CardHeader floated={false} shadow={false} className="rounded-none">
//         <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
//           <div>
//             <Typography variant="h5" color="blue-gray">
//               Recent Transactions
//             </Typography>
//             <Typography color="gray" className="mt-1 font-normal">
//               These are details about the last transactions
//             </Typography>
//           </div>
//           <div className="flex w-full shrink-0 gap-2 md:w-max">
//             <div className="w-full md:w-72">
//               <Input
//                 label="Search"
//                 icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//               />
//             </div>
//             <Button className="flex items-center gap-3" size="sm">
//               <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
//             </Button>
//           </div>
//         </div>
//       </CardHeader>
//       <CardBody className="overflow-scroll px-0">
//         <table className="w-full min-w-max table-auto text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th
//                   key={head}
//                   className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-70"
//                   >
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {TABLE_ROWS.map(
//               (
//                 {
//                   img,
//                   name,
//                   amount,
//                   date,
//                   status,
//                   account,
//                   accountNumber,
//                   expiry,
//                 },
//                 index
//               ) => {
//                 const isLast = index === TABLE_ROWS.length - 1;
//                 const classes = isLast
//                   ? "p-4"
//                   : "p-4 border-b border-blue-gray-50";

//                 return (
//                   <tr key={name}>
//                     <td className={classes}>
//                       <div className="flex items-center gap-3">
//                         <Avatar
//                           src={img}
//                           alt={name}
//                           size="md"
//                           className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
//                         />
//                         <Typography
//                           variant="small"
//                           color="blue-gray"
//                           className="font-bold"
//                         >
//                           {name}
//                         </Typography>
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal"
//                       >
//                         {amount}
//                       </Typography>
//                     </td>
//                     <td className={classes}>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal"
//                       >
//                         {date}
//                       </Typography>
//                     </td>
//                     <td className={classes}>
//                       <div className="w-max">
//                         <Chip
//                           size="sm"
//                           variant="ghost"
//                           value={status}
//                           color={
//                             status === "paid"
//                               ? "green"
//                               : status === "pending"
//                               ? "amber"
//                               : "red"
//                           }
//                         />
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <div className="flex items-center gap-3">
//                         <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
//                           <Avatar
//                             src={
//                               account === "visa"
//                                 ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
//                                 : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
//                             }
//                             size="sm"
//                             alt={account}
//                             variant="square"
//                             className="h-full w-full object-contain p-1"
//                           />
//                         </div>
//                         <div className="flex flex-col">
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal capitalize"
//                           >
//                             {account.split("-").join(" ")} {accountNumber}
//                           </Typography>
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal opacity-70"
//                           >
//                             {expiry}
//                           </Typography>
//                         </div>
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <Tooltip content="Edit User">
//                         <IconButton variant="text">
//                           <PencilIcon className="h-4 w-4" />
//                         </IconButton>
//                       </Tooltip>
//                     </td>
//                   </tr>
//                 );
//               }
//             )}
//           </tbody>
//         </table>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
//         <Button
//           variant="outlined"
//           size="sm"
//           disabled={currentPage === 0}
//           onClick={() => handlePageClick(currentPage - 1)}
//         >
//           Previous
//         </Button>
//         <div className="flex items-center gap-2">
//           {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
//             <Button
//               key={page}
//               variant={currentPage === page ? "filled" : "outlined"}
//               size="sm"
//               onClick={() => handlePageClick(page)}
//             >
//               {page + 1}
//             </Button>
//           ))}
//         </div>
//         <Button
//           variant="outlined"
//           size="sm"
//           disabled={currentPage === totalPages - 1}
//           onClick={() => handlePageClick(currentPage + 1)}
//         >
//           Next
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

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
      row.organisationID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.organisationName.toLowerCase().includes(searchTerm.toLowerCase())
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
