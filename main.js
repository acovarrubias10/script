class Main {
    testSueldo() {
        let sueldo = 1600
        if (sueldo <= 1000){
            let nuevoSueldo =(sueldo*1.15)
            console.log("Sueldo " + nuevoSueldo)
        }
        else if (sueldo <= 1200){
            let nuevoSueldo =(sueldo*1.12)
            console.log("Sueldo " + nuevoSueldo)
        }
        else if (sueldo <= 1400){
            let nuevoSueldo =(sueldo*1.1)
            console.log("Sueldo " + nuevoSueldo)
        }
        else if (sueldo <= 1500){
            let nuevoSueldo =(sueldo*1.08)
            console.log("Sueldo " + nuevoSueldo)
        }
        else if (sueldo > 1500){
            let nuevoSueldo =(sueldo*1.05)
            console.log("Sueldo " + nuevoSueldo)
        }
    }
}
let app = new Main () 

app.testSueldo()