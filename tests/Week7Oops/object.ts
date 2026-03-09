//call particular class information in another file- we cannot call it direct for that 
//we need to add one more keywork export as in the class and inside the other file we need to import 
import { Browser } from "./class"//import {classname} from 'filename'

let obj1= new Browser("Facebook")
obj1.loadUrl()
console.log(obj1.browserName)