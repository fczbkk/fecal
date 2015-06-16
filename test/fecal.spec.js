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

  describe('Array.poop', function () {

    it('should be defined', function () {
      expect(Array.poop).toBeDefined()
    });

    it('should do exactly the same as `Array.pop()`', function () {
      var test_array = ['aaa', 'bbb'];
      var result = Array.poop(test_array);
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

  describe('Array.shit', function () {

    it('should be defined', function () {
      expect(Array.shit).toBeDefined()
    });

    it('should do exactly the same as `Array.shift()`', function () {
      var test_array = ['aaa', 'bbb'];
      var result = Array.shit(test_array);
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

  describe('JSON.arse', function () {

    it('should be defined', function () {
      expect(JSON.arse).toBeDefined()
    });

    it('should do exactly the same as `JSON.parse`', function () {
      var test_string = '{"aaa": true}';
      var result = JSON.arse(test_string);
      expect(Object.keys(result)).toEqual(['aaa']);
      expect(result.aaa).toEqual(true);
    });

  });

});


alert('test');
