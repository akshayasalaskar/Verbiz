import { useState } from "react";

export function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = TABLE_ROWS.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(TABLE_ROWS.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Card className="h-full w-full">
        {/* Your existing card content here */}
      </Card>
      <div className="flex justify-center gap-2 mt-4">
        {[...Array(totalPages).keys()].map((page) => (
          <Button
            key={page}
            size="sm"
            variant={currentPage === page + 1 ? "filled" : "outlined"}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Button>
        ))}
      </div>
    </>
  );
}
