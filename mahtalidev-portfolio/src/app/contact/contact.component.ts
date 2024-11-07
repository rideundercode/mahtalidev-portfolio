import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  };

  onSubmit() {
    console.log('Sending email with data:', this.formData);
    emailjs.send('service_z9uw1gf', 'template_mdkdb92', this.formData, 'l64efEJN9sdBYzZDQ') // Remplacez ici par votre Public Key
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre message a été envoyé avec succès.');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
      });
  }
}
