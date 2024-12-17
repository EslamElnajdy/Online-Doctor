import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Specialities List with 'All' added at the beginning
  const specialities = useMemo(() => ["All", ...new Set(doctors.map((doc) => doc.speciality))], []);

  useEffect(() => {
    const filteredDoctors = doctors.filter((doc) =>
      speciality && speciality !== "All" ? doc.speciality === speciality : true
    );
    setFilterDoc(filteredDoctors);
  }, [speciality]);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredBySearch = useMemo(() => {
    return filterDoc.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, filterDoc]);

  return (
    <div className="p-4">
      <p className="text-gray-600 mb-4">Browse through the doctors' specialists.</p>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden py-2 px-4 border rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Filters
        </button>

        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by doctor's name"
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap gap-2 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {specialities.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                item === "All" ? navigate("/doctors") : navigate(`/doctors/${item}`)
              }
              className={`px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-blue-100 transition ${
                speciality === item || (!speciality && item === "All")
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBySearch.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain bg-gray-100"
            />
            <div className="p-4">
              <p className="text-gray-800 text-lg font-semibold">{item.name}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500 text-sm">{item.speciality}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm mr-1">★</span>
                  <span className="text-gray-600 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
