Array.prototype.uniq = function(){
  const results = [];
  for( let i = 0; i < this.length; i++){
    if (results.includes(this[i])){
      continue;
    }else{
      results.push(this[i]);
    }
  }
  return results;
};

Array.prototype.twosum = function(){
  const results = [];
  for(let i = 0; i < this.length-1; i++){
    for(let j = i + 1; j < this.length; j++){
      if( this[i] + this[j] === 0){
        results.push([i,j]);
      }
    }
  }
  return results;
};

// console.log([1,2,3,3,4,5,5,5,-5].twosum());
Array.prototype.transpose = function(){
  const results = [];
  for(let i = 0; i < this.length; i++){
    let nestedResult = [];
    // let arr = this[i];
    for(let j = 0; j < this.length; j++){
      nestedResult.push(this[j][i]);
    }
    results.push(nestedResult);
  }
  return results;
};

console.log([[1,2],[3,4]].transpose());
