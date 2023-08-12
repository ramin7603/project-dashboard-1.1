import React, { useState } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignCenter,
} from "react-icons/md";

import { Header } from "../components";

const TextEditor = () => {
  const [text, setText] = useState("");

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [fontColor, setFontColor] = useState("#000000");
  const [size, setSize] = useState(16);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value));
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderlined(!isUnderlined);
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category='App' title='Editor' />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            marginBottom: "10px",
            flexDirection: "row",
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <input
              type="number"
              min="8"
              max="72"
              value={size}
              onChange={handleSizeChange}
              className="w-20"
            />
            <MdFormatBold
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={handleBoldClick}
              style={{
                marginRight: "10px",
                fontWeight: isBold ? "bold" : "normal",
              }}
            />
            <MdFormatItalic
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={handleItalicClick}
              style={{
                marginRight: "10px",
                fontStyle: isItalic ? "italic" : "normal",
              }}
            />
            <MdFormatUnderlined
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={handleUnderlineClick}
              style={{
                marginRight: "10px",
                textDecoration: isUnderlined ? "underline" : "none",
              }}
            />
            <MdFormatAlignLeft
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={() => setTextAlign("left")}
              style={{
                marginRight: "10px",
                opacity: textAlign === "left" ? 1 : 0.5,
              }}
            />
            <MdFormatAlignCenter
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={() => setTextAlign("center")}
              style={{
                marginRight: "10px",
                opacity: textAlign === "center" ? 1 : 0.5,
              }}
            />
            <MdFormatAlignRight
              className="ml-2 text-2xl cursor-pointer hover:bg-slate-200"
              onClick={() => setTextAlign("right")}
              style={{
                marginRight: "10px",
                opacity: textAlign === "right" ? 1 : 0.5,
              }}
            />

            <input
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
              className="cursor-pointer w-9 h-9"
            />
          </div>
        </div>

        <textarea
          value={text}
          onChange={handleTextChange}
          className="p-2 border"
          style={{
            width: "400px",
            height: "200px",
            fontSize: `${size}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderlined ? "underline" : "none",
            textAlign: textAlign,
            color: fontColor,
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
