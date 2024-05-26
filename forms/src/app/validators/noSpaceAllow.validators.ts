import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomVAlidators {
  static noSpaceAllowed = (control: AbstractControl) => {
    if (control.value !== null && control.value.indexOf(' ') !== -1) {
      return { noSpaceAllowed: true };
    } else {
      return null;
    }
  };
  static notEqual = (source: string, target: string) => {
    return (group: AbstractControl): ValidationErrors | null => {
      const sourceValue = group.get(source)?.value;
      const targetValue = group.get(target)?.value;

      // if (group.get(target)?.errors && !group.get(target)?.errors['notEqual'])
      //   return null;
      if (sourceValue !== targetValue) {
        return { notEqual: true };
      } else {
        return null;
      }
    };
  };
}
// export const noSpaceAllowed = (control: AbstractControl) => {
//   if (control.value !== null && control.value.indexOf(' ') !== -1) {
//     return { noSpaceAllowed: true };
//   } else {
//     return null;
//   }
// };
