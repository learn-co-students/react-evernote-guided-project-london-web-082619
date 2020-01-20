README: React Evernote
======================


## Setup

The codebase is split up into a Rails API backend and a React frontend. Everything is contained in this single repository. 

Each of those folders has a README file with setup instructions. For conciseness, those instructions are copy pasted here:

### Frontend

```sh
# from within this directory:
npm install
PORT=4000 npm start
```

This React app will be running on `http://localhost:4000`.

### Backend

```sh
# from within this directory:
bundle install
rails db:create db:migrate db:seed
rails s
```

Your Rails backend API will be running on `http://localhost:3000`.

## Deliverables

**Viewing and Displaying Notes**

- [ ] Display all notes in the left sidebar.
- [ ] Displayed sidebar notes should show the title and a truncated body.
- [ ] When clicking a note from the sidebar, display its contents in the right panel.

![result](react-evernote-display.gif)

**Editing Notes**

- [ ] When displaying a note in the right panel, show an `Edit` button.
- [ ] Clicking the `Edit` button will allow the user to edit the title and body in the right panel.
- [ ] When in edit mode, also show a `Save` button which saves the note via a `PATCH` request.
- [ ] When in edit mode, also show a `Cancel` button which discards any changes and reverts back to displaying the note.
- [ ] Clicking a different note while in edit mode should discard your changes and display the new note instead.

![result](react-evernote-edit.gif)

**Creating Notes**

- [ ] At the bottom of your left sidebar, show a `New` button.
- [ ] Clicking `New` will create a new note via `POST` request with some default title and body.
- [ ] This new note should appear in the sidebar.

![result](react-evernote-create.gif)

**Filtering Notes**

- [ ] Implement the filter to search through your notes list by title.

![result](react-evernote-filter.gif)

