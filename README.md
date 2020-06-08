# Goals of this fork and How-to's

This project is a fork from [jiayingy/vue-single-date-picker](https://github.com/jiayingy/vue-single-date-picker) and the goals are :  

* Being able to build a web component of the calendar  
* Being able to select several dates and/or unselect some dates  
* Change the colors so that it matches the theme of a personal project  

## How to build a web component  

* At the root of the project, execute the command `npx vue-cli-service-build --target wc --inline-vue --name you-name-it './src/CalendarView.vue'`.  
* In the generated html file, include both Material Icons and Google fonts  
  * `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`  
  * `<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400&display=swap" rel="stylesheet">`  

# Readme of original project  
## Demo
https://jiayingy.github.io/vue-single-date-picker/

## Installation
```
npm i vue-single-date-picker
```

## How to use

### Component

Import package
```javascript
import SingleDatePicker from 'vue-single-date-picker';

export default {
  components: {
    SingleDatePicker
  }
}
```

Create component in your template
```javascript
<SingleDatePicker />
```

### Styles
1. This library uses Google Material Icon pack. Refer to [here](https://google.github.io/material-design-icons/) on how to include it in your project.

2. In your css/scss file,
```
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';
```
### Props 
|Props|arguments|remarks|
|:--|:--|:--|
|date|```{ year: <Number>, month: <Number>, date: <Number> }```|E.g. 1 Jan 2020 <br> {year: 2020, month: 0, date: 1}| 

### Events 
|events|arguments|remarks|
|:--|:--|:--|
|@selectDate|```{ year: <Number>, month: <Number>, date: <Number> }```|E.g. 1 Jan 2020 <br> {year: 2020, month: 0, date: 1}| 
