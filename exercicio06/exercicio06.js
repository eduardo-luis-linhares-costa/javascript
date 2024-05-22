const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }};


    const infoEmpresa = () => companies.map( empresa => `O nome desta empresa é ${empresa.name} e foi fundada em ${empresa.start}`)
    

    console.log(infoEmpresa());


    const empresasAno = () => companies.filter(empresa => empresa.start > 1987 );

    console.log(empresasAno());


const soma = () => ages.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(soma());




const { name, category } = companies[0];

console.log(name, category );

const {address: {street}} = person;

console.log(street);


const empresasbetween = () => companies.map(companie => companie.start > 1996 && companie.start < 2004 ? true : false);

console.log(empresasbetween())