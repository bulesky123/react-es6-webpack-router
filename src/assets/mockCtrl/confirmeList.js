/**
 * Created by zhoufei on 2016/11/23.
 */
import Mock from 'mockjs'
export default (function() {
    Mock.mock(/\/order\/confirmeList/, {
        "merchantName":"京东商城gogogogo",
        "userMobile":"15810638896",
        "loanTotalAmount":"2000",
        "loanPeriod":"3",
        "downPaymentAmount":"100",
        "createTime":"2016-10-10 10:22",
        "displayOrderId":"20160918283848328"
    })
})()