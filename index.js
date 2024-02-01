console.log('test'); console.log('123');

let kotakSepatu;
kotakSepatu = "Nike";
let kotakAngka = 1;
let kotakBoolean = true
let kotakTas = "Gucci";

console.log(kotakSepatu);
console.log(kotakTas);
console.log(kotakAngka);
console.log(kotakBoolean);

// non-primitive data type
//objects
const identitas = {
    nama: "Ester",
    gender: "Perempuan",
    hobi: "sayang dhika",
    mantan: 20
};
console.log(typeof identitas);
console.log(identitas)

//array variable
const angka = [1,2,3,4,5];
console.log(typeof angka);

//immutable = anggapan nya udah bikin kotak baru cuma value nya beda. di dalam memori address nya udah berbeda
let name = "budi";
name = "doremi";
console.log(name);

let age = 21;
console.log(age)
let newAge = age;
console.log(newAge);
age = 22;
console.log(age);
console.log(newAge);
// jika value nya dirubah maka tetap ngikut yg pertama untuk newAge

//mutable
const person = {
    nama:"budi",
    umur: 24
}
console.log(person);
person.nama = "dhika"; //value nya berubah
console.log(person);

const car = {
    brand:"audi",
    tire: 4
}
// jika value diubah maka value yg lainnya berubah juga
const newCar = car;
newCar.tire = 6;
console.log(car);
console.log(newCar);

// string built-in method
const kata = "hello";
console.log(kata.slice(1,4));
console.log(kata.toUpperCase());
console.log(kata.toLowerCase());
console.log(kata.replace(/l/,1));

let dateNow = new Date();
console.log(dateNow);
const dateNowFormat = dateNow.toLocaleString("in-ID",{
    day: "2-digit",
    month: "2-digit",
    year: "numeric"

});
console.log(dateNowFormat);

let customDate = new Date ("2024-01-01");
console.log(customDate);
let add0Day = new Date(0);
console.log(add0Day);
let add1Day = new Date(24*3600*1000); //ini rumus 1 hari
// date itu kalo ada penjumlahan atau pengurangan maka hasil nya adalah mili second. maka harus dibagi dengan rumus di atas
console.log(add1Day);

let newDate = "2023-02-01";
let newDate1 = new Date("2023-01-01");
console.log(typeof newDate);
console.log(typeof newDate1);

console.log(newDate1.getFullYear());
console.log(newDate1.getDate());
//dalam javascript jika ingin mendapatkan bulan yang diinginkan
//harus ditambah 1 karena bulan dalam javascript dimulai dari 0
console.log(newDate1.getMonth()+1);


// let value = "1.2";
// let newValue = Number(value) + 1;
// console.log(newValue);
// console.log(value);

// value = 2;
// console.log(value);

const nums = 1 + 1 + (1*1) - 1;
console.log(nums);

//5 adalah operand pertama
//2 adalah operand kedua
//jika ada 2 operand maka disebut binary
const operand = 5*2;
console.log(operand);

//jika hanya ada 1 operand maka disebut unary
let x=1;
 x= -x;
 console.log(x);

 let y=2;
 y= ++y; //ditambah 1
 console.log(y);

 let z=3;
 z= --z; //dikurang 1
 console.log(z);

 //penambahan 2 string
 let kalimat = "hello";
 let kalimat2 = "ester";
//  const kalimatLengkap = kalimat + kalimat2;
const kalimatLengkap = `${kalimat} ${kalimat2}`
 console.log(kalimatLengkap);

 let n = 2;
 n += 5; //n = 2 + 5 / n = n + 5
 n *= 2; //n = 2 * 2 / n = n * 5
 console.log(n);

 //prefix form
 //ini ditambah dulu jadi pas ditampilin langsung berubah value nya
 let d = 7;
 console.log(++d); //ini contoh prefix

//postfix form
//ini nambahin dulu, baru nanti kalo diview lagi baru value yg baru muncul
//ini nampilin nya belakangan
let c = 8;
console.log(c++);
console.log(c);

let num1 = 2;
let num2 = 2;
let num3 = 4;
let string1 = "2";
//pengecekan value untuk angka bisa juga
//pengecekan value tanpa mempedulikan tipe data
console.log(num1 == num2);
console.log(num1 != num2); //pengecekan not equal

//pengecekan value dengan memperhatikan tipe data
console.log(num1 === string1);
console.log(num1 !== string1);

//comparison
console.log(num1 > num3);
console.log(num1 < num3);

console.log(num1 >= num2);
console.log(num1 <= num3);



//find area rectangle
const lengthRectangle = 5;
const widthRectangle = 3;
const areaRectangle = lengthRectangle * widthRectangle;
console.log(areaRectangle);

//find preimeter of rectangle
console.log(areaRectangle * 2);

let day1 = 400;

// convert hari ke tahun bulan dan sisa hari
const years = day1 / 365;
const months = (day1 % 365) / 30;
const days = (day1 % 365) % 30;

console.log(`${years.toFixed()} tahun, ${months.toFixed()} bulan, ${days.toFixed()} hari`);

