<template>
  <div>
    <apexchart
      width="500"
      type="pie"
      :options="options"
      :series="series"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        labels: ['Route A', 'Route B', 'Route C', 'Route D', 'Route E'],
      },
      series: [44, 55, 41, 17, 15],
    };
  },
};
</script>
