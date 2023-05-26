# REQUIREMENTS (to be confirmed with Mike/Prageeth)

### User Interaction and Data Flow:

MessageList and MessageWindow still need to work together. Clicking on a user in the MessageList needs to change the conversation displayed in the MessageWindow.
Might need to move the state up to the MessengerApp component and pass down callbacks/props to thje child components, or wait until Prageeth can integrate Redux.

### Break the feature down into more components:

i.e. the InputRow should be it's own component. Also change the component name to MessageInput to maintain consistency.

### Add Error Handling:

For unexpected data or a failed import.

### Message Timestamps:

Provide actual timestamp data for each message.

### User Search Throttling:

Add a debounce or throttle function to delay execution until the user has stopped typingm as to avoid lagging.

### Automated Testing:

For the feature in isolation and after integration with our main codebase.

### Code Commenting & Documentation:

Leave comments explaining the most relevant parts of our code.

### Refactor Static Data:

Replace hardcoded placeholders for user, sender and role in the MessageWindow and MessageList components.

### Improve Accessibility:

Add semantic HTML elements, ARIA attributes, descriptive alt text for user images etc...
