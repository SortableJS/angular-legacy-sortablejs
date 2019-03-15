describe('nested drag and drop', () => {
    it('should have correct model after moving between lists', () => {
      browser.get('http://localhost:8080/nested.html')
      browser.executeScript('$("#item2").simulate("drag-n-drop", { dragTarget: $("#item3"), interpolation: {stepWidth: 2, stepDelay: 30}});')
      browser.sleep(1000)
      element(by.id('main-list')).evaluate('$ctrl.lastDragged.name').then(function(value){
        expect(value).toBe('item2');
      })
      browser.executeScript('$("#item3").simulate("drag-n-drop", { dragTarget: $("#subitem1"), interpolation: {stepWidth: 2, stepDelay: 30}});')    
      browser.sleep(1000)
      element(by.id('main-list')).evaluate('$ctrl.lastDragged.name').then(function(value){
        expect(value).toBe('item3');
      })
      browser.executeScript('$("#item1").simulate("drag-n-drop", { dragTarget: $("#item2"), interpolation: {stepWidth: 2, stepDelay: 30}});')    
      browser.sleep(1000)
      element(by.id('main-list')).evaluate('$ctrl.lastDragged.name').then(function(value){
        expect(value).toBe('item1');
      })
  })
})
  