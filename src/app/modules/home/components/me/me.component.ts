import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '@services/authorization.service';
import { ApplicationUserExtended } from '@models/extended';
import { TitleService } from '@services/title.service';

@Component({
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  user: ApplicationUserExtended | null = null;

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly titleService: TitleService,
  ) {
  }

  ngOnInit(): void {
    this.authorizationService.getMe().subscribe(user => {
      this.user = new ApplicationUserExtended(user);
    });

    this.titleService.setTitle('My profile');
  }

  get json(): string | null {
    return this.user != null ? JSON.stringify(this.user) : null;
  }
}
