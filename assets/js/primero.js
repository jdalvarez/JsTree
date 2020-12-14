
let h=parseInt(prompt("Ingrese la altura del árbol:"));
let f,c;

for(f=1; f<=h; f++){
    for(c=1; c<=h-f; c++){
        console.log(" ");
    }
    for(c=1; c<=2*f-1; c++){
        console.log("*");
    }
    console.log("\n");
}