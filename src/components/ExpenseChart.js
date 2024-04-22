import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import getcategories from "../category";
import { shallowEqual, useSelector } from "react-redux";
import calcTotal from "./calcTotal";

const categories = getcategories;

const ExpenseChart = () => {
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  function filter_cat(item, expenses) {
    const filteredArray = expenses.filter(
      (expense) => expense.category === item.title
    );
    const total = calcTotal(filteredArray);
    const oneitem = { title: item.title, total: total };
    return oneitem;
  }
  const data1 = categories.map((item) => {
    return filter_cat(item, expenses);
  });

  //const total = calcTotal(filteredArray);

  //Sample data
  // const data = [
  //   { name: "Geeksforgeeks", students: 400 },
  //   { name: "Technical scripter", students: 700 },
  //   { name: "Geek-i-knack", students: 200 },
  //   { name: "Geek-o-mania", students: 1000 },
  // ];

  return (
    <>
      <BarChart width={320} height={350} data={data1}>
        <Bar dataKey="total" fill="green" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="title" />
        <YAxis />
      </BarChart>
    </>
  );
};

export default ExpenseChart;
