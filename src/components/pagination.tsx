import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationDemo = ({ totalCount, hasItems, pageSize, pageIndex }: any) => {
  const lastPage = Math.ceil(totalCount / pageSize);

  const renderPageLinks = () => {
    const maxButtons = 5;
    const pages = [];

    let startPage = Math.max(1, pageIndex - Math.floor(maxButtons / 2));
    let endPage = Math.min(lastPage, startPage + maxButtons - 1);

    // Adjust startPage if we're near the end of the list
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={`/list/${i}`} isActive={i === Number(pageIndex)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={`${Number(pageIndex) === 1 ? "opacity-60 pointer-events-none" : ""} `} href={`/list/${Number(pageIndex) - 1}`} />
        </PaginationItem>
        {renderPageLinks()}
        {pageIndex < lastPage && (
          <PaginationItem>
            <PaginationNext href={`/list/${Number(pageIndex) + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;