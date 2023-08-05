const companies = [
    {name: "Honda", category:" Vehicle", start: 1981, end: 2003},
    {name: "Hyundia", category:"Vehicle", start: 1992, end: 2008},
    {name: "Lamborghni", category:"Vehicle", start: 1999, end: 2007},
    {name: "Iphone", category:" Apple", start: 1989, end: 2011},
    {name: "Bitcoin", category:"Technology", start: 2009, end: 2014},
    {name: "Benz", category:"Vehicle", start: 1987, end: 2011},
    {name: "Ferrari", category:"Auto", start: 1986, end: 2015},
    {name: "Macbook", category:"Computer", start: 2017, end: 2016},
    {name: "Samsung", category:"Mobile", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44,61, 13, 15, 45, 25, 64, 32];


//ForEach

/* for(let i = 0; i<companies.length; i++){
    console.log(companies[i])
}
*/

/* companies.forEach((company)=>{
    console.log(company.name)
});

*/

// filter

/* let canDrink = [];

for(let i = 0; i< ages.length; i++){
    if(ages[i] >= 18){
        canDrink.push(ages[i])
    }
    
}
*/

/* let canDrink = ages.filter((age )=> age>= 21 
    
);
console.log(canDrink)
*/

/* const Vehicle = companies.filter(company=>company.category === 'Vehicle');

console.log(Vehicle);
*/
// get 80s companies

/* const  eighties = companies.filter(company => (company.start >= 1980 && company.start <= 1989 ) )
console.log(eighties)
*/

/* 

const tenyears = companies.filter(company => (company.end - company.start >= 10))

console.log(tenyears);

*/

//map

/*
const ListName = companies.map((name)=> `${name.name}: from ${name.start} - ${name.end}`);
console.log(ListName);
*/

/*const squareages = ages

.map((age)=> Math.sqrt(age))
.map((age)=> age ** 2)

console.log(squareages);
*/


/* const sortcomp = companies.sort((a, b)=> (b.name > a.name) ? 1 : -1);
        

console.log(sortcomp);
*/
/*
const sortages = ages.sort((a, b)=> (a-b));
console.log(sortages);
*/

/* let sum = 0;
for(let i=0; i<ages.length; i++ ){
    sum += ages[i]
    
}
console.log(sum);
*/

/*
const addages = ages.reduce((total, age)=> total + age, 0)
console.log(addages);
*/

//comapany

const compage = companies.reduce((total, company)=> total + (company.end- company.start), 0);
console.log(compage);