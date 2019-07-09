import Vue from 'vue'
// 全局过滤
// export default  
        let filObj = [
            "filterStatuss", "FILTER_DATA", 'TIME_CHANGE', 'TOFIXED'
        ]
        for(let key of filObj){
            Vue.filter(key, function(status) {
                console.log(status)
                switch(key){
                    case 'filterStatuss':
                        let store = {
                            '-1': { label: '待发布'},
                            '0': { label: '已发布'},
                            '1': { label: '已暂停'},
                            '2': { label: '已关闭'}
                        };
                        return store[status].label;
                    case 'FILTER_DATA':
                        let stores = {
                            '-1': { label: '真的'},
                            '0': { label: '假的'},
                            '1': { label: '不假'},
                            '2': { label: '真假难分'}
                        };
                        return stores[status].label;
                    // 时间戳转换成 日期格式  (2018-01-23 18:31:35)
                    case 'TIME_CHANGE':
                        let date = new Date(Number(status));
                        let y = date.getFullYear();
                        let MM = date.getMonth() + 1;
                        MM = MM < 10 ? ('0' + MM) : MM;
                        let d = date.getDate();
                        d = d < 10 ? ('0' + d) : d;
                        let h = date.getHours();
                        h = h < 10 ? ('0' + h) : h;
                        let m = date.getMinutes();
                        m = m < 10 ? ('0' + m) : m;
                        let s = date.getSeconds();
                        s = s < 10 ? ('0' + s) : s;
                        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
                    // 四舍五入 保留两位小数
                    case 'TOFIXED':
                        // let  data = parseFloat(status)
                        // console.log(23568945464646)
                        // console.log(data)
                        // if(isNaN(data)){
                        //     alert('只支持数字哦！')
                        //     return false;
                        // }
                        // data = Math.round(status * 100) / 100;
                        // let s_x = result.toString();
                        // let pos_decimal = s_x.indexOf('.');
                        // if (pos_decimal < 0) {
                        //     pos_decimal = s_x.length;
                        //     s_x += '.';
                        // }
                        // while (s_x.length <= pos_decimal + 2) {
                        //     s_x += '0';
                        // }
                        return '123456'
                }
            }); 
        }

     
// 用法  {{“-1” | filterStatuss}}