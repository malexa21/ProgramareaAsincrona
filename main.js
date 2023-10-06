const cumparaIgredirente = () =>{
    console.log("Cumpar faina.");
    console.log("Cumpar lapte.");
    console.log("Cumpar oua.");
    console.log("Cumpar cacao.");
    console.log("Cumpar praf de copt.");
    console.log("Cumpar esenta de vanilie.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmCumparatIngrediente");
        }, 10000);
    });
};


const facBriose = () =>{
    console.log("Preincalzesc cuptorul.");
    console.log("Sparg ouale.");
    console.log("Iau un castron.");
    console.log("Amestec ingredientele.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmPregatitIngredientele");
        }, 5000);
    });
};

const cautTava = () =>{
    console.log("Cobor in beci.");
    console.log("Aprind lumina la beciul mic.");
    console.log("Caut tava.");
    console.log("Iau tava.");
    console.log("Aduc tava in bucatarie")

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmAdusTava");
        }, 5000);
    });
};

const pregatescTava = () =>{
    console.log("Pregatesc tava cu hartiute de briose");
    console.log("Torn aluatul.");
    console.log("Pun tava in cuptor.");
    console.log("Aprind cuptorul");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmPusPrioseleLaFacut");
        }, 5000);
    });
};

const facTeme = () =>{
    console.log("Scot caietul.");
    console.log("Scot penarul.");
    console.log("Deschid caietul.");
    console.log("Deschid penarul.");
    console.log("Scriu tema")

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmTerminatTemele");
        }, 7000);
    });
};

const scotBrioseleDinCuptor = () =>{
    console.log("Iau o carpa.");
    console.log("Deschid cuptorul.");
    console.log("Scot tava de prajituri.");
    console.log("Las briosele la racit.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("AmLasatBrioseleLaRacit");
        }, 5000);
    });
};

const decorezBriosele = () =>{
    console.log("Iau briosele reci.");
    console.log("Pregatesc decoratiunile de briose.");
    console.log("Pun crema pe briose.");
    console.log("Decorez briosele.");

    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve("PunBrioseleInFrigider");
        }, 15000);
    });
};


cumparaIgredirente().then((rezultatCumparaturi) => 
facBriose(rezultatCumparaturi).then( ()=> 
cautTava(rezultatCumparaturi).then(() =>
pregatescTava(rezultatCumparaturi).then(()=>
facTeme(rezultatCumparaturi).then(()=>
scotBrioseleDinCuptor(rezultatCumparaturi).then(() =>
decorezBriosele(rezultatCumparaturi).then((rezultatCumparaturi)=>
    console.log("Sunt gata briosele."))
)))
)))
