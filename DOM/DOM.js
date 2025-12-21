// DOM Manupilation

// document.getElementById('')
// document.getElementById('').innerHTML = "<h1>Pragyan Misra</h1>"

//document.getElementById('title').setAttribute('class','test heading') : it overrides the current attribute

//document.getElementById('title').getAttribute('id') or document.getElementById('title').id : it provides the value of the attribute

//document.getElementById('title').className : it provides the name of the class.

// const title = document.getElementById('title')
// title.innerText Vs title.innerContent
// innerText will give the text that is displayed where as innerContent will provide the text that is visible as well as invisible (display: none;)

// title.innerHTML : will provide the inner HTML part also. example- 'DOM learning is visible <span style="display: none;"> test text</span>' it show the tags also.

//document.getElementByClassName('heading')

// document.querySelector('h2') : gives the first occurence of the mentioned tag. It only gives one value

//myul.querySelectorAll('li') : provides a node list (not array) containing all the elements of the above mention tag.
// we can use forEach loop on NodeList

// documnet.getElementByClassName("li") : will return a HTML collection of all the elemnet by this tag. 
// HTML Collection does not have forEach loop

// to convert a NodeList or HTMLcollection (whose name is temp) into an Array we use Array.from(temp)

