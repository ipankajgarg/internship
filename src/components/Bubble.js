import React, { Component } from "react";
import ReactBubbleChart from "react-bubble-chart";
import * as d3 from "d3";
import array from "../../json/local.json";

const colorLegend = [
  // reds from dark to light
  { color: "#67000d", textColor: "#fee0d2", text: "Negative" },
  { color: "#a50f15", textColor: "#fee0d2" },
  { color: "#cb181d", textColor: "#fee0d2" },
  "#ef3b2c",
  "#fb6a4a",
  "#fc9272",
  "#fcbba1",
  "#fee0d2",
  //neutral grey
  { color: "#f0f0f0", text: "Neutral" },
  // blues from light to dark
  "#deebf7",
  "#c6dbef",
  "#9ecae1",
  "#6baed6",
  "#4292c6",
  { color: "#2171b5", textColor: "#deebf7" },
  { color: "#08519c", textColor: "#deebf7" },
  { color: "#08306b", textColor: "#deebf7", text: "Positive" }
];

var tooltipProps = [
  {
    css: "symbol",
    prop: "_id"
  },
  {
    css: "value",
    prop: "value",
    display: "Last Value"
  },
  {
    css: "change",
    prop: "colorValue",
    display: "Change"
  }
];
class Bubble extends Component {
  render() {
    console.log(array);
    var data = array.map(d => {
      return {
        _id: d.id,
        displayText: d.id,
        displayText: d.folderName,
        value: d.value,
        colorValue: d.color,
        selected: false
      };
    });

    return (
      <ReactBubbleChart
        fontSizeFactor={500}
        onClick={() => console.log("clicked")}
        className="my-cool-chart"
        selectedColor="#737373"
        selectedTextColor="#d9d9d9"
        colorLegend={colorLegend}
        data={data}
        selectedColor="#737373"
        selectedTextColor="#d9d9d9"
        fixedDomain={{ min: -100, max: 100 }}
        legend={true}
        legendSpacing={0}
        largeDiameter
      />
    );
  }
}
export default Bubble;
