function relogio() {
    const getClock = new Date();
    let h = getClock.getHours();
    let m = getClock.getMinutes();
    let s = getClock.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('relogio').innerHTML = h + ':' + m + ':' + s;
    setTimeout(relogio, 1000);

    let meses = [
        'Janeiro', 
        'Fevereiro', 
        'Março', 
        'Abril', 
        'Maio', 
        'Junho', 
        'Julho', 
        'Agosto', 
        'Setembro', 
        'Outubro', 
        'Novembro', 
        'Dezembro'
    ];

    let dias = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex'
    ];

    const getDate = new Date();
    let ds = dias[getDate.getDay()];
    let d = getDate.getDate();
    let ma = meses[getDate.getMonth()];
    let a = getDate.getFullYear();

    let data = ds + ', ' + d + ' de ' + ma + ' de ' + a;
    document.getElementById('data').innerHTML = data;
    setTimeout(data, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i
    };
    return i;
}

relogio();