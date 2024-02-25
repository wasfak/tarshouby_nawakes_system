"use client";
import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Filter({
  availableCompanies,
  selectedCompanies,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (company) => {
    onChange(company); // Delegate state management to the parent component
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleToggle} className="m-2 cursor-pointer">
        <Button>Filter</Button>
      </div>
      {isOpen && (
        <div className="absolute -right-42 mt-2 h-40 bg-white border rounded shadow-md overflow-y-scroll text-black items-left">
          {availableCompanies.map((company) => (
            <div key={company} className="flex items-start m-2">
              <input
                type="checkbox"
                id={company}
                checked={selectedCompanies.includes(company)}
                onChange={() => handleCheckboxChange(company)}
                className="mr-2"
              />
              <Label htmlFor={company}>{company}</Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
