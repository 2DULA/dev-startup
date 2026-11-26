# HTML
- Wrapped the whole body into a container to have one control point and make styling with css easier

- separated the two input fields using **div** tags for better layout

- used the **input** tag for the fields and **label** tag for the text inside it

- **Submit** button fires a form element when the user clicks on it or presses "Enter" key

- **novalidate** clause added to **form** tag to stop the browser built in popup error message so we can write a custom one with java script

- using **span** tag as an inline containter with inline CSS **style** property to specifically markup error messages

- **(p id="confirmation")** acts as an empty display slot for the custom confirmation message


# CSS
- used the universal selector **(*)** to make sure inputs don't overflow their container

- gave the body 100% view port so my vertical centering works(otherwise it would be stuck up) and turned it into a flex container so I can use the horizontal and vertical centering attributes on the container

- continer **max-width:340px** to make sure it shrinks cleanly on mobile screens & **border-radius:6px** to round to corners of the card slightly

- **margain: 0 auto** removes the top and bottom margain and centers horizontally(**auto** devides the space right and left evenly)

- Displayed **label** as a block to force it into its own line and so it doesn't stretch on bigger screens

- **max-width** stretches the inputs to the fill  the container and **font:inherit** so it matches the body font

- Displayed the submit button as a block so it doesn't stretch and used the nesting selector **&** with the hover property to make the hover effect

- used the conditonal **@media** to make the container 130% its width on screens>=768px

# JS
- the event object is an object created automatically by the broswer to store a happenstance and is later passed to the addEventListener fucntion.

- **event.preventDefault();** to prevent the browser's built in default reload of the page and clearing the input fields after submitting to keep the page intact.

- using **document.querySelector** with css id selector **#** to search for the HTMLs element and store them in the correspondant constant (.value.trim() to remove any white spaces from the input).

- using the dom property **.textContext** with JS terenary operator to inject a message through our custom inline errors.

- the special symbols used to validate that the email is correct translate to **[no-spaces-or-@]@[no-spaces-or-@].[no-spaces-or-@].**

- The final if statement acts as a gate keeper ensuring there are no errors then returning a custom message into the page using template literals *`* and placeholders *$*.

- **form.reset()** to clear the form.

- **firstNameInput.focus()** to bring the focus to the first field.

# Workflow

1. The users clicks the submit button 
2. The broswers creates the submit event
3. The submit event is passed to the eventListener function
4. The event function then prevents the default reload of the page and reads the texts out of the input fields and validates it,displaying a custom error messgae into the DOM if it doesn't pass
5. Confirmation message is shown on th page
