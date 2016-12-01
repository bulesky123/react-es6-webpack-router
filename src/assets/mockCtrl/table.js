/**
 * Created by zhoufei on 2016/12/1.
 */
import Mock from 'mockjs'
export default (function() {
    Mock.mock(/order\/tableDate/, {
        content:{
            'orderList|1-20': [{
                'name': function(){
                        var familyNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦");
                        var givenNames = new Array("子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", "昊轩", "易轩", "益辰", "益帆" );
                        var i = parseInt(Math.random()*10);
                        var familyName = familyNames[i];
                        var givenName = givenNames[i];
                        var name = familyName + givenName;
                        return name;
                },
                'gender': function(){
                    return Math.random() >0.5 ? "男" :"女"
                },
                'chinese|80-100': 85,
                'math|80-100': 98,
                '_id|+1':0
            }]
        }
    })
})()