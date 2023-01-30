// генератор пана
// БИНы российских банков
const bins = ['427229', '527883', '447520', '548999', '526483', '520905', '520905', '553691', '462730', '462729', '427683', '427901', '427644', '427601', '427901', '427631', '427229', '527883', '447520', '548999', '526483', '520905', '520905', '553691', '462730', '462729', '427683', '427901', '427644', '427601', '427901', '427631', '521324', '437773', '445435', '525744', '419689', '533736', '434146', '522470', '447817', '410462', '520905', '440503', '485078', '554562', '462730', '418384', '513691', '427683', '439056', '531687', '447818', '521324', '529047', '676636', '440666', '531317', '445435', '544058', '531344', '403330', '518901', '524468', '524468', '524468'];

// генератор целого числа в диапазоне
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// алгоритм Луна
// если параметр supplement в значении true, 
// функция вернет контрольную цифру по значению value
// иначе проверит корректность значения
function luhnAlgorithm(value, supplement) {
    if (supplement) value += '0';
    value = value.replace(/\D/g, '');
    let nCheck = 0;
    let bEven = false;
    for (let n = value.length - 1; n >= 0; n--) {
        let nDigit = parseInt(value.charAt(n), 10);
        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    if (supplement) {
        return (10 - (nCheck % 10)) % 10;
    } else {
        return (nCheck % 10) == 0;
    }
}
function getRandomPan() {
    let pan = '' + bins[getRandomInt(0, bins.length - 1)] + getRandomInt(100000000, 999999999);
    return pan + luhnAlgorithm(pan, 1);
}
function getPans(n, print) {
    let result = [];
    for (let i = 0; i < n; i++) result.push(getRandomPan());
    if (print) console.log(result);
    else return result;
}