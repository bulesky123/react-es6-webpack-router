/**
 * Created by zhoufei on 2016/11/25.
 */
import Mock from 'mockjs'
export default (function() {
    Mock.mock(/order\/orderList/, {
        content:{
            'orderList|1-8': [{
                'stateName|1-2': 1,
                'createTime': '2016-11-23',
                'loadMoney|1000-6000': 1000.00,
                'type|1-2': 1,
                'per|1-8': 1,
                'orderGid':'2d0x1c6d191d2d34n384u38bud39'
            }]
        }
    })
})()