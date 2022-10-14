const devideAndSort = (number) =>{
    let sort = number.toString().split('0').map(item => item.split('').sort((a,b)=>a-b).join('')).join('')
    let sortNumber = parseInt(sort)
    console.log(sortNumber);
}
devideAndSort(5956560159466056)