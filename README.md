# @native-ts/calendar-core

This is a JavaScript library that provides base calendar component functions.

## Installation

To install this library, you can use npm:

```
npm install @native-ts/calendar-core
```

OR

```
yarn add @native-ts/calendar-core
```

## Usage
You can import the main module from the library like this:

```typescript
import {Calendar, MonthMode} from "@native-ts/calendar-core";

const calendar = new Calendar({
  month: 11,
  year: 2022,
  mode: MonthMode.MON,
});
const {daysInPrevMonth, daysInMonth, daysInNextMonth} = calendar.initialize();
console.log({daysInPrevMonth, daysInMonth, daysInNextMonth});
```

The library provides several classes and functions for working with dates and calendars:

- `Calendar`: A class for creating and manipulating calendar objects.
- `CalendarDay`: A interface representing a specific day in a calendar.
- `CalendarObject`: A interface representing a calendar object.
- `CalendarOptions`: A interface for specifying options when creating a calendar.

License
This project is licensed under the MIT License.
