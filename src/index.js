module.exports = function toReadable (number) {

    if (number === 0) {
        return 'zero';
    }    

    let strNumber = number.toString();

    if(number < 100 && number > 9 ){  
        strNumber = '0' + strNumber;
    } else if(number < 10)  {
        strNumber = '00' + strNumber;
    }
    
    a=strNumber [0];
    b=strNumber [1];
    c=strNumber [2];
    let res = '';

        switch (a) {
            case '1':
                res += 'one hundred';
                break;
            case '2': 
                res += 'two hundred';
                break;
            case '3':
                res += 'three hundred';
                break;
            case '4': 
                res += 'four hundred';
                break;
            case '5': 
                res += 'five hundred';
                break;
            case '6': 
                res += 'six hundred';
                break;
            case '7': 
                res += 'seven hundred';
                break;
            case '8': 
                res += 'eight hundred';
                break;
            case '9': 
                res += 'nine hundred';
                break;
        }

    if (number > 99 && b !== '0') {   
        res += ' ';
    }

    if (b === '1') {
        switch (c) {
            case '0':
                res += 'ten';
                return res;
            case '1':
                res += 'eleven';
                return res;
            case '2': 
                res += 'twelve';
                return res;
            case '3':
                res += 'thirteen';
                return res;
            case '4':
                res += 'fourteen';
                return res;
            case '5':
                res += 'fifteen';
                return res;
            case '6':
                res += 'sixteen';
                return res;
            case '7':
                res += 'seventeen';
                return res;
            case '8':
                res += 'eighteen';
                return res;
            case '9':
                res += 'nineteen';
                return res;
        }
    }else {
        switch (b) {
            case '2': 
                res += 'twenty';
                break;
            case '3':
                res += 'thirty';
                break;
            case '4':
                res += 'forty';
                break;
            case '5':
                res += 'fifty';
                break;
            case '6':
                res += 'sixty'
                break;
            case '7': 
                res += 'seventy'
                break;
            case '8':
                res += 'eighty';
                break;
            case '9':
                res += 'ninety';
                break;
        }
    }

    if (number > 9 && c !== '0') { 
        res += ' ';
    }

    
        switch (c) {
            case '1':
                res += 'one';
                break;
            case '2': 
                res += 'two';
                break;
            case '3':
                res += 'three';
                break;
            case '4': 
                res += 'four';
                break;
            case '5': 
                res += 'five';
                break;
            case '6': 
                res += 'six';
                break;
            case '7': 
                res += 'seven';
                break;
            case '8': 
                res += 'eight';
                break;
            case '9': 
                res += 'nine';
                break;
        }

console.log(res);
    return res;
}