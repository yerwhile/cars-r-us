const database = {
    orderBuilder: {},
    paintColors: [{
        id: 1,
        name: "Silver",
        price: 500
    }, {
        id: 2,
        name: "Midnight Blue",
        price: 600
    }, {
        id: 3,
        name: "Firebrick Red",
        price: 700
    }, {
        id: 4,
        name: "Spring Green",
        price: 550
    }],
    interiors: [{
        id: 1,
        name: "Beige Fabric",
        price: 1000
    }, {
        id: 2,
        name: "Charcoal Fabric",
        price: 1200
    }, {
        id: 3,
        name: "White Leather",
        price: 2200
    }, {
        id: 4,
        name: "Black Leather",
        price: 2000
    }],
    technologies: [{
        id: 1,
        name: "Basic Package",
        price: 0
    }, {
        id: 2,
        name: "Navigation Package",
        price: 500
    }, {
        id: 3,
        name: "Visibility Package",
        price: 1200
    }, {
        id: 4,
        name: "Ultra Package",
        price: 1500
    }],
    wheels: [{
        id: 1,
        name: "17-inch Pair Radial",
        price: 500
    }, {
        id: 2,
        name: "17-inch Pair Radial Black",
        price: 600
    }, {
        id: 3,
        name: "17-inch Pair Spoke Silver",
        price: 700
    }, {
        id: 4,
        name: "17-inch Pair Spoke Black",
        price: 720
    }],
    customOrders: [{
        id: 0,
        paintColorId: 1,
        interiorId: 1,
        technologyId: 1,
        wheelId: 1
    }]
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}));
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}));
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}));
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}));
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}));
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id;
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id;
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id;
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id;
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // const lastIndex = database.customOrders.length
    // newOrder.id = lastIndex + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// //Object builder functions
// const objBuilder = () => {
//   let obj = {};
//   obj.id = database.coloniesMinerals.length + 1;
//   obj.colonyId = randomIntBetween(1, 3);
//   obj.mineralId = randomIntBetween(1, 6);
//   obj.mineralAmount = 1;
//   return obj;
// };

// const randomIntBetween = (num1, num2) => {
//   return Math.floor(Math.random() * num2) + num1;
// };

// for (let i = 0; i < 9; i++) {
//   database.coloniesMinerals.push(objBuilder());
// }