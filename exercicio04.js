let estudantes = [ {
    nome: 'DR.Direspect',
    nota1:8,
    nota2:9

},

{
    nome: 'NoobMaster69',
    nota1:5,
    nota2:9

},

{
    nome: 'Juliana',
    nota1:3,
    nota2:5

},

{
    nome: 'Ingrid',
    nota1:4.5,
    nota2:7,

},

{
    nome:'Naruto',
    nota1:2,
    nota2:4,
},

{
    nome:'Kakashi',
    nota1:9.9,
    nota2:9.8,
}
]



const media = (n1,n2,nomeDoA) => {
    const media = ((n1 + n2) / 2).toFixed(2)
    
    if(media >= 7){
        return(`a media do aluno (a) ${nomeDoA} é : ${media}  
        Parabéns,${nomeDoA}! você foi aprovado(a) no concurso!`)
    }else {
        return(`a media do aluno (a) ${nomeDoA} é : ${media}
        Não foi dessa vez,${nomeDoA}! Tente novamente!`)
    }
}

estudantes.map((alunoo) =>{
    alert(media(alunoo.nota1, alunoo.nota2, alunoo.nome)); });


