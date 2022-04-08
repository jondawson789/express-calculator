const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");

describe("mean function", function() {
    test("return mean", function() {
        let mean = findMean([1,2,3,4,5,6]); 
        expect(mean).toEqual(3.5); 
    })

    test("return mean of empty array", function() {
        let mean = findMean([]); 
        expect(mean).toEqual(0); 
    })
})

describe("Median function", function() {
    test("return median of even array", function() {
        let median = findMedian([1,2,3,4,5,6]); 
        expect(median).toEqual(3.5); 
    })

    test("return median of odd array", function() {
        let median = findMedian([1,2,3,4,5]); 
        expect(median).toEqual(3); 
    })
})

describe("Mode function", function() {
    test("return mode", function() {
        let mode = findMedian([1,2,3,4,5,6,1,1,1,1,1,1,1]); 
        expect(mode).toEqual(1); 
    })

})