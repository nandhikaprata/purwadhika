let age = 24;
let gender = "perempuan";
let status = "baru lulus";

if (age >= 17 && age <= 20){//penggunaan kondisi 'dan' (dua-dua nya harus terpenuhi)
    //block of code 'if'
    console.log("bisa membuat KTP");
    console.log("masih bisa buat KTP");
    //sebanyak apapun block of code di dalam if, akan tetap dijalankan
}
else if(age > 20 || age == 20){//penggunaan kondisi 'atau' (salah satu harus terpenuhi)
    console.log("udah punya KTP"); 
    //jika udah masuk ke kondisi yg sebelumnya maka kondisi selanjutnya tidak akan dibaca.
} 
else {  //else harus disertakan dengan if
    console.log("masih di bawah umur gan");
}
//jika conditional if sudah terpenuhi di salah satu kondisi nya maka dia langsung exit
console.log("if sudah selesai");

if(age >= 17 && gender == "pria" && status == "baru lulus"){
    //jika yg dibandingkan adalah 'string' maka yg dibandingkan adalah length char nya atau string nya tulisannya sama atau tidak
    console.log("bisa berkerja");
}
else{
    console.log("anda belom bisa berkerja");
}

if (age > 14){
    if (gender =="pria"){
        console.log("kamu laki laki");
    }
    else if(gender == "perempuan"){
        console.log("kamu perempuan");
    }
}

let buah = "semangka";
//switch case dipake kalo comparison nya udah pasti
switch(buah){
    case "jeruk":
        console.log("harga jeruk 5rb");
        break; //agar tidak melakukan pengecekan ke conditional selanjutnya
    case "mangga":
        console.log("harga mangga 10rb");
        break;
    case "semangka":
    case "apel":
        console.log("harga apel dan semangka 2rb");
        break;
}
//contoh switch case ga pake break
switch(buah){
    case "jeruk":
        console.log("harga jeruk 5rb");
         //switch case akan melakukan pengecekan terus selama ada case nya
    case "mangga":
        console.log("harga mangga 10rb");
        
}

//boolean (true or false)
let inputUser = "";

if(inputUser){
    console.log("input sudah dimasukkan");
} else{
    console.log("input sudah belum dimasukkan");
}

//latihan menyatakan apakah sebuah angka itu genap atau ganjil
const numberToCheck = 10;
let isEven;

if(numberToCheck % 2 ===0){
    isEven = `${numberToCheck} is a even number`;
} else{
    isEven = `${numberToCheck} is not a even number`;
}
console.log(isEven);

//looping
//for loop
for(let i=0; i <= 10; i++){ //(value awal; kondisi; iteration (value nya mau ditambah atau dikurang))
    console.log(i);
}

for(let a=10; a > 0; a--){
    console.log(a);
}

//looping dengan kondisi if else
for(let i=1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
    else{
        console.log(i);
    }
}

//while loop
//selama kondisi nya true maka akan terus melakukan loop
//pake while hati hati dengan infinty loop
//coba jalanin di link yg dikirimin kak bryan biar lebih jelas
let i = 0;
while(i<10){//ini kondisi
    if(i == 6){
        break; 
    }
    console.log(i);
    //karena pake break maka cuma nambah sampe  5, karena kalo pake break itu langsung memberhentikan code di while nya jadi langsung baca code di luar while
    i++;
}

let c = 0;
let bools = true;
while(bools){//ini kondisi
    if(c == 6){
        bools = false;
    }
    console.log(c);
    c++;
}

//Do while
c = 0;
bools = true;
do{
    if (c == 6) {
        break; 
    }
    console.log(c);
    c++;
}while(bools);

console.log("next line");

for(let i=0; i <= 10; i++){
    if(i == 5 || i == 7 || i == 8){
        continue; //penggunaan continue itu untuk melewati kondisi (skip) yg telah dijabarkan. makanya angka 5, 7, 8 ga muncul
    }
    console.log(i);
}

let angkas = 3.453453;
console.log(angkas.toFixed(3));
//exercise
//buat pseudo code dan code nya

