import PageHeader from "../../components/ui/PageHeader";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import ErrorComponent from "../../components/ui/ErrorComponent";
import ProductFilterSidebar from "./ProductFilterSidebar";
import { Funnel, LayoutGrid, List } from "lucide-react";

const Shop = () => {
  const [isGrid, setIsGrid] = useState(true);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);

  const { data, isLoading, isError, isFetching } = useGetAllProductsQuery(
    `categories=${categoryFilters.join(",")}&page=${page}&limit=${limit}`
  );

  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [data]);

  return (
    <section className="">
      <PageHeader
        title="Shop"
        breadcrumbs={[
          {
            label: "Home",
            url: "/",
          },
          {
            label: "Shop",
          },
        ]}
      />
      <div className="relative py-8 sm:py-[60px] bg-secondary bottom-edge-secondary">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-[50px] text-center">
          <h2 className="font-secondary text-xl sm:text-[2.5rem] font-caveat-brush">
            Special Offers!
          </h2>
          <div className="text-xl">
            <p>Save up to 20% when you buy in Bulk</p>
            <p>FREE delivery on orders over £30</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="hidden md:block">
          <ProductFilterSidebar
            setCategoryFilters={setCategoryFilters}
            isDataLoading={isFetching}
          />
        </div>
        <div className="col-span-3 block md:hidden">
          <div className="flex justify-between items-center mb-4">
            <a
              href="#"
              className="inline-flex items-center gap-2"
              onClick={() => {
                const drawer = document.getElementById(
                  "product-filter-drawer"
                ) as HTMLDialogElement;
                drawer?.showModal();
              }}
            >
              <Funnel />
              Filters and Sort
            </a>
            <div className="flex items-center gap-3">
              <a onClick={() => setIsGrid(true)}>
                <LayoutGrid />
              </a>
              <a onClick={() => setIsGrid(false)}>
                <List size={30} />
              </a>
            </div>

            <dialog id="product-filter-drawer" className="modal">
              <form method="dialog" className="modal-box p-0 max-w-xs">
                <div className="">
                  <ProductFilterSidebar
                    setCategoryFilters={setCategoryFilters}
                    isDataLoading={isFetching}
                  />
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full">
            {(isLoading || isFetching) && <LoadingComponent />}
            {isError && <ErrorComponent />}
            {data?.data?.length > 0 ? (
              <ContentComponent data={data?.data} isGrid={isGrid} />
            ) : (
              <>
                <EmptyDataComponent />
              </>
            )}
          </div>
          <div>
            {data?.meta && data?.data?.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 justify-center mt-8">
                <div className="flex justify-center items-center gap-2">
                  <button
                    className="btn btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </button>
                  <span>
                    Page {page} of {data.meta.totalPages}
                  </span>
                  <button
                    className="btn btn-sm"
                    disabled={page === data.meta.totalPages}
                    onClick={() =>
                      setPage((prev) =>
                        Math.min(prev + 1, data.meta.totalPages)
                      )
                    }
                  >
                    Next
                  </button>
                </div>
                <select
                  className="select select-bordered select-sm ml-4"
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                  }}
                >
                  <option value={6}>6 / page</option>
                  <option value={9}>9 / page</option>
                  <option value={12}>12 / page</option>
                  <option value={24}>24 / page</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

const ContentComponent = ({ data, isGrid }: { data: []; isGrid: boolean }) => (
  <div
    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] ${
      isGrid ? "grid-cols-2" : "grid-cols-1"
    }`}
  >
    {data.map((product, idx) => (
      <ProductCard key={idx} product={product}></ProductCard>
    ))}
  </div>
);

const LoadingComponent = () => (
  <div className="grid lg:grid-cols-3 grid-cols-2 gap-[10px]">
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
    <div className="skeleton min-h-[350px] w-full"></div>
  </div>
);

const EmptyDataComponent = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <span className="text-4xl mb-4">🛒</span>
    <h3 className="text-xl font-semibold mb-2">No products found</h3>
    <p className="text-gray-500">
      Try adjusting your filters or search criteria.
    </p>
  </div>
);
