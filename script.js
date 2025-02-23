let roupas = [
    {
        dir: './resorce/overside_black.png',
        primary: '#222831',
        secundary: '#393E46',
        detalhe: '#00ADB5',
        font: '#FFF',
        valor: 120,
        name: 'camisa simples futuro',
        desconto: 15
    },
    {
        dir: './resorce/overside_black_01.png',//aaaaa
        primary: '#222831',
        secundary: '#393E46',
        detalhe: '#00ADB5',
        font: '#FFF',
        valor: 120,
        name: 'oversized minimalista',
        desconto: 15
    },
    {
        dir: './resorce/overside_2.png',
        primary: '#B4B4B8',
        secundary: '#C7C8CC',
        detalhe: '#555555',
        font: '#FFF',
        valor: 120,
        name: 'kit casual branco',
        desconto: 15
    },
    {
        dir: './resorce/overside.png',
        primary: '#B4B4B8',
        secundary: '#C7C8CC',
        detalhe: '#555555',
        font: '#FFF',
        valor: 120,
        name: 'Oversized branca',
        desconto: 15
    },
    // {
    //     dir: './resorce/overside_red.png',
    //     primary: '#850000',
    //     secundary: '#DC0000',
    //     detalhe: '#FFDB89',
    //     font: '#FFF6C3',
    //     valor: 120,
    //     name: 'casaco high school',
    //     desconto: 15
    // },
    // {
    //     dir: './resorce/overside_red_2.png',
    //     primary: '#222831',
    //     secundary: '#393E46',
    //     detalhe: '#00ADB5',
    //     font: '#FFF',
    //     valor: 120,
    //     name: 'kit high school vermelho',
    //     desconto: 15
    // },
    {
        dir: './resorce/overside_brow.png',
        primary: '#776B5D',
        secundary: '#B0A695',
        detalhe: '#F3EEEA',
        font: '#EBE3D5',
        valor: 120,
        name: 'kit casual marrom',
        desconto: 15
    },
    {
        dir: './resorce/overside_grey_2.png',
        primary: '#303841',
        secundary: '#3A4750',
        detalhe: '#00ADB5',
        font: '#FFF',
        valor: 120,
        name: 'kit casual Cinza Gunmetal',
        desconto: 15
    }

]


roupas.forEach((element, key) => {
    let div = document.createElement('div');
    div.setAttribute('data-id', `${key}`)
    div.setAttribute('onclick', 'voltarParaOInicio()')
    div.className = 'objeto';

    div.style.backgroundImage = `url(${roupas[key].dir})`;
    document.querySelector('.grid').appendChild(div);
});
document.addEventListener('click', element => {
    let myObject = element.target;
    produtoId = myObject.getAttribute('data-id');

    let selectedItem = roupas[produtoId];

    let imgRoupa = document.createElement('img');
    imgRoupa.setAttribute('src', selectedItem.dir);
    imgRoupa.setAttribute('id', 'roupa');
    imgRoupa.setAttribute('data-aos', 'fade-out');

    document.querySelector('.modelo').innerHTML = '';

    document.querySelector('.modelo').appendChild(imgRoupa)
    document.querySelector('.produto').innerText = selectedItem.name;
    document.documentElement.style.setProperty('--primary-color', selectedItem.primary)
    document.documentElement.style.setProperty('--secondary-color', selectedItem.secundary)
    document.documentElement.style.setProperty('--detalhe-color', selectedItem.detalhe)
    document.documentElement.style.setProperty('--destaque-color', selectedItem.destaque)
    document.documentElement.style.setProperty('--font-color', selectedItem.font)
});

function voltarParaOInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.onload = function () { document.querySelectorAll('.objeto')[0].click() } 