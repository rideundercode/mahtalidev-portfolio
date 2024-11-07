import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedContent: string = '';

  showExperience() {
    this.selectedContent = 'experience';
  }

  showEducation() {
    this.selectedContent = 'education';
  }

  showLanguages() {
    this.selectedContent = 'languages';
  }

  showTechnologies() {
    this.selectedContent = 'technologies';
  }
}
