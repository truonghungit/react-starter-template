# What 👋

A _quick_ description outlining the context of this _pull request_.

### _Example:_

> An update to the _client-side_ validation system for the _login widget_.

## Where 🔍

An overview of _"avenues"_ that are influenced/affected by this work.

### _Example:_

> - This resolves issue [`#123`](#) and [`#456`](#).
> - The _login widget_ can be found on the core [`/login`](#) screen.
> - Leverages the [`redux-form`](https://redux-form.com) implementation from pull request [`#789`](#).
> - This validation enhancement will hide behind feature flag `[LOGIN.VALIDATION]`.

## Why 🤔

Dispel any ambiguity around why this bug/feature/enhancement was required.

### _Example:_

> Although the current validation system worked from a technical perspective, there were concerns round _user_ accessibility _(specifically message location and content)_ which would impact our **WCAG 2 AA** compliance rating.

## How 💡

Background on the changes/choices made to fulfill this _pull request_.

### _Example:_

> - `redux-form` has a [built in validation system](https://redux-form.com/8.1.0/examples/syncvalidation/) that fits our needs.
> - The integration requires that our form `<input />` elements conform to the [`<Field />`](https://redux-form.com/8.1.0/docs/api/field.md/) abstraction _(which I created a simple HOC to achieve)_.
> - `redux-form` creates its own entry _(and format)_ in the `redux` _"store"_ so there were several references in the application that needed to be updated to the new state schema.

## Note 📋

Any information that does not fit into the above categories giving extra context to the _pull request_.

### _Example:_

> We endeavor to move this validation pattern into our [stand alone component architecture](#) next sprint. The _login widget_ is our initial test pilot _(to validate our validation enhancements)_.

## Demo 📺

Bring clarity to the code with visual aids:

- **Screenshots:** `cmd` + `shift` + `4` _(MacOS)_ | `shift` + `windows` + `s` _(Windows 11)_.
- **Gifs:** [GIPHY Capture](https://giphy.com/apps/giphycapture) _(free/MacOS)_.
- **Code Snippets:** [Carbon](https://carbon.now.sh/) _(free)_.
- **Video:** [Loom](https://www.loom.com)

If applicable, a **before** and **after** representation of your work is preferred.

### _Example:_

> ### Before 👎 🙁
>
> Global _invalidation_ message at the bottom of the form is visually discrete and uninformative.
>
> ![form-before](https://user-images.githubusercontent.com/15273233/52890596-749c0100-31ea-11e9-94d4-588b914a4fde.gif)
>
> ### After 👍 🙂
>
> Individual _invalid_ messages on a per/input basis. Message _plus_ the `<input />` itself has an error aesthetic.
>
> ![form-after](https://user-images.githubusercontent.com/15273233/52890599-7796f180-31ea-11e9-9b7b-af84a1107391.gif)
