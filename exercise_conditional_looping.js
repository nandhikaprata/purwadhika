let cel=60;
let far;

far = (9/5) * cel + 32;
console.log(`${cel} celcius adalah ${far} farenheit`);


//mencari suatu bilangan prima atau tidak
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Contoh penggunaan
const bilangan = 5; // Ganti dengan bilangan yang ingin diperiksa
if (isPrime(bilangan)) {
    console.log(`${bilangan} adalah bilangan prima.`);
} else {
    console.log(`${bilangan} bukan bilangan prima.`);
}

//kode untuk menemukan jumlah angka dari 1 hingga N
function sumOfNumbers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

// Contoh penggunaan
const N = 10; // Ganti dengan nilai N yang diinginkan
const result = sumOfNumbers(N);
console.log(`Jumlah angka dari 1 hingga ${N} adalah: ${result}`);

//mencari faktorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Contoh penggunaan
const angka = 5; // Ganti dengan nilai yang diinginkan
const hasilFaktorial = factorial(angka);
console.log(`Faktorial dari ${angka} adalah: ${hasilFaktorial}`);
