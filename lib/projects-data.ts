// lib/projects-data.ts
export interface Project {
  id: number
  company: string
  location: string
  imagePath: string
}

export const projects: Project[] = [
  { id: 1, company: "MyBroker", location: "Sinop, MT", imagePath: "/images/projects/project-01.jpg" },
  { id: 2, company: "Mineração Campagnolo", location: "Sinop, MT", imagePath: "/images/projects/project-02.jpg" },
  { id: 3, company: "Tratormax", location: "Sinop, MT", imagePath: "/images/projects/project-03.jpg" },
  { id: 4, company: "Ford Disbrava", location: "Sinop, MT", imagePath: "/images/projects/project-04.jpg" },
  { id: 5, company: "Grupo Gardim", location: "Sinop, MT", imagePath: "/images/projects/project-05.jpg" },
  { id: 6, company: "Bonfanti Telhas", location: "Sinop, MT", imagePath: "/images/projects/project-06.jpg" },
  { id: 7, company: "Agropel Sementes", location: "Sinop, MT", imagePath: "/images/projects/project-07.jpg" },
  { id: 8, company: "Uniclínica", location: "Sinop, MT", imagePath: "/images/projects/project-08.jpg" },
]
