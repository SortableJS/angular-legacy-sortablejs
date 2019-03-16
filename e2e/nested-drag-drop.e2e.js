describe('nested drag and drop', () => {
    
  it('should allow list with nested list to be dropped in a nested list', () => {
    browser.get('http://localhost:8080/nested.html')
    browser.executeAsyncScript('var done = arguments[0]; window.onerror = done; $("#item2").simulate("drag-n-drop", { dragTarget: $("#subitem1"), interpolation: {stepWidth: 2, stepDelay: 30}}); setTimeout(done, 1000)').then(response =>{
        expect(response).toBeFalsy()
    })
    browser.sleep(1000)
  })
})
  