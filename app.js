// {1-masala
//     function removeChar(str){
//     return str.slice(1,-1)
//     };
    

    
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// }
    

// {2-masala

    // function accum(s) {
    //     let  result = '',
    //     array = s.toLowerCase().split('')
    //     for(let i = 0 ; i < array.length; i++){
    //   result += array[i].toUpperCase()
    //     for (let j = i ; j >0; j--){
    //       result+= array[i] 
    //     }
    //     if (i< array.length -1){
    //   result += "-"
    //     }
    //     }
    //     return result
    //   };
    
// }


// { 3-masala
// function countSheeps(sheep) {
// return sheep.filter(qoy=>qoy).length

// }
// [undefined,null,false,true]

// }

// {4-masala

    {
        function accum(s) {
            let  result = '',
            array = s.toLowerCase().split('')
            for(let i = 0 ; i < array.length; i++){
          result += array[i].toUpperCase()
            for (let j = i ; j >0; j--){
              result+= array[i] 
            }
            if (i< array.length -1){
             result += '-'
            }
            }
            return result
          }
          accum("abcd") //-> "A-Bb-Ccc-Dddd"
accum("RqaEzty")// -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") //-> "C-Ww-Aaa-Tttt"
    }
    

// }


// {5-masala
// {
// function countLanguages(list) {
//     let result = {}
//     for(let i = 0; i < list.length; i++){
//       if(result[list[i].language] === undefined ){
//         result[list[i].language] = 1
//       }else{
//         result[list[i].language]++
//     }    
//       }
//         return result
//     }
// }
// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
// { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },


// }



// {6-masala

// {
//     function removeChar(str){
//         return str.slice(1,-1)
//         };
        
// }
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');

// }





// {
//     function findSmallestInt(args){
//         args.sort((a,b)=> a-b)
//         return args[0]
//       }

// }

// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
 

