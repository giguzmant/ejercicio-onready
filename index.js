const stockData = [{
    marca: "Peugeot",
    modelo: "206",
    puertas: "4",
    precio: 200000.00
  },
  {
    marca: "Honda",
    modelo: "Titan",
    cilindrada: "125c",
    precio: 60000.00
  },
  {
    marca: "Peugeot",
    modelo: "208",
    puertas: "5",
    precio: 250000.00
  },
  {
    marca: "Yamaha",
    modelo: "YBR",
    cilindrada: "160c",
    precio: 80500.50
  }
]

const printInfo = (data) => {
  for (let item of data) {
    if (item.puertas) {
      console.log(`Marca: ${item.marca} // Modelo: ${item.modelo} // Puertas: ${item.puertas} // Precio: $${item.precio}`)
    } else {
      console.log(`Marca: ${item.marca} // Modelo: ${item.modelo} // Cilindrada: ${item.cilindrada} // Precio: $${item.precio}`)
    }
  }
}

const masCaro = (data) => {
  let check = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].precio > check.precio) {
      check = data[i]
    }
  }
  console.log(`Vehículo más caro: ${check.marca} ${check.modelo}`)
}

const masBarato = (data) => {
  let check = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].precio < check.precio) {
      check = data[i]
    }
  }
  console.log(`Vehículo más barato: ${check.marca} ${check.modelo}`)
}

const letraY = (data) => {
  for (let item of data) {
    if (item.marca.includes("Y")) {
      console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${item.marca} ${item.modelo} $${item.precio}`)
    }
  }
}

const menorMayor = (data) => {
  const mayor = data.sort((ant, post) => parseFloat(post.precio) - parseFloat(ant.precio));
  console.log('Vehículos ordenados por precio de mayor a menor: ')
  for (let item of mayor) {
    console.log(`${item.marca} ${item.modelo}`);
  }
}

printInfo(stockData);
masCaro(stockData);
masBarato(stockData);
letraY(stockData);
menorMayor(stockData);
