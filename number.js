/**
 * Created by Administrator on 2016/11/30.
 */
export default function numberToChinese(n){
        if (!/^(0|[1-9]\d*)$/.test(n))
            return "数据非法";
        var unit = "千百十亿千百十万千百十", str = "";
        unit = unit.substr(unit.length - n.length+1);
        for (var i=0; i < n.length; i++)
            str += '零一二三四五六七八九'.charAt(n.charAt(i)) + unit.charAt(i);
        return str.replace(/零(千|百|十)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿)/g, "$1").replace(/(亿)万|一(十)/g, "$1$2").replace(/(十|百|千)零/g,"$1");

}
