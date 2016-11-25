/**
 * Created by zhoufei on 2016/11/25.
 */
import Mock from 'mockjs'
export default (function() {
    Mock.mock(/order\/orderList/, {
        content:{
            'orderList|1-8': [{
                stateName: '待结算',
                createTime: '2016-11-23',
                loadMoney: '1000.00',
                type: '商品贷',
                per: '3'
            }]
        }
    })
})()