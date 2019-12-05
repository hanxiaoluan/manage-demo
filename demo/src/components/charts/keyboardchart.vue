<template>
  <div id="main" :style="{width:width,height:height}"></div>
</template>

<script>
import echarts from "echarts";
/* import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/grid"; */
export default {
  props: {
    width: {
      default: "100%",
      type: String
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
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 50; i++) {
        xAxisData.push("类目" + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
      }
      /*  console.log(xAxisData, data1, data2); */
      let options = {
        backgroundColor: '#08263a',
        
        gird: {
          left: "5%",
          right: "5%"
        },
        toolbox: { orient: "horizontal", itemSize: 15, itemGap: 10,show:true},
        tooltip:{show:false},
        xAxis: [
          {
            data: xAxisData,
            silent: false,
            splitLine: { show: false },
            show: false
          },
          {
            data: xAxisData,
            silent: false,
            splitLine: { show: false },
            show: false
          }
        ],
        visualMap: {
          type: "continuous",
          show: true,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: [
              "#4a657a",
              "#308e92",
              "#b1cfa5",
              "#f5d69f",
              "#f5898b",
              "#ef5055"
            ]
          },
          hoverLink:false
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#4a657a"
            }
          },
          splitLine: {
            show: false,
            
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "back",
            type: "bar",
            data: data2,
            animation: true,
            z: 1,
            itemStyle: {
              opacity: 0.4,
              barBorderRadius: 5,
              shadowBlur: 3,
              shadowColor: "#111"
            },
            animationDelay: function(idx) {
              // 越往后的数据延迟越大
              return idx * 10;
            }
          },
          {
            name: "Simulate Shadow",
            type: "line",
            data: data1,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: "linear",
            animationDuration: 1200,
            lineStyle: {
              color: "transparent"
            },
            areaStyle: {
              color: "#08263a",
              shadowBlur: 50,
              shadowColor: "#000"
            }
          },
          {
            name: "front",
            type: "bar",
            data: data1,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ],
        animationEasing: "elasticOut",
        animationEasingUpdate: "elasticOut",
        animationDelay(idx) {
          return idx * 20;
        },
        animationDelayUpdate(idx) {
          return idx * 20;
        }
      };
      let chart = echarts.init(document.querySelector("#main"));
      chart.setOption(options);

      
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
}
</style>