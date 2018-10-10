import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
    // if the control value isn't empty and it doesn't follows up the REGEX instruction
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value))
    {
        return{
                lowerCase:true
              }
    }
        return null;

}

