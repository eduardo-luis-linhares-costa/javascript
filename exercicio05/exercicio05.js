var estudantes = [{ id: 1, nome: 'João', idade: 20 },{
    id: 2, nome: 'Maria', idade: 22 },{ id: 3, nome:
    'Pedro', idade: 18 },{ id: 4, nome: 'Ana', idade: 21 }];

    

const studentId = (id = 4) => {
return estudantes.find( estudante => estudante.id === id )
}

console.log(studentId(2));




const studentName = () => estudantes.map( student => `Nome do estudante: ${student.nome}`);


console.log(studentName());



const studentsAge = (age = 18) => {
return estudantes.filter( estudante => estudante.idade > age)
}

console.log(studentsAge(20));

