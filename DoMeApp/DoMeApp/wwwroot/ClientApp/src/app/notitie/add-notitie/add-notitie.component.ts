import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotitieDataService } from '../notitie-data.service';
import { Notitie } from '../notitie.model';
import { AuthenticationService} from '../../user/authentication.service';

@Component({
  selector: 'app-add-notitie',
  templateUrl: './add-notitie.component.html',
  styleUrls: ['./add-notitie.component.css']
})

export class AddNotitieComponent implements OnInit {
  public notitie: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _notitieDataService: NotitieDataService,
    private _authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {

    this.notitie = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      content: [''] 
    });
  }

  onSubmit() {
    this._notitieDataService
      .addNewNotitie(new Notitie(this.notitie.value.title, this.Owner.toString(), this.notitie.value.content))
      .subscribe(
        () => {
          this.router.navigate(['/notitie/list']);
        }
      );
      
      
      console.log(this.Owner);
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${
        errors.minlength.requiredLength
      } characters (got ${errors.minlength.actualLength})`;
    }
  }

  get Owner() {
    return this._authService.user$.value;
  }
}
