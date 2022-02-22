console.log("Hello World");
// let n=11;

//0 Kiểm tra số nguyên tố
// function isPrime(n){
//     if(n < 2)   return false
//     else if( n == 2) return true
//     for(let i = 2; i <n-1; i++){
//         if(n % i == 0)  return false
//     }
//     return true
// }
// console.log(isPrime(n));
function isPrime(n){
    let flag = true;
    if(n < 2) {
        flag =false;
    }
    else if(n == 2)
    {
        flag =true;
    }
    else if( n % 2 == 0){
        flag = false;
    }
    else{
        for(let i=3; i< n-1; i=i+2)
        {
            if( n % i == 0)
            {
                flag = false;
                break;
            }
        }
    }
    return flag;
}
console.log(isPrime(5));

//1 Viết chương trình in ra các số từ 1 đến n
function number(n){
    for (let i = 1; i <= n; i++){
        console.log(`${i}`);
    }
}
number(5);
//2 Viết chương trình in ra số lẻ từ 1 đến n
function oddNumber(n){
    for(let i=1; i<=n; i++)
    {
        if(i % 2 != 0) console.log(` ${i}`);
    }
}
oddNumber(4);
//3 Viêt chương trình in ra số chẵn từ 1 đến n
function evenNumber(n){
    for(let i=1; i<=n; i++)
    {
        if(i % 2 == 0) console.log(i);
    }
}
evenNumber(5);
//4 Viết chương trình in ra các số nguyên tố 1-> n
function checkIspri(n){
    for(let i =1; i<=n; i++)
    {
        if(isPrime(i) == true) console.log(i);
    }
}
checkIspri(9);
//5 Viết chương trình tính tổng tù 1 -> n
function total(n){
    let sum = 0;
    for(let i = 1; i<=n; i++)
    {
        sum = sum + i;
    }
    return `Tong la: ${sum}`;
}
console.log(total(5));
//6 Viết chương trình tính tổng bình phương từ 1->n
function totalSquare(n){
    let sum = 0;
    for(let i = 1; i<=n; i++)
    {
        sum = sum + i*i;
    }
    return `Tong binh phuong: ${sum}`;
}
console.log(totalSquare(5));

// //7 Tính tổng số lẻ từ 1 -> n
function totalOddNumber(n){
    let sum = 0;
    for(let i =1; i<=n; i=i+2)
    {
        sum = sum + i;
    }
    return `Tong cac so le: ${sum}`;
}
console.log(totalOddNumber(5));
//8 Kiểm tra n có toàn số lẻ tạo thành kg
function oddNumberForm(n){
    while(n)
    {
        if( (n%10) % 2 == 0) return false;
        break;
        n = n /10;
    }
    return true;
}
console.log(oddNumberForm(54));
//9 Kiểm tra số đối xứng
function symmetricalNumber(n){
    function reverseNum(n){
        n = n.toString();
        return n.split("").reverse().join("");
    }
    if(reverseNum(n) == n) return true;
    return false;
}
console.log(symmetricalNumber(121));
