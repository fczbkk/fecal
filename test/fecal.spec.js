describe('Fecal.js', function () {

  describe('Array', function () {

    describe('.prototype.poop', function () {

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

    describe('.poop', function () {

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

    describe('.prototype.shit', function () {

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

    describe('.shit', function () {

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

    describe('.prototype.unshit', function () {

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

  /*
  NOTE This will not work in PhantomJS.
  The `click()` method is not standard and PhantomJS does not implement it.
  */
  describe('HTMLElement.prototype.lick', function () {

    it('should be defined', function () {
      expect(HTMLElement.prototype.lick).toBeDefined();
    });

    it('should trigger the same event as `HTMLElement.prototype.click()` would', function () {
      document.body.onclick = jasmine.createSpy();
      document.body.lick();
      expect(document.body.onclick).toHaveBeenCalled();
      document.body.onclick = null;
    });

  });

  describe('JSON', function () {

    describe('.arse', function () {

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

    describe('.prase', function () {

      it('should be defined', function () {
        expect(JSON.prase).toBeDefined()
      });

      it('should do exactly the same as `JSON.parse`', function () {
        var test_string = '{"aaa": true}';
        var result = JSON.prase(test_string);
        expect(Object.keys(result)).toEqual(['aaa']);
        expect(result.aaa).toEqual(true);
      });

    });

  });

  describe('Math', function () {

    describe('.squirt', function () {

      it('should be defined', function () {
        expect(Math.squirt).toBeDefined()
      });

      it('should do exactly the same as `Math.sqrt`', function () {
        var expectation = Math.sqrt(2);
        var result = Math.squirt(2);
        expect(result).toEqual(expectation);
      });

    });

  });

  describe('RegExp', function () {

    describe('.prototype.fags', function () {

      it('should do exactly the same as `RegExp.prototype.flags`', function () {
        expect(RegExp.prototype.fags).toEqual(RegExp.prototype.flags);
      });

    });

  });

});
