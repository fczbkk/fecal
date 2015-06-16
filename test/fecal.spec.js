describe('Fecal.js', function () {

  describe('Array.prototype.poop', function () {

    it('should be defined', function () {
      expect(Array.prototype.poop).toBeDefined()
    });

    it('should do exactly the same as `Array.prototype.pop()`', function () {
      var test_array = ['aaa', 'bbb'];
      var result = test_array.poop();
      expect(result).toEqual('bbb');
      expect(test_array).toEqual(['aaa']);
    });

  });

  describe('Array.prototype.shit', function () {

    it('should be defined', function () {
      expect(Array.prototype.shit).toBeDefined()
    });

    it('should do exactly the same as `Array.prototype.shift()`', function () {
      var test_array = ['aaa', 'bbb'];
      var result = test_array.shit();
      expect(result).toEqual('aaa');
      expect(test_array).toEqual(['bbb']);
    });

  });

  describe('Array.prototype.unshit', function () {

    it('should be defined', function () {
      expect(Array.prototype.unshit).toBeDefined()
    });

    it('should do exactly the same as `Array.prototype.unshift()`', function () {
      var test_array = ['bbb'];
      var result = test_array.unshit('aaa');
      expect(result).toEqual(2);
      expect(test_array).toEqual(['aaa', 'bbb']);
    });

  });

});


alert('test');
