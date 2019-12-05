<template>
  <div id="main" :style="{width:width,height:height}"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let options = {
        backgroundColor: "#394056",
        title: {
          top: 20,
          text: "Requests",
          textStyle: {
            color: "#F1F1F3",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        grid: {
          left: "5%",
          top: 100,
          right: "2%",
          bottom: "2%",
          containLabel: true
        },
        legend: {
          top: 20,
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["CMCC", "CTCC", "CUCC"],
          right: "5%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3"
          }
        },
        xAxis: {
          type: "category",
          nameLocation: "start",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#57617B"
            }
          },
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {
          type: "value",
          name: "(%)",
          nameLocation: "end",
          nameTextStyle: { color: "#57617B" },
          axisLabel: {
            margin: 10,
            color: "#57617B",
            fontSize: 14
          },
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#57617B"
            }
          },
          splitLine: {
            lineStyle: {
              color: ["#57617B"]
            }
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            axis: "x",
            nap: true,
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        series: [
          {
            name: "CMCC",
            type: "line",
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              color: "rgb(137,189,27)",
              borderColor: "rgba(137,189,2,0.27)",
              borderWidth: 10
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(137, 189, 27, 0.3)" },
                  { offset: 0.8, color: "rgba(137, 189, 27, 0)" }
                ],
                global: false
              }
            }
          },
          {
            name: "CTCC",
            type: "line",
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              color: "rgb(0,136,212)",
              borderColor: "rgba(0,136,212,0.2)",
              borderWidth: 12
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(0, 136, 212, 0.3)" },
                  { offset: 0.8, color: "rgba(0, 136, 212, 0)" }
                ],
                global: false
              }
            }
          },
          {
            name: "CUCC",
            type: "line",
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              color: "rgb(219,50,51)",
              borderColor: "rgba(0,136,212,0.2)",
              borderWidth: 12
            },
            lineStyle: {
              width: 1
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(219, 50, 51, 0.3)" },
                  { offset: 0.8, color: "rgba(219, 50, 51, 0)" }
                ],
                global: false
              }
            }
          }
        ]
      };
      let chart = echarts.init(document.querySelector("#main"));
      chart.setOption(options);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>