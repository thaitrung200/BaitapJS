console.log("Hello World");
let n=10;
//0 Kiểm tra số nguyên tố
function isPrime(n){
    if(n < 2)   return false
    else if( n == 2) return true
    for(let i = 2; i <n-1; i++){
        if(n % i == 0)  return false
    }
    return true
}
console.log(isPrime(n));
//1 Viết chương trình in ra các số từ 1 đến n
for (var i = 1; i <= n; i++){
    console.log(`${i}`);
}
//2 Viết chương trình in ra số lẻ từ 1 đến n
for(let i=1; i<=n; i++)
{
    if(i % 2 != 0) console.log(` ${i}`)
}
//3 Viêt chương trình in ra số chẵn từ 1 đến n
for(let i=1; i<=n; i++)
{
    if(i % 2 == 0) console.log(i);
}
//4 Viết chương trình in ra các số nguyên tố 1-> n
for(let i =1; i<=n; i++)
{
    if(isPrime(i) == true) console.log(i)
}
//5 Viết chương trình tính tổng tù 1 -> n
let tong=0;
for(let i=1; i<=n; i++)
{
    tong = tong + i;
}
console.log(`Bai5: ${tong}`)
//6 Viết chương trình tính tổng bình phương từ 1->n
 tong=0;
for(let i=1; i<=n; i++)
{
    tong = tong + i*i;
}
console.log(`Bai6: ${tong}`)
//7 Tính tổng số lẻ từ 1 -> n
 tong=0
for(let i=0; i<=n; i++)
{
    if(i % 2 != 0 )
    {
        tong = tong +i;
    }
}
console.log(`Bai7: ${tong}`)

