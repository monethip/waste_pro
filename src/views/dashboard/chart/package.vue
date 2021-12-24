<template>
  <div>
    <apexchart :options="options" :series="series"></apexchart>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: [
            "Package A",
            "Package B",
            "Pacckage C",
            "Package D",
            "Package E",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [15000, 16000, 14000, 4000, 6000],
        },
      ],
    };
  },
};
</script>