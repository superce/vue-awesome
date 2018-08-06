<template>
  <div class='pos'>
    <div class="pos-left">
      <div class="pos-list">
        <el-row>
          <el-col :span='22' class="pos-order">
            <el-tabs class="tab-box">
              <el-tab-pane label="点餐">
                <el-table border width="100%" :data='tableData'>
                  <el-table-column prop="goodsName" label="商品" width="100"></el-table-column>
                  <el-table-column prop="count" label="数量" width="50"></el-table-column>
                  <el-table-column prop="price" label="单价" width="50"></el-table-column>
                  <el-table-column label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                      <el-button type='text' size='small' @click='removeOrder(scope.row)'>删除</el-button>
                      <el-button type='text' size='small' @click='addOrder(scope.row)'>增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="sum">
                  <div class="num"><span>数量:</span>{{ totalCount }}</div>
                  <div class="numPrice"><span>价格:</span>{{ totalMoney }}</div>
                </div>
                <div class="div-btn">
                  <el-button type='warning' size="small">挂单</el-button>
                  <el-button type='danger' size="small" @click="delAllGoods">删除</el-button>
                  <el-button type='success' size="small" @click="checkout">结账</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">挂单</el-tab-pane>
              <el-tab-pane label="外卖">外卖</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="pos-right">
      <el-row>
        <el-col>
          <div class="title">
            <span>常用商品</span>
          </div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click='addOrder(goods)'>
                <span>{{ goods.goodsName }}</span>
                <span class="o-price">{{ goods.price }}元</span>
              </li>
            </ul>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class='cookList'>
                      <li v-for="goods in type0Goods" @click='addOrder(goods)'>
                          <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                          <span class="foodName">{{goods.goodsName}}</span>
                          <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class='cookList'>
                      <li v-for="goods in type1Goods" @click='addOrder(goods)'>
                          <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                          <span class="foodName">{{goods.goodsName}}</span>
                          <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class='cookList'>
                      <li v-for="goods in type2Goods" @click='addOrder(goods)'>
                          <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                          <span class="foodName">{{goods.goodsName}}</span>
                          <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class='cookList'>
                      <li v-for="goods in type3Goods" @click='addOrder(goods)'  >
                          <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                          <span class="foodName">{{goods.goodsName}}</span>
                          <span class="foodPrice">￥{{goods.price}}元</span>
                      </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: 'Pos',
    data: () => ({
      tableData: [],
      oftenGoods:[ { "goodsId":1, "goodsName":"香辣鸡腿堡", "price":18 }, { "goodsId":2, "goodsName":"田园鸡腿堡", "price":15 }, { "goodsId":3, "goodsName":"和风汉堡", "price":15 }, { "goodsId":4, "goodsName":"大包薯条", "price":18 }, { "goodsId":5, "goodsName":"脆皮炸鸡腿", "price":20 }, { "goodsId":6, "goodsName":"魔法鸡块", "price":20 }, { "goodsId":7, "goodsName":"可乐大杯", "price":10 }, { "goodsId":8, "goodsName":"雪顶咖啡", "price":18 }, { "goodsId":9, "goodsName":"儿童欢乐套餐", "price":25 }, { "goodsId":10, "goodsName":"快乐全家桶", "price":99 } ],
      type0Goods: [ { "goodsId": 1, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "香辣鸡腿堡", "price": 18 }, { "goodsId": 2, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "田园鸡腿堡", "price": 15 }, { "goodsId": 3, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "和风汉堡", "price": 15 } ],
      type1Goods: [ { "goodsId": 4, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "大包薯条", "price": 18 }, { "goodsId": 5, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "脆皮炸鸡腿", "price": 20 }, { "goodsId": 6, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "魔法鸡块", "price": 20 } ],
      type2Goods:[ { "goodsId": 7, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg", "goodsName": "可乐大杯", "price": 10 }, { "goodsId": 8, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg", "goodsName": "雪顶咖啡", "price": 18 } ],
      type3Goods:[ { "goodsId": 9, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg", "goodsName": "儿童欢乐套餐", "price": 25 }, { "goodsId": 10, "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg", "goodsName": "快乐全家桶", "price": 99 } ] ,
      totalCount:0,
      totalMoney:0
    }),
    // created(){
    //   // 读取常用商品
    //   let url = 'https://jspang.com/DemoApi/oftenGoods.php';
    //   axios.get(url)
    //   .then(res => this.oftenGoods = res.data)
    //   .catch(e => alert('网络错误'))
    //   // 读取分类
    //   axios.get('http://jspang.com/DemoApi/typeGoods.php')
    //   .then(res => {
    //     this.type0Goods = res.data[0]
    //     this.type1Goods = res.data[1]
    //     this.type2Goods = res.data[2]
    //     this.type3Goods = res.data[3]
    //     }
    //   )
    //   .catch(e => console.log(e))
    // },
    methods:{
      addOrder(goods){       
        // 判断点餐列表是否有订单
        let isHave = false;
        for(let i = 0;i < this.tableData.length; i++){
          if(this.tableData[i].goodsId === goods.goodsId){
            isHave = true
          }
        }
        if(!isHave){
          // 如果列表里没有订单,那么就添加订单
          let newGoods = {
            goodsId:goods.goodsId,
            goodsName:goods.goodsName,
            price:goods.price,
            count:1
          }
          this.tableData.push(newGoods)
        }else{
          let arr = this.tableData.filter(a => a.goodsId === goods.goodsId)
          arr[0].count ++;
          this.getAllSum()
        }
        this.tableData.forEach(
          (everyOne) => {
            this.totalCount+=everyOne.count  
            this.totalMoney = this.totalMoney + (everyOne.price*everyOne.count)
            }
          )
      },
      // 删除单个商品
      removeOrder(goods){
        this.tableData = this.tableData.filter(gId => goods.goodsId != gId.goodsId)
        this.getAllSum()
      },
      // 删除所有商品
      delAllGoods(){
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
      },
      // 获取总数量跟价格
      getAllSum(){
        // 商品数量,单价清零
        this.totalCount = 0;
        this.totalMoney = 0;
        this.tableData.forEach(
          (everyOne) => {
            this.totalCount+=everyOne.count  
            this.totalMoney = this.totalMoney + (everyOne.price*everyOne.count)
            }
          )
      },
      // 结账
      checkout(){
        if(this.totalCount != 0){
          this.tableData = [];
          this.totalCount = 0;
          this.totalMoney = 0;
          this.$message({
            message:'结账成功',
            type:'success'
          })
        }else{
          this.$message.error('商品为空')
        }
      }
    }
  }
</script>

<style scoped>
  .pos {
    display: flex;
    width: 100%;
  }
  .pos-left {
    width: 27%;
    background: #fff;
    border-right: 1px solid #ccc
  }

  .pos-left .pos-list {
    width: 95%;
    margin: 0 auto;
  }

  .pos-left .pos-list .tab-box {
    text-align: center;
  }

  .pos-left .pos-list .div-btn {
    margin-top: 10px;
  }
  .pos .sum{
    display: flex;
    width:60%;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 16px;
    color:#FF5722;
  }
  .pos .sum span{
    font-size: 14px;
    color:#2196F3
  }
  .pos-right{
    width:73%;
  }
  .pos-right .goods-type{
    width:97%;
    margin: 0 auto;
  }
  .pos-right .title{
    border-bottom:1px solid #ccc;
    background: #fff;
  }
  .pos-right .title span{
    line-height: 38px;
    padding-left: 10px;
  }
  .often-goods-list ul{
    list-style: none;
    padding-left: 10px;
    overflow: hidden;
    
  }
  .often-goods-list ul li{
    background: #fff;
    float: left;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ebeef5;
    font-size: 16px;
    font-family: serif;
    cursor: pointer;
  }
  .often-goods-list ul li .o-price{
    color:#2196F3
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
      cursor: pointer;
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>