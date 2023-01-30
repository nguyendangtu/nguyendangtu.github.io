
describe('filter', function() {
    it('Expected output of filter(This house is not nice!) is This house is not nice!', function() {
        assert.equal("This house is not nice!", filter("This house is not nice!"),"not");
      });
      it('Expected output of filter(null, null) is null', function() {
        assert.equal(null, filter(null));
      });
});


describe('bubbleSort', function() {
    it('Expected output of bubbleSort([6,4,0, 3,-2,1]) is [6,4,0, 3,-2,1]', function() {
        let newArray = bubbleSort([6,4,0, 3,-2,1]);
        for(let i =0;i<newArray.length-1;i++){
            assert.equal(true, newArray[i] < newArray[i+1]);
        }
      });
      it('Expected output of bubbleSort(null) is null', function() {
        assert.equal(null, bubbleSort(null));
      });
});


//Exercise 2
function bubbleSort(arr) {
    if (arr == null) return null;

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place 
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}