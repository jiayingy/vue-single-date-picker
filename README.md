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
