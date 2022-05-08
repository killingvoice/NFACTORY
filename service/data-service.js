var fs = require('fs');
var m = {}
const propertyJsonLocation = "./public/data/properties.json";

m.dataRes = () => {
    var data = JSON.parse(fs.readFileSync(propertyJsonLocation));
    console.log(data);
};

m.addProperty = (id) => {
    var data = JSON.parse(fs.readFileSync(propertyJsonLocation));
    const tmpData = {
        "id" : id,
        "count" : 0,
        "items" : []
    }
    data.push(tmpData);
    fs.writeFile(propertyJsonLocation, JSON.stringify(data), 'utf8', function(error){ console.log('write end') });
};

module.exports = m;