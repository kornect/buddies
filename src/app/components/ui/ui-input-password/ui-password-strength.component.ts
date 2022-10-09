import { Component, Input, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-ui-password-strength',
  templateUrl: './ui-password-strength.component.html',
  styleUrls: ['./ui-password-strength.component.scss'],
})
export class UiPasswordStrengthComponent implements OnChanges {
  @Input() password!: string;
  @Input() label!: string;
  bar0!: string;
  bar1!: string;
  bar2!: string;
  bar3!: string;
  bar4!: string;

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  constructor() {}

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['password'].currentValue;
    this.setBarColors(5, '#DDD');
    if (password) {
      const color = this.getColor(this.measureStrength(password));
      this.setBarColors(color.idx, color.col);
      this.label = color.str;
    }
  }

  private measureStrength(passwordString: string): number {
    let force = 0;
    const regex = /[$-/:-?{-~!"^_`\[\]]/g; // "

    const lowerCaseLetters = /[a-z]+/.test(passwordString);
    const upperCaseLetters = /[A-Z]+/.test(passwordString);
    const numbers = /[0-9]+/.test(passwordString);
    const symbols = regex.test(passwordString);

    const flags = [lowerCaseLetters, upperCaseLetters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag ? 1 : 0;
    }

    force += 2 * passwordString.length + (passwordString.length >= 8 ? 1 : 0);
    force += passedMatches * 10;

    // penalty (short password)
    force = passwordString.length <= 8 ? Math.min(force, 10) : force;

    // penalty (poor variety of characters)
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 40) : force;

    return force;
  }

  private getColor(strength: number): any {
    let idx = 0,
      colorStrength = 'very weak';
    if (strength <= 10) {
      idx = 0;
      colorStrength = 'weak';
    } else if (strength <= 20) {
      idx = 1;
      colorStrength = 'better';
    } else if (strength <= 30) {
      idx = 2;
    } else if (strength <= 40) {
      idx = 3;
      colorStrength = 'strong';
    } else {
      idx = 4;
      colorStrength = 'strong';
    }

    return {
      idx: idx + 1,
      col: this.colors[idx],
      str: `Your password is ${colorStrength}`,
    };
  }

  private setBarColors(count: number, col: string): void {
    for (let n = 0; n < count; n++) {
      switch (n) {
        case 0:
          this.bar0 = col;
          break;
        case 1:
          this.bar1 = col;
          break;
        case 2:
          this.bar2 = col;
          break;
        case 3:
          this.bar3 = col;
          break;
        case 4:
          this.bar4 = col;
          break;
      }
    }
  }
}
