
function perimeter(side) {
    return (side * 4);
}

function promisePerimeter(side) {
    return new Promise(function (resolve, reject) {
        resolve(side * 4);
    });
};

function area(side) {
    return side * side;
}

function promiseArea(side) {
    return new Promise(function (resolve, reject) {
        if (typeof side !== 'number') {
            const err = new Error("You must provide the length of the side as a number.");
            reject(err);
            return;
        }
        const area = side * side;
        resolve(area);
    })
}

async function asyncArea(side) {
    return side * side;
}

let mySquare = {
    side: 3
};

try {
    mySquare.area = asyncArea(mySquare.side);
}
catch (err) {
    console.log("We somehow got an error: ", err);
}
console.log(mySquare);



promiseArea(4)
    .then((area) => {
        console.log('It was completely pointless to wait for this, but the area is: ', area);
    })

async function makeSquare(side) {
    const square = {
        side: side
    };
    try {
        square.perimeter = await promisePerimeter(side);
    }
    catch (err) {
        console.error("Problem getting perimeter: ", err);
    }

    try {
        square.area = await promiseArea(side);
    }
    catch (err) {
        console.error("problem getting the area: ", err);
    }
    return square;
}

const square = {
    side: 13
};
promisePerimeter(square.side)
    .then((per) => {
        square.perimeter = per;
        return promiseArea(square.side);
    })
    .then((area) => {
        square.area = area;
    })
    .catch((err) => {
        console.log("There was a problem somewhere in the promise chain: ", err);
    })


makeSquare(13)
    .then((newSquare) => {
        console.log('newSquare: ', newSquare);
    })