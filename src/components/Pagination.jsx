import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationContext } from "@/context/PaginationContext";
import { useContext } from "react";

export default function PaginationDemo() {
  const {
    currentPage,
    setCurrentPage,
    setData,
    setTotalPages,
    totalPages,
    isLoading,
    setIsLoading,
    data,
    totalData,
    setTotalData,
  } = useContext(PaginationContext);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setCurrentPage(2)}
            isActive={currentPage === 2}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
