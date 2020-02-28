let money = +prompt('Enter USD you want to exchange');

while ( money <= 0 || isNaN(money)) {
    alert('Your money is not correct');
    money = +prompt('Enter USD you want to exchange');   
}

let a = prompt('Enter currency: EUR, UAH, AZN');
let b;

switch (a) {
    case 'EUR':
        b = money * 1.13;
        alert(b.toFixed(2)+' EUR');
        break;
    case 'UAH':
        b = money * 25;
        alert(b.toFixed(2)+' UAH');
        break;
    case 'AZN':
        b = money / 10;
        alert(b.toFixed(2)+' AZN');
        break;    
    default:
        alert('We cannot make an exchange')
        break;
}