// const JsUser ={
//     name: "Anup",
//     email: "20karm@gmail.com",
//     age:28,
//     location:"Ranchi" ,
//     Islogged: false ,
//     Lastloggedin: ["monday",["friday"]]
// }

// // console.log(JsUser.age)
// // console.log(JsUser["age"])
// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser.location)
// // console.log(JsUser["location"])
// // console.log(JsUser.age)

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS Wrold, ${this.name}`)
// }

// console.log(JsUser.greetingTwo())


// *********More on Object *****************

// const tinderuser = {
//     usernam: "devit",
//     fullname: {
//         Userfullname: {
//             firstname: "Aman",
//             secondname:"Thankur",
//         }
//     }
// }

// console.log(tinderuser.fullname.Userfullname.secondname)

// const Obj1 = {1:"BB",2:"LC"}
// const Obj2 = {3:"bc",4:"FC"}

// // const Nobj = Obj1.concat(Obj2)

// // const Obj3 = Object.assign(Obj1,Obj2)
// const Obj3 = {...Obj1 , ...Obj2}
// // console.log(Nobj)
// console.log(Obj3)

// const tinderuser = {
//     name:"Monolisha",
//     age:54,
//     email: "Dhoha@dedenge.com",
//     intrest:"Male"
// }
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('intrested'))

//************More on object****/

const course = {
    name:"JavaScript",
    price: "428",
    teachar : "Anup Bist",
}

course.price 

const {teachar} = course

console.log(teachar)

