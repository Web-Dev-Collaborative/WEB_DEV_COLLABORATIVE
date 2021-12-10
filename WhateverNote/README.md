# ![alt-text](https://github.com/allsouza/WhateverNote/blob/master/app/assets/images/small-logo.png "WhateverNote Logo") WhateverNote

[WhateverNote](https://whatever-note.herokuapp.com/) is a clone of the note keeping web-app [Evernote](https://evernote.com/).  It allows users to create notes with Rich Text Content and save them in different notebooks.

## Technologies Used

#### Backend
  * Ruby on Rails
  * PostgreSQL
#### Frontend
  * React
  * Redux
#### Packages
  * React-Quill
---  
## Features

  * User Auth (sign up, login, logout) with frontend(AuthRoutes and ProtectedRoutes) and backend(BCrypt) control.
  * Note creation and editing with Rich Text capabilities.
  * Notebooks can be created to better organize notes.
  
---  
## Notable Features


### Loading screen


A Loading screen shows up after login while the `App` component is being loaded.
![alt text](https://github.com/allsouza/WhateverNote/blob/master/app/assets/images/read_me/loading.gif "Loading screen")


### Autosave


Notes are automatically saved one second after inactivity, or when the editor loses focus guaranteeing that no data is lost.  Status is displayed in the lower right corner.
![alt text](https://github.com/allsouza/WhateverNote/blob/master/app/assets/images/read_me/auto-save.gif "Auto save")


### Menu selection based on url
The sidebar selections watch for changes in the url in order to select the corresponding item.
```javascript
selectByPath(){
        const path = this.props.location.pathname.split('/').filter(ele => ele !== "");
        const actions = Array.from(document.getElementsByClassName('action'))
        if(path.length <= 3){  // Checks to see that we are not in the notebook index sub-menu
            actions.forEach(action => {
                action.classList.remove('selected');
                if(action.id === path[1]) action.classList.add('selected')
            })
        }
        else if(path[1] === 'notebooks'){
            actions.forEach(action => {
                action.classList.remove('selected');
                if(action.id === `notebook${path[2]}`) action.classList.add('selected')
            })
        }
    }
```

### Rich-Text editing


By implementing React-Quill notes have a Rich-Text format which allows for many aesthetic changes and also adding images and embeding videos.


![alt text](https://github.com/allsouza/WhateverNote/blob/master/app/assets/images/read_me/rich-text.gif "Rich text editing")


![alt text](https://github.com/allsouza/WhateverNote/blob/master/app/assets/images/read_me/adding-video.gif "Adding videos")

---
