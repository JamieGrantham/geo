game.splash("Let's calculate the area of a trapezoid")
// Created by: Jamie Grantham
// 
// Created on 22/09/29
// 
// This block and the two under it ask the user The length of base A, base B and the height.
let Base_A = game.askForNumber("Enter the base A of the trapezoid(cm)")
let Base_B = game.askForNumber("Enter the base B of the trapezoid(cm)")
let Height = game.askForNumber("Enter the Height of the trapezoid(cm)")
// Created by: Jamie Grantham
// 
// Created on 22/09/29
// 
// This block and the two under it are calculating the area of the trapezoid using the inputs from the user
let AB = Base_A + Base_B
let AB2 = AB / 2
let Area = AB2 * Height
// Created by: Jamie Grantham
// 
// Created on 22/09/29
// 
// This final block shows the user the Area of the trapezoid
game.splash("The Area of the trapezoid is ", Area)
