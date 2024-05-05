import { Component, OnInit,inject} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // router:Router=inject(Router)
  activatedRoute= inject(ActivatedRoute)

}
