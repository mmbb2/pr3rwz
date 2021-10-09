const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let comp = 0;
    let findChar = prompt('Введите букву для сравнения');
    for(char in firstRow) {
        if(char === findChar){
            comp++;
        }
    }
    for(char in secondRow) {
        if(char === findChar){
            comp--;
        }
    }
    if(comp>0){
        alert(`В строке "${firstRow}" больше символов "${findChar}" чем в строке "${secondRow}"`);
        return
    }
    if(comp<0){
        alert(`В строке "${secondRow}" больше символов "${findChar}" чем в строке "${firstRow}"`);
        return
    }
    else{
        alert(`В строках "${firstRow}" и "${secondRow}" одинаковое количество симловов "${findChar}"`);
        return
    }
}


getRow(firstRow, secondRow);


function formattedPhone() {
    let phone = prompt('Введите номер телефона');

    if((phone.length === 12) && (phone[0] === '+') && ((phone[1] === '7') ||  (phone[1] === '8')) && !isNaN(phone.slice(2,12) )){
       alert(formatPhone(phone.slice(2,12)));
       return
    }

    if((phone.length === 11) && ((phone[0] === '7') ||  (phone[0] === '8') ) && !isNaN(phone.slice(1,11))){
        alert(formatPhone(phone.slice(1,11)));
        return
    }
    if(phone.length === 10 && !isNaN(phone)){
        alert(formatPhone(phone));
        return
    }

    alert('Формат функции неверный');
    return
 
}

function formatPhone(phone){
    return `+7 (${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,8)}-${phone.slice(8,10)}`
}


formattedPhone();