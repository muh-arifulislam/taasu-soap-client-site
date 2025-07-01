import React, { useState } from "react";

const FILTER_OPTIONS = {
  type: ["Bar Soap", "Liquid Soap", "Soap Gift Set"],
  skinType: ["Dry Skin", "Oily Skin", "Sensitive Skin", "All Skin Types"],
  scent: ["Lavender", "Rose", "Lemongrass", "Charcoal", "Unscented"],
  useCase: ["Face", "Body", "Hands"],
  features: [
    "Organic",
    "Vegan",
    "Cruelty Free",
    "Essential Oils",
    "Limited Edition",
  ],
};

type Filters = {
  type: string[];
  skinType: string[];
  scent: string[];
  useCase: string[];
  features: string[];
};

const initialFilterState: Filters = {
  type: [],
  skinType: [],
  scent: [],
  useCase: [],
  features: [],
};

type PropsType = {
  setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>;
  isDataLoading: boolean;
};

const ProductFilterSidebar = ({
  setCategoryFilters,
  isDataLoading,
}: PropsType) => {
  const [filters, setFilters] = useState<Filters>(initialFilterState);

  const handleCheckboxChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const handleReset = () => {
    setFilters(initialFilterState);
    setCategoryFilters([]);
  };

  const handleApply = () => {
    const allSelected = Object.values(filters).flat();
    setCategoryFilters(allSelected);
    const dialog = document.getElementById(
      "product-filter-drawer"
    ) as HTMLDialogElement;
    dialog?.close();
  };

  return (
    <aside className="container mx-auto px-4 py-8 bg-white border shadow-sm rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

      {Object.entries(FILTER_OPTIONS).map(([key, values]) => (
        <React.Fragment key={key}>
          <div className="mb-4">
            <h3 className="capitalize font-medium text-gray-700 mb-2">
              {key.replace(/([A-Z])/g, " $1")}
            </h3>
            {(values as string[]).map((val) => (
              <label key={val} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  checked={(filters as any)[key].includes(val)}
                  onChange={() =>
                    handleCheckboxChange(key as keyof Filters, val)
                  }
                  className="mr-2"
                />
                {val}
              </label>
            ))}
          </div>
        </React.Fragment>
      ))}

      <div className="flex gap-2 mt-6">
        <button
          onClick={handleReset}
          className="flex-1 border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          Reset
        </button>
        <button
          disabled={isDataLoading}
          onClick={handleApply}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Apply
        </button>
      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
