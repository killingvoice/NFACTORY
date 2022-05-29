var fs = require('fs');
var fsExtra = require('fs-extra');
var m = {}
const propertyJsonLocation = "./public/data/properties.json";
const nftJsonLocation = "./public/data/nft.json";


m.getData = () => {
    var data = JSON.parse(fs.readFileSync(propertyJsonLocation));
    return data;
};
m.getNft = () => {
    var data = JSON.parse(fs.readFileSync(nftJsonLocation));
    return data;
};

m.addProperty = (id) => {
    var data = JSON.parse(fs.readFileSync(propertyJsonLocation));
    const tmpData = {
        "id" : id,
        "items" : []
    }
    for(var i=0; i<data.length; i++)
        if(id == data[i].id) {
            console.log("#1 이미 있는 id 입니다.");
            return;
        }
    data.push(tmpData);
    fs.writeFile(propertyJsonLocation, JSON.stringify(data), 'utf8', function(error){ console.log('write end') });
};

m.addItem = (property, id, rarity, image) => {
    var data = JSON.parse(fs.readFileSync(propertyJsonLocation));
    var tmpData = {
        "id" : id,
        "rarity" : rarity,
        "image" : image
    }
    for(var i=0; i<data.length; i++)
        if(data[i].id==property) {
            for(var j=0; j<data[i].items.length; j++) {
                if(id == data[i].items[j].id) {
                    console.log("#2 이미 있는 id 입니다.");
                    return;
                }
            }
            data[i].items.push(tmpData);
            break;
        }
    fs.writeFile(propertyJsonLocation, JSON.stringify(data), 'utf8', function(error){ });
};

m.makeImage = () => {
    const property = JSON.parse(fs.readFileSync(propertyJsonLocation));
    var rarityArray = new Array(property.length);
    for(var i=0; i<rarityArray.length; i++) {
        rarityArray[i] = new Array();
        for(var j=0; j<property[i].items.length; j++)
            for(var k=0; k<property[i].items[j].rarity; k++)
                rarityArray[i].push(j);
    }
    var nfts = new Array(10000);

    for(var i=0; i<nfts.length; i++) {
        var tmp = {};

        for(var j=0; j<property.length; j++) {
            //tmp[property[j].id] = property[j].items[rarityArray[j][Math.floor(Math.random() * rarityArray[j].length)]].id;
            tmp[property[j].id] = rarityArray[j][Math.floor(Math.random() * rarityArray[j].length)];
        }
        nfts[i] = tmp;
    }

    fs.writeFile(nftJsonLocation, JSON.stringify(nfts), 'utf8', function(error){ console.log('write end') });
}

m.init = () => {
    fsExtra.emptyDirSync("./public/image/");
    fs.writeFile(nftJsonLocation, "[]", 'utf8', function(error){ console.log('write end') });
    fs.writeFile(propertyJsonLocation, "[]", 'utf8', function(error){ });
}

module.exports = m;