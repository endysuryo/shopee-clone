import React from 'react';

const Header = () => {
  return (
    <div className="bg-orange-600">
      {/* top menu */}
      <div className="flex flex-row justify-between w-4/6 mx-auto pt-2 items-center">
        <div className="flex flex-row">
          <p className="p-1 font-light text-xs text-white">Seller Center</p>
          <p className="p-1 font-light text-xs text-gray-300">|</p>
          <p className="p-1 font-light text-xs text-white">Download</p>
          <p className="p-1 font-light text-xs text-gray-300">|</p>
          <p className="p-1 font-light text-xs text-white">Ikuti kami di</p>
        </div>
        <div className="flex flex-row">
          <p className="p-1 font-light text-xs text-white">Notifikasi</p>
          <p className="p-1 font-light text-xs text-white">Bantuan</p>
          <p className="p-1 font-light text-xs text-white">Bahasa Indonesia</p>
          <p className="p-1 ml-5 font-light text-xs text-white">endysuryo</p>
        </div>
      </div>
      {/* logo and searchbar */}
      <div className="flex flex-row justify-start w-4/6 mx-auto pt-2 items-center">
        <h1 className="p-1 font-thin text-4xl text-white">Shopee</h1>
        <div className="flex flex-col w-full justify-center mx-10">
          <div className="flex flex-row bg-white rounded-sm mt-2">
            <input
              className="w-full pl-3 text-black rounded-sm h-10"
              type="text"
              placeholder="Sepatubandung diskon s/d 90%"
            />
            <button className="bg-orange-600 m-1 p-1 text-xs font-light text-white">
              Search
            </button>
          </div>
          <div className="flex flex-row">
            <p className="py-2 pr-4 font-light text-xs text-white">
              Baseus Charger iPhone
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Netflix Murah
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Kabel Data Type C 2 Meter
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Kabel iPhone Fast Charging
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Type C To Lightning
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Charger iPhone
            </p>
            <p className="py-2 pr-4 font-light text-xs text-white">
              Beaseus Type C
            </p>
          </div>
        </div>
        <div>
          <p className="p-1 font-light text-lg text-white mx-10">Keranjang</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
