# Shmodal : The Modal for Meteor
a super hot, simple and flexible modal for blaze (Meteor JS).

Shmodal is a flexible modal UI component that accepts any template with any data, to easily build modals in blaze for meteor.



## Install
Simple install the package via atmosphere

```sh
meteor add pushplaybang:shmodal
```



## Basic Usage
Start off by adding the modal template to your main layout.

```html
    {{> Shmodal }}
```

Launch the modal from anywhere on the client, passing in a template name, and any data you require

```js
Shmodal.launch(args);
```

the args object can include: `templateName`, `data`, `callback` and `storedCallbacks`.

### Example

```js
Template.appLayout.events({
  'click .triggerModal': function() {
    Shmodal.launch({
      templateName: 'modalDemo', 
      data: {
        title: 'awesome modal demo',
        description: 'it really is pretty damn cool! load any tempalte you like in here, and the schmodal will deliver!'
      },
    });
  }
});
```



The modal automatically displays a close button in the top right, but should you want to close it from another event (such as successfully submitting a form) you can call the close method.

```js
Shmodal.close(callback);
```



### stored Callbacks
You may want additional function(s) to run when the modal closes, the `Shmodal.launch()`  method provides a final argument that accepts either a function, an array of anonymous functions or an object of functions that will be executed on close.

see the `pushplaybang:callbackstack` package if you'd like more detail about this.

#### example 1 - single function : 
heres a single function passed as a stored callback that will be excecuted when the modal is closed.

```js
    Shmodal.coverUp(false, false, function() {
        //...
    });
```

#### example 2 - array : 
heres an array of functions passed as a stored callback that will be excecuted when the modal is closed.

```js
    Shmodal.coverUp(false, false, [
      function() {
        //...
      },
      function() {
        //...
      },
    ]);
```

#### example 3 - object : 
heres an object passed as a stored callback that will be excecuted when the modal is closed.

```js
    Shmodal.coverUp(false, false, {
      one: function() {
        //...
      },
      two: function() {
        //...
      },
    });
```

Note that no matter what form you choose, every function will be excecuted, in order.



## Method Reference
Here is a full reference of all the methods available on the Modal object with their arguments. 



#### launch

`Shmodal.launch(args)`

**arguments**

* **template** (string) the name of a template to load inside the modal
* **data** (object) an object that will set the data for the modal
* **callback** (function) called everytime the function runs
* **storedCallbacks** (function, array, object) can be a function, array or object that will be stored in an array of functions on the Modal object, on `Shmodal._storedCallbacks` to be excecuted when the modal is closed. **Set only if opening the modal.**

#### close

`Shmodal.close()`

**arguments**

* **callback** (function) called everytime the function runs

#### reset

`Shmodal.reset(callback)`

resets the modals state.

**arguments**

* **callback** (function) called everytime the function runs



## CSS
The outer wrap has the parent class `.shmodal` and gets the `.open` and `.closed` class depending on its state.  This contains an inner div with the class `.inner-wrap` and also receives the `.open` and `.closed` classes appropriately based on the state of the modal.

The modal is setup with very limited and light basic CSS that is required for it to function, but can easily be overriden.  Here is the class structure for your custom CSS.

```css
// the root element and cover
.shmodal {}

// the open state of the modal
.shmodal.open {}

// the closed state of the modal
.shmodal.closed {}

// a wrap around the close button
.shmodal .close-wrap {}

// The close button in the top right
.shmodal .close {}

// a span wrapping the content of the close button
.shmodal .close span {}

// wraps the loaded tempalte
.shmodal .inner-wrap {}

```

or if you're using SCSS here is a much neater starting place.

```scss

.shmodal {
    /* state */
    &.open {}
    &.closed {}

    /* decendants  */
    .close-wrap {

      .close {

        span {}
      }
    }

    /* this element wraps your template */
    .inner-wrap {}
}
```



### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement, let me know.  add [an issue on github]() or fork and create a pull request.



____



### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2015 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
