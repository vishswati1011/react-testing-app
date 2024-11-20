test case scenerio 
1. App consists of two component Feedback form and Feedback overview
2. Feedback form should have Textbox and checkbox and button
3. button should be initially disabled
4. If no feedback exist display no feedback found
5. if N feedback exist then overview should show n feedback entries
# --- how to find roles of any element

1. import {logRoles , screen } from 
2. then we need to give a id to parent div 
3. logRoles(screen.getByTestId("parent-div"))

logRoles console will be like 
console.log
    heading:
    
    Name "Demo Information":
    <h1 />
    
    --------------------------------------------------
    textbox:
    
    Name "":
    <input
      type="Enter email"
    />
    
    --------------------------------------------------
    button:
    
    Name "Click here":
    <button />
    
    --------------------------------------------------
    list:
    
    Name "":
    <ul />
    
    --------------------------------------------------
    listitem:


# -----     Mocking in JEST
mock is the process where we bypass api called from server and run test case for api call using msw (Mock service worker)