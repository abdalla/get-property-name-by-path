let obj = {
    name: "Joe",
    car: {
        brand: {
            name: "F150",
            year: 2016
        }
    }
};

let getPropertValueByPath = (obj, path) => {
    let paths = path.split('.');
    
    return paths.reduce((prev, curr) => {
        return prev[curr];
    }, obj);
};

let pValue = getPropertValueByPath(obj, 'car.brand.name');

console.log(pValue);