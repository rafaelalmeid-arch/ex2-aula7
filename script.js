let Jogadores = [
    {nome: "Zé da manga",
     status: "ativo",
    },
    {
     nome: "Pedro",
     status: "inativo",
    },
    {
     nome: "Larissa",
     status: "inativo",
    },
    {
        nome: "Dante",
        status: "ativo",
    },
] 

console.table("--- Jogadores Ativos ---");

for (let i = 0; i < Jogadores.length; i++) {
    if (Jogadores[i].status === "ativo") {
        console.table(Jogadores[i].nome);
    }
}
