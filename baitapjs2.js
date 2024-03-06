function CheckCL(num){
    return num%2===1;
}
if(CheckCL()){
    console.log("Le")
}



var sach=[
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]
const tacgia='Harper Lee'
emp = sach.find(item => item.tacgia===tacgia)
console.log(emp)

function SoLonNho(arr){
    var arr = [1, 2, 3, 4];
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    } 
    console.log(max);
    console.log(min);
}
SoLonNho();

function KiTuDaiNhat(chuoi){
    var mang1=chuoi.split(" ");
    var doDaiNhat =0;
    var tuDaiNhat= "";

    for(var i=0;i<mang1.length; i++){
        if(mang1[i].length>doDaiNhat){
            doDaiNhat=mang1[i].length
            tuDaiNhat=mang1[i];
        }
    }
    return tuDaiNhat;

}
var chuoi= "Truong Hoanggg Kha Nhi";
var tuDaiNhat=KiTuDaiNhat(chuoi);
console.log(tuDaiNhat)

function plusAll(){
    var res=0;
    for(var i in arguments){
        res += arguments[i];
    }
    return res;
}

