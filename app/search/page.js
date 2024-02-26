"use client";

import { useEffect, useState } from "react";

import Filter from "@/components/Filter";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { Loader } from "@/components/Loader";
import { getSearched } from "../actions/getSeach";

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [originalData, setOriginalData] = useState([]); // Store the original data
  const [displayData, setDisplayData] = useState([]); // Data to be displayed
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [uniqueCompanies, setUniqueCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getSearched();
      setOriginalData(res);
      setDisplayData(res); // Initially, display data is the same as fetched data
      setLoading(false);
      const companies = [...new Set(res.map((item) => item.company))];
      setUniqueCompanies(companies);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on selected companies
    if (selectedCompanies.length > 0) {
      const filtered = originalData.filter((item) =>
        selectedCompanies.includes(item.company)
      );
      setDisplayData(filtered);
    } else {
      setDisplayData(originalData); // If no company is selected, display all data
    }
  }, [selectedCompanies, originalData]);

  const handleCompanyCheckboxChange = (company) => {
    setSelectedCompanies((current) => {
      const isAlreadySelected = current.includes(company);
      if (isAlreadySelected) {
        return current.filter((c) => c !== company);
      } else {
        return [...current, company];
      }
    });
  };

  const exportToExcel = (data, fileName) => {
    // Define the columns to include
    const columns = ["name", "code", "company", "maxNeeded"];

    // Filter out the data to only include these columns
    const filteredData = data.map((row) =>
      columns.reduce((obj, key) => {
        obj[key] = row[key];
        return obj;
      }, {})
    );

    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Buffer for more compatibility
    XLSX.write(wb, { bookType: "xlsx", type: "buffer" });

    // Trigger download
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-center mt-2  p-2 bg-[#00ffee]  rounded-xl custom-shadow">
          اصناف مطلوبة من الزملاء
        </h1>
      </div>

      <Button
        onClick={() => exportToExcel(displayData, "ExportedData")}
        className="ml-2"
      >
        Export to Excel
      </Button>

      <Filter
        availableCompanies={uniqueCompanies}
        selectedCompanies={selectedCompanies}
        onChange={handleCompanyCheckboxChange}
      />
      <Button
        onClick={() => {
          setSelectedCompanies([]); // Clear selected companies
          setDisplayData(originalData); // Reset display data to show all items
        }}
        className="ml-2"
      >
        Clear Filter
      </Button>

      <div className="p-12">
        {displayData.length === 0 ? (
          <h1 className="text-center font-bold text-3xl"></h1>
        ) : (
          <table className="min-w-full bg-white border border-gray-300 text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-6 py-4">Code</th>
                <th className="border border-gray-300 px-6 py-4">Name</th>
                <th className="border border-gray-300 px-6 py-4">Company</th>

                <th className="border border-gray-300 px-6 py-4">maxNeeded</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((code) => (
                <tr key={code._id}>
                  <td className="border border-gray-300 px-6 py-4">
                    {code.code}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {code.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {code.company}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {code.maxNeeded}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
