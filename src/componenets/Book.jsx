/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from "react-redux";
import { makeBooking } from "../redux/actions";
import { FaPlus } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useState } from "react";

const Book = () => {
  const data = useSelector((state) => state.data);
  const size = data.length;
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (size >= 3) {
      toast.error("Sorry, you can not book more than 3");
    } else {
      if(bookingData.date < new Date().toISOString().split('T')[0]){
        toast.error("Please select a valid date");
      } else {
        if (Object.keys(bookingData).length === 5) {
          if(bookingData.from === bookingData.to) {
          toast.error("source and destination can not be same");
        } else {
          dispatch(makeBooking({ ...bookingData, id: size + 1 }));
          toast.success("Booking Successful");
          }
        } else {
          console.log({ ...bookingData, id: size + 1 });
          toast.error("please select all fields");
          }
      }
    } 
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row" onSubmit={handleBook}>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination From</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>New Delhi</option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Melbourne</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination To</p>
            <div className="flex flex-row">

              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>New Delhi</option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Melbourne</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Guests</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>className</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketclassName"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            className="inline-flex items-center bg-indigo-500 text-white px-8 py-1 space-x-2"
            type="submit"
          >
            <FaPlus/>
            <span className="text-sm  ">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
