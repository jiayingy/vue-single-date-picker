## Demo
https://jiayingy.github.io/vue-single-date-picker/

## Installation
*Plugin is currently only available via Github packages*

Refer to guide [here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) on how to authenticate to install github packages

Add the following line to your `package.json`,
```javascript
dependencies {
  "@jiayingy/vue-single-date-picker": "0.4.3"
}
```

Run `npm install`

## How to use

### Component

Import package
```javascript
import SingleDatePicker from '@jiayingy/vue-single-date-picker';

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
@import '~@jiayingy/vue-single-date-picker/dist/vue-single-date-picker.css';
```

### Events 
|events|arguments|remarks|
|:--|:--|:--|
|@selectDate|```{ year: <Number>, month: <Number>, date: <Number> }```|E.g. 1 Jan 2020 <br> {year: 2020, month: 0, date: 1}| 
