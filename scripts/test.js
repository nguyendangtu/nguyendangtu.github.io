

describe('max', function() {
    it('Expected output of max(20,10) is 20  ', function() {
        assert.equal(20,max(20, 10));
      });
});

describe('maxOfThree', function() {
    it('Expected output of maxOfThree(5,4,44) is 44  ', function() {
        assert.equal(44, maxOfThree(5, 4, 44));
      });
      it('Expected output of maxOfThree(55,4,44) is 55  ', function() {
        assert.equal(55, maxOfThree(55, 4, 44));
      });
});

describe('isVowel', function() {
  it('Expected output of isVowel(t) is true   ', function() {
      assert.equal(false,isVowel(null));
    });
    it('Expected output of isVowel(null) is false', function() {
      assert.equal(false,isVowel(null));
    });
    it('Expected output of isVowel(aaa) is false  ', function() {
      assert.equal(false,isVowel(null));
    });
});


describe('sum', function() {
  it('Expected output of sum([1,2,3,4]) is 10 ', function() {
      assert.equal(10, sum([1,2,3,4]));
    });
    it('Expected output of sum(null) is null  ', function() {
      assert.equal(null, sum(null));
    });
});

describe('multiply', function() {
  it('Expected output of multiply([1,2,3,4]) is 24  ', function() {
      assert.equal(24, multiply([1,2,3,4]));
    });
    it('Expected output of multiply(null) is null  ', function() {
      assert.equal(null, multiply(null));
    });
});


describe('reverse', function() {
  it('Expected output of reverse(jag testar) is ratset gaj  ', function() {
      assert.equal("ratset gaj", reverse("jag testar"));
    });
    it('Expected output of reverse(j) is j ', function() {
      assert.equal("j", reverse("j"));
    });
    it('Expected output of reverse(null) is null  ', function() {
      assert.equal(null, reverse(null));
    });
});

describe('findLongestWord', function() {
  it('Expected output of findLongestWord([John, David, Tom]) is 5  ', function() {
      assert.equal(5, findLongestWord(["John", "David", "Tom"]));
    });
    it('Expected output of findLongestWord([]) is null  ', function() {
      assert.equal(null, findLongestWord([]));
    });
});

describe('filterLongWords', function() {
  it('Expected output of filterLongWords([John, David, Tom], 4) is David  ', function() {
      assert.equal("David",filterLongWords(["John", "David", "Tom"],4)[0]);
    });
    it('Expected output of filterLongWords([John, David, Tom], 5) is undefined  ', function() {
      assert.equal(undefined,filterLongWords(["John", "David", "Tom"],5)[0]);
    });
});













