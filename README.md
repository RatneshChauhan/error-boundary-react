# error-boundary-react
Simple reusable react error boundary component for React 16+

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

git clone https://github.com/RatneshChauhan/error-boundary-react.git

Title
==============
React Error Boundary


Description
=================
A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

Usage
==========================
 
 <pre><span class="pl-k">import</span><span class="pl-smi"> ErrorBoundary</span><span class="pl-k"> from</span> <span class="pl-s"><span class="pl-pds">'</span>error-boundary-react-rv1<span class="pl-pds">'</span></span>;

&lt;<span class="pl-ent"><span class="pl-c1">ErrorBoundary headerColor="lightseagreen" errorTitle="Error" errorText="Ooops! Something went wrong!" buttonType={['default', 'primary', 'secondary', 'disabled']} buttonLabel={['Ok', 'Continue', 'Close', 'Cancel']} modal={true} autoScrollBodyContent={false} customContentStyle={null}</span></span>&gt;
  &lt;<span class="pl-ent"><span class="pl-c1">Your-Component</span></span> /&gt;
&lt;/<span class="pl-ent"><span class="pl-c1">ErrorBoundary</span></span>&gt;</pre>

* buttonType: Allows you to decide which button you want on the error dialog. You can keep one or all. Simply provide a blank value for the button type you don't want on the dialog
* buttonLabel: Allows you to provide labels of your buttons on the dialog. The order of button labels is same as that of your button types.
* autoScrollBodyContent: When set to true, gives you a vertical scroll on the dialog for its content.
* customContentStyle: Allows you to override default styling with your custom styling.
 

When error occurs during rendering, in lifecycle methods, and in constructors of the whole tree below them, a material-ui error dialog appears to the end user

![alt text](https://github.com/RatneshChauhan/error-boundary-react/blob/master/example.png "Error Boundary Dialog")

Note
======
Fall back UI will be visible in Production mode. In Develoment mode, you will see the react error overlay, close it to see the fall back UI

Published as npm package
================
This is available as an npm package.
Run <code>npm i react-error-boundary-rv1</code> to install it.

Author
=============
Ratnesh Chauhan, Full Stack Developer

Note: Everything is tested on Windows environment

License
==============
The MIT License (MIT)

Copyright (c) 2018 Ratnesh Chauhan

Permission is hereby granted, free of charge, to any person obtaining a copy of this application and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.


