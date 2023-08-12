import React from "react";
import { Header } from "../components";
const ColorPicker = () => {
  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Pallete</p>
          </div>
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Picker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
