export const filterMetas = [
  {
    facetLabel: "Brands",
    sensorName: "BrandSensor",
    dataField: "brand.keyword",
    size: 20,
    sortBy: "asc",
    listType: "multilist"
  },
  {
    facetLabel: "Tags",
    sensorName: "TagSensor",
    dataField: "tags.name.keyword",
    size: 20,
    sortBy: "asc",
    listType: "multilist"
  },
  {
    facetLabel: "Prices",
    sensorName: "PriceSensor",
    dataField: "price",
    listType: "multirange",
    data: [
      { start: 0, end: 25, label: "Less than $25" },
      { start: 25, end: 49.99, label: "$25 - $49.99" },
      { start: 50, end: 74.99, label: "$50 - $75.99" },
      { start: 75, end: 99.99, label: "$75 - $99.99" },
      { start: 100, end: 149.99, label: "$100 - $149.99" },
      { start: 150, end: 199.99, label: "$150 - $199.99" },
      { start: 200, end: 249.99, label: "$200 - $249.99" }
    ]
  }
];
