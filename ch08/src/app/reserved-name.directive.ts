import { ValidatorFn, AbstractControl } from '@angular/forms';

const heroes = [
  { id: 1, name: 'Boothstomper' },
  { id: 2, name: 'Drogfisher' },
  { id: 3, name: 'Bloodyllips' },
  { id: 4, name: 'Mr Bu Moverse' },
  { id: 5, name: 'Piranhaelli' }
];

export function reservedNameValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const reserved = heroes.find(hero => hero.name === control.value);
    return reserved ? {'reservedName': true} : null;
  };
}
