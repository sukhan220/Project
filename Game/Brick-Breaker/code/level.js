import Stone from "./abstract.js"

export function makeLevel(game,level){
    
    // levelOne is two dimension array
    // four row 0,1,2,3
    // and 10 column 0,1,2,3,4,5,6,7,8,9
    let stones =[];

    for( let rowIndex=0; rowIndex<4; rowIndex++){   
        for( let columnIndex=0; columnIndex<10; columnIndex++){
            if( level[rowIndex][columnIndex] ){
                let position= {
                    // every stone width is 60px
                    // every level we draw the stone after 60 px
                    // so x axis is 60*x where x = column
                    x: 60*columnIndex,
                    // every stone height is  20px
                    // we draw the every level after 20px
                    // so y axis is 20*y where y = row
                    y: 20*rowIndex+20// extra 20 for down the wall from x axis
                }
                // make stone pass game object with position
                // push it stones array
                stones.push(new Stone(game,position));
            };
        }
    }

    return stones;

}
export function removeElement(array, index){
    let newArray = [...array];
    newArray.splice(index,1)
    return newArray;
}
//we can see here we have four arrays
//into levels array
//four array is four row
// every row has ten balls
// one that will become a ball abstract
// a zero  is just going to be an empty space in every row
// make a two dimension array
//0  = false and 1= true
export const levelOne = [
    [0,0,0,0,0,0,0,0,0,1],//row1
    [0,0,0,0,1,0,0,0,0,0],//row2
    [0,0,0,0,0,0,0,0,0,0],//row3
    [0,0,0,0,0,0,0,0,0,0] // row4
]

export const leveltwo = [
    [0,1,0,1,0,1,0,1,0,1],//row1
    [1,1,1,1,1,1,0,1,1,1],//row2
    [1,1,1,1,1,1,0,1,1,1],//row3
    [1,1,1,1,1,1,0,1,1,1] // row4
]

