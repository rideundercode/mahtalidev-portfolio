import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'MultiAgentSystemJava',
      description: 'Développement d’un système multi-agent en Java utilisant JADE pour simuler des interactions de négociation entre agents.',
      technologies: ['Java', 'JADE'],
      githubLink: 'https://github.com/rideundercode/MultiAgentSystemJava'
    },
    {
      title: 'Bank',
      description: "Développement d'une application bancaire avec une API REST pour le traitement des opérations bancaires, avec Spring Boot et Angular.",
      technologies: ['Spring Boot', 'Angular', 'DTO', 'Spring Security'],
      githubLink: 'https://github.com/rideundercode/bank'
    },
    {
      title: 'Todolist',
      description: "Conception d'une API REST avec Spring Boot pour gérer une liste de tâches, intégrant des fonctionnalités de filtrage et tri.",
      technologies: ['Spring Boot', 'Angular', 'JPA', 'Hibernate', 'H2'],
      githubLink: 'https://github.com/rideundercode/projet_todo_liste'
    },
    {
      title: 'Monet Maker',
      description: "Script Python permettant de créer un dessin artistique des contours d'une image en utilisant des techniques de détection de contours.",
      technologies: ['Python'],
      githubLink: 'https://github.com/rideundercode/Monet-Maker'
    },
    {
      title: 'My Booking Service',
      description: "Réalisation d'une application web en microservices sur une infrastructure en cluster, capacité à travailler avec une équipe devops.",
      technologies: ['Kubernetes', 'Docker', 'Gitlab CI/CD', 'Spring Boot', 'Ansible'],
      githubLink: 'https://github.com/rideundercode/MyBookingService'
    },
    {
      title: 'My Little Ansible',
      description: "Réalisation d'un programme en ligne de commande permettant de configurer des hôtes distants.",
      technologies: ['Python'],
      githubLink: 'https://github.com/rideundercode/MyLittleAnsible'
    },
    {
      title: 'E-Commerce',
      description: 'Plateforme de e-commerce',
      technologies: ['Spring Boot', 'Angular'],
      githubLink: 'https://github.com/rideundercode/ecommerce'
    },
    {
      title: 'Game Adventure',
      description: "Réalisation d'un jeu fonctionnel avec le moteur Unity.",
      technologies: ['C#'],
      githubLink: 'https://github.com/rideundercode/Adventure'
    },
    {
      title: 'Api Rest',
      description: 'Mise en place de votre propre application afin de créer un service REST sécurisé.',
      technologies: ['DotNet'],
      githubLink: 'https://github.com/rideundercode/ApiRest'
    },
    {
      title: 'Pictionary',
      description: 'Développer une application mobile pour Android natif ou flutter, permettant de faire un jeu type Pictionary ou Draw Something.',
      technologies: ['Dart'],
      githubLink: 'https://github.com/rideundercode/Pictionis'
    },
    {
      title: 'Cherokee',
      description: 'Implémenter un serveur conforme à une version simplifiée du protocole HTTP.',
      technologies: ['Langage C'],
      githubLink: 'https://github.com/rideundercode/Cherokee'
    }
  ];
}
