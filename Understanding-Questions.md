# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

* The user presses the 1 button.
* The button is clicked activating the onClick event handler.
* The reducer function was read 
* The addOne function was called from the actions folder with a type of ADD_ONE
* The switch from the reducer function is read and when reaching case ADD_ONE.
* A copy of state is then made before the number 1 is added to the state total
* TotalDisplay shows the total plus 1.
