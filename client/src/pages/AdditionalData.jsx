import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdditionalData = () => {
    const submitHandler=(e)=>{
        e.prevenDefault()
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Additional Information</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
            //   value={additionalInfo.address}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            //   value={additionalInfo.phone}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              placeholder="Enter your qualification"
            //   value={additionalInfo.qualification}
            //   onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalData;
