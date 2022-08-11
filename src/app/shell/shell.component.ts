import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ThemeService } from 'core/services/theme';
import { Theme } from 'core/services/theme/theme.service';
import { UserService } from 'data/user';
import { environment } from 'env';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  user$ = this.userService.user$;
  isDark!: boolean;

  constructor(
    private userService: UserService,
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isDark = this.themeService.isDarkTheme();
  }

  onLogout() {
    this.userService.logOut().subscribe(() => {
      this.router.navigate(['/login'], { relativeTo: this.route });
    });
  }

  getYear() {
    return new Date().getFullYear();
  }

  getAppName() {
    return environment.appName;
  }
}
