const pijarFood = (harga, voucher, jarak, pajak)=>{
    let tax = 0
    let ongkir = 0
    const delivery = 5000
    let diskon = 0

    // Diskon voucher

    if(harga > 25000 && voucher === 'DITERAKTIRPIJAR'){
        diskon = harga * 0.6
        if(diskon > 30000){
            diskon = 30000
        }else{
            diskon
        }
    }else if(harga > 50000 && voucher === 'PIJARFOOD5'){
        diskon = harga * 0.5
        if(diskon > 50000){
            diskon = 50000
        }else{
            diskon
        }
    }

    // Jarak dan ongkos kirim

    if(jarak < 2){
        ongkir = delivery * jarak 
    }else{
        ongkir = (delivery * jarak) + (3000 * (jarak - 2))
    }

    // Pajak

    if(pajak === true){
        tax = harga * 0.05
    }else{
        tax
    }
    
    // ouput

    console.log(
    `
    Harga = ${harga}
    Potongan = ${diskon}
    Biaya Antar = ${ongkir}
    Pajak = ${tax}
    Sub Total = ${harga - diskon + ongkir + tax}
    `);
}
pijarFood(150000, '', 5, true)