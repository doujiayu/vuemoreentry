<template>
   <div id="shopInfo">
       <div class="shop_tit">
           <h2>店铺概况</h2>
       </div>
       <!-- 店铺简介 -->
       <div class="shop_base xy_center">
          <dl @click='perfectInfor'>
              <dt>
                  <img src="" alt="">
              </dt>
              <dd>
                  <li>店铺名称: 买买网</li>
                  <li>商家认证类型: 食品酒水类</li>
              </dd>
          </dl>
          <div class="send" @click='sendGoods'>
              <span>
                  发布商品
              </span>

          </div>

       </div>
       <!-- 统计 -->
       <div class="account">
           <div class="act_tit">
               <span>订单统计</span>
           </div>
           <div class="act_pro">
               <ul v-for='(item,index) in [0,1,2,3]' :key='index' >
                   <li>100</li>
                   <li>待发货订单</li>
                   <span class='x-solid' v-if='index!=3'></span>
               </ul>
           </div>
            <div class="act_tit">
               <span>流量统计</span>
           </div>
           <div class="act_pro">
               <ul v-for='(item,index) in [0,1,2,3]' :key='index' >
                   <li>100</li>
                   <li>待发货订单</li>
                   <span class='x-solid' v-if='index!=3'></span>
               </ul>
           </div>
            
       </div>
<div  style='position:relative;'>
                <div id='main' style='width:1200px;height:600px;'></div>
                <el-form style='position:absolute;top:13px;right:10px;'>
                     <el-form-item label="" prop="date1">
                        <el-date-picker
                                style="width:220px;"
                                size="small"
                                v-model="ruleForm.date1"
                                type="daterange"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                unlink-panels
                            >
                        </el-date-picker>
                </el-form-item>
                </el-form>
           </div>
   </div>
</template>
<script>
export default {
    data () {
        return {
            ruleForm:{
                date1: ''

            }
        }
    },
    mounted(){
         this.drawLines();
    },
    methods:{
         drawLines(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'))
            // 绘制图表
          myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        },
        sendGoods(){
            this.$router.push({
                name: 'goodsClassSelect'
            })
        },
        perfectInfor(){
            this.$router.push({
                name: 'perfectInfor'
            })

        }
    }
    
}
</script>
<style lang="scss" scope>
#shopInfo{
    width: 1198px;
    margin: 20px auto;
    background-color: #fff;
    border-top:1px solid rgba(224,224,224,1);
    .xy_center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    // 店铺标题
    .shop_tit{
        padding: 22px  20px; 
        border-bottom: 1px solid rgba(224,224,224,1);
        h2{
            font-size: 20px;
        }
    }
    // 店铺简介
    .shop_base{
        padding: 25px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(224,224,224,1);
        dl{
            display: flex;
            dt{
                width:120px;
                height:120px;
                img{
                    width:120px;
                    height:120px;
                    display: inline-block;
                    background-color: #ccc;
                }
            }
            dd{
                margin-left: 19px;
                li{
                    margin-bottom: 18px;
                    &:nth-child(1){
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .send{
        background-color: #CA1C1D;
        border-radius:6px;
        padding:7px 28px;
        height: 30px;
        color: #fff;
        line-height: 30px;
        cursor: pointer;

    } 
    // 统计
    .account{
        .act_tit{
            font-size: 16px;
            font-weight: bold;
            padding:20px;

        }
        .act_pro{
            display: flex;
            // justify-content: space-around;
            border-top:1px solid rgba(224,224,224,1);
            border-bottom:1px solid rgba(224,224,224,1); 
            padding: 30px 0;
            ul{
                display: flex;
                position: relative;
                flex-direction: column;
                width:25%;
                padding-left: 100px;
                // border-left:1px solid rgba(224,224,224,1); 
                
                li{
                    margin-bottom: 14px;
                    &:nth-child(1){
                        color:#CA1C1D;
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .x-solid{
                    position: absolute;
                    width: 1px;
                    background-color: rgba(224,224,224,1);
                    height: 78px;
                    top:0px;
                    right:0px;
                }
              

            }
           

        }

    }



}

</style>


