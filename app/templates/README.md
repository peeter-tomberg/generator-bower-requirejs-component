# <%= componentNameCapitalized %>
--------------


## Installation
```
bower install <%= componentName %>
```

### Setup requirejs
```javascript
    var requirejs = {
        "paths": {
            "<%= componentNameCapitalized %>" : "bower_components/<%= componentName %>/src"
        }
    };

```

### Setup
```javascript
    var <%= componentNameCapitalized %> = require('<%= componentNameCapitalized %>/<%= componentNameCapitalized %>');
    var <%= componentName %> = new <%= componentNameCapitalized %>();
```
