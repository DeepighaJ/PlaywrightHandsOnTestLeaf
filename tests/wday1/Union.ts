//Union Type | operator
let empDetails:string|number|boolean

empDetails=1234
empDetails="Deepigha"
empDetails=true

console.log(empDetails)

//intersection -> & operator
let ApiVstatus: number & string

//type alies -> create your own data type or custom data type

type api1={
    statusCode1:number
}

type api2={
    statusCode2:string
}

type sta= api1 & api2

let Apistatus:sta={
    statusCode1:200,
    statusCode2:"Success"
}

console.log(Apistatus)