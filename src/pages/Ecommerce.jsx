import React from "react";
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import product9 from "../data/product9.jpg";

const Ecomnerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:bg-secondary-dark-bg dark:text-gray-200 h-44 rounded-xl lg:w-80 pt-9 bg-hero-pattern">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl">$63,448.23</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg pt-9 md:w-56 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="p-4 text-2xl rounded-full opacity-0.9 hover:drop-shadow-lg"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="p-4 m-3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 ">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <GoDotFill />{" "}
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />{" "}
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="pr-10 m-4 border-r-1 border-color">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer text-white rounded-full bg-green-400 ml-3 text-xl">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500 w">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  color={currentColor}
                  type="line"
                  width={250}
                  height={80}
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  bgColor={currentColor}
                  color={"white"}
                  borderRadius={"10px"}
                  text={"Download Report"}
                />
              </div>
            </div>
            <div>
              <Stacked width={320} height={360} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecomnerce;
