//? Curly braces allow you to import multiple functions at once
//? "helpful" is being brought in as a default, sort and sing are... "normal"
import helpful, { sort, sing } from './helpers';

//? This will be brought in allll the time
//! import React, { Component } from 'react';

helpful();
sort();
sing();

//* To default export or not to default export?
//? Default exports are used when there's a "Most likely" thing to export
//? Example: In a react component, the component would be the default export
//! We never NEED a default export, but they are helpful to emphasize important files!