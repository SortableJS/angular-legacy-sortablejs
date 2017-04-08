describe('drag and drop', function() {
  it('should reorder items', function() {
    browser.get('http://localhost:2000/');
    element.all(by.css('li'))
    .getText()
    .then(function(listItems) {
        expect(listItems[0]).toEqual('burgers');
        expect(listItems[1]).toEqual('chips');
        expect(listItems[2]).toEqual('hotdog');
        expect(listItems[3]).toEqual('icecream');

    });

    // simulate drage and drop
    browser.executeScript("DndSimulator.simulate('#burgers', '#hotdog')")
    element.all(by.css('li'))
    .getText()
    .then(function(listItems) {
        console.log(listItems)
        expect(listItems[0]).toEqual('chips');
        expect(listItems[1]).toEqual('hotdog');
        expect(listItems[2]).toEqual('burgers');
        expect(listItems[3]).toEqual('icecream');
    });
  });
});