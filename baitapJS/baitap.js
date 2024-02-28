function NhapThu() {
    var inputElement = document.getElementById('number');
    var n = parseInt(inputElement.value);

    var resultDiv = document.getElementById('result2');

    switch (n) {
        case 2:
            resultDiv.innerText = 'Monday';
            break;
        case 3:
            resultDiv.innerText = 'Tuesday';
            break;
        case 4:
            resultDiv.innerText = 'Wednesday';
            break;
        case 5:
            resultDiv.innerText = 'Thursday';
            break;
        case 6:
            resultDiv.innerText = 'Friday';
            break;
        case 7:
            resultDiv.innerText = 'Saturday';
            break;
        case 8:
            resultDiv.innerText = 'Sunday';
            break;
        default:
            resultDiv.innerText = 'Nhap Lai!!!';
    }
}
function DayMang(x){
    var y =["Thu Hai","Thu Ba","Thu Tu", "Thu Nam", "Thu Sau", "Thu Bay", "Chu Nhat"];
    switch(x){
        case 2:
            console.log(y[x-2]);
            break;
        case 3:
            console.log(y[x-2]);
            break;
        case 4:
            console.log(y[x-2]);
            break;
        case 5:
            console.log(y[x-2]);
            break;
        case 6:
            console.log(y[x-2]);
            break;
        case 7:
            console.log(y[x-2]);
            break;
        case 8:
            console.log(y[x-2]);
            break;
        default:
            console.log("Nhap lại")
    }
}
DayMang(2)
function KiemTraSNT(){
    let numberSNT=parseInt(document.getElementById('number_SNT').value);
    let isPrime=true;
    if(numberSNT<2){
        isPrime=false;
    }else{
        for (let i=2; i<= Math.sqrt(numberSNT); i++){
            if(numberSNT%i==0){
                isPrime=false;
                break;
            }
        }   
    }

    if(isPrime){
        document.getElementById('ketqua').innerText= numberSNT + ' La SNT';
    }else{
        document.getElementById('ketqua').innerText= numberSNT + ' Khong Phai La SNT';
    }

}

var matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1]
  ];
  
  var output = [];
  
  for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        row += '1';
      } else {
        row += '0';
      }
    }
    output.push(row);
  }
  
  output.push('010');
  
  for (let k = 0; k < output.length; k++) {
    console.log(output[k]);
  }

  
function kiem_tra_email() {
    var KtraEmail = document.getElementById('KiemTraEmail').value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(pattern.test(KtraEmail)){
        document.getElementById('ketqua111').innerText= 'Email Hợp lệ';
    }else{
        document.getElementById('ketqua111').innerText= 'Email Không Hợp Lệ !!!';
    }
}

var user = {
    email: "chaunghi678@gmail.com",
    password: "nghi123"
};


function validateForm() {
    var emailInput = document.getElementById('email').value.trim();
    var passwordInput = document.getElementById('password').value.trim();
    var emailError = document.getElementById('emailError');
    var resultMessage = document.getElementById('result');
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        emailError.innerHTML = "Email không hợp lệ!";
        return;
    } else {
        emailError.innerHTML = ""; 
    }
    if (emailInput === user.email && passwordInput === user.password) {
        resultMessage.innerHTML = "Đăng nhập thành công!";    
    } else {
        resultMessage.innerHTML = "Đăng nhập thất bại!"; 
    }
}



