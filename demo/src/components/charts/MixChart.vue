<template>
  <div id="main" :style="{width:width,height:height}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    width: {
      default: "100%",
      type: String
    },
    height: {
      default: "100%",
      type: String
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let xAixsData = [];
      for (let i = 1; i < 13; i++) {
        xAixsData.push(`${i}month`);
      }
      let options = {
          backgroundColor: "#344b58",
          grid: {
            left: "5%",
            right: "5%",
            top: 150,
            bottom: 95,
            borderWidth: 0,
            textStyle: {
              color: "#fff"
            }
          },
          title: {
            text: "statistics",
            textStyle: {
              color: "#fff",
              fontSize: "22"
            },
            x: "20",
            top: "20"
          },
          legend: {
            x: "5%",
            top: "10%",
            textStyle: {
              color: "#90979c"
            },
            data: ["female", "male", "average"]
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              textStyle: {
                color: "#fff"
              }
            }
          },
          dataZoom: [
            {
              type: "slider",
              show: true,
              xAxisIndex: [0],
              start: 10,
              end: 80,
              handleIcon:
                "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
              handleStyle: {
                color: "#d3dee5"
              },
              handleSize: "110%",
              textStyle: {
                color: "#fff"
              },
              borderColor: "#90979c"
            },
            {
              type: "inside",
              show: true,
              height: 15,
              start: 1,
              end: 35
            }
          ],
          xAxis: {
            data: xAixsData,
            /* boundaryGap:false, */
            axisTick: { alignWidthLabel: true, show: false },
            axisLabel: {
              interval: 0
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#90979c"
              }
            }
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              type: "bar",
              name: "female",
              itemStyle: {
                color: "rgba(255,144,128,1)"
              },
              /*  z: 1, */
              stack: "total",
              label: { show: true, position: "insideTop" },
              barWidth: 30,
              data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
              ]
            },
            {
              type: "bar",
              name: "male",
              itemStyle: {
                color: "rgba(0,191,183,1)"
              },
              /* z: 2, */
              /* barGap:'-100%', */
              stack: "total",
              label: { show: true, position: "outside" },
              barWidth: 30,
              data: [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204,
                1390,
                1001,
                951,
                381,
                220
              ]
            },
            {
              type: "line",
              name: "average",
              symbol: "circle",
              symbolSize: "10",
              label: {
                show: true,
                position: "top",
                formatter(p) {
                  return p.value > 0 ? p.value : "";
                }
              },
              itemStyle: {
                color: "rgba(252,230,48,1)"
              },
              stack: "total",
              data: [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
                2865,
                4298
              ]
            }
          ]
        },
        chart = echarts.init(document.querySelector("#main"));
      chart.setOption(options);
    }
  }
};
</script>