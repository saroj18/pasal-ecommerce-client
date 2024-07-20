export const errorFormatter=(getError: any)=>{
    let errors: any = {};
    getError.forEach((ele:any)=>{
        errors[ele.path[0]] = ele.message
    })
    return errors
    }