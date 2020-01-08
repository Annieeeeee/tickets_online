<template>
    <section class="chart-container">
        <el-row>

            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </el-col>

            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },

        methods: {
            
            drawBarChart() {
                this.chartBar = echarts.init(document.getElementById('chartBar'));
                this.chartBar.setOption({
                    title: {
                        text: '预约数据',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['预约人数', '实际容量']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['同舟讲坛｜笑的配方，喜剧创作', '同舟讲坛|墙上的故事', '排球|新生杯，等你来战', '票务推介丨摇滚红白 · 新年派对']
                    },
                    series: [
                        {
                            name: '预约人数',
                            type: 'bar',
                            data: [632, 312, 128, 203]
                        },
                        {
                            name: '实际容量',
                            type: 'bar',
                            data: [650, 400, 150, 250]
                        }
                    ]
                });
            },
            
            drawPieChart() {
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {

                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['同舟讲坛｜笑的配方，喜剧创作', '同舟讲坛|墙上的故事', '排球|新生杯，等你来战', '票务推介丨摇滚红白 · 新年派对']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 632/650, name: '同舟讲坛｜笑的配方，喜剧创作' },
                                { value: 312/400, name: '同舟讲坛|墙上的故事' },
                                { value: 128/150, name: '排球|新生杯，等你来战' },
                                { value: 203/250, name: '票务推介丨摇滚红白 · 新年派对' },
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawCharts() {

                this.drawBarChart()

                this.drawPieChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
