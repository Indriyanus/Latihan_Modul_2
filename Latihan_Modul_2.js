/* 
1. Tuliskan kode untuk mengonversi celcius ke fahrenheit
contoh : 60 Celcius -> 140 Fahrenheit
*/
let celcius = 60;
let fahrenheit = (celcius * 9/5) + 32;
console.log ("60 Celcius sama dengan " + fahrenheit + " Fahrenheit");

/* 
2. Tuliskan kode untuk memeriksa apakah angkanya ganjil atau genap
contoh : 25 -> angka ganjil, 2 -> angka genap
*/
let num = 25
if ( num % 2 == 0 ) {
    console.log("angka genap")
} else if ( num % 2 == 1 ) {
    console.log("angka ganjil")
}

/* 
3. Tulis kode untuk memeriksa apakah angka tersebut blangan prima atau bukan
contoh : 7 -> 7 adalah bilangan prima
contoh : 6 -> 6 bukan bilangan prima
*/
// let num2 = 7
// if ( num %)
let num2 = 7
let isPrime = true
// 123 / 2 = 61 * 2 * 122 --> 1
// 1543 / 2 = 771 * 2 = 1542 --> 1
for ( let i = 2; i < num2 ; i++) {
    if(num2 % i == 0){
        console.log(num2, " bisa di bagi bilangan = ", i)
        isPrime = false
        break;
    }
}
if(isPrime) {
    console.log(num2, "Bilangan Prima")
} else {
    console.log(num2, "Bukan Bilangan Prima")
}

/* 
4. Tulis kode untuk mencari jumlah angka 1 hingga N
contoh : 5 -> 1+2+3+4+5=15
contoh : 3 -> 1+2+3 = 7
*/
let res3 = 0
for ( let g = 1; g <=5 ; g++) {
    res3 = res3 + g
    console.log(res3)
}

/* 
5. tulis kode untuk mencari faktorial dari sebuah angka
contoh : 4! -> 4x3x2x1 = 24
contoh : 6! -> 6x4x3x2x1 = 720
*/
let res1 = 1
for ( let e = 1; e <=6 ; e++) {
    res1 = res1 * e
    console.log(res1)
}

/* 
6. Tulis kode untuk mencetak N angka fibonacci pertama
contoh : 15 -> 610
*/
first_num = 1 // angka pertama 1
second_num = 1 // angka kedua 1

for (u = 3 ; u <=15 ; u++){
    let temp = first_num
    first_num = second_num
    second_num = temp + second_num
    console.log("fib ke = > ",u," result fib --> ", second_num)
}
