describe('drag and drop', () => {
  it('should reorder items', () => {
    browser.get('http://localhost:8080/')
    element.all(by.css('li'))
    .getText()
    .then((listItems) => {
      expect(listItems[0]).toEqual('burgers')
      expect(listItems[1]).toEqual('chips')
      expect(listItems[2]).toEqual('hotdog')
      expect(listItems[3]).toEqual('icecream')
    })
    // simulate drag and drop
    browser.executeScript('$("#burgers").simulate("drag-n-drop", { dragTarget: $("#hotdog"), interpolation: {stepWidth: 10, stepDelay: 30}});')
    browser.sleep(5000)
    element.all(by.css('li'))
    .getText()
    .then((listItems) => {
      expect(listItems[0]).toEqual('chips')
      expect(listItems[1]).toEqual('burgers')
      expect(listItems[2]).toEqual('hotdog')
      expect(listItems[3]).toEqual('icecream')
    })
  })
})
