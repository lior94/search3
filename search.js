search = function(){
const testFolder = 'C:\\MyFolder/';
const fs = require('fs');
var flag=0;
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(file.endsWith('.'+process.argv[2])){
        let data=fs.readFileSync(file, {encoding: 'utf8'});
        if(data.search(process.argv[3])!=-1){
        console.log("C:\\MyFolder\\"+file);
        flag=1;
        }
    }
})
if(!flag){
    console.log("no file was found");
};

})
}

search();
