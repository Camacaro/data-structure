
class HasTable {

  constructor(size) {
    this.data = new Array(size);
  }

  hasMethod(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ( hash + key.charCodeAt(i) * i ) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hasMethod(key);
    
    if(!this.data[address]) {
      this.data[address] = []
    } 

    this.data[address].push([key, value])

    return this.data

  }

  get(key) {
    const address = this.hasMethod(key);
    const currentBucket = this.data[address];
    
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {

        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
        
      }
    }

    return undefined;
  }

  getKeys() {
    const keys = [];
    // console.log('currentBucket')
    for (let index = 0; index < this.data.length; index++) {

      const currentBucket = this.data[index];

      // console.log(currentBucket)

      if( currentBucket ) {

        for (let i = 0; i < currentBucket.length; i++) {

          keys.push( currentBucket[i][0] )          
        }
      }
    }

    return keys
  }

  delete(key) {
    const address = this.hasMethod(key);
    const currentBucket = this.data[address];
    let obj = [];
    
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {

        if(currentBucket[i][0] === key) {
          obj = currentBucket[i]
          this.data[address] = undefined
        }
      }
    }

    return obj;
  }
}

const myHasTable = new HasTable(50)

myHasTable.set('Diego', 1990);
myHasTable.set('Mariana', 192);
myHasTable.set('Jesus', 1996);
const keys = myHasTable.getKeys()
console.log('keys', keys)

myHasTable.delete('Jesus');

const keys2 = myHasTable.getKeys()
console.log('keys2', keys2)
