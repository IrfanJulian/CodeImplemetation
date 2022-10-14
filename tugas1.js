// 1. Membuat program deteksi palindrom dan membuat program reverse word. 

const cekPalindrom = (kata) =>{
    let cek = kata.toLowerCase()
    let palindrom = cek.split('').reverse().join('')
    if(cek === palindrom){
        console.log('Palindrom');
    }else{
        console.log('Bukan Palindrom');
    }
}
cekPalindrom('MalAm')

const reverseWord = (value) =>{
    let cekReverse = value.split(' ').reverse().join(' ')
    console.log(cekReverse);
}
reverseWord('lamb of god')