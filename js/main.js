const chartTheme = {
  background: "#ffffff",

  font: "Source Sans 3",

  view: {
    stroke: null
  },

  title: {
    font: "Manrope",
    fontSize: 20,
    fontWeight: 700,
    color: "#183f2c",

    subtitleFont: "Source Sans 3",
    subtitleFontSize: 13,
    subtitleFontWeight: 400,
    subtitleColor: "#68746d",

    anchor: "start",
    offset: 14
  },

  axis: {
    labelFont: "Source Sans 3",
    labelFontSize: 12,
    labelColor: "#56645b",

    titleFont: "Source Sans 3",
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: "#34463c",

    domainColor: "#c8cfc8",
    domainWidth: 1,

    tickColor: "#c8cfc8",

    gridColor: "#e8e9e5",
    gridOpacity: 1,

    labelPadding: 7,
    titlePadding: 12
  },

  legend: {
    titleFont: "Source Sans 3",
    titleFontSize: 12,
    titleFontWeight: 700,
    titleColor: "#34463c",

    labelFont: "Source Sans 3",
    labelFontSize: 12,
    labelColor: "#56645b",

    symbolSize: 100,
    symbolStrokeWidth: 2,

    padding: 8,
    rowPadding: 5,
    columnPadding: 12
  },

  range: {
    category: [
      "#24543b",
      "#9b6844",
      "#77966f",
      "#c3985c",
      "#5d7767",
      "#927b68",
      "#b1be9d",
      "#725d49"
    ],

    ordinal: [
      "#e8eee4",
      "#d0ddca",
      "#adc4a5",
      "#85a87d",
      "#5e8b64",
      "#376d4d",
      "#183f2c"
    ]
  }
};

const embedOptions = {
  actions: false,
  renderer: "svg",
  config: chartTheme
};

function embedChart(selector, spec) {
  vegaEmbed(selector, spec, embedOptions)
    .catch(error => console.error(`Error loading ${spec}:`, error));
}

/* SECTION 01 */

embedChart(
  "#horticulture-map",
  "js/horticulture_map.vg.json"
);

embedChart(
  "#horticulture-bar",
  "js/horticulture_bar.vg.json"
);

/* SECTION 02 */

embedChart(
  "#wheat-symbol-map",
  "js/wheat_symbol_map.vg.json"
);

embedChart(
  "#horticulture-heatmap",
  "js/horticulture_heatmap.vg.json"
);

embedChart(
  "#horticulture-treemap",
  "js/horticulture_treemap.vg.json"
);

/* SECTION 03 */

embedChart(
  "#food-export-flow-map",
  "js/food_export_flow_map.vg.json"
);

embedChart(
  "#export-partner-bump",
  "js/export_partner_bump.vg.json"
);

/* SECTION 04 */

embedChart(
  "#food-inflation-line",
  "js/food_inflation_line.vg.json"
);

embedChart(
  "#price-city-compare",
  "js/price_city_compare.vg.json"
);

/* SECTION 05 */

embedChart(
  "#food-waste-sector-bar",
  "js/food_waste_sector_bar.vg.json"
);

embedChart(
  "#food-waste-waffle",
  "js/food_waste_waffle.vg.json"
);

embedChart(
  "#food-waste-waterfall",
  "js/food_waste_waterfall.vg.json"
);