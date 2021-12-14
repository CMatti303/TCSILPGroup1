import { AbstractControl } from "@angular/forms";

export function matchValidator(control: AbstractControl): { [key: string]: boolean} | null {
    let confPassword= control.value
    if(control.parent){
        let password=control.parent.get('password')?.value
        if(!(confPassword===password))
        return{
            'mismatch': true
        }
    }  
    return null 
}