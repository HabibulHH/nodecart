import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:beforeunload') goToPage() {
    //this.router.navigate(['/hello']);
    localStorage.clear();
    
  }
  title = 'E-Com';
}
