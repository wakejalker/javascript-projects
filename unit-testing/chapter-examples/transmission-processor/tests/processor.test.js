const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests here
  test("takes a string returns an object", function () {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function(){
   let result = processor("9701<489584872710>");
   expect(result).toBe(-1);
  });

  test("returns id in object", function(){
   let result = processor("9701::<489584872710>");
   expect(result.id).not.toBeUndefined();
  });

  test("converts id to a number", function(){
   let result = processor("9701::<489584872710>");
   expect(result.id).toBe(9701);
  });

  test("returns rawData in object", () => {
   let result = processor("9701::<489584872710>");
   expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function() {
   let result = processor("9701::489584872710>");
   expect(result).toBe(-1);
  });

  test("returns -1 for rawData if missing < at position 0, and > is out of place", function() {
   let result = processor("9701::8729740349572>0912");
   expect(result).toBe(-1);
  });

  test("returns -1 for rawData if missing < at position 0", function() {
   let result = processor("9701::4872<97403495720912");
   expect(result).toBe(-1);
  });

  test("returns -1 for rawData if missing < or >", function() {
   let result = processor("9701::487297403495720912");
   expect(result).toBe(-1);
  });

  test("returns -1 for rawData if contains an extra <", function() {
   let result = processor("9701::<487297403495<720912>");
   expect(result.rawData).toBe(-1);
  });
  
  test("trim leading and trailing whitespace from transmission", function () {
   let result = processor("     9701::<489584872710>     ");
   expect(result.rawData).toBe("489584872710");
  });

  test("returns -1 if id cannot be converted to number", function(){
   let result = processor("abc::<489584872710");
   expect(result).toBe(-1);
  })

  test("returns -1 if there is more than one '::' is found in transmission", function(){
   let result = processor("9701::<48958487::2710>");
   expect(result).toBe(-1);
  })

  test("do not include < > symbols in value assigned to rawData", function() {
   let result = processor("9701::<489584872710>");
   expect(result.rawData.includes("<")).toBe(false);
   expect(result.rawData.includes(">")).toBe(false);
   });

   test("returns -1 for rawData if anything other than numbers are present between < >", function() {
      let result = processor("9701::<489584872710abc>");
      expect(result).toEqual({ id: 9701, rawData: -1 });
  });

 });