/**
 * Created by zhoufei on 2016/11/23.
 */
import Mock from 'mockjs'
export default (function() {
    Mock.mock(/index\/indexList/, {
        content:{
            list: [{
                src: '../../src/assets/img/sh_home_qr.png',
                title: '订单确认',
                hash: '#myOrderConfirme'
            }, {
                src: '../../src/assets/img/sh_home_gl.png',
                title: '订单管理',
                hash: '#myOrderList'
            }, {
                src: '../../src/assets/img/sh_home_tq.png',
                title: '提取货款',
                hash: '#myAccount'
            }, {
                src: '../../src/assets/img/sh_home_ewm.png',
                title: '我的二维码',
                hash: '#myCode'
            }],
            listDetail: [{
                icon: 'icon1',
                iconTitle: '今日交易金额',
                nowTime: '2016-11-23',
                sh_money: '1000.00',
                xj_money: '2000.00',
                sh_percent: '10%',
                xj_percent: '90%'
            }, {
                icon: 'icon2',
                iconTitle: '今日交易笔数',
                nowTime: '2016-11-23',
                sh_money: '2笔',
                xj_money: '3笔',
                sh_percent: '10%',
                xj_percent: '90%'
            }]
        }
    })
})()