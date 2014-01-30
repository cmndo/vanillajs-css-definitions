VanillaJS CSS Definitions
======

This script enables a jQuery-like syntax  for applying styles to elements.  

Installation
------------

A bower package is available to install this module into your project.

	$ bower install vanillajs-css-definitions

Include css.js 

	<script src="/bower_components/vanillajs-css-definitions/css.js"></script>


Usage
-----
HTML

	<div class="test">Hi</div>
	<a href="#" class="test">Hi</a>
  	<img src="http://placekitten.com/200/200" class="test">
  	<p class="test plus">Hi</p>

Javascript

	css(".test", {
  		color: "red",
  		padding: "50px",
  		borderLeft: "2px solid"
	});

	css(".plus", {
  		color: "purple",
  		padding: "50px",
  		borderRight: "50px solid",
  		background: "pink"
	}); 


Check out [the example!](http://jsfiddle.net/LChsK/2/ "Bam!")

If you have any issues, be sure to reach out to me on Twitter @codecommando

**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	
	
