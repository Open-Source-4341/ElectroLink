<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="upc-logo" width="120px" height="120px"/>
</p>

<h1 align="center">
    Universidad Peruana de Ciencias Aplicadas
</h1>

<h3 align="center">
    Carrera: Ingeniería de Software
    <br> <br>
    Curso: SI730 - Open Source
    <br> <br>
    Sección: 4341
    <br> <br>
    Profesor: Juan Antonio Flores Moroco
    <br> <br>
    Ciclo: 2025-01 
    <br> <br>
    Informe de Trabajo Final
    <br> <br>
    Startup: HampCoders
    <br> <br>
    Producto: ElectroLink  
</h3>

<div align="center">

| <div style="width:300px">Alumno</div> | <div style="width:125px">Código</div> |
|:-------------------------------------------:|:-------------------------------------------:|
|       Italo Ludwing Sanchez Manrique        |              U202316967                     |
|         Ethan Matias Aliaga Aguirre         |              U202318323                     |
|       Leandro Saúl Contreras Lopez          |              U20231E215                     |
|       Ivo Marcelo Machado Bracamonte        |              U20231C368                     |             
|       Ricardo Del Aguila Ayala              |              U20231B157                     |

</div>

<div align="center"> Abril 2025 </div>

<hr>

<div style="page-break-after: always;"></div>

## Registro de Versiones del Informe

| Versión | Fecha       | Autores                                                                                                                                                          | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TB1     | 22/04/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | Capítulo I: Introducción  <br> Capítulo II: Requirements Elicitation & Analysis  <br> Capítulo III: Requirements Specification  <br> Capítulo IV: Product Design  <br> Capítulo V: Product Implementation, Validation & Deployment  <br><br> **5.1. Software Configuration Management**  <br> 5.1.1. Software Development Environment Configuration  <br> 5.1.2. Source Code Management  <br> 5.1.3. Source Code Style Guide & Conventions  <br> 5.1.4. Software Deployment Configuration  <br><br> **5.2. Landing Page, Services & Applications Implementation (Sprint 1)**  <br> 5.2.1.1. Sprint Planning 1  <br> 5.2.1.2. Aspect Leaders and Collaborators  <br><br>**Distribución de responsabilidades por integrante:**<br><br>• **Ricardo Del Aguila**: Diseño de la arquitectura usando Domain-Driven Design. Redacción de historias de usuario. Implementación inicial de la landing page. Documentación técnica de componentes. <br>• **Italo Sanchez**: Diseño de User Personas, flujos de usuario y prototipos web. Apoyo en la guía de estilos para coherencia visual. <br>• **Ivo Machado**: Diseño del sistema de etiquetas, wireframes y mock-ups. Propuesta visual general de la landing page. <br>• **Ethan Aliaga**: Desarrollo técnico de la landing page. Soporte estructural en la implementación orientada a objetos. <br>• **Leandro Contreras**: Configuración del entorno de desarrollo y gestión del Product Backlog inicial. Aporte en metaetiquetas SEO. <br><br>5.2.1.3. Sprint Backlog 1  <br> 5.2.1.4. Development Evidence for Sprint Review  <br> 5.2.1.5. Execution Evidence for Sprint Review  <br> 5.2.1.6. Services Documentation Evidence for Sprint Review  <br> 5.2.1.7. Software Deployment Evidence for Sprint Review  <br> 5.2.1.8. Team Collaboration Insights during Sprint |
| TP      | 13/05/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | **5.2.2. Sprint 2**  <br> 5.2.2.1. Sprint Planning 2  <br> 5.2.2.2. Aspect Leaders and Collaborators  <br><br>**Distribución de responsabilidades por integrante:**<br><br>• **Ricardo Del Aguila**: Coordinación general de la documentación del Sprint 2 (planning, backlog y evidencias). Redacción técnica clara y alineación con criterios de calidad. <br>• **Italo Sanchez**: Liderazgo en la implementación de su módulo frontend. Documentación de endpoints utilizados y coherencia visual con lógica funcional. <br>• **Ivo Machado**: Desarrollo e implementación de vistas frontend. Presentación visual en el Sprint Review y evidencia multimedia (capturas y video). <br>• **Ethan Aliaga**: Desarrollo técnico del bounded context asignado. Aporte en integración frontend y evidencia de implementación. <br>• **Leandro Contreras**: Reestructuración del entorno de trabajo del módulo. Organización de evidencias de implementación y validación. <br><br>5.2.2.3. Sprint Backlog 2  <br> 5.2.2.4. Development Evidence for Sprint Review  <br> 5.2.2.5. Execution Evidence for Sprint Review  <br> 5.2.2.6. Services Documentation Evidence for Sprint Review  <br> 5.2.2.7. Software Deployment Evidence for Sprint Review  <br> 5.2.2.8. Team Collaboration Insights during Sprint  <br><br> Avance de Conclusiones, Bibliografía y Anexos |
| TB2     | 22/06/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | **5.2.3. Sprint 3**  <br> 5.2.3.1. Sprint Planning 3  <br> 5.2.3.2. Aspect Leaders and Collaborators  <br><br>**Distribución de responsabilidades por integrante:**<br><br>• **Ricardo Del Aguila**: Revisión de consistencia entre evidencias y criterios de validación. Redacción de parte de las conclusiones. Lideró la organización de entrevistas de validación. <br>• **Italo Sanchez**: Apoyo en diseño del protocolo de entrevistas. Participación activa en validaciones. Aporte en el análisis de resultados y su reflejo en el sistema. <br>• **Ivo Machado**: Coordinación de evidencias visuales de implementación. Elaboración de recursos gráficos para entrevistas y presentación final. <br>• **Ethan Aliaga**: Revisión cruzada del código. Validación de ajustes técnicos tras entrevistas. Documentación de mejoras aplicadas. <br>• **Leandro Contreras**: Integración de evidencias de entrevistas y evaluación heurística. Organización final de entregas y verificación de formato. <br><br>5.2.3.3. Sprint Backlog 3  <br> 5.2.3.4. Development Evidence for Sprint Review  <br> 5.2.3.5. Execution Evidence for Sprint Review  <br> 5.2.3.6. Services Documentation Evidence for Sprint Review  <br> 5.2.3.7. Software Deployment Evidence for Sprint Review  <br> 5.2.3.8. Team Collaboration Insights during Sprint  <br><br> **5.3. Validation Interviews**  <br> 5.3.1. Diseño de Entrevistas  <br> 5.3.2. Registro de Entrevistas  <br> 5.3.3. Evaluaciones según heurísticas |
| TF      | 06/07/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | **5.4. Proyecto Final y Mejora Continua**  <br><br>**Distribución de responsabilidades por integrante:**<br><br>• **Ricardo Del Aguila**: Revisión técnica y de calidad sobre todo el proyecto. Coordinación general del cierre del proyecto y consolidación de documentación. <br>• **Italo Sanchez**: Sistematización de observaciones del usuario. Refactorización visual. Redacción de anexos y mejora del flujo en el frontend. <br>• **Ivo Machado**: Reestructuración de mock-ups finales. Elaboración de recursos visuales definitivos. Ajuste de vistas y layouts. <br>• **Ethan Aliaga**: Validación cruzada de código. Estabilización del sistema. Pruebas técnicas de cierre. <br>• **Leandro Contreras**: Integración final del informe, estructura del repositorio y cumplimiento de formatos académicos. <br><br>**5.5. Reflexiones Finales y Cierre del Proyecto**  <br> Redacción de conclusiones, evaluación de Student Outcomes, bibliografía y anexos. |

<hr>

<div style="page-break-after: always;"></div>

## Project Report Collaboration Insights  

**Enlace de la organización del proyecto**
- [Organización GitHub: Open-Source-4341](https://github.com/Open-Source-4341)
- [Repositorio GitHub: ElectroLink](https://github.com/Open-Source-4341)


<img src="https://i.imgur.com/u3VdgdH.jpeg"/>
_Insights del TB1_

<img src="https://i.ibb.co/nMY7Ydy8/insights-1.png"/>
_Insights del TF_

<hr>

## Resumen de commits por contribuidor

| **Posición** | **Usuario**     | **Commits** | **Líneas añadidas (+)** | **Líneas eliminadas (-)** |
|--------------|------------------|-------------|---------------------------|-----------------------------|
| #1           | **Ricardo Del Aguila**      | 38          | 1,065                     | 101                         |
| #2           | **Ivo Machado**    | 16          | 416                       | 16                          |
| #3           | **Italo Sanchez**  | 15          | 265                       | 19                          |
| #4           | **Ethan Aliaga**     | 7           | 1,787                     | 14                          |
| #5           | **Leandro Contreras**     | 6           | 244                       | 1                           |

<div style="page-break-after: always;"></div>

## Tabla de Contenidos

- [Capítulo I: Introductionn](#capítulo-i-introduction)
  - [1.1. Startup Profile](#11-startup-profile)
    - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
    - [1.1.2. Perfiles de Integrantes del Equipo](#112-perfiles-de-integrantes-del-equipo)
  - [1.2. Solution Profile](#12-solution-profile)
    - [1.2.1. Antecedentes y Problemática](#121-antecedentes-y-problemática)
    - [1.2.2. Lean UX Process](#122-lean-ux-process)
      - [1.2.2.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
      - [1.2.2.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
      - [1.2.2.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
      - [1.2.2.4. Lean UX Canvas](#1224-lean-ux-canvas)
  - [1.3. Segmentos Objetivos](#13-segmentos-objetivos)

- [Capítulo II: Requirements Elicitation & Analysis](#capítulo-ii-requirements-elicitation--analysis)
  - [2.1. Competidores](#21-competidores)
    - [2.1.1. Análisis competitivo](#211-análisis-competitivo)
    - [2.1.2. Estrategias y tácticas frente a competidores](#212-estrategias-y-tácticas-frente-a-competidores)
  - [2.2. Entrevistas](#22-entrevistas)
    - [2.2.1. Diseño de entrevistas](#221-diseño-de-entrevistas)
    - [2.2.2. Registro de entrevistas](#222-registro-de-entrevistas)
    - [2.2.3. Análisis de entrevistas](#223-análisis-de-entrevistas)
  - [2.3. Needfinding](#23-needfinding)
    - [2.3.1. User Personas](#231-user-personas)
    - [2.3.2. User Task Matrix](#232-user-task-matrix)
    - [2.3.3. User Journey Mapping](#233-user-journey-mapping)
    - [2.3.4. Empathy Mapping](#234-empathy-mapping)
    - [2.3.5. As-is Scenario Mapping](#235-as-is-scenario-mapping)
  - [2.4. Ubiquitous Language](#24-ubiquitous-language)

- [Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
  - [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
  - [3.2. User Stories](#32-user-stories)
  - [3.3. Impact Mapping](#33-impact-mapping)
  - [3.4. Product Backlog](#34-product-backlog)

- [Capítulo IV: Product Design](#capítulo-iv-product-design)
  - [4.1. Style Guidelines](#41-style-guidelines)
    - [4.1.1. General Style Guidelines](#411-general-style-guidelines)
    - [4.1.2. Web Style Guidelines](#412-web-style-guidelines)
  - [4.2. Information Architecture](#42-information-architecture)
    - [4.2.1. Organization Systems](#421-organization-systems)
    - [4.2.2. Labeling Systems](#422-labeling-systems)
    - [4.2.3. SEO Tags and Meta Tags](#423-seo-tags-and-meta-tags)
    - [4.2.4. Searching Systems](#424-searching-systems)
    - [4.2.5. Navigation Systems](#425-navigation-systems)
  - [4.3. Landing Page UI Design](#43-landing-page-ui-design)
    - [4.3.1. Landing Page Wireframe](#431-landing-page-wireframe)
    - [4.3.2. Landing Page Mock-up](#432-landing-page-mock-up)
  - [4.4. Web Applications UX/UI Design](#44-web-applications-uxui-design)
    - [4.4.1. Web Applications Wireframes](#441-web-applications-wireframes)
    - [4.4.2. Web Applications Wireflow Diagrams](#442-web-applications-wireflow-diagrams)
    - [4.4.3. Web Applications Mock-ups](#443-web-applications-mock-ups)
    - [4.4.4. Web Applications User Flow Diagrams](#444-web-applications-user-flow-diagrams)
  - [4.5. Web Applications Prototyping](#45-web-applications-prototyping)
  - [4.6. Domain-Driven Software Architecture](#46-domain-driven-software-architecture)
    - [4.6.1. Software Architecture Context Diagrams](#461-software-architecture-context-diagrams)
    - [4.6.2. Software Architecture Container Diagrams](#462-software-architecture-container-diagrams)
    - [4.6.3. Software Architecture Components Diagrams](#463-software-architecture-components-diagrams)
  - [4.7. Software Object-Oriented Design](#47-software-object-oriented-design)
    - [4.7.1. Class Diagrams](#471-class-diagrams)
    - [4.7.2. Class Dictionary](#472-class-dictionary)
  - [4.8. Database Design](#48-database-design)
    - [4.8.1. Database Diagram](#481-database-diagram)

- [Capítulo V: Product Implementation, Validation & Deployment](#capítulo-v-product-implementation-validation--deployment)
  - [5.1. Software Configuration Management](#51-software-configuration-management)
    - [5.1.1. Software Development Environment Configuration](#511-software-development-environment-configuration)
    - [5.1.2. Source Code Management](#512-source-code-management)
    - [5.1.3. Source Code Style Guide & Conventions](#513-source-code-style-guide--conventions)
    - [5.1.4. Software Deployment Configuration](#514-software-deployment-configuration)
  - [5.2. Landing Page, Services & Applications Implementation](#52-landing-page-services--applications-implementation)
    - [5.2.1. Sprint 1](#521-sprint-1)
      - [5.2.1.1. Sprint Planning 1](#5211-sprint-planning-1)
      - [5.2.1.2. Aspect Leaders and Collaborators](#5212-aspect-leaders-and-collaborators)
      - [5.2.1.3. Sprint Backlog 1](#5213-sprint-backlog-1)
      - [5.2.1.4. Development Evidence for Sprint Review](#5214-development-evidence-for-sprint-review)
      - [5.2.1.5. Execution Evidence for Sprint Review](#5215-execution-evidence-for-sprint-review)
      - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5216-services-documentation-evidence-for-sprint-review)
      - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5217-software-deployment-evidence-for-sprint-review)
      - [5.2.1.8. Team Collaboration Insights during Sprint](#5218-team-collaboration-insights-during-sprint)

<div style="page-break-after: always;"></div>

## Student Outcome

Cada miembro del equipo ha contribuido activamente en el desarrollo de competencias comunicativas tanto orales como escritas, esenciales para el trabajo colaborativo en un entorno profesional de desarrollo de software. A lo largo del proyecto, las entregas han permitido evidenciar mejoras continuas en la forma de transmitir ideas, validar hallazgos, y documentar decisiones técnicas. En el siguiente cuadro se detallan las acciones específicas de cada miembro del equipo en relación con las dimensiones del Student Outcome evaluado.

| **Criterio específico** | **Acciones realizadas** | **Conclusiones** |
|-------------------------|--------------------------|------------------|
| **Comunica oralmente con efectividad a diferentes rangos de audiencia.** | **Del Aguila Ayala, Ricardo Alejandro**<br>**TB1:** Trabajé en la arquitectura del software aplicando Domain-Driven Design. Redacté historias de usuario, lideré la implementación de la landing page y documenté técnicamente cada componente.<br>**TP:** Coordiné la documentación del Sprint 2, incluyendo el Sprint Planning, Backlog y evidencias técnicas.<br>**TB2:** Organicé entrevistas de validación y aseguré claridad en las instrucciones.<br>**TF:** Expuse los ajustes aplicados al backend y frontend, explicando su impacto en el producto final.<br><br>**Sánchez Manrique, Italo Ludwing**<br>**TB1:** Participé en la elaboración de User Persona, diagramas de flujo y prototipos web.<br>**TP:** Lideré la implementación de funcionalidades y colaboré en el Sprint Review.<br>**TB2:** Participé en las validaciones con usuarios y en la discusión de resultados.<br>**TF:** Colaboré en la presentación oral del cierre del proyecto, detallando los cambios funcionales.<br><br>**Machado Bracamonte, Ivo Marcelo**<br>**TB1:** Aporté en el diseño visual y prototipos de la landing page.<br>**TP:** Documenté vistas funcionales del frontend con evidencias gráficas.<br>**TB2:** Coordiné la presentación visual de las evidencias y resultados.<br>**TF:** Expliqué visualmente las mejoras aplicadas al diseño e interacción del usuario.<br><br>**Aliaga Aguirre, Ethan Matías**<br>**TB1:** Contribuí al diseño técnico de la landing page.<br>**TP:** Participé en el desarrollo del módulo correspondiente al bounded context.<br>**TB2:** Validé cambios técnicos según las entrevistas.<br>**TF:** Comunicado verbalmente los refinamientos aplicados al backend y sus motivaciones.<br><br>**Contreras Lopez, Leandro Saúl**<br>**TB1:** Configuré el entorno de desarrollo y gestioné el Product Backlog.<br>**TP:** Reestructuré mi carpeta y documenté evidencias funcionales.<br>**TB2:** Organicé las entregas y verifiqué el cumplimiento de criterios.<br>**TF:** Presenté verbalmente la integración final del sistema y la relación entre módulos. | **TB1:** El equipo demostró capacidad para expresar ideas técnicas de forma clara y eficaz, reforzando el trabajo grupal desde el inicio.<br>**TP:** La comunicación continua facilitó la coordinación de tareas, permitiendo adaptar el flujo de trabajo a las necesidades reales del equipo.<br>**TB2:** Se observó una mejora notable en la expresión verbal, especialmente al presentar resultados derivados de validaciones con usuarios.<br>**TF:** La exposición final mostró una evolución clara en la expresión oral técnica y colaborativa, con un lenguaje preciso, persuasivo y orientado a soluciones funcionales. |
| **Comunica por escrito con efectividad a diferentes rangos de audiencia.** | **Del Aguila Ayala, Ricardo Alejandro**<br>**TB1:** Redacté historias de usuario y documentación técnica.<br>**TP:** Coordiné la documentación del Sprint y los avances técnicos.<br>**TB2:** Sistematizé hallazgos de validación y redacté conclusiones.<br>**TF:** Revisé y corregí toda la documentación técnica del backend, asegurando coherencia narrativa y claridad técnica.<br><br>**Sánchez Manrique, Italo Ludwing**<br>**TB1:** Elaboré documentos UX y guías visuales.<br>**TP:** Documenté endpoints y definiciones funcionales.<br>**TB2:** Redacté análisis de entrevistas y resultados finales.<br>**TF:** Ajusté la documentación visual y de usabilidad, integrando flujos y criterios de diseño.<br><br>**Machado Bracamonte, Ivo Marcelo**<br>**TB1:** Documenté prototipos y estructura visual.<br>**TP:** Redacté entregables gráficos con anotaciones.<br>**TB2:** Elaboré recursos visuales y descripciones detalladas.<br>**TF:** Refiné los diagramas y explicaciones del frontend para su publicación final.<br><br>**Aliaga Aguirre, Ethan Matías**<br>**TB1:** Registré convenciones técnicas en el repositorio.<br>**TP:** Documenté pruebas e integración backend.<br>**TB2:** Redacté mejoras técnicas post-validación.<br>**TF:** Realicé ajustes en la documentación de código y pruebas unitarias.<br><br>**Contreras Lopez, Leandro Saúl**<br>**TB1:** Documenté el entorno inicial y el Product Backlog.<br>**TP:** Estructuré los entregables técnicos y su formato.<br>**TB2:** Consolidé archivos y redacté entregables finales.<br>**TF:** Organicé toda la documentación final del proyecto, mejorando la legibilidad y el formato para la entrega formal. | **TB1:** La escritura técnica estableció una base sólida y clara desde el inicio del proyecto, definiendo convenciones útiles para todo el equipo.<br>**TP:** Permitió alinear criterios de implementación y definir responsabilidades claras, mejorando el trabajo colaborativo.<br>**TB2:** Se consolidó una redacción profesional que facilitó la documentación de validaciones y hallazgos críticos para el cierre.<br>**TF:** La documentación final integró de forma coherente todos los módulos, mostrando una mejora significativa en estructura, estilo y precisión técnica. El equipo logró un lenguaje escrito maduro, técnico y adaptado a distintas audiencias. |



<hr>

<div style="page-break-after: always;"></div>

## Capítulo I: Introduction

Este capítulo proporciona una visión general del proyecto, incluyendo la problemática abordada, los objetivos planteados, la motivación del equipo y el alcance de la solución propuesta. Se establece el contexto en el que surge la necesidad de la plataforma ElectroLink, y se justifica su relevancia para los usuarios objetivo y el entorno actual.

### 1.1. Startup Profile

#### 1.1.1. Descripción de la Startup
HampCoders es una startup innovadora que se enfoca en el desarrollo de soluciones empleando una arquitectura orientada a servicios, haciendo uso de tecnologías open-source. Mediante esta startup, buscamos lograr conectar a los proveedores de componentes eléctricos con posibles clientes. Es por ello que presentamos el proyecto ElectroLink.

**Misión:**
Nuestra misión es desarrollar una solución tecnológica innovadora que permita a las personas contactar con empresas proveedoras especializadas en electrónica, para prevenir o solucionar problemas en instalaciones eléctricas de manera efectiva, segura y legalmente correctas.

**Visión:**
Nuestra visión es convertirnos en líderes globales en el desarrollo de tecnologías y plataformas eficientes y escalables, proporcionando herramientas que permitan conectar a los usuarios y empresas con proveedores especializados, para prevenir o solucionar instalaciones eléctricas ineficientes, transformando el entorno brindando calidad y seguridad.

#### 1.1.2. Perfiles de Integrantes del Equipo

| Miembros del equipo                             | Codigo Estudiante | Descripcion            |
| ----------------------------------------------- | ----------------- | ---------------------- |
| Italo Ludwing Sanchez Manrique	![Imagen del compañero](https://i.imgur.com/R1iMW0N.png)   | U202316967            | Mi nombre es Italo Ludwing Sanchez Manrique, soy estudiante de Ingeniería de Software en la UPC, tengo 19 años y actualmente curso el tercer ciclo académico. Destaco por mi perseverancia, tolerancia y compromiso con mis metas. En este proyecto, mi objetivo es buscar soluciones que beneficien al grupo, ya que tengo experiencia en trabajar de forma proactiva y colaborativa. Además, poseo sólidos conocimientos en lenguajes de programación como Java y C++. | 
| Ethan Matias Aliaga Aguirre	![Imagen del compañero](https://i.imgur.com/AX80xyV.jpeg)   | U202318323            | Soy Ethan Matias Aliaga Aguirre, estudiante de 5to ciclo de Ingeniería de Software en la UPC, sede San Miguel. Me caracterizo por mi compromiso, responsabilidad, habilidad para trabajar en equipo y comunicación. Mis conocimientos Incluyen arquitectura de Software , desarrollo de APIs y Experiencias Web Full Stack. Además, tengo experiencia en el uso de herramientas como Photoshop, Filmadora y Vegas Studio, lo que me permite aportar con soluciones creativas y técnicas en mis proyectos. Estoy comprometido con mi crecimiento personal y profesional, siempre buscando aprender y mejorar en cada oportunidad que se presente. | 
| Leandro Saúl Contreras Lopez	![Imagen del compañero](https://i.imgur.com/pGU3ER2.jpeg)   | U20231E215            | Mucho gusto, soy Leandro Contreras, estudiante de la carrera de Ingeniería de Software en la UPC, sede San Miguel, tengo 19 años y estoy cursando el quinto ciclo académico. Me considero una persona adaptativa, perseverante y comprometida con lo que me propongo. En este proyecto tengo como objetivo buscar múltiples soluciones que beneficien a todo el grupo, por experiencia propia suelo trabajar de manera colaborativa y eficaz. Terminando la carrera de ingeniería, me gustaría estudiar una segunda carrera: Gastronomía y Gestión culinaria | 
| Ivo Marcelo Machado Bracamonte	![Imagen del compañero](https://i.imgur.com/n8LhONl.png)   | U20231C368            | Mi nombre es Ivo Machado, tengo 19 años, soy estudiante y actualmente estudio en el quinto ciclo de ingeniería de software en la UPC. Mis fuertes son la mentalidad, no me rindo con facilidad y no le tengo miedo al error, tengo empatía con los demás, me gusta resolver problemas y siempre intento mejorar en lo que hago y seguir aprendiendo. Tengo conocimientos del lenguaje de programación C++, Java y un poco de Python, HTML, CSS y JavaScript, también domino el Inglés y sé Portugués. | 
| Ricardo Alejandro del Agula Ayala	![Imagen del compañero](https://i.imgur.com/c731kt4.png)   | U202318323            | Mi nombre es Ricardo Alejandro Del Aguila Ayala, tengo 19 años y, actualmente, estoy cursando el cuarto ciclo de la carrera de Ingeniería de Software en la UPC. Al culminar, me gustaría especializarme en la ciberseguridad. Me considero una persona proactiva en todos los ámbitos. Asimismo, alguien que siempre está dispuesta a entregar lo mejor de sí para lograr un buen trabajo en equipo. Tengo experiencia en el lenguaje de programación C + +, Python, así como en Excel. Asisto a la iglesia, en donde formó parte de varias comunidades. Por ello, tengo una vasta experiencia en el trabajo en equipo, que puede permitir que asuma el liderazgo de este proyecto. | 


<hr>

### 1.2. Solution Profile
ElectroLink es una solución que busca conectar proveedores de componentes o servicios electrónicos con potenciales clientes que necesiten asesoramiento para realizar mantenimientos preventivos en sus hogares u oficinas. Nuestra plataforma busca exhibir a los proveedores con el fin de resolver la desconexión entre proveedores de componentes eléctricos y el mercado real y garantizar servicios seguros y eficientes dentro de los parámetros legales para los clientes dueños de hogares y PYMES.

<hr>

<hr>

#### 1.2.1. Antecedentes y Problemática (usando The 5W'S y 2 'H's)
Con el propósito de obtener una comprensión más profunda de las necesidades de nuestros usuarios, hemos investigado sus antecedentes históricos y los desafíos que enfrentan mediante la metodología de las 5W`S y 2H`S. Este enfoque nos asegura que la información recopilada sea pertinente y nos permita desarrollar soluciones precisas y eficaces que satisfagan sus necesidades.

**What (Qué)**  
- ¿Cuál es el problema?
El problema radica en la dificultad que afrontan los usuarios al momento de encontrar proveedores técnicos eléctricos eficientes, seguros y certificados en base a las especificaciones que requieren según su situación. Esta situación puede agravarse por la falta de formación formal y de plataformas que garanticen la calidad del servicio, dentro de los parámetros establecidos por el gobierno.

- ¿Cuál es la relación con la persona en cuestión?
Este proyecto está directamente relacionado con los usuarios objetivo, puesto que actúa como intermediario entre estos y el proveedor del servicio de una manera rápida y efectiva. De la misma manera, se optimiza el tiempo de respuesta, garantizando que los problemas se resuelvan de forma eficiente, sin comprometer la calidad del servicio.


**When (Cuando)**  
- ¿Cuándo sucede el problema?
Los problemas relacionados con la dificultad de contactar con proveedores de garantía se manifiestan en situaciones como cortes de electricidad, costos de luz, instalaciones defectuosas o fuera de los parámetros legales, problemas con tomacorrientes, o incluso antes de una remodelación donde se necesita prevenir sobrecargas.

- ¿Cuándo utiliza el cliente el producto?
Lo usa en momentos críticos, cuando el fallo ya ocurrió, o de forma preventiva antes de hacer una instalación eléctrica o compra de componentes, de forma específica según  la situación a la que se enfrentan. 


**Where (Dónde)**  
- ¿Dónde está el cliente cuando usa el producto?
La solución puede ser usada por los usuarios en cualquier momento y lugares con alta demanda eléctrica, incluyendo así a usuarios independientes o empresas.

- ¿A dónde se dirige?
La solución está dirigida a aquellos usuarios que deseen prevenir problemas eléctricos asegurándose de obtener una instalación correcta y dentro de los parámetros permitidos, así como los que buscan solucionar algún problema eléctrico que se presente.

- ¿Dónde surge el problema?
Este problema ocurre en lugares con alta demanda eléctrica, como por ejemplo: hogares, centros educativos, oficinas, centros comerciales, entre otros, donde la sobrecarga o fallos eléctricos pueden generar inconvenientes significativos.

#### 1.2.1. Antecedentes y Problemática (usando The 5W'S y 2 'H's)

**Who (Quién)**
- ¿Quiénes están involucrados?
  Equipo: Aquellos encargados del desarrollo y soporte técnico de la solución, responsables de mantener y mejorar el sistema, asegurando un funcionamiento óptimo y la calidad del servicio.
  Usuarios: Aquellos que buscan soluciones ante problemas eléctricos o realizar instalaciones de manera segura.
  Proveedores: Aquellos que ofrecen servicios eléctricos, como componentes y/o instalaciones.

- ¿A quiénes le sucede el problema?
  Propietarios de viviendas: Aquellos que enfrentan fallos inesperados por problemas eléctricos o necesitan instalaciones de forma segura y eficiente en sus hogares.
  Propietarios de negocios y empresas: Los encargados de gestionar y renovar lugares con alta demanda eléctrica, que requieren soluciones fiables para sus instalaciones y/o operaciones diarias.
  Centros educativos: Instituciones que requieren mantener sus instalaciones eléctricas en óptimas condiciones, para garantizar la seguridad del alumnado y personal.

- ¿Quién lo utilizará?
  El producto se dirige a una amplia gama de personas, entre las cuales destacan el cliente final y el proveedor del servicio.El cliente final busca una solución rápida y confiable para sus problemas eléctricos, mientras que el proveedor del servicio se beneficia al obtener nuevos clientes y mejorar su visibilidad.


**Why (Por qué)**
- ¿Cuál es la causa del problema?
  La falta de plataformas que conecten de manera eficiente a proveedores eléctricos con usuarios, sumado a la poca formalización del rubro. Los usuarios a menudo no saben cómo identificar técnicos confiables, lo que incrementa el riesgo de contratar profesionales no calificados. Además, el mal manejo de instalaciones eléctricas es una preocupación constante, generando riesgos frecuentes para la seguridad.


**How (Cómo)**
- ¿En qué condiciones los clientes usan nuestro producto?
  Se usa en situaciones donde requieren una solución eficiente y confiable para problemas eléctricos, ya sea durante una emergencia o de manera preventiva antes de una instalación. La solución se emplea en entornos domésticos o laborales.

- ¿Cómo nos conocieron los compradores?
  Nos conocieron a través de campañas de marketing digital, recomendaciones de amigos, búsquedas en internet sobre soluciones rápidas para problemas eléctricos y publicidad en redes sociales.

- ¿Cómo prefieren los lectores acceder a nuestro contenido?
  Los usuarios prefieren acceder a nuestra solución a través de una plataforma web o aplicación móvil, de fácil navegación y diseño intuitivo, que les permita conectarse con proveedores de servicio eléctrico en cualquier momento y lugar.

- ¿Qué llevó a la persona a llegar a esta situación?
  Cuando enfrenta un problema eléctrico, ya sea por una falla inesperada o por la necesidad de realizar una instalación, se encuentra en la búsqueda de soluciones rápidas, confiables y certificadas para evitar riesgos y asegurar el correcto funcionamiento de las instalaciones eléctricas.

**How much (Cuánto)**
- En 2021, el 45,3% de los hogares con acceso a la red pública de energía eléctrica experimentaron cortes o interrupciones.
- En 2021, el 45,3% de los hogares con acceso a la red pública de energía eléctrica experimentaron cortes o interrupciones.
- Estudios indican que departamentos como Áncash, Arequipa, Cusco, Huánuco, Madre de Dios, Pasco y Puno presentan altos porcentajes de hogares con experiencias negativas en la calidad del servicio eléctrico.
- En 2022, la frecuencia promedio de interrupciones fue de 9,8 veces, con mayor incidencia en el segmento de distribución eléctrica.

<hr>

#### 1.2.2. Lean UX Process
Según Pragma (2021), el proceso Lean UX es la mezcla de metodologías ágiles y temas de usabilidad, donde se prioriza la experiencia de usuario por la creación de un producto. Teniendo en cuenta ello, hemos elaborado nuestro Lean UX process basándonos en sus cuatro pilares principales: problem statements, assumptions, hypothesis y canvas.

<hr>

<hr>

#### 1.2.2.1. Lean UX Problem Statements
**Problem Statement#1** <br>
Nuestra plataforma busca conectar a dueños de hogares urbanos con proveedores técnicos eléctricos certificados, garantizando servicios seguros y eficientes dentro de los parámetros legales.

Hemos identificado que los dueños de hogares urbanos enfrentan dificultades para encontrar proveedores confiables, lo que genera riesgos en sus instalaciones y retrasos en la solución de problemas críticos.Esta situación no solo pone en riesgo la seguridad de hogares y negocios, sino que también genera costos adicionales por reparaciones mal ejecutadas y pérdidas económicas por interrupciones prolongadas.

Ante este desafío, surge la pregunta: ¿Cómo podemos garantizar que los usuarios encuentren proveedores eléctricos certificados de manera rápida y confiable, reduciendo riesgos y mejorando la eficiencia en la solución de problemas?

**Problem Statement #2** <br>
Nuestra plataforma busca resolver la desconexión entre proveedores de componentes eléctricos y el mercado real, eliminando la dependencia de canales informales y recomendaciones causales que limitan su crecimiento.

Hemos identificado que los proveedores de componentes eléctricos enfrentan dificultades para encontrar clientes de forma constante, lo que genera un aumento considerable de informalidad en el sector eléctrico.Esta situación los obliga a operar con márgenes reducidos debido a la competencia desleal de productos pirata o de baja calidad. Muchos dependen exclusivamente de ventas por recomendación o redes sociales, sin acceso a herramientas profesionales de gestión comercial.

Ante este desafío, surge la pregunta clave: ¿Cómo podemos crear un puente digital que permita a los proveedores de componentes eléctricos ampliar su mercado, garantizar ventas recurrentes y competir en igualdad de condiciones, rompiendo así el ciclo de informalidad en el sector?

<hr>

<hr> 

#### 1.2.2.2. Lean UX Assumptions
**Business Outcomes:**  
1. Mis clientes necesitan una solución efectiva y accesible para conectar con proveedores de calidad que les den los productos tecnológicos y eléctricos que requieren en la instalación eléctrica que quieren colocar o corregir.

2. Estas necesidades se pueden resolver con una solución tecnológica que aproveche los avances de software en avances de análisis de datos, plataformas digitales como una web distribuida bajo una arquitectura orientada a servicios realizada con tecnologías open-source, para facilitar la conexión entre clientes y proveedores.

3. Mis clientes iniciales serán propietarios de viviendas, propietarios de negocios y empresas y centros educativos que requieren soluciones rápidas y seguras para sus problemas eléctricos.

4. El valor número 1 que un cliente quiere de mi servicio es la garantía de contar con proveedores eléctricos certificados y seguros, que puedan brindar confianza, cumplimiento normativo y atención oportuna, a través de una plataforma confiable y de alta calidad técnica.

5. El cliente también puede obtener estos beneficios adicionales: reducción de riesgos eléctricos, ahorro de tiempo al evitar búsquedas extensas, seguridad de contratar personal con respaldo, posibilidad de programar servicios preventivos y seguimiento del servicio en tiempo real.

6. Vamos a adquirir la mayoría de los clientes a través de estrategias de marketing digital, incluyendo redes sociales, publicidad segmentada, campañas de correo electrónico, e invitaciones a posibles usuarios a conferencias, charlas informativas y eventos de lanzamiento.
7. Haré dinero a través de suscripciones mensuales pagadas por los proveedores, quienes tendrán acceso exclusivo a nuestra red de usuarios, lo que les permitirá ofrecer sus servicios de manera directa y personalizada dentro de la plataforma, maximizando su visibilidad y generando oportunidades de negocio.

8. Mi competencia principal en el mercado serán empresas establecidas como Thumbtack, Handy y TaskRabbit, los cuales ofrecen un medio que conecta a clientes con profesionales en diversas áreas, incluyendo la eléctrica.

9. Los venceremos debido a nuestro enfoque único en la verificación rigurosa de técnicos certificados, asegurando la seguridad y confiabilidad de cada servicio. Además, ofrecemos una experiencia personalizada que se adapta a las necesidades específicas de cada usuario, brindando soporte en tiempo real para resolver dudas y ofrecer soluciones inmediatas en momentos críticos. Todo esto, complementado con una plataforma fácil de usar.

10. Mi mayor riesgo es que los usuarios desconfíen del servicio o que los proveedores no cumplan con los estándares prometidos, afectando la reputación de la plataforma.

11. Resolveremos esto a través de un riguroso proceso de validación de proveedores, con revisión de certificaciones, calificaciones públicas, sistema de penalización a técnicos mal evaluados y atención al cliente activa, teniendo en cuenta las restricciones legales en instalaciones eléctricas.

12. ¿Qué otras suposiciones tenemos?<br>
Otras suposiciones que debemos considerar incluyen la disponibilidad de proveedores dispuestos a suscribirse a nuestra plataforma, la capacidad de escalar el servicio a nivel regional o nacional, y la aceptación de los usuarios de la plataforma como una alternativa confiable y preferida frente a métodos tradicionales de búsqueda de proveedores eléctricos. <br> <br>
¿Eso, si se prueba que es falso, causará que nuestro negocio / proyecto no funcione? <br>
Si estas suposiciones resultan ser falsas, podríamos enfrentar obstáculos importantes. Si no logramos atraer suficientes proveedores, la plataforma no sería atractiva ni útil para los usuarios, lo que pondría en riesgo nuestra capacidad de ofrecer un servicio integral. Si la aceptación de la plataforma no es lo suficientemente alta, perderíamos relevancia frente a métodos tradicionales, lo que podría limitar nuestro crecimiento.

**Users:**  
Nuestros usuarios principales son:
- Propietarios de hogares urbanos
- Dueños PYMES u oficinas
- Proveedores de componentes o servicios eléctricos certificados

**User Outcomes:**  
**¿Quién es el usuario?**
-   Nuestros usuarios principales son propietarios de hogares urbanos, dueños PYMES u oficinas y proveedores de componentes o servicios eléctricos certificados.

**¿Qué problemas tiene nuestro producto y cómo se pueden resolver?**
-   Hemos detectado 2 posibles problemas , el primero es la dificultad por parte de los propietarios y dueños de PYMES u oficinas para encontrar proveedores confiables dado que no ofrecen las garantías necesarias.Por otro lado, el segundo problema identificado va por parte de los proveedores de componentes o servicios electricos ya que  enfrentan dificultades para encontrar clientes de forma constante.El primer problema se resolvería por medio de nuestra plataforma que mostrará y recomendará a proveedores certificados que se adecuen a las necesidades del usuario.El segundo problema se resolvería por medio de la exposición que le brindaremos a los proveedores en nuestra plataforma permitiéndole conectarse con potenciales clientes.


**¿Qué características son importantes?**

-   **Para propietarios y dueños de PYMES u oficinas:** 
    - Búsqueda y filtrado de técnicos certificados. 
    - Sistema de reseñas y calificaciones transparente.
    - Opción de programación de servicios preventivos.
    - Seguimiento en tiempo real del servicio.
    - Información sobre consumo eficiente.

-   **Para proveedores:**
    - Perfil verificable con certificaciones.
    - Acceso a una red de clientes potenciales.
    - Herramientas de gestión (agenda, historial de servicios, pagos integrados).
    - Notificaciones de oportunidades de trabajo.
    - Protección contra la competencia desleal.
    

**¿Dónde encaja nuestro producto en su trabajo o vida?**

**Nuestro producto es utilizado:**

- Cuando los propietarios de hogares enfrentan problemas eléctricos urgentes, necesitan mantenimiento preventivo o requieren asesoría para optimizar el consumo de energía. La plataforma evita el estrés de buscar técnicos de manera informal y les da seguridad al garantizar que los proveedores están validados.

- En el caso de proveedores de componentes o servicios eléctricos, la plataforma se integra como su principal canal de clientes, reemplazando métodos tradicionales como el boca a boca o las redes sociales. Les permite gestionar su negocio de manera más profesional, aumentar su visibilidad y acceder a oportunidades de negocio recurrentes sin depender de la informalidad.


**¿Cuándo y cómo es usado nuestro producto?**

**Propietarios y dueños de PYMES u oficinas:**  
- **Cuándo:** En emergencias eléctricas, mantenimiento preventivo o al necesitar asesoría técnica.  
- **Cómo:** Acceden a la plataforma, buscan técnicos cercanos, comparan perfiles, contratan y califican el servicio.  

**Proveedores:**  
- **Cuándo:** Cuando buscan nuevos clientes o gestionan sus servicios.  
- **Cómo:** Crean su perfil verificable, reciben solicitudes, gestionan citas y pagan suscripciones por acceso premium.  

**¿Cómo debe verse nuestro producto y cómo comportarse?**
-Se utiliza en momentos críticos (fallas, cortes de electricidad, sobrecargas) y también de forma preventiva (remodelaciones, instalación de nuevos equipos, revisiones anuales).Asimismo , se puede acceder desde dispositivos móviles o web, en el hogar, oficina o incluso en movimiento.También podría ser usado rápidamente cuando se requiere soporte urgente, o planificadamente para programar servicios.

<hr>
<hr>

#### 1.2.2.3. Lean UX Hypothesis Statements
**Creemos que** al ofrecer una plataforma digital que verifique rigurosamente a técnicos eléctricos, los propietarios de hogares urbanos y dueños de PYMES u oficinas confiarán en nuestro servicio para resolver sus problemas eléctricos de manera rápida y segura.

**Sabremos que** hemos tenido éxito cuando el 70% de los usuarios que contratan un servicio a través de la plataforma lo califican con 4 o 5 estrellas, demostrando satisfacción con la calidad y confiabilidad de los proveedores.

**Creemos que** los proveedores de servicios eléctricos se suscribirán a nuestra plataforma si les garantizamos acceso a clientes recurrentes y herramientas profesionales de gestión (agenda, pagos, historial).

**Sabremos que** hemos tenido éxito cuando el 60% de los proveedores en prueba gratuita se conviertan en suscriptores pagos y mantengan una tasa de renovación superior al 80% después de 3 meses.


**Creemos que** al conectar usuarios con técnicos certificados, disminuirán los problemas eléctricos recurrentes en sus hogares o negocios.

**Sabremos que** hemos tenido éxito cuando los usuarios reportan una "mejoría notable" en sus instalaciones y prevenciones eléctricas después de usar servicios de la plataforma.Los casos de "reparaciones mal hechas" mencionados por usuarios disminuyen significativamente en los comentarios.


**Creemos que** los usuarios encontrarán más conveniente usar nuestra plataforma que buscar recomendaciones personales o técnicos por redes sociales.

**Sabremos que** hemos tenido éxito cuando los usuarios expresan que la plataforma les "ahorra tiempo" en comparación con buscar técnicos por su cuenta.Más de la mitad de los usuarios activos prefieren la plataforma para futuras necesidades eléctricas.

**Creemos que** la plataforma puede expandirse a regiones con altos índices de informalidad en servicios eléctricos, replicando el éxito del mercado inicial.

**Sabremos que** hemos tenido éxito cuando nuevas ciudades alcancen el 60% del volumen de transacciones de la región pionera en un plazo de 6 meses, con un crecimiento orgánico del 20% mensual.

<hr>

<hr>

#### 1.2.2.4. Lean UX Canvas
<img src="https://i.imgur.com/OD3PmHm.png"/>

<hr>

<hr>

### 1.3. Segmentos Objetivos

Nuestros usuarios principales son propietarios de hogares urbanos, dueños PYMES u oficinas y proveedores de componentes o servicios eléctricos certificados

**Segmento objetivo #1: Propietarios de hogares urbanos**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 25 y 60 años
- Nivel socioeconómico: Medio a Medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que viven: Urbana, en ciudades de tamaño medio a grande
- Residen principalmente en: Zonas residenciales o condominios dentro de áreas urbanizadas
  
Aspectos psicográficos:

- Valoran el confort, la eficiencia y la seguridad en el hogar.
- Buscan soluciones tecnológicas que optimicen el uso de recursos eléctricos.
- Tienen interés en el mantenimiento preventivo y la mejora continua de sus viviendas.

**Segmento objetivo #2: Dueños PYMES u oficinas**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 28 y 55 años
- Nivel socioeconómico: Medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que viven: Urbana
- Residen principalmente en: Zonas residenciales o condominios dentro de áreas urbanizadas
  
Aspectos psicográficos:

- Buscan optimizar los costos operativos y mejorar la eficiencia de sus instalaciones.
- Valoran soluciones tecnológicas que automaticen procesos de búsqueda y compra de componentes eléctricos para reducir y optimizar el consumo de recursos.
- Tienen mentalidad emprendedora y están abiertos a innovaciones que les den ventaja competitiva.

**Segmento objetivo #3: Proveedores de componentes o servicios eléctricos certificados**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 25 y 55 años
- Nivel socioeconómico: Medio a medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que trabajan: Urbana, semi urbana e industrial
- Residen principalmente en: Regiones con alta demanda de servicios eléctricos (ciudades en expansión, polos industriales, etc.)
  
Aspectos psicográficos:

- Buscan aumentar su visibilidad y captar más clientes de forma digital.
- Están interesados en plataformas que les faciliten la gestión de pedidos o contactos comerciales.
- Valoran pertenecer a una red confiable de profesionales del rubro eléctrico.
- Están enfocados en el crecimiento profesional y la fidelización de clientes.

<hr>

<div style="page-break-after: always;"></div> 

## Capítulo II: Requirements Elicitation & Analysis

Aquí se describe el proceso de levantamiento y análisis de requerimientos funcionales y no funcionales del sistema. Incluye las técnicas utilizadas (entrevistas, encuestas, historias de usuario), los perfiles de usuario identificados y las prioridades del negocio. Se documentan las necesidades desde la perspectiva de los stakeholders, con énfasis en la trazabilidad y validación de requisitos clave.

### 2.1. Competidores

Hoy en día el competitivo mercado digital en la contratación de servicios, existen diversas empresas importantes que ofrecen soluciones en áreas como reparaciones, mantenimiento y tareas domésticas. Entre los competidores más destacados se encuentran Thumbtack, Handy y TaskRabbit

* **Thumbtack:**

Es una plataforma en línea que conecta a personas que necesitan servicios locales con profesionales que los ofrecen. Funciona como un marketplace donde puedes buscar desde plomeros, electricistas entre muchos otros.

Así es como funciona:

1. El cliente publica un proyecto explicando qué necesita

2. Los profesionales que están registrados en esa categoría y área geográfica reciben una notificación.

3. Los profesionales interesados envían cotizaciones o propuestas al cliente.

4. El cliente elige al profesional que mejor se adapte a su presupuesto y necesidades.

Es popular en Estados Unidos y suele ser útil para freelancers y pequeñas empresas

* **Handy:**

A diferencia de Thumbtack, Handy no te muestra varios profesionales para que elijas, sino que ellos se encargan de asignarte uno basado en disponibilidad y ubicación.

Especialidad: Servicios para el hogar (limpieza, montaje de muebles, plomería, electricidad, mudanzas, etc.).

Cómo funciona: Los clientes reservan directamente desde la app o el sitio web, eligen fecha/hora y el servicio que necesitan, y Handy asigna automáticamente a un profesional disponible.

Ubicación: Opera principalmente en EE. UU., Canadá y Reino Unido.

* **TaskRabbit:**

Es una plataforma donde puedes contratar “taskers” (personas que hacen tareas). Estos operan un mercado en línea que con la demanda local, permite a las personas encontrar ayuda con tareas que incluyen:

\+Montaje de muebles (especialmente de IKEA, ya que tienen una alianza).

\+Mudanzas y cargado de cosas pesadas.

\+Limpieza.

\+Reparaciones menores en el hogar.

\+Hacer compras o entregas.

\+Colgar cuadros, instalar estanterías, etc.

Cómo funciona TaskRabbit: 

1. Buscas el tipo de tarea que necesitas hacer.

2. Elige a un tasker basado en su perfil, tarifas por hora, y reseñas.

3. Agendas el servicio directamente con esa persona, eligiendo la fecha y la hora.

4. Pagas a través de la plataforma cuando el trabajo está completo.

<hr>

<hr>

### 2.1.1. Análisis competitivo

| Competitive Analysis Landscape |  |  |  |  |  |
| ----- | :---- | :---- | :---- | :---- | :---- |
| ¿Por qué llevar a cabo este análisis |  | Porque  necesitamos identificar fortalezas, debilidades y diferenciadores clave frente a plataformas similares para definir la estrategia competitiva de ElectroLink. |  |  |  |
|  |  |  Necesitamos Adaptarnos a las tendencias del mercado |  |  |  |
|   |   | ElectroLink | Thumbtack | Handy | TaskRabbit |
| Perfil | Overview |  Plataforma especializada en instalaciones y mantenimiento eléctrico legal y seguro. Conecta a clientes con proveedores certificados, ofreciendo asesoría técnica, prevención de riesgos y seguimiento en tiempo real.  |  Marketplace general de servicios donde los usuarios pueden encontrar profesionales para tareas como reparaciones |  Plataforma centrada en tareas del hogar como limpieza, montaje de muebles y algunas reparaciones menores |  Conecta personas con taskers para tareas del hogar como mudanzas, reparaciones menores, compras y más. |
|  | Ventaja competitiva ¿Qué valor ofrece a los clientes? | Instalaciones y mantenimiento eléctrico general con proveedores certificados. Servicio legal, seguro y con asesoría técnica. | Ofrece una amplia variedad de servicios, pero sin enfoque especializado. | Servicios de hogar bajo demanda. Asignación automática. | Contratación rápida para tareas específicas, con perfiles seleccionables. |
| Perfil de Marketing | Mercado objetivo | Hogares, oficinas, escuelas y PYMES urbanas que requieren instalaciones o mantenimiento eléctrico confiable. |  Clientes generales que necesitan servicios variados (hogar, eventos, clases, etc.). |  Personas que requieren limpieza, montaje o reparaciones domésticas. |  Hogares que requieren tareas prácticas como mudanza, limpieza, montaje, etc. |
|  | Estrategias de marketing |  Alianzas con proveedores certificados, educación sobre mantenimiento eléctrico. |  Publicidad digital, visibilidad en buscadores, reviews de usuarios. |  Integración con IKEA, marketing por conveniencia y rapidez. |  Visibilidad en buscadores con una app amigable y con integración con IKEA |
| Perfil de productos | Productos & Servicios | Instalación de componentes, mantenimiento general, diagnósticos técnicos y asesoría normativa. |  Servicios generales (fotografía, plomería, eventos, clases, etc.). |  Limpieza, fontanería, montaje, electricidad básica, mudanza. |  Montaje de muebles, limpieza, ayuda con tareas, mudanza. |
|  | Precios y Costos |  Costos por servicio y suscripción mensual para monitoreo/prevención. | Los profesionales establecen precios. Thumbtack cobra parte de la comisión |  Precio fijo por servicio. Handy toma parte de la comisión. |  Costo por hora según la tarea deseada. Taskrabbit cobra una comisión al profesional. |
|  | Canales de distribución (Web y/o Móvil) |  Plataforma web \+ app móvil (foco en experiencia técnica y educativa) |  Web \+ app móvil. |  Web \+ app móvil. |  Web \+ app móvil. |
| Análisis SWOT | Fortalezas | Especialización en electricidad, asesoría legal, prevención de riesgos y red de técnicos certificados. |  Variedad de servicios, alta visibilidad, gran base de usuarios. |  Rapidez de reserva por sus procesos automatizados. |  Facilidad para elegir trabajadores, buena reputación por las tareas simples. |
|  | Debilidades | Somos nuevos en el mercado y tenemos una dependencia de proveedores certificados: |  No tiene enfoque especializado, experiencia muy generalista. Puede ser complicado encontrar personal especializado. | Tiene poca personalización al ser todo generalmente automático |  Algunos trabajadores no están certificados. Esto puede variar la calidad de los servicios. |
|  | Oportunidades |  Alianzas con aseguradoras, certificaciones oficiales, posible expansión a smart energy, estos servicios están poco atendidos. |  Ampliar a servicios técnicos más especializados. |  Mejorar procesos de selección de profesionales a través de una expansión hacia servicios técnicos especializados. |  TaskRabbit podría asociarse con marcas de smart home (como Google Nest, Philips Hue, etc.) para ofrecer instalación y soporte técnico |
|  | Amenazas |  Falta de confianza inicial. Si no se mantiene un buen control o evaluación a los proveedores eléctricos puede afectar la experiencia del cliente. |  Tiene una gran saturación del mercado y competencia entre profesionales. |  Problemas con calidad inconsistente del servicio dado que los usuarios no eligen al profesional |  Cada vez más personas contratan técnicos y ayudantes directamente por redes como Facebook Marketplace. Lo que hace más difícil estar en el mercado. |

<hr>

<hr> 

#### 2.1.2. Estrategias y tácticas frente a competidores

Para lograr enfrentar a nuestros competidores como Thumbtack, Handy y TaskRabbit. Nuestro proyecto ElectroLink tendrá una serie de estrategias y tácticas sobre la calidad del servicio, confianza, y especialización en el sector de servicios electrónicos y de mantenimiento.

#### **1\. Estrategia de diferenciación especializandonos en sistemas eléctricos**

Plataformas como Thumbtack y TaskRabbit, que abarcan una amplia gama de servicios, ElectroLink se enfocará en servicios de mantenimiento preventivo y reparación de sistemas eléctricos para hogares y empresas. Esta especialización nos permitirá destacar como una solución confiable en el mercado..

#### **2\. Garantía de seguridad y legalidad en todos los servicios**

ElectroLink implementará un sistema de certificación en el cual los proveedores que estén en la plataforma sean realizados por profesionales certificados y con licencias. Además, se garantizará que todos los servicios cumplan con los estándares legales y normativos del sector eléctrico.

#### **3\. Precios transparentes y competitivos**

A diferencia de Thumbtack, el cual utiliza un modelo de pago basado en leads, ElectroLink ofrecerá un modelo de precios transparente y competitivo donde los usuarios y proveedores tengan conocimiento sobre los costos. También se implementará un sistema de suscripción o tarifas planas para trabajos de mantenimiento preventivo, lo que brinda seguridad a los clientes.

<hr>

<hr>

### 2.2. Entrevistas
De acuerdo con Easwaramoorthy y Zarinpoush (2006), las entrevistas son un método de investigación, en el que se lleva a cabo “una conversación para recolectar información”. En esta, se realizan una serie de preguntas sobre el agente que queremos llegar a conocer mejor y profundizar en su sentir y punto de vista. Para HampCoders, la información recogida a través de las entrevistas es esencial para identificar cómo ElectroLink aportaría a solucionar el problema relacionado a la instalación y mantenimiento preventivo sobre el consumo de energía, en qué medida y en qué aspectos específicos. Por ello, realizamos un total de 3 entrevistas por segmento. Todas las entrevistas se realizaron a larga distancia (Google Meet, Zoom y Discord), y de manera presencial, en un espacio cómodo y silencioso y dentro del ámbito informal. 

<hr>

<hr>

#### 2.2.1. Diseño de entrevistas
**Segmento #1: Propietarios de hogares urbanos:**

**Preguntas principales:**
-   ¿Cómo te sientes normalmente cuando surge un problema eléctrico en tu casa, como un corte de luz o un tomacorriente que no funciona?
-   ¿Qué haces normalmente cuando necesitas encontrar a alguien que repare o revise una instalación eléctrica en tu hogar?
-   ¿Qué tan fácil o difícil te resulta encontrar técnicos eléctricos en quienes puedas confiar?
-   ¿Cuando has contratado un servicio eléctrico antes, ¿qué fue lo que más te preocupó?
-   ¿Qué cosas valoras más cuando contratas a alguien para que trabaje en tu casa (puntualidad, certificación, costo, rapidez)?
-   ¿Con qué frecuencia tomas medidas preventivas para evitar problemas eléctricos en tu hogar?
-   ¿Te ha pasado que una instalación mal hecha haya causado problemas luego? ¿Cómo lo resolviste?
-   ¿Qué importancia le das a que un servicio eléctrico esté dentro de los parámetros legales o normativos?
-   ¿Te interesaría usar una plataforma que conecte con proveedores verificados para servicios eléctricos en tu zona? ¿Por qué?
-   ¿Qué funcionalidades crees que harían esa plataforma útil para ti en el día a día?

**Preguntas complementarias:**
-   ¿Qué sueles buscar en internet cuando tienes dudas sobre una falla eléctrica?
-   ¿Cuánto confías en las recomendaciones de redes sociales o conocidos para encontrar técnicos?
-   ¿En qué momentos específicos crees que te sería más útil tener acceso rápido a un proveedor certificado?
-   ¿Te sentirías cómodo usando una plataforma para agendar mantenimientos eléctricos preventivos?

**Segmento #2: Dueños de PYMES u oficinas:**

**Preguntas principales:**
-   ¿Qué tipo de instalaciones eléctricas utilizas actualmente en tu negocio u oficina?
-   ¿Qué tan seguido te has enfrentado a fallas eléctricas en tus operaciones diarias?
-   ¿Cómo manejas actualmente el mantenimiento eléctrico de tu empresa? ¿Lo haces tú o lo delegas?
-   ¿Qué impacto tiene una falla eléctrica en tu productividad o en la atención al cliente?
-   ¿Qué criterios tomas en cuenta al contratar a un proveedor eléctrico para tu negocio?
-   ¿Has tenido malas experiencias con servicios técnicos eléctricos? ¿Qué aprendiste de esas situaciones?
-   ¿Qué tan importante es para ti que los proveedores cumplan con normativas legales y ofrezcan garantía?
-   ¿Te sentirías cómodo usando una plataforma que te conecte directamente con proveedores certificados?
-   ¿Qué funcionalidades esperarías de esa plataforma para que realmente te ayude a ahorrar tiempo y dinero?
-   ¿Crees que una herramienta así te daría una ventaja competitiva frente a otros negocios?

**Preguntas complementarias:**
-   ¿Qué sueles hacer cuando necesitas encontrar un componente eléctrico específico para tu empresa?
-   ¿Qué herramientas digitales usas actualmente para gestionar el mantenimiento o las instalaciones eléctricas de tu negocio?
-   ¿Dónde buscarías una solución que reduzca riesgos y mejore la eficiencia energética en tu negocio?
-   ¿Te sentirías más confiado si pudieras ver opiniones, calificaciones y certificaciones de los proveedores antes de contratarlos?

**Segmento #3: Proveedores de componentes o servicios eléctricos certificados:**

**Preguntas principales:**
-   ¿Cómo te sientes actualmente con la forma en que consigues clientes para tus servicios eléctricos?
-   ¿Qué estrategias usas para dar a conocer tu trabajo y atraer nuevos clientes?
-   ¿Qué dificultades enfrentas al competir con proveedores no certificados o informales?
-   ¿Qué tan fácil es para ti comunicar la calidad y legalidad de tu trabajo a los potenciales clientes?
-   ¿Cómo manejas la gestión de pedidos o solicitudes de trabajo actualmente?
-   ¿Qué importancia tiene para ti pertenecer a una red de profesionales avalados o certificados?
-   ¿Qué tanto te ayudaría una plataforma que te permita mostrar tu experiencia, certificaciones y opiniones de clientes?
-   ¿Estarías dispuesto a pagar una suscripción mensual si eso te garantiza mayor visibilidad y más clientes? ¿Por qué?
-   ¿Qué funcionalidades crees que te facilitarán la gestión comercial desde una app o plataforma?
-   ¿Cómo crees que cambiaría tu negocio si pudieras digitalizar la forma en que conectas con clientes?


**Preguntas complementarias:**
-   ¿Dónde públicas actualmente tus servicios (Facebook, grupos, WhatsApp, boca a boca)?
-   ¿Has probado plataformas para ofrecer tus servicios? ¿Cómo fue la experiencia?
-   ¿Qué herramientas digitales usas (si usas alguna) para organizar tus trabajos y pedidos?
-   ¿Qué tan dispuesto estarías a formar parte de una comunidad de proveedores certificados con estándares comunes?

<hr>

## 2.2.2 Segmentación de Entrevistas

### Segmento #1: Propietarios de hogares urbanos

**Entrevista: Mari Vallejos**  
- **Sexo:** Femenino  
- **Edad:** 30  
- **Link:** https://www.youtube.com/watch?v=nTeFYzyawYk
- **Inicia en:** 0:06  
- **Duración:** 6:35
  
<img src="https://i.imgur.com/4DuNuVf.png"/>

**Resumen:**  
Mari es ama de casa y pasa la mayor parte del tiempo en su hogar, lo que la hace responsable de todos los asuntos domésticos. Cuando surge un problema eléctrico, como un corte de luz o un enchufe dañado, experimenta ansiedad por no saber cómo resolverlo. Su reacción suele ser buscar ayuda en redes sociales, especialmente en Instagram o grupos vecinales, basándose en recomendaciones y comentarios.

Le preocupa que el servicio sea de calidad, que el proveedor sea puntual, rápido y comprometido, ya que valora que el problema se resuelva de manera eficaz. Sin embargo, no realiza mantenimientos preventivos por falta de conocimiento. Aunque sabe que las normativas legales son importantes, su prioridad es que el trabajo funcione bien.

Mari muestra interés en una plataforma como **ElectroLink**, siempre que incluya proveedores verificados y reseñas reales. Sugiere que la plataforma tenga filtros por experiencia, horario, costo y calificaciones para facilitar su uso.

---

### Segmento #2: Dueños de PYMES u oficinas

**Entrevista : Piero Tenorio**  
- **Sexo:** Masculino  
- **Edad:** 26  
- **Link:** https://www.youtube.com/watch?v=_z8UNTi_cmA
- **Inicia en:** 0:01  
- **Duración:** 9:54
<img src="https://i.imgur.com/9iDrwLt.png"/>

**Resumen:**  
Piero es dueño de una pequeña empresa de autopartes con varias sucursales. Su negocio depende de equipos eléctricos como computadoras, escáneres, cámaras de seguridad y luces. Las fallas eléctricas, aunque poco frecuentes, afectan la productividad al interrumpir los sistemas de inventario, lo cual puede hacer que los clientes se vayan.

Aunque intentó manejar el mantenimiento por sí mismo, ahora lo delega pero sin un plan definido. No realiza mantenimiento preventivo y reconoce que esto es un riesgo. También conoce casos de técnicos no confiables, por lo que valora servicios con garantía y cumplimiento normativo.

Está dispuesto a usar **ElectroLink** si ofrece proveedores certificados, reseñas, calificaciones y funcionalidades como el registro de consumo eléctrico, alertas de fallas y recomendaciones de mejora.


**Entrevista : Brian Cerna**  
- **Sexo:** Masculino  
- **Edad:** 25  
- **Link:** https://www.youtube.com/watch?v=m8Q_n7i_xEk
- **Inicia en:** 0:01  
- **Duración:** 6:16
<img src="https://i.imgur.com/SGDI7gr.png"/>

En esta entrevista se conversó con Brian Cerna, representante del sector de dueños de pymes u oficinas, con el objetivo de conocer su experiencia y necesidades respecto a las instalaciones eléctricas en su negocio. Brian indicó que en su oficina utilizan instalaciones eléctricas trifásicas, ya que requieren soportar la carga de equipos industriales como calderas, aire acondicionado, un sistema de lavandería, además del sistema de iluminación, el cual funciona con luces LED. También cuentan con un grupo electrógeno como respaldo para asegurar el funcionamiento continuo.

Respecto a las fallas eléctricas, señaló que no son frecuentes, pero sí preocupantes, ya que pueden afectar gravemente la operación diaria. Las más comunes incluyen cortes imprevistos, fallos en el tablero de distribución y problemas con los sistemas de climatización. En cuanto al mantenimiento eléctrico, comentó que suelen delegarlo a técnicos externos de confianza. Sin embargo, a veces enfrentan demoras o falta de disponibilidad inmediata, lo que genera complicaciones operativas.

Sobre el impacto de estas fallas en la productividad, Brian fue claro al decir que puede ser muy alto, ya que una interrupción puede dejar habitaciones sin energía y afectar la atención al cliente. A la hora de contratar un proveedor eléctrico, considera esencial revisar la experiencia comprobada, las certificaciones, la capacidad de respuesta las 24 horas, el cumplimiento de normas y un historial confiable con otros clientes. Aunque también buscan precios competitivos, nunca sacrifican la calidad del servicio.

Relató una mala experiencia pasada con un técnico no certificado que ofrecía rapidez, pero cuyo trabajo resultó poco duradero. Esta situación le enseñó que es mejor invertir en profesionales calificados, incluso si son más costosos, para evitar riesgos innecesarios. También destacó que para él es fundamental que los proveedores cumplan con normativas legales y ofrezcan garantía, ya que esto no solo asegura un trabajo bien hecho, sino que también protege legalmente al negocio y cumple con estándares de seguridad ante el público.

Brian expresó su interés en una plataforma que conecte directamente con proveedores certificados, ya que esto le ahorraría tiempo y facilitaría encontrar opciones confiables sin recurrir a métodos tradicionales. En cuanto a las funcionalidades deseadas en dicha plataforma, mencionó la posibilidad de filtrar por tipo de servicio, nivel de urgencia y ubicación del negocio.

Considera que una herramienta de este tipo podría ofrecerle una ventaja competitiva, ya que permitiría resolver problemas eléctricos con rapidez, mejorar la experiencia del cliente y reducir costos operativos. Cuando necesita encontrar componentes eléctricos específicos, suele comunicarse con proveedores conocidos, buscar en Google o WhatsApp, e incluso acudir a ferreterías especializadas, aunque este proceso suele tomar mucho tiempo.

---

### Segmento #3: Proveedores de componentes o servicios eléctricos certificados

**Entrevista: Juan Lucas**  
- **Sexo:** Masculino  
- **Edad:** 25  
- **Link:** https://youtu.be/I_ISRdC6mHI
- **Inicia en:** 0:01  
- **Duración:** 4:52  
<img src="https://i.imgur.com/CsMAftn.png"/>
**Resumen:**  
Juan tiene conocimientos en electricidad y electrónica, y suele encargarse de resolver cualquier problema eléctrico en casa. Si no puede solucionarlo, contacta a amigos electricistas de confianza. Toma medidas preventivas básicas como apagar luces o usar llaves térmicas para evitar sobrecargas.

Nunca ha contratado servicios eléctricos, pero comprende la importancia de cumplir con normas legales debido al riesgo que conlleva el mal manejo eléctrico. Muestra interés en una aplicación como **ElectroLink**, ya que le permitiría acceder fácilmente a proveedores confiables para consultas o necesidades que escapen a sus conocimientos.

## 2.2.3. Análisis de entrevistas

### Mari Vallejos  
**Resumen:**  
Mari es ama de casa y pasa la mayor parte del tiempo en el hogar, por lo que le afecta directamente cualquier problema eléctrico. Siente ansiedad ante fallas eléctricas porque no tiene conocimientos técnicos y depende de redes sociales o conocidos para encontrar ayuda. No toma medidas preventivas y prioriza la rapidez, puntualidad y compromiso. Le interesa una plataforma como **ElectroLink** con filtros por experiencia, costos y disponibilidad, y valora la posibilidad de programar mantenimientos.

**Insight clave:**  
Existe una necesidad clara de confianza, rapidez y facilidad en el acceso a servicios eléctricos confiables y certificados.

---

### Piero Tenorio  
**Resumen:**  
Piero dirige una empresa con varias sucursales que dependen de sistemas eléctricos para su funcionamiento diario (computadoras, escáneres, cámaras). Aunque no enfrenta fallas frecuentes, reconoce que cuando suceden afectan directamente las ventas y la productividad. Actualmente no tiene un plan de mantenimiento preventivo estructurado. Ha tenido referencias negativas de técnicos informales y valora mucho que los servicios sean confiables, con respaldo legal y buenas calificaciones. Le interesa usar una plataforma como **ElectroLink** para encontrar proveedores certificados, gestionar consumos por sucursal y prevenir interrupciones.

**Insight clave:**  
En el entorno empresarial, la continuidad operativa depende de la estabilidad eléctrica. Existe una fuerte necesidad de monitoreo, prevención y proveedores confiables, lo que hace que una solución digital como ElectroLink sea muy atractiva.

---

### Juan Lucas  
**Resumen:**  
Juan tiene conocimientos de electricidad, por lo que suele resolver los problemas por sí mismo o con ayuda de amigos. No ha contratado servicios externos, pero valora la legalidad y la seguridad en instalaciones eléctricas. Considera útil contar con una red de proveedores verificados para consultas o situaciones que no pueda resolver solo.

**Insight clave:**  
Aunque usuarios con conocimientos técnicos no dependen de servicios externos, valoran el acceso a respaldo profesional certificado para casos más complejos o urgencias.

---

## Análisis de Hallazgos

<img src="https://i.imgur.com/2ZhWXIG.png"/>

Los entrevistados resaltan como uno de los principales puntos de fricción la dificultad para identificar proveedores eléctricos realmente confiables. La presencia de técnicos informales sin certificaciones claras genera desconfianza. Este hallazgo valida la necesidad de que ElectroLink destaque las certificaciones legales de los proveedores como un diferenciador clave dentro de la plataforma.

<img src="https://i.imgur.com/hItEKBn.png"/>

La posibilidad de llevar un registro digital de los servicios eléctricos realizados (por ejemplo, mantenimientos o reparaciones) es vista como una funcionalidad útil, especialmente para usuarios que hoy lo hacen de forma manual. Esto refuerza la importancia de integrar funciones de gestión documental dentro de ElectroLink, facilitando el seguimiento y la trazabilidad de los trabajos realizados.

<img src="https://i.imgur.com/M41WK4G.png"/>
 
Consultas relacionadas con la recepción de recordatorios permiten identificar una oportunidad para fomentar el mantenimiento eléctrico preventivo. La mayoría de los usuarios no tiene hábitos estructurados en este aspecto. Una funcionalidad de alertas o notificaciones podría ser clave para ayudar a prevenir fallas eléctricas y extender la vida útil de las instalaciones.

<img src="https://i.imgur.com/AeSaVNR.png"/>

Tanto en el entorno doméstico como empresarial, los entrevistados valoran la transparencia. Acceder a opiniones reales de otros usuarios es considerado un elemento crucial para decidir a qué proveedor contratar. Por ello, se valida la necesidad de incluir una sección de **comentarios y calificaciones** dentro de la app para fomentar la confianza y facilitar la toma de decisiones.

<img src="https://i.imgur.com/vX729eS.png"/>

Explorar si los usuarios estarían dispuestos a pagar por servicios premium (como soporte prioritario o asesoría técnica especializada) permite analizar la viabilidad de modelos de negocio basados en **suscripciones** o **comisiones por servicio**. Algunos entrevistados afirmaron estar dispuestos a pagar si los beneficios ofrecidos son claros y valiosos, lo cual abre la puerta a monetización sostenible para ElectroLink.

<hr>

### 2.3. Needfinding

## 2.3.1. User Personas

**Segmento #1**
<img src="https://i.imgur.com/cKxq0Pi.png"/>

**Segmento #2**
<img src="https://i.imgur.com/oQYrqED.png"/>

**Segmento #3**
<img src="https://i.imgur.com/ma6WwLI.png"/>

## 2.3.2. User Task Matrix

En esta sección se detallan las tareas que realizan los diferentes segmentos de usuarios representados por los User Personas de **ElectroLink**, con el objetivo de cumplir sus metas relacionadas con el mantenimiento preventivo de sistemas eléctricos en hogares, oficinas o como parte de su actividad profesional.

---

### Olivia Pérez – Propietaria de hogar urbano

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar electricistas certificados                    | Frecuentemente | Alta        |
| Agendar mantenimientos preventivos para el hogar     | Ocasionalmente | Alta        |
| Comparar calificaciones de proveedores               | Frecuentemente | Media       |
| Buscar soluciones que ahorren energía en el hogar    | Ocasionalmente | Media       |
| Pedir recomendaciones a vecinos o conocidos          | Rara vez       | Media       |

---

### Eduardo Gonzales – Dueño de PYME / Oficina

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar formas de reducir costos energéticos          | Frecuentemente | Alta        |
| Contratar servicios de mantenimiento eléctrico        | Ocasionalmente | Alta        |
| Llevar registro del historial de mantenimiento        | Ocasionalmente | Media       |
| Buscar proveedores o técnicos de confianza            | Ocasionalmente | Alta        |
| Usar herramientas digitales para gestionar instalaciones | A veces     | Media       |

---

### Alejandro López – Proveedor de servicios eléctricos certificados

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar nuevos clientes o trabajos                    | Frecuentemente | Alta        |
| Actualizar su disponibilidad de servicios en plataformas | Ocasionalmente | Media    |
| Gestionar pedidos y comunicación con clientes        | Frecuentemente | Alta        |
| Pedir reseñas o testimonios a sus clientes           | Rara vez       | Media       |
| Mantenerse al día con normativas eléctricas          | Ocasionalmente | Alta        |

<hr>

<hr>

#### 2.3.3. User Journey Mapping

<img src="https://i.imgur.com/Tg4ikEM.jpeg"/>

<hr>

<hr>

#### 2.3.4. Empathy Mapping

<hr>

<img src="https://i.imgur.com/koIIfNX.jpeg"/>

**Olivia Rodriguez**

<hr>

<hr>

<img src="https://i.imgur.com/7BCEdvZ.jpeg"/>

**Eduardo Gonzales**

<hr>

<hr>

<img src="https://i.imgur.com/RlO6qIK.jpeg"/>

**Alejandro Lopez**

<hr>

<hr>

## 2.3.5. As-is Scenario Mapping

**Alejandro Lopez**
<img src="https://i.imgur.com/wdXr2ah.png"/>

**Áreas Negativas** 

Promoción de productos:
- Frustración por la baja efectividad de la publicidad.
- Sentimiento de que no alcanza a los clientes correctos.
- Alto gasto en publicidad sin retorno claro.
  
Atención de consultas:
- Agobio y ansiedad por la sobrecarga.
- Dudas sobre su profesionalismo.
- Falta de tiempo para responder con calidad.
  
Cotizaciones:
- Estrés por cálculos manuales.
- Ineficiencia y desorganización.
- Percepción de poca escalabilidad y falta de optimización.
  
Entrega de productos:
- Preocupación por los errores.
- Falta de digitalización.
- Sensación de sistema poco confiable y propenso a reclamos.

**Áreas Positivas**

Promoción de productos:
- Esperanza cuando recibe contacto de un nuevo cliente.
  
Atención de consultas:
- No se identifican ups, lo que revela una necesidad urgente de mejora.

Cotizaciones:
- Alivio al concretar una venta sin errores, aunque depende de factores externos.
  
Entrega de productos:
- Satisfacción al cerrar una venta sin errores.
- Tranquilidad una vez que el cliente confirma.
  
**Conclusión**

Alejandro enfrenta varios puntos críticos en su proceso: publicidad poco efectiva, consultas y cotizaciones manuales que lo agobian, y entregas propensas a errores. Aunque hay momentos de esperanza, su experiencia general es frustrante. Esto evidencia la necesidad urgente de herramientas digitales que lo ayuden a automatizar, organizar y profesionalizar su servicio.

**Eduardo Gonzales**

<img src="https://i.imgur.com/0k7QAZ8.png"/>

**Áreas negativas**

Identificar una necesidad operativa o de mantenimiento:
- Eduardo parte con incertidumbre al preguntarse si debe resolver el problema de inmediato o si puede esperar, lo que genera estrés.
- Se siente preocupado y frustrado porque los problemas son frecuentes y no siempre encuentra soluciones rápidas, lo que podría acarrear riesgos operativos o pérdidas importantes para la empresa.

Buscar proveedores adecuados:
- Esta etapa está llena de desconfianza. Eduardo duda si los proveedores entienden realmente lo que necesita o si solo quieren cerrar una venta rápida.
- Se siente inseguro e impaciente ante las respuestas lentas y poco claras, lo que afecta su percepción de profesionalismo y genera tensión en un momento clave para la toma de decisiones.
  
Solicitar cotización y evaluar propuestas:
- Eduardo se enfrenta a la ansiedad de cometer errores al seleccionar proveedores, y sufre por tener que repetir procesos que no mejoran con el tiempo.
- La sobrecarga de evaluar múltiples propuestas, sin estar seguro de si le responderán bien tras la compra, lo hace sentirse cansado, inseguro y con miedo a consecuencias graves.
  
Supervisar ejecución y validar resultados:
- Aunque ya en una etapa avanzada, Eduardo aún siente incertidumbre y dudas sobre si tomó la mejor decisión o si dejó pasar una opción superior.
- Esto lo hace sentirse dudoso, y aunque confía en algunos proveedores, no siempre puede validar si son la mejor opción a largo plazo.

**Áreas positivas**

Identificar una necesidad operativa o de mantenimiento:

- Eduardo demuestra proactividad al realizar inspecciones periódicas y tomar nota del estado de los equipos, lo que le da visibilidad y control sobre su entorno operativo.
- Se siente comprometido con su equipo y con la empresa, lo que impulsa su deseo de mejorar continuamente.
  
Buscar proveedores adecuados:
- Aunque tiene dudas, Eduardo explora múltiples canales (web, catálogos, redes, recomendaciones) para encontrar proveedores, lo que muestra una búsqueda activa y estratégica.
- Tiene un enfoque exigente y selectivo, no se conforma con la primera opción, lo que garantiza estándares de calidad más altos.

Solicitar cotización y evaluar propuestas:
- Filtra activamente a proveedores que no cumplen con aspectos técnicos o de confianza, lo que indica una evaluación rigurosa.
- Esta etapa, aunque estresante, muestra que Eduardo sabe qué quiere y no acepta cualquier solución, buscando equilibrio entre precio, calidad y conocimiento técnico.

Supervisar ejecución y validar resultados:
- Finalmente, cuando logra decidir con seguridad, se siente aliviado por haber elegido correctamente pensando en el largo plazo.
- Esta satisfacción final indica que, a pesar del proceso complejo, Eduardo valora las decisiones bien fundamentadas y aspira a establecer relaciones sostenibles con los proveedores.

**Conclusión**

Eduardo es un perfil técnico y exigente, que valora la calidad, la previsión y la confiabilidad en todo el proceso de adquisición y mantenimiento. Aunque su recorrido está lleno de tensiones y dudas, especialmente en la interacción con proveedores, también muestra una actitud proactiva y profesional. Una plataforma que le brinde confianza, claridad, rapidez en respuestas y herramientas para comparar y validar proveedores fácilmente puede ayudarlo a reducir su ansiedad, optimizar decisiones y reforzar la seguridad en sus elecciones.

**Olivia Rodriguez**

<img src="https://i.imgur.com/sTOJ4Wp.png"/>

**Áreas negativas**

Buscar proveedores confiables:
- Olivia se enfrenta a una búsqueda larga, tediosa y desconfiada, lo que le genera cansancio y frustración.
- No puede confiar en cualquier empresa, y siente que el proceso es muy desgastante, además de que nada le garantiza la calidad de los materiales.
  
Contactar y validar a los proveedores:
- Se siente insegura sobre permitir el ingreso a su casa y teme contactar a proveedores sin garantías, lo que le genera nerviosismo y desconfianza.
- Olivia percibe que hacer un proceso de descarte por su cuenta es ineficiente, lo que la hace sentir molesta cuando los proveedores son informales o poco claros.

Solicitar cotizaciones y comparar:
- Se ve obligada a comparar manualmente propuestas en hojas de cálculo, recibiendo cotizaciones en formatos poco intuitivos, lo que la abruma.
- Siente que los precios no siempre son justos y se cansa de descartar opciones sin apoyo externo.

Tomar la decisión y agendar el servicio:
- Aun en la fase final, Olivia no siempre confía en la calidad de lo que va a recibir, ni en la relación entre el costo y el producto final.
- Se siente inquieta, nerviosa y exhausta, especialmente si no tiene claridad sobre las garantías o si invirtió mucho tiempo en el proceso sin estar completamente segura.

**Áreas positivas**

Buscar proveedores confiables:
- Olivia es proactiva, utiliza Google, páginas web y preguntas a familiares o amigos de confianza.
- Guarda enlaces y captura información útil, y valora la idea de una plataforma donde todo ya esté validado, lo que indica apertura a soluciones digitales confiables.

Contactar y validar a los proveedores:
- Pide certificados, RUC o documentos de formalidad, mostrando una actitud responsable y detallista en su proceso de selección.
- Aunque frustrada, busca garantías y seguridad, lo que refuerza su interés por soluciones formales y transparentes.

Solicitar cotizaciones y comparar:
- A pesar del cansancio, Olivia desea prevenir problemas a futuro, lo que muestra un enfoque de largo plazo.
- Expresa que le gustaría tener una plataforma que la ayude a comparar todo más fácilmente, lo que es una oportunidad clara para digitalizar y simplificar su experiencia.

Tomar la decisión y agendar el servicio:
- Olivia valida documentos y garantías antes de cerrar un acuerdo, lo que muestra que se preocupa por protegerse.
- Quiere asegurarse de que su elección evite problemas futuros, lo que revela una clara orientación hacia la prevención.

**Conclusión**

Olivia es una usuaria cautelosa, exigente y preocupada por la seguridad y la calidad, pero actualmente enfrenta un proceso cargado de incertidumbre, informalidad y desorganización. Su experiencia se ve afectada por la falta de herramientas que la acompañen en todo el recorrido. Una plataforma que le brinde proveedores verificados, cotizaciones estandarizadas, comparaciones automáticas y validaciones de calidad y seguridad tendría un impacto muy positivo, reduciendo su ansiedad, optimizando su tiempo y fortaleciendo su confianza al momento de tomar decisiones.
<hr>

<hr>

## 2.4. Ubiquitous Language
**Glosario del Dominio del Negocio - ElectroLink**

Este glosario contiene términos clave relacionados al dominio del proyecto ElectroLink. Cada término está en inglés, seguido de su equivalente en español entre paréntesis. Las definiciones están redactadas en español de forma clara y sin ambigüedades, para facilitar la comunicación entre todos los miembros del equipo y stakeholders.

**1.  Stakeholders & Roles**

* **Homeowner** (Propietario de vivienda)
    * Persona que reside en un hogar y busca soluciones eléctricas confiables y certificadas para prevenir o resolver fallos.

* **Business Owner** (Dueño de empresa)
    * Responsable de una oficina o PYME que necesita mantener el sistema eléctrico eficiente, operativo y dentro del marco legal.

* **Service Provider** (Proveedor de servicios)
    * Técnico profesional con certificación que ofrece servicios de instalación, reparación o mantenimiento eléctrico.

* **Component Supplier** (Proveedor de componentes)
    * Empresa o persona encargada de la venta de dispositivos, piezas o insumos eléctricos certificados.

* **Platform Administrator** (Administrador de plataforma)
    * Miembro del equipo responsable de validar, gestionar y supervisar las actividades y registros dentro de ElectroLink.


**2. Servicios y Mantenimiento**

* **Preventive Maintenance** (Mantenimiento preventivo)
    * Servicio programado que permite identificar y corregir posibles fallas eléctricas antes de que ocurran.

* **Emergency Service** (Servicio de emergencia)
    * Atención inmediata para resolver fallos eléctricos inesperados que comprometen la seguridad o funcionalidad.

* **Electric Assessment** (Evaluación eléctrica)
    * Diagnóstico que realiza un proveedor para determinar el estado de una instalación eléctrica.

* **Installation Service** (Servicio de instalación)
    * Proceso de conexión o implementación de componentes eléctricos en viviendas o negocios, cumpliendo estándares técnicos.

* **Electrical Upgrade** (Actualización eléctrica)
    * Mejora o sustitución de partes de una instalación para adaptarla a nuevas necesidades o normas de seguridad.


**3. Funcionalidades de la Plataforma**

* **Service Request** (Solicitud de servicio)
    * Acción del usuario para iniciar una contratación de servicios desde la plataforma.

* **Matchmaking** (Emparejamiento)
    * Proceso automatizado para conectar a un usuario con el proveedor más adecuado según filtros como ubicación, calificación y disponibilidad.

* **Real-Time Tracking** (Seguimiento en tiempo real)
    * Visualización del estado y avance de un servicio solicitado a través de la plataforma.

* **Verified Profile** (Perfil verificado)
    * Estado de un proveedor que ha sido validado por la plataforma mediante documentación y procesos de control.

* **Rating and Review** (Calificación y reseña)
    * Sistema de puntuación y comentarios que permite evaluar la experiencia del usuario con un proveedor.

* **Subscription Plan** (Plan de suscripción)
    * Modalidad de pago por parte del proveedor para acceder a beneficios dentro de la plataforma (visibilidad, herramientas, clientes).

* **Booking History** (Historial de contrataciones)
    * Registro de todos los servicios contratados, realizados y evaluados por un usuario o proveedor.


**4. Seguridad y Cumplimiento**

* **Certified Technician** (Técnico certificado)
    * Profesional acreditado por una entidad oficial para realizar trabajos eléctricos conforme a la ley.

* **Legal Compliance** (Cumplimiento legal)
    * Condición de operar dentro de los estándares establecidos por entidades regulatorias del sector eléctrico.

* **Risk Prevention** (Prevención de riesgos)
    * Estrategia para evitar accidentes, daños o fallos eléctricos mediante prácticas seguras y mantenimiento adecuado.

* **Safety Assurance** (Garantía de seguridad)
    * Compromiso de que los servicios ofrecidos cumplen con medidas de protección para personas, instalaciones y equipos.


**5. Otros conceptos del dominio**

* **Electric Incident** (Incidente eléctrico)
    * Evento disruptivo como sobrecarga, cortocircuito o fallo en la instalación que requiere intervención técnica.

* **Energy Optimization** (Optimización energética)
    * Prácticas que buscan mejorar el uso de energía eléctrica, reduciendo costos y desperdicios.

* **Informal Market** (Mercado informal)
    * Entorno de prestación de servicios sin regulación, licencias ni garantías de seguridad.

* **Digital Presence** (Presencia digital)
    * Visibilidad que tiene un proveedor dentro de la plataforma, influyendo en su reputación y oportunidades de negocio.
<hr>

<hr>

<div style="page-break-after: always;"></div>

## Capítulo III: Requirements Specification

En este apartado se formalizan los requerimientos del sistema en formato estructurado y verificable. Se presenta el catálogo de requisitos, modelos de casos de uso, restricciones técnicas y condiciones de aceptación. Esta especificación servirá como base contractual entre el equipo de desarrollo y los interesados.

### 3.1. To-Be Scenario Mapping

<img src="https://i.imgur.com/fxj0F1w.jpeg"/>

<img src="https://i.imgur.com/vfkqiDy.jpeg"/>

<img src="https://i.imgur.com/X2xKKWG.jpeg"/>

<hr>

<hr>

### 3.2. User Stories
En esta sección, se definieron las epicas y la visualización de las user stories con sus respectivos criterios de aceptación.
<hr>

# Epics

| EpicId | Titulo | Descripcion |
|---|------------|-------------|
| EP-01 | Gestión de Acceso de Usuarios |Como usuario, quiero un sistema completo de acceso para registrarme, autenticarme y gestionar mis credenciales de manera segura según mi perfil específico. |
| EP-02 | Experiencia de Usuario en Procesos de Autenticación | Como usuario, quiero tener una experiencia clara y asistida durante los procesos de registro y autenticación para completarlos con éxito y sin frustraciones. |
| EP-03 | Personalización y Seguridad de la Cuenta | Como usuario, quiero tener control sobre la seguridad y la configuración de mi cuenta para proteger mi información y adaptarla a mis necesidades específicas.|
| EP-04 | Contratación y Seguimiento de Servicios Eléctricos | Como propietario o PYME, quiero contratar servicios paso a paso y darles seguimiento, para resolver mis problemas eléctricos de manera estructurada y segura. |
| EP-05 | Programación y Gestión de Servicios Preventivos | Como propietario o PYME, quiero programar mantenimientos preventivos y revisar mi historial de servicios, para garantizar un sistema eléctrico seguro y funcional. |
| EP-06 | Gestión Operativa de los Proveedores | Como proveedor, quiero administrar mi agenda, servicios y pagos, para tener control sobre mis operaciones y oportunidades de negocio. |
| EP-07 | Funcionalidades de Confianza y Transparencia en el Ecosistema | Como usuario, quiero interactuar con un entorno confiable, transparente y claro, para sentirme seguro al contratar servicios, comparar opciones y tomar decisiones informadas. |
| EP-08 | Navegación en la Landing Page | Como visitante, quiero navegar en una Landing page que me brinde información necesaria para tomar una decisión informada. |
| EP-09 | Gestión de Suscripciones y Pagos (Proveedores) | Como proveedor, quiero gestionar mis planes de suscripción, procesar pagos de forma segura y acceder a mi historial de facturación, para mantener mi cuenta activa y funcional. |
| EP-10 | Gestión de Activos y Recursos | Como usuario (propietario o proveedor), quiero registrar y gestionar mis activos relevantes (propiedades, inventario de componentes) para facilitar la operativa del sistema. |
| EP-11 | Gestión de Servicios Ofrecidos | Como técnico, quiero gestionar mi catálogo de servicios ofrecidos, para mantenerlo actualizado y mostrar claramente a los clientes mi oferta y especialidades. |
| EP-12 | Gestión de Propiedades | Como desarrollador, quiero implementar endpoints para registrar, consultar y administrar propiedades de los propietarios, para permitir la selección de ubicación durante la solicitud. |
| EP-13 | Gestión de Componentes Técnicos | Como desarrollador, quiero crear endpoints CRUD para administrar el inventario de componentes eléctricos de los técnicos, para garantizar el stock durante la asignación de servicios. |
| EP-14 | Asistente de Solicitud de Servicio | Como desarrollador, quiero implementar la lógica escalonada del flujo de solicitud del propietario, para validar planes, verificar límites y facilitar la selección guiada. |
| EP-15 | Evaluación de Servicios Completados | Como desarrollador, quiero permitir que los usuarios dejen evaluaciones tras completar un servicio, para alimentar las métricas del sistema y mejorar la calidad del servicio. |


| Epic/StoryID | Título | Descripción | Criterios de aceptación | Relacionado con epica |
|--------------|--------|-------------|-------------------------|----------------------|
| US-01 | Visualización de Características y Beneficios | Como visitante de la landing page, Quiero ver claramente las características y beneficios de la plataforma, Para entender cómo puede ayudarme y decidir si registrarme. | Escenario #1: Visualización de beneficios para usuarios<br>Dado que que un visitante se encuentra explorando la plataforma informativa<br>Cuando revisa la sección de propuestas de valor<br>Entonces debe  identificar claramente los beneficios específicos para Propietarios y Técnicos<br>Y cada beneficio debe tener una descripción breve y clara.<br><br>Escenario #2: Visualización de características principales<br>Dado que que un visitante se encuentra en la plataforma informativa<br>Cuando explora la sección de características<br>Entonces debe ver las funcionalidades destacadas de la plataforma<br>Y cada característica debe tener un título descriptivo y una explicación concisa de su funcionamiento. | EP-08 |
| US-02 | Visualización de Testimonios | Como visitante indeciso sobre la plataforma, Quiero ver testimonios de usuarios reales, Para aumentar mi confianza en el servicio antes de registrarse. | Escenario #1: Visualización de testimonios diversos<br>Dado que que el visitante explora la plataforma informativa<br>Cuando accede a la sección de testimonios<br>Entonces debe ver al menos 3 testimonios diferentes<br>Y cada testimonio debe mostrar: Nombre de usuario, tipo de usuario (Propietario/Técnico), calificación y comentario<br>Y las calificaciones deben ser visualmente claras. | EP-08 |
| US-03 | Adaptabilidad a Diferentes Dispositivos | Como visitante que accede desde diferentes dispositivos, Quiero que la landing page se adapte correctamente a mi pantalla, Para tener una experiencia óptima independientemente del dispositivo que use. | Escenario #1: Experiencia en dispositivo móvil<br>Dado que que un visitante accede a la plataforma informativa desde un dispositivo móvil<br>Cuando la información es presentada<br>Entonces todos los elementos se reorganizan para adaptarse a una pantalla vertical<br>Y no requiere desplazamiento horizontal<br>Y todos los textos son legibles sin necesidad de ampliar la vista.<br><br>Escenario #2: Experiencia en tableta o escritorio<br>Dado que que un visitante accede a la plataforma informativa desde una tableta o un ordenador<br>Cuando la información es presentada<br>Entonces el diseño aprovecha el espacio horizontal adicional<br>Y mantiene una experiencia de navegación fluida y atractiva. | EP-08 |
| US-04 | Visualización de una Sección Principal | Como visitante de la página, quiero ver una sección principal atractiva que me presente un breve resumen de la idea del producto, para entender rápidamente de qué se trata el servicio. | Escenario #1: Presentación del propósito de la plataforma<br>Dado que que un visitante accede a la plataforma informativa<br>Cuando la carga inicial se completa<br>Entonces se muestra una sección principal con un título que explica el propósito del sistema<br>Y se incluye un subtítulo que resume el valor principal del servicio<br>Y se presenta una llamada a la acción principal para invitar al registro. | EP-08 |
| US-05 | Navegación sin errores | Como visitante, quiero navegar por la página web sin encontrar errores, para tener una experiencia fluida que me anime a registrarme. | Escenario #1: Carga completa de la plataforma<br>Dado que que un visitante accede a la plataforma informativa<br>Cuando la carga de la página se completa<br>Entonces todos los elementos visuales e informativos se muestran correctamente<br>Y no existen enlaces que dirijan a destinos incorrectos o inexistentes. | EP-08 |
| US-06 | Navegación mediante Encabezado | Como usuario, quiero un menú de navegación claro en el encabezado, para acceder fácilmente a las diferentes secciones de la página. | Escenario #1: Acceso a secciones desde el encabezado<br>Dado que que un visitante explora la plataforma informativa<br>Cuando utiliza las opciones de navegación en el encabezado<br>Entonces puede desplazarse a las diferentes secciones informativas<br>Y el encabezado permanece accesible durante el desplazamiento.<br><br>Escenario #2: Navegación en dispositivos de pantalla pequeña<br>Dado que que un visitante accede desde un dispositivo móvil<br>Cuando interactúa con la opción de menú principal<br>Entonces se despliegan las opciones de navegación a las distintas secciones. | EP-08 |
| US-07 | Visualización del Pie de página | Como visitante, quiero ver un pie de página organizado con accesos directos e información de contacto, para encontrar información adicional rápidamente. | Escenario #1: Contenido completo del pie de página<br>Dado que que un visitante se desplaza hasta el final de la plataforma informativa<br>Cuando llega al pie de página<br>Entonces debe ver una sección con enlaces a Términos y Condiciones y Política de Privacidad<br>Y debe encontrar información de contacto<br>Y enlaces a las redes sociales de la empresa. | EP-08 |
| US-08 | Ver Información del Startup | Como potencial cliente, quiero conocer información sobre la empresa desarrolladora, para evaluar su credibilidad y confiabilidad. | Escenario #1: Acceso a información corporativa<br>Dado que que un visitante navega por la plataforma informativa<br>Cuando se desplaza a la sección sobre la empresa<br>Entonces debe encontrar información clara sobre la startup y el equipo fundador<br>Y la información debe transmitir profesionalidad y confianza. | EP-08 |
| US-09 | Conocer la Misión de la Startup | Como visitante interesado, quiero conocer la misión de la empresa, para entender sus valores y propósito. | Escenario #1: Visibilidad de la declaración de misión<br>Dado que que un visitante navega por la sección sobre la empresa<br>Cuando busca información sobre los propósitos de la empresa<br>Entonces debe encontrar claramente destacada la declaración de misión<br>Y esta debe estar redactada de forma concisa y comprensible. | EP-08 |
| US-10 | Conocer la Visión de la Startup | Como visitante interesado, quiero conocer la visión de la empresa, para entender sus objetivos a largo plazo y su proyección de futuro. | Escenario #1: Visibilidad de la declaración de visión<br>Dado que que un visitante navega por la sección sobre la empresa<br>Cuando busca información sobre las metas futuras de la empresa<br>Entonces debe encontrar claramente destacada la declaración de visión<br>Y esta debe estar redactada de forma inspiradora y orientada al futuro. | EP-08 |
| US-11 | Conocer más a fondo los servicios que ofrecen | Como visitante interesado, quiero conocer de manera más específica los servicios que ofrecen por medio de capturas de pantallas, para comprender su solución y decidir si optar por ella | Escenario #1: Visualización de la solución en acción<br>Dado que que un visitante se encuentra en la sección de características o servicios<br>Cuando explora cómo funciona la plataforma<br>Entonces visualiza representaciones gráficas o capturas de pantalla de la aplicación<br>Y estas imágenes ilustran las funcionalidades clave del sistema. | EP-08 |
| US-12 | Ver planes de suscripción disponibles | Como visitante interesado, quiero ver una sección clara que me presente los planes de suscripción disponibles, separados por "Planes para Técnicos" y "Planes para Propietarios", para comparar fácilmente sus características y precios. | Escenario #1: Comparación de planes para Propietarios<br>Dado que que un visitante está interesado en los planes para Propietarios<br>Cuando accede a la sección de planes<br>Entonces visualiza una comparativa entre el plan Básico y el plan Premium<br>Y puede identificar claramente los límites y beneficios de cada uno.<br><br>Escenario #2: Visualización de planes para Técnicos<br>Dado que que un visitante está interesado en los planes para Técnicos<br>Cuando accede a la sección de planes<br>Entonces visualiza la oferta de planes de suscripción para su rol<br>Y comprende los beneficios asociados a cada nivel. | EP-08 |
| US-13 | Registro de cuentas como Dueño de Hogar | Como dueño de hogar, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mi vivienda | Escenario #1: Selección de rol de usuario<br>Dado que que una persona no registrada accede a la funcionalidad de registro<br>Cuando selecciona el rol "Dueño de Hogar"<br>Entonces el sistema le presenta los campos requeridos para ese rol.<br><br>Escenario #2: Registro exitoso con datos válidos<br>Dado que que un futuro dueño de hogar ha completado todos los campos obligatorios con información válida<br>Cuando solicita el registro de su cuenta<br>Entonces el sistema crea una cuenta de usuario con el rol "Propietario"<br>Y le informa que se ha enviado una comunicación para verificar su cuenta. | EP-01 |
| US-14 | Registro de cuentas como Dueño de Empresa | Como dueño o representante de empresa, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mis instalaciones comerciales | Escenario #1: Selección de rol de usuario<br>Dado que que una persona no registrada accede a la funcionalidad de registro<br>Cuando selecciona el rol "Dueño de Empresa"<br>Entonces el sistema le presenta los campos requeridos para ese rol, incluyendo el nombre de la empresa.<br><br>Escenario #2: Registro exitoso con datos válidos<br>Dado que que un futuro dueño de empresa ha completado todos los campos obligatorios con información válida<br>Cuando solicita el registro de su cuenta<br>Entonces el sistema crea una cuenta de usuario con el rol "Propietario" de tipo PYME<br>Y le informa que se ha enviado una comunicación para verificar su cuenta. | EP-01 |
| US-15 | Registro de cuentas para Técnicos | Como Técnico de componentes eléctricos y/o servicios, quiero registrarme para tener una cuenta en la aplicación, para ofrecer mis productos y servicios a los usuarios | Escenario #1: Selección de rol de usuario<br>Dado que que una persona no registrada accede a la funcionalidad de registro<br>Cuando selecciona el rol "Técnico"<br>Entonces el sistema le presenta los campos requeridos para el perfil profesional.<br><br>Escenario #2: Registro exitoso con datos válidos<br>Dado que que un futuro técnico ha completado todos los campos obligatorios con información válida<br>Cuando solicita el registro de su cuenta<br>Entonces el sistema crea una cuenta de usuario con el rol "Técnico"<br>Y le informa que se ha enviado una comunicación para verificar su cuenta. | EP-01 |
| US-16 | Verificación de cuenta por correo electrónico | Como usuario, quiero verificar mi cuenta a través de un enlace enviado por correo electrónico para confirmar mi identidad. | Escenario #1: Envío de comunicación de verificación<br>Dado que que un usuario se ha registrado exitosamente<br>Cuando el proceso de registro finaliza<br>Entonces el sistema envía una comunicación electrónica a la dirección proporcionada<br>Y la comunicación contiene una instrucción y un medio único para verificar la cuenta.<br><br>Escenario #2: Verificación exitosa de cuenta<br>Dado que que un usuario ha recibido la comunicación de verificación<br>Cuando utiliza el medio de verificación proporcionado<br>Entonces su cuenta es marcada como verificada en el sistema<br>Y se le notifica que la verificación fue exitosa. | EP-01 |
| US-17 | Inicio de sesión de usuarios | Como usuario registrado, quiero iniciar sesión en la aplicación con mis credenciales para acceder a mi cuenta y utilizar las funcionalidades de la plataforma. | Escenario #1: Inicio de sesión exitoso con credenciales válidas<br>Dado que que un usuario registrado y verificado se encuentra en la funcionalidad de acceso<br>Cuando ingresa sus credenciales correctas y solicita el acceso<br>Entonces el sistema valida las credenciales<br>Y le concede acceso a su panel personalizado según su rol.<br><br>Escenario #2: Intento de inicio de sesión con credenciales inválidas<br>Dado que que un usuario se encuentra en la funcionalidad de acceso<br>Cuando ingresa un correo electrónico y/o contraseña incorrectos<br>Entonces el sistema le niega el acceso<br>Y le informa que las credenciales son inválidas. | EP-01 |
| US-18 | Validación de datos de registro | Como usuario, quiero recibir retroalimentación inmediata sobre la validez de los datos que ingresó durante el registro para corregir errores rápidamente. | Escenario #1: Validación de formato de correo electrónico<br>Dado que que un usuario está completando el formulario de registro<br>Cuando ingresa un texto en el campo de correo electrónico que no tiene un formato válido<br>Entonces el sistema le informa que el formato del correo no es válido.<br><br>Escenario #2: Validación de correo electrónico ya registrado<br>Dado que que un usuario está en el formulario de registro<br>Cuando ingresa un correo electrónico que ya está registrado en el sistema<br>Entonces el sistema le informa que la dirección de correo ya está en uso. | EP-02 |
| US-19 | Mensajes de éxito retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre éxito para entender fácilmente el resultado de mis acciones. | Escenario #1: Mensaje de éxito al completar el registro<br>Dado que que el usuario ha completado correctamente el proceso de registro<br>Cuando el sistema procesa la solicitud con éxito<br>Entonces el sistema muestra un mensaje de confirmación<br>Y informa sobre el siguiente paso (verificación de correo). | EP-02 |
| US-20 | Mensajes de error retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | Escenario #1: Mensaje de error por problemas del sistema<br>Dado que que el usuario ha solicitado completar su registro<br>Cuando ocurre un error del sistema durante el procesamiento<br>Entonces el sistema muestra un mensaje de error genérico<br>Y informa que puede intentarlo de nuevo<br>Y los datos ingresados se conservan para facilitar un nuevo intento. | EP-02 |
| US-21 | Recuperación de Contraseña | Como usuario registrado, quiero recuperar mi contraseña en caso de olvidarla, para volver a acceder a mi cuenta de manera segura. | Escenario #1: Solicitud de recuperación con correo válido<br>Dado que que un usuario se encuentra en la página de recuperación de contraseña<br>Cuando ingresa el correo electrónico asociado a su cuenta<br>Entonces el sistema envía un correo con instrucciones y un enlace único de restablecimiento<br>Y muestra un mensaje de confirmación indicando que revise su correo.<br><br>Escenario #2: Finalización exitosa del restablecimiento<br>Dado que que un usuario ha seguido el enlace de restablecimiento<br>Cuando ingresa y confirma una nueva contraseña que cumple los requisitos de seguridad<br>Entonces la contraseña es actualizada en el sistema<br>Y recibe un mensaje de confirmación del cambio exitoso. | EP-03 |
| US-22 | Cierre de Sesión | Como usuario autenticado, quiero cerrar mi sesión de forma segura para proteger mi cuenta cuando termine de usar la aplicación. | Escenario #1: Cierre de sesión voluntario<br>Dado que que un usuario está autenticado en la aplicación<br>Cuando selecciona la opción de cierre de sesión<br>Entonces su sesión es terminada de forma segura<br>Y es redirigido a una pantalla pública (inicio de sesión o landing page). | EP-03 |
| US-23 | Visualización de Perfil de Propietario | Como propietario registrado, quiero visualizar mi perfil, para revisar mi información personal y preferencias almacenadas en el sistema | Escenario #1: Acceso al perfil personal<br>Dado que que un Propietario está autenticado en el sistema<br>Cuando solicita visualizar su perfil<br>Entonces se le presenta su información personal registrada, como nombre, correo y teléfono<br>Y visualiza sus preferencias de notificación configuradas. | EP-03 |
| US-24 | Edición de Perfil de Propietario | Como propietario registrado, quiero editar mi información personal y preferencias, para mantener mi perfil actualizado y tener más control sobre este. | Escenario #1: Edición exitosa de información personal<br>Dado que que un Propietario está en la funcionalidad de edición de perfil<br>Cuando modifica su información personal (ej. teléfono) y guarda los cambios<br>Entonces sus cambios se almacenan en el sistema<br>Y observa un mensaje de confirmación. | EP-03 |
| US-25 | Visualización de Perfil de Técnico | Como Técnico registrado Quiero visualizar mi perfil profesional Para revisar cómo se presenta mi información y servicios a los clientes potenciales | Escenario #1: Acceso al perfil profesional<br>Dado que que un Técnico está autenticado en el sistema<br>Cuando solicita visualizar su perfil<br>Entonces se le presenta su información profesional tal como la verían los clientes<br>Y puede revisar su descripción, certificaciones, portafolio y zonas de cobertura. | EP-03 |
| US-26 | Edición de Perfil de Técnico | Como Técnico registrado, quiero editar mi información profesional, certificaciones y servicios ofrecidos para mantener mi perfil actualizado y atractivo para los clientes. | Escenario #1: Edición de información profesional<br>Dado que que un Técnico está en la funcionalidad de edición de perfil<br>Cuando modifica su descripción, información de contacto o especialidades y guarda los cambios<br>Entonces sus cambios se almacenan y se reflejan en su perfil público.<br><br>Escenario #2: Gestión de certificaciones<br>Dado que que un Técnico está editando su perfil<br>Cuando añade una nueva certificación con su respectivo documento<br>Entonces la certificación se añade a su perfil y queda pendiente de validación. | EP-03 |
| US-27 | Entrar a un dashboard Personalizado | Como usuario de la plataforma, quiero acceder a un dashboard personalizado al iniciar sesión, para visualizar de forma inmediata la información relevante según mi rol y actividad reciente. | Escenario #1: Visualización del dashboard para Propietario<br>Dado que que un Propietario inicia sesión<br>Cuando accede a su panel principal<br>Entonces visualiza un resumen de sus servicios activos, sus próximas citas y notificaciones recientes.<br><br>Escenario #2: Visualización del dashboard para Técnico<br>Dado que que un Técnico inicia sesión<br>Cuando accede a su panel principal<br>Entonces visualiza su agenda de servicios del día, solicitudes pendientes y un resumen de sus estadísticas recientes. | EP-03 |
| US-28 | Crear Portafolio Digital con Evidencias de Trabajo | Como Técnico de servicios eléctricos, quiero crear un portafolio digital dentro de mi perfil que incluya fotos, descripciones y referencias de trabajos anteriores, para mostrar mi experiencia y generar mayor confianza en potenciales clientes. | Escenario #1: Añadir un nuevo trabajo al portafolio<br>Dado que que un Técnico está gestionando su perfil<br>Cuando accede a la sección de Portafolio y añade un nuevo trabajo con imágenes y descripción<br>Entonces el trabajo se guarda y se muestra en su perfil público.<br><br>Escenario #2: Organización del portafolio<br>Dado que que un Técnico tiene varios trabajos en su portafolio<br>Cuando organiza sus trabajos por categorías<br>Entonces los cambios se reflejan en la vista pública, permitiendo a los clientes filtrar por dichas categorías. | EP-07 |
| US-29 | Configuración de Zona de Cobertura Geográfica | Como técnico registrado, quiero configurar mi zona de cobertura geográfica especificando radio de acción y ubicaciones donde ofrezco servicios, para recibir solicitudes solo de clientes dentro de mi área de trabajo. | Escenario #1: Definición de una zona de cobertura<br>Dado que que un Técnico está configurando su perfil operativo<br>Cuando define una o más áreas geográficas donde presta servicios<br>Entonces el sistema almacena estas zonas<br>Y las utilizará para filtrar las solicitudes de servicio que puede recibir. | EP-06 |
| US-30 | Configuración de Notificaciones Personalizadas | Como usuario de la plataforma, quiero configurar mis preferencias de notificaciones (email, SMS, push) y frecuencia, para recibir información relevante sin ser saturado de mensajes. | Escenario #1: Ajuste de preferencias de notificación<br>Dado que que un usuario (Propietario o Técnico) está en la configuración de su cuenta<br>Cuando ajusta qué tipo de notificaciones desea recibir y por qué canal (ej. email)<br>Entonces el sistema guarda sus preferencias<br>Y las futuras notificaciones se enviarán de acuerdo a esta configuración. | EP-03 |
| US-31 | Crear Componente Eléctrico | Como técnico Quiero registrar nuevos componentes eléctricos en mi inventario Para mantener un inventario completo de mi infraestructura eléctrica. | Escenario #1: Registro de un nuevo componente<br>Dado que que un Técnico está gestionando su inventario<br>Cuando proporciona la información de un nuevo componente (nombre, marca, etc.)<br>Entonces el sistema registra el nuevo componente en el inventario del técnico. | EP-10 |
| US-32 | Editar Componente Eléctrico | Como técnico Quiero modificar la información de los componentes eléctricos registrados Para mantener actualizada la información técnica y de consumo. | Escenario #1: Actualización de datos técnicos<br>Dado que que un Técnico visualiza su inventario<br>Cuando selecciona un componente y modifica sus características<br>Entonces los cambios se guardan correctamente. | EP-10 |
| US-33 | Eliminar Componente Eléctrico | Como técnico Quiero  eliminar componentes eléctricos de mi inventario Para mantener actualizada mi configuración cuando retire o reemplace equipos. | Escenario #1: Eliminación de componente<br>Dado que que un Técnico visualiza su inventario<br>Cuando selecciona un componente y solicita su eliminación<br>Entonces el sistema solicita confirmación<br>Y elimina el componente del inventario activo tras la confirmación. | EP-10 |
| US-34 | Registro de Propiedad (Propietario) | Como propietario, quiero registrar una nueva propiedad en el sistema, incluyendo su dirección y geolocalización, para  solicitar servicios para ella. | Escenario #1: Añadir una nueva propiedad<br>Dado que que un Propietario está gestionando sus activos<br>Cuando proporciona la información de una nueva propiedad, incluyendo su dirección<br>Entonces el sistema registra la propiedad y la asocia a su cuenta<br>Y la propiedad queda disponible para solicitar servicios. | EP-10 |
| US-35 | Edición de Información de Propiedad (Propietario) | Como propietario, quiero  editar la información de mis propiedades registradas (ej. dirección, características), para mantenerla actualizada. | Escenario #1: Actualización de datos de una propiedad<br>Dado que que un Propietario visualiza sus propiedades registradas<br>Cuando selecciona una propiedad y modifica su información<br>Entonces los cambios se guardan correctamente. | EP-10 |
| US-36 | Eliminación de Propiedad (Propietario) | Como propietario, quiero  eliminar una propiedad de mi cuenta para registrar otra propiedad. | Escenario #1: Eliminación de una propiedad<br>Dado que que un Propietario visualiza sus propiedades registradas<br>Cuando selecciona una propiedad y solicita su eliminación<br>Entonces el sistema solicita confirmación<br>Y elimina la propiedad de su cuenta tras la confirmación. | EP-10 |
| US-37 | Registro de Inventario de Componentes (Técnico) | Como Técnico, quiero registrar los componentes eléctricos que tengo en mi inventario, incluyendo cantidad y costo, para controlar mi stock. | Escenario #1: Añadir un componente al inventario con stock<br>Dado que que un Técnico está gestionando su inventario<br>Cuando registra un nuevo tipo de componente y especifica la cantidad inicial y el costo<br>Entonces el componente se añade a su inventario con el stock correspondiente. | EP-10 |
| US-38 | Actualización de Stock de Componentes (Técnico) | Como Técnico, quiero actualizar las cantidades de mis componentes en inventario después de una compra o uso en un servicio, para mantener la precisión del stock. | Escenario #1: Ajuste manual de stock<br>Dado que que un Técnico está gestionando su inventario<br>Cuando selecciona un componente y ajusta la cantidad de stock manualmente (ej. por una nueva compra)<br>Entonces la cantidad de stock del componente se actualiza. | EP-10 |
| US-39 | Configuración de Alertas de Stock Mínimo (Técnico) | Como Técnico, quiero definir umbrales de stock mínimo para mis componentes y recibir alertas cuando el stock alcance ese nivel, para planificar reposiciones. | Escenario #1: Establecer un umbral de stock mínimo<br>Dado que que un Técnico está gestionando un componente en su inventario<br>Cuando establece un umbral numérico de stock mínimo para ese componente<br>Entonces el sistema guarda esta configuración.<br><br>Escenario #2: Recepción de alerta<br>Dado que que un componente tiene un umbral de stock mínimo configurado<br>Cuando el stock de ese componente baja hasta o por debajo del umbral<br>Entonces el sistema envía una notificación al Técnico informando de la situación. | EP-10 |
| US-40 | Contratación de Servicios Eléctricos mediante Wizard | Como propietario de PyME, quiero contar con un proceso guiado paso a paso para contratar servicios eléctricos, para solucionar mis problemas de forma rápida y sin complicaciones. | Escenario #1: Completar proceso guiado<br>Dado que que un Propietario inicia el proceso de contratación<br>Cuando completa todos los pasos requeridos en el asistente (selección de propiedad, servicio, etc.)<br>Entonces el sistema genera una solicitud de servicio<br>Y le confirma que la solicitud ha sido creada y está pendiente de asignación. | EP-04 |
| US-41 | Selección de Propiedad | Como propietario con múltiples propiedades, quiero seleccionar la propiedad específica donde necesito el servicio, para que el sistema asigne al técnico más cercano a esa ubicación. | Escenario #1: Selección de propiedad en la solicitud<br>Dado que que un Propietario con más de una propiedad inicia una solicitud de servicio<br>Cuando el sistema le solicita indicar para qué propiedad es el servicio<br>Entonces puede seleccionar una de sus propiedades registradas<br>Y la ubicación de esa propiedad será utilizada para la asignación del técnico. | EP-04 |
| US-42 | Carga Manual de Datos de Recibos Eléctricos (3-6 recibos) | Como propietario solicitando un servicio, quiero ingresar manualmente los datos clave de mi último recibo eléctrico durante el proceso de solicitud, para registrar mi historial de consumo y permitir análisis a largo plazo en mi panel de Analytics. | Escenario #1: Ingreso de datos del recibo<br>Dado que que un Propietario está en el proceso de solicitar un servicio<br>Cuando ingresa los datos de consumo (kWh, monto, período) de su recibo eléctrico<br>Entonces el sistema valida y asocia esta información a la solicitud<br>Y los datos quedan almacenados para su futuro análisis de consumo. | EP-04 |
| US-43 | Descripción Detallada del Problema Eléctrico | Como propietario que ya ha seleccionado un servicio, quiero  añadir una descripción detallada de mi problema, para que el técnico asignado conozca el contexto específico antes de su llegada. | Escenario #1: Añadir detalles a la solicitud<br>Dado que que un Propietario está creando una solicitud de servicio<br>Cuando proporciona texto adicional describiendo el problema<br>Entonces esta descripción se adjunta a la solicitud y será visible para el técnico que sea asignado. | EP-04 |
| US-44 | Selección de Servicio Específico del Catálogo | Como propietario, después de seleccionar mi propiedad, quiero ver una lista de servicios específicos disponibles en mi zona (ej: 'Instalación de tomacorriente', 'Diagnóstico General') y seleccionar el que necesito, para que el sistema sepa exactamente qué trabajo solicitar y pueda automatizar la asignación | Escenario #1: Selección de un servicio del catálogo<br>Dado que que un Propietario ha seleccionado la propiedad para el servicio<br>Cuando el sistema le presenta el catálogo de servicios disponibles en su zona<br>Entonces puede seleccionar un servicio específico de la lista<br>Y la solicitud queda vinculada a ese servicio del catálogo. | EP-04 |
| US-45 | Cancelación de servicios programados | Como cliente, quiero cancelar un servicio programado con anticipación para evitar cargos innecesarios | Escenario #1: Cancelación dentro del plazo permitido<br>Dado que que un Propietario tiene un servicio programado<br>Cuando solicita cancelarlo dentro del plazo permitido por las políticas<br>Entonces el sistema procesa la cancelación sin penalización<br>Y notifica tanto al Propietario como al Técnico asignado. | EP-04 |
| US-46 | Notificación de Asignación Automática de Técnico (Propietario) | Como propietario, después de que mi solicitud de servicio es asignada automáticamente, quiero recibir una notificación con la información del técnico asignado. | Escenario #1: Recepción de notificación de asignación<br>Dado que que un Propietario ha creado una solicitud de servicio<br>Cuando el sistema asigna automáticamente un Técnico al servicio<br>Entonces el Propietario recibe una notificación<br>Y la notificación contiene la información del perfil del Técnico asignado. | EP-04 |
| US-47 | Historial de servicios contratados | Como cliente, quiero ver un historial de los servicios que he contratado anteriormente para referencia futura | Escenario #1: Visualización de historial de servicios<br>Dado que que un Propietario accede a su historial de servicios<br>Cuando no aplica ningún filtro<br>Entonces visualiza todos los servicios contratados ordenados cronológicamente<br>Y para cada servicio puede ver detalles como fecha, técnico y estado. | EP-05 |
| US-48 | Configurar Horarios de Trabajo Semanales | Como técnico registrado, quiero configurar mis horarios de trabajo por día de la semana (ej: Lunes 8AM-6PM, Martes 10AM-4PM) y definir la duración promedio que me toma cada tipo de servicio, para que el sistema pueda asignarme automáticamente trabajos solo en mis horarios laborales disponibles. | Escenario #1: Establecer disponibilidad semanal<br>Dado que que un Técnico está configurando su agenda<br>Cuando define sus horas de trabajo para cada día de la semana<br>Entonces el sistema guarda esta disponibilidad como su horario laboral estándar<br>Y lo usará como criterio para la asignación automática de servicios. | EP-06 |
| US-49 | Modificar Horarios de Trabajo Existentes | Como técnico registrado, quiero modificar mis horarios de trabajo ya configurados (cambiar horas de inicio/fin, días laborales), para ajustar mi disponibilidad según cambios en mi situación personal o comercial. | Escenario #1: Ajustar disponibilidad semanal<br>Dado que que un Técnico tiene un horario de trabajo configurado<br>Cuando modifica las horas de inicio o fin de un día laboral y guarda los cambios<br>Entonces el sistema actualiza su horario laboral estándar. | EP-06 |
| US-50 | Bloquear Fechas y Horarios Específicos | Como técnico registrado, quiero bloquear fechas específicas (vacaciones, emergencias) o horarios puntuales (citas médicas, otros compromisos) en mi calendario, para evitar que el sistema me asigne trabajos durante esos períodos. | Escenario #1: Bloquear un período de tiempo<br>Dado que que un Técnico está gestionando su agenda<br>Cuando selecciona una fecha o un rango de horas y lo marca como no disponible<br>Entonces el sistema registra este bloqueo<br>Y no le asignará servicios durante ese período. | EP-06 |
| US-51 | Visualizar Agenda de Trabajos Asignados Automáticamente | Como técnico registrado, quiero visualizar en un calendario todos los trabajos que el sistema me ha asignado automáticamente dentro de mis horarios disponibles, para planificar mi día y ver mi carga de trabajo semanal. | Escenario #1: Vista de agenda con trabajos asignados<br>Dado que que un Técnico accede a su agenda<br>Cuando tiene trabajos que le han sido asignados<br>Entonces visualiza estos trabajos en una vista de calendario<br>Y puede ver los detalles de cada servicio programado. | EP-06 |
| US-52 | Configurar Tiempo de Traslado Entre Servicios | Como técnico registrado, quiero configurar el tiempo promedio que necesito para trasladarme entre ubicaciones en mi zona de cobertura, para que el sistema considere estos intervalos al asignarme trabajos consecutivos. | Escenario #1: Configurar buffer de traslado<br>Dado que que un Técnico está configurando su agenda<br>Cuando define un tiempo promedio de traslado (ej. 30 minutos)<br>Entonces el sistema considerará este intervalo de tiempo entre servicios consecutivos al momento de la asignación automática. | EP-06 |
| US-53 | Crear Servicios en Catálogo con Recetas de Componentes | Como técnico registrado, quiero crear nuevos servicios en mi catálogo especificando qué componentes eléctricos exactos necesito y en qué cantidades (receta), para que el sistema verifique automáticamente si tengo stock suficiente antes de asignarme ese tipo de trabajo. | Escenario #1: Crear un servicio con receta<br>Dado que que un Técnico está gestionando su catálogo<br>Cuando crea un nuevo servicio y le asocia una "receta" (lista de componentes y cantidades de su inventario)<br>Entonces el servicio se guarda con su receta de componentes asociada<br>Y el sistema usará esta receta para validar el stock antes de la asignación. | EP-11 |
| US-54 | Modificar Servicios y sus Recetas de Componentes | Como técnico registrado, quiero modificar los servicios existentes en mi catálogo (precio, descripción, componentes necesarios), para mantener actualizada mi oferta y las recetas de materiales. | Escenario #1: Actualizar una receta de servicio<br>Dado que que un Técnico está editando un servicio existente con receta<br>Cuando modifica la lista de componentes o sus cantidades<br>Entonces la receta del servicio se actualiza. | EP-11 |
| US-55 | Eliminar Servicios del Catálogo | Como técnico registrado, quiero eliminar servicios que ya no ofrezco de mi catálogo, para evitar que el sistema me asigne trabajos que no puedo realizar. | Escenario #1: Eliminación de un servicio<br>Dado que que un Técnico visualiza su catálogo de servicios<br>Cuando selecciona un servicio y solicita su eliminación<br>Entonces el servicio se elimina y ya no será ofrecido a los clientes. | EP-11 |
| US-56 | Establecimiento Precios por Tipo de Servicio y Zona | Como técnico registrado, quiero establecer precios diferenciados por tipo de servicio y opcionalmente por zona dentro de mi área de cobertura, para tener una estructura tarifaria clara y rentable. | Escenario #1: Definir precio de un servicio<br>Dado que que un Técnico está creando o editando un servicio<br>Cuando establece un precio base para dicho servicio<br>Entonces ese precio se mostrará a los clientes como referencia.<br><br>Escenario #2: Definir precio diferenciado por zona (opcional)<br>Dado que que un Técnico ha definido múltiples zonas de cobertura<br>Cuando edita un servicio<br>Entonces puede opcionalmente establecer un precio diferente para una zona específica. | EP-06 |
| US-57 | Beneficio de Solicitud Prioritaria | Como propietario con suscripción Premium, al crear una solicitud de servicio, quiero tener disponible y  activar la opción de "marcar como prioritaria", para que mi solicitud tenga preferencia en el sistema de asignación y así resolver mi problema más rápidamente. | Escenario #1: Marcar solicitud como prioritaria<br>Dado que que un Propietario con plan Premium está creando una solicitud<br>Cuando activa la opción de solicitud prioritaria<br>Entonces la solicitud es creada y marcada con alta prioridad para el proceso de asignación. | EP-04 |
| US-58 | Notificación de Límite de Solicitudes Alcanzado | Como propietario del plan Básico, al intentar crear una solicitud que excede mi límite mensual (2), quiero ser notificado claramente por el sistema y ver una opción directa para mejorar mi plan a Premium, para entender las reglas del plan gratuito y  continuar usando el servicio si lo necesito. | Escenario #1: Bloqueo por límite de solicitudes<br>Dado que que un Propietario con plan Básico ya ha alcanzado su límite de solicitudes mensuales<br>Cuando intenta crear una nueva solicitud de servicio<br>Entonces el sistema le impide continuar<br>Y le informa que ha alcanzado su límite<br>Y le presenta la opción de actualizar a un plan superior. | EP-04 |
| US-59 | Seguimiento de Estados de Servicio en Tiempo Real | Como propietario y técnico, quiero ver el estado actual del servicio (programado, confirmado, en progreso, completado) actualizado en tiempo real, para estar informado sobre el progreso del trabajo. | Escenario #1: Visualización del estado del servicio<br>Dado que que un servicio ha sido asignado<br>Cuando el Propietario o el Técnico consultan los detalles del servicio<br>Entonces visualizan el estado actual del mismo (ej. "Programado").<br><br>Escenario #2: Actualización del estado<br>Dado que que un Técnico está ejecutando un servicio<br>Cuando actualiza el estado del servicio a "En Progreso"<br>Entonces el nuevo estado es visible tanto para él como para el Propietario. | EP-04 |
| US-60 | Registro Fotográfico de Trabajos (Antes/Después) | Como técnico ejecutando un servicio, quiero tomar y subir fotografías del área de trabajo antes y después de la intervención, para documentar el trabajo realizado y protegerme ante reclamos. | Escenario #1: Adjuntar evidencia fotográfica<br>Dado que que un Técnico está gestionando un servicio activo<br>Cuando sube fotografías correspondientes al "antes" y "después" del trabajo<br>Entonces las imágenes quedan asociadas al registro del servicio como evidencia. | EP-07 |
| US-61 | Generación de Reportes Técnicos Estructurados | Como técnico completando un servicio, quiero generar un reporte técnico estructurado que incluya los componentes utilizados de la 'receta' original, los procedimientos realizados y recomendaciones, para profesionalizar mi servicio y dejar constancia del trabajo. | Escenario #1: Generar un reporte de servicio<br>Dado que que un Técnico ha completado un servicio<br>Cuando finaliza el trabajo y accede a la funcionalidad de reporte<br>Entonces puede documentar los componentes utilizados, el trabajo realizado y las recomendaciones para el cliente<br>Y este reporte queda asociado al historial del servicio. | EP-07 |
| US-62 | Actualización Automática de Inventario Post-Servicio | Como técnico que completa un servicio, quiero que el sistema descuente automáticamente del mi inventario los componentes que marqué como utilizados en el reporte técnico, para mantener mi stock actualizado sin trabajo manual. | Escenario #1: Descuento automático de stock<br>Dado que que un Técnico ha completado un servicio que tenía una "receta" de componentes<br>Cuando marca el servicio como "Completado" y confirma los componentes utilizados en el reporte<br>Entonces el sistema descuenta automáticamente las cantidades de esos componentes de su inventario. | EP-06 |
| US-63 | Historial de Clientes Atendidos | Como Técnico, quiero acceder a un historial detallado de los clientes que he atendido, para dar seguimiento a relaciones profesionales y mejorar mi servicio basado en experiencias previas. | Escenario #1: Consulta de historial de clientes<br>Dado que que un Técnico ha completado servicios<br>Cuando accede a su historial de clientes<br>Entonces puede visualizar un listado de todos los clientes atendidos<br>Y para cada cliente, puede ver los servicios prestados. | EP-06 |
| US-64 | Sistema de Calificación Post-Servicio | Como usuario, quiero calificar y dejar reseñas sobre los servicios que he utilizado, para compartir mi experiencia con otros usuarios y proporcionar retroalimentación a los Técnicos. | Escenario #1: Calificación del servicio<br>Dado que que un Propietario ha recibido un servicio que ya fue marcado como "Completado"<br>Cuando completa el formulario de calificación (puntuación y comentarios)<br>Entonces el sistema registra su calificación y la asocia al servicio y al perfil del Técnico. | EP-07 |
| US-65 | Visualización de Calificaciones y Reseñas | Como usuario, quiero ver las calificaciones y reseñas dejadas por otros usuarios, para tomar decisiones informadas sobre qué servicios utilizar. | Escenario #1: Consulta de la reputación de un técnico<br>Dado que que un Propietario está explorando el perfil de un Técnico<br>Cuando accede a la sección de reseñas<br>Entonces visualiza la calificación promedio y los comentarios dejados por otros usuarios. | EP-07 |
| US-66 | Retroalimentación directa de servicios | Como Técnico, quiero recibir retroalimentación directa sobre mis servicios para mejorar mi oferta | Escenario #1: Revisión de valoraciones recibidas<br>Dado que que un Técnico ha recibido valoraciones por sus servicios<br>Cuando accede a su sección de retroalimentación<br>Entonces puede ver todas las valoraciones recibidas de sus clientes<br>Y puede identificar los aspectos mejor y peor valorados. | EP-07 |
| TS-01 | Registrar Propiedad | Como desarrollador, quiero crear un endpoint POST para registrar una propiedad asociada a un propietario. | **Escenario 1: Registro exitoso**<br>Dado que el usuario está autenticado<br>Cuando envía un request POST con todos los datos válidos de su propiedad<br>Entonces el sistema responde con un estado 201 Created<br>Y el cuerpo de la respuesta incluye la propiedad recién creada.<br><br>**Escenario 2: Faltan datos obligatorios**<br>Dado que el usuario omite el campo "dirección"<br>Cuando intenta registrar la propiedad<br>Entonces el sistema responde con un error 400 Bad Request y un mensaje de validación.<br><br>**Escenario 3: Usuario no autenticado**<br>Dado que un usuario no autenticado intenta acceder al endpoint<br>Cuando envía un request POST<br>Entonces el sistema responde con un error 401 Unauthorized. | EP-12 |
| TS-02 | Obtener Propiedades por Propietario | Como desarrollador, quiero crear un endpoint GET para listar todas las propiedades registradas por un propietario. | **Escenario 1: Propietario con propiedades**<br>Dado que el propietario está autenticado y tiene propiedades registradas<br>Cuando consulta el endpoint<br>Entonces se devuelve un estado 200 OK y una lista con sus propiedades.<br><br>**Escenario 2: Propietario sin propiedades**<br>Dado que el propietario está autenticado pero no tiene propiedades registradas<br>Cuando consulta el endpoint<br>Entonces se devuelve un estado 200 OK y una lista vacía []. | EP-12 |
| TS-03 | Crear Componente | Como desarrollador, quiero crear un endpoint POST para que el técnico registre un nuevo componente en su inventario. | **Escenario 1: Creación exitosa**<br>Dado que un técnico autenticado envía la información completa del componente<br>Cuando se recibe el request POST<br>Entonces el sistema responde con 201 Created y el nuevo componente.<br><br>**Escenario 2: Componente duplicado**<br>Dado que el técnico intenta crear un componente con un nombre que ya existe en su inventario<br>Cuando envía el request<br>Entonces el sistema responde con 409 Conflict y un mensaje de error.<br><br>**Escenario 3: Acceso no autorizado por rol**<br>Dado que un usuario con rol "Propietario" intenta crear un componente<br>Cuando envía el request<br>Entonces el sistema responde con un error 403 Forbidden. | EP-13 |
| TS-04 | Actualizar Stock de Componente | Como desarrollador, quiero crear un endpoint PATCH para actualizar el stock de un componente del inventario del técnico. | **Escenario 1: Actualización exitosa**<br>Dado que un técnico quiere modificar la cantidad de un componente existente<br>Cuando envía un nuevo valor de stock<br>Entonces se responde con 200 OK y se actualiza el stock en la base de datos.<br><br>**Escenario 2: Componente inexistente**<br>Dado que el técnico intenta actualizar un componente con un ID que no existe<br>Cuando envía el request<br>Entonces el sistema responde con un error 404 Not Found. | EP-13 |
| TS-05 | Crear Servicio de Técnico | Como desarrollador, quiero crear un endpoint POST para que el técnico defina un nuevo servicio en su catálogo, incluyendo su "receta" de componentes. | **Escenario 1: Creación exitosa**<br>Dado que un técnico autenticado envía datos válidos para un nuevo servicio y su receta<br>Cuando se recibe la solicitud POST<br>Entonces el sistema responde con 201 Created y el nuevo servicio.<br><br>**Escenario 2: Faltan datos obligatorios**<br>Dado que el técnico envía los datos del servicio pero sin la "receta"<br>Cuando se recibe la solicitud POST<br>Entonces el sistema responde con 400 Bad Request y un error de validación.<br><br>**Escenario 3: Componente de la receta no existe**<br>Dado que el técnico incluye en la receta un ID de componente que no es válido<br>Cuando se recibe la solicitud POST<br>Entonces el sistema responde con 400 Bad Request y un error específico. | EP-13 |
| TS-06 | Obtener Servicios por Zona | Como desarrollador, quiero crear un endpoint GET que devuelva los servicios disponibles en una zona geográfica específica. | **Escenario 1: Servicios encontrados**<br>Dado que un propietario consulta una zona con cobertura de técnicos<br>Cuando el frontend consulta con la ubicación de la propiedad<br>Entonces el sistema devuelve 200 OK y una lista de servicios únicos.<br><br>**Escenario 2: Zona sin cobertura**<br>Dado que la ubicación de la propiedad no está en la zona de cobertura de ningún técnico<br>Cuando se realiza la consulta<br>Entonces el sistema responde con 200 OK y una lista vacía []. | EP-14 |
| TS-07 | Iniciar Flujo de Solicitud | Como desarrollador, quiero crear un endpoint que valide el plan del propietario al iniciar una solicitud. | **Escenario 1: Usuario gratuito dentro del límite**<br>Dado que un propietario con plan gratuito ha hecho 1 solicitud este mes<br>Cuando inicia una nueva solicitud<br>Entonces el sistema responde 200 OK y le permite continuar.<br><br>**Escenario 2: Usuario gratuito alcanza el límite**<br>Dado que el propietario con plan gratuito ya ha hecho 2 solicitudes este mes<br>Cuando inicia una nueva solicitud<br>Entonces el sistema responde 403 Forbidden y sugiere actualizar a Premium.<br><br>**Escenario 3: Usuario Premium sin límites**<br>Dado que un propietario con plan Premium ha hecho 5 solicitudes este mes<br>Cuando inicia una nueva solicitud<br>Entonces el sistema responde 200 OK y le permite continuar. | EP-14 |
| TS-08 | Enviar Solicitud de Servicio | Como desarrollador, quiero crear un endpoint POST que registre los detalles de una solicitud de servicio. | **Escenario 1: Envío exitoso**<br>Dado que el propietario ha completado el asistente<br>Cuando envía los datos finales de la solicitud<br>Entonces el sistema responde 201 Created y guarda la solicitud.<br><br>**Escenario 2: Faltan datos de recibo**<br>Dado que se omiten datos obligatorios del recibo<br>Cuando se envía la solicitud<br>Entonces el sistema responde 400 Bad Request con un error de validación.<br><br>**Escenario 3: Usuario gratuito intenta usar prioridad**<br>Dado que un propietario con plan gratuito marca la solicitud como prioritaria<br>Cuando envía la solicitud<br>Entonces el sistema responde 403 Forbidden y un mensaje de error. | EP-14 |
| TS-09 | Asignar Técnico Automáticamente | Como desarrollador, quiero implementar la lógica para asignar automáticamente un técnico a una solicitud. | **Escenario 1: Asignación exitosa**<br>Dado que hay una solicitud pendiente y un técnico compatible<br>Cuando se activa el proceso de asignación<br>Entonces se asigna el técnico a la solicitud y se actualiza su estado a "asignado".<br><br>**Escenario 2: Ningún técnico compatible**<br>Dado que ningún técnico cumple con los criterios de stock o agenda<br>Cuando se intenta asignar<br>Entonces la solicitud permanece en estado "pendiente" y se registra el fallo.<br><br>**Escenario 3: Asignación con prioridad**<br>Dado que hay una solicitud normal y una prioritaria, y un solo técnico disponible<br>Cuando se activa la asignación<br>Entonces el sistema asigna el técnico a la solicitud prioritaria primero. | EP-14 |
| TS-10 | Actualización Automática de Stock | Como desarrollador, quiero crear un listener que reaccione al evento "Servicio Completado" para descontar el stock. | **Escenario 1: Descuento exitoso**<br>Dado que un servicio es "Completado" y se publica el evento con los componentes usados<br>Cuando el listener recibe el evento<br>Entonces el sistema actualiza el inventario del técnico correctamente.<br><br>**Escenario 2: El evento no contiene componentes**<br>Dado que se recibe un evento "Servicio Completado" sin componentes listados<br>Cuando el listener lo procesa<br>Entonces el proceso termina exitosamente sin realizar cambios en el inventario. | EP-13 |
| TS-11 | Enviar Evaluación de Servicio | Como desarrollador, quiero crear un endpoint POST para registrar una evaluación. | **Escenario 1: Evaluación exitosa**<br>Dado que un servicio está "Completado"<br>Cuando el usuario envía una evaluación válida<br>Entonces se responde 201 Created y se guarda la evaluación.<br><br>**Escenario 2: Servicio no completado**<br>Dado que un usuario intenta evaluar un servicio "En progreso"<br>Cuando se envía el request<br>Entonces el sistema responde 403 Forbidden y un mensaje adecuado. | EP-15 |
| TS-12 | Obtener Evaluaciones por Técnico | Como desarrollador, quiero crear un endpoint GET para obtener las evaluaciones de un técnico. | **Escenario 1: Técnico con evaluaciones**<br>Dado que un técnico tiene evaluaciones registradas<br>Cuando se hace la consulta<br>Entonces el sistema responde 200 OK con la lista de evaluaciones.<br><br>**Escenario 2: Técnico sin evaluaciones**<br>Dado que el técnico aún no ha recibido evaluaciones<br>Cuando se hace la consulta<br>Entonces el sistema responde 200 OK con una lista vacía. | EP-15 |
| TS-13 | Conectar a Base de Datos | Como desarrollador, quiero configurar la conexión a la base de datos PostgreSQL. | **Escenario 1: Conexión exitosa**<br>Dado que las credenciales de la base de datos son correctas<br>Cuando se levanta el servidor<br>Entonces la conexión se establece sin errores.<br><br>**Escenario 2: Credenciales incorrectas**<br>Dado que la contraseña de la base de datos es incorrecta<br>Cuando el servidor intenta conectarse<br>Entonces el sistema lanza un error de autenticación y detiene el arranque. | EP-00 |
| TS-14 | Listener de Webhook de Stripe | Como desarrollador, quiero crear un endpoint para recibir y procesar webhooks de Stripe. | **Escenario 1: Suscripción exitosa**<br>Dado que un usuario completa un pago en Stripe<br>Cuando Stripe envía el evento "checkout.session.completed"<br>Entonces el sistema valida la firma y actualiza el estado del usuario a "Premium".<br><br>**Escenario 2: Firma de Webhook inválida**<br>Dado que se recibe un request con una firma de Stripe incorrecta<br>Cuando el sistema intenta validar el evento<br>Entonces rechaza el request con un error 400 Bad Request.<br><br>**Escenario 3: Evento de cancelación de suscripción**<br>Dado que un usuario cancela su plan desde el portal de Stripe<br>Cuando Stripe envía el evento "customer.subscription.deleted"<br>Entonces el sistema actualiza el estado del usuario a "Básico". | EP-09 |
| TS-15 | Reinicio Mensual de Contador | Como desarrollador, quiero crear una tarea programada (cron job) que se ejecute mensualmente. | **Escenario 1: Reseteo exitoso**<br>Dado que es el primer día del mes<br>Cuando se ejecuta la tarea<br>Entonces el sistema reinicia el contador de solicitudes de todos los usuarios del plan gratuito.<br><br>**Escenario 2: Tarea se ejecuta en día incorrecto**<br>Dado que no es el primer día del mes<br>Cuando la tarea se ejecuta (por un error o test)<br>Entonces el proceso termina sin realizar ninguna acción. | EP-09 |
| TS-16 | Sesión de Portal de Stripe | Como desarrollador, quiero crear un endpoint que genere una sesión para el Portal de Cliente de Stripe. | **Escenario 1: Generación exitosa**<br>Dado que un usuario Premium autenticado solicita gestionar su plan<br>Cuando se consulta el endpoint<br>Entonces se genera y devuelve una URL única para el portal de Stripe.<br><br>**Escenario 2: Usuario no suscrito**<br>Dado que un usuario del plan gratuito intenta acceder al portal<br>Cuando se consulta el endpoint<br>Entonces el sistema responde 403 Forbidden. | EP-09 |
| TS-17 | Endpoint de Autenticación JWT | Como desarrollador, quiero crear un endpoint de login que genere tokens JWT para permitir la autenticación segura de usuarios. | **Escenario 1: Login exitoso** <br> Dado que se envía POST /api/auth/login con email y password válidos <br> Cuando se procesa la petición <br> Entonces el sistema retorna un token JWT <br> Y el token incluye el rol del usuario <br> Y retorna código 200 <br> <br> **Escenario 2: Credenciales inválidas** <br> Dado que se envía POST /api/auth/login con credenciales incorrectas <br> Cuando se procesa la petición <br> Entonces el sistema retorna error 401 <br> Y retorna mensaje de error apropiado <br> <br> **Escenario 3: Validación de token** <br> Dado que se envía una petición con token JWT en header Authorization <br> Cuando se valida el token <br> Entonces el sistema verifica la firma del token <br> Y retorna la información del usuario si es válido | EP-01 |
| TS-18 | Endpoint de Registro de Usuarios | Como desarrollador, quiero crear endpoints de registro diferenciados para permitir el registro de propietarios y técnicos. | **Escenario 1: Registro exitoso de propietario** <br> Dado que se envía POST /api/auth/register/owner con datos válidos <br> Cuando se procesa la petición <br> Entonces el sistema crea el usuario con rol "owner" <br> Y encripta la contraseña <br> Y retorna código 201 <br> Y retorna el usuario creado (sin contraseña) <br> <br> **Escenario 2: Registro exitoso de técnico** <br> Dado que se envía POST /api/auth/register/technician con datos válidos <br> Cuando se procesa la petición <br> Entonces el sistema crea el usuario con rol "technician" <br> Y almacena las certificaciones básicas <br> Y retorna código 201 <br> <br> **Escenario 3: Email duplicado** <br> Dado que se intenta registrar con email ya existente <br> Cuando se procesa la petición <br> Entonces el sistema retorna error 409 <br> Y retorna mensaje indicando email duplicado | EP-01 |
| TS-19 | Verificación de Email | Como desarrollador, quiero crear endpoints para verificar emails de usuarios para completar el proceso de registro. | **Escenario 1: Generar token de verificación** <br> Dado que se registra un nuevo usuario <br> Cuando se completa el registro <br> Entonces el sistema genera un token de verificación <br> Y almacena el token en base de datos <br> Y marca el usuario como "no verificado" <br> <br> **Escenario 2: Verificar email** <br> Dado que se envía GET /api/auth/verify/{token} <br> Cuando se procesa la petición con token válido <br> Entonces el sistema marca el usuario como verificado <br> Y retorna código 200 <br> Y retorna mensaje de confirmación <br> <br> **Escenario 3: Token inválido** <br> Dado que se envía un token de verificación inválido <br> Cuando se procesa la petición <br> Entonces el sistema retorna error 400 <br> Y retorna mensaje de token inválido | EP-02 |
| TS-20 | Middleware de Autorización | Como desarrollador, quiero crear middleware de autorización para controlar acceso a endpoints según roles de usuario. | **Escenario 1: Acceso autorizado** <br> Dado que un usuario con rol correcto accede a un endpoint protegido <br> Cuando el middleware verifica los permisos <br> Entonces el sistema permite continuar con la petición <br> Y pasa al siguiente middleware o controlador <br> <br> **Escenario 2: Acceso denegado por rol** <br> Dado que un usuario sin permisos accede a endpoint restringido <br> Cuando el middleware verifica los permisos <br> Entonces el sistema retorna error 403 <br> Y retorna mensaje de acceso denegado <br> <br> **Escenario 3: Token faltante** <br> Dado que se accede a endpoint protegido sin token <br> Cuando el middleware verifica autenticación <br> Entonces el sistema retorna error 401 <br> Y retorna mensaje de token requerido | EP-03 |
| TS-21 | Recuperación de Contraseña | Como desarrollador, quiero crear endpoints para recuperación de contraseña para permitir a usuarios restablecer sus credenciales. | **Escenario 1: Solicitar recuperación** <br> Dado que se envía POST /api/auth/forgot-password con email válido <br> Cuando se procesa la petición <br> Entonces el sistema genera un token de recuperación <br> Y almacena el token con expiración <br> Y retorna código 200 <br> <br> **Escenario 2: Restablecer contraseña** <br> Dado que se envía POST /api/auth/reset-password con token y nueva contraseña <br> Cuando se procesa la petición con token válido <br> Entonces el sistema actualiza la contraseña encriptada <br> Y elimina el token de recuperación <br> Y retorna código 200 <br> <br> **Escenario 3: Token expirado** <br> Dado que se intenta usar un token de recuperación expirado <br> Cuando se procesa la petición <br> Entonces el sistema retorna error 400 <br> Y retorna mensaje de token expirado | EP-03 |
| TS-22 | Endpoints de Gestión de Perfiles | Como desarrollador, quiero crear endpoints CRUD para gestión de perfiles para permitir a usuarios actualizar su información personal. | **Escenario 1: Obtener perfil** <br> Dado que se envía GET /api/users/profile con token válido <br> Cuando se procesa la petición <br> Entonces el sistema retorna la información del usuario <br> Y omite campos sensibles como contraseña <br> Y retorna código 200 <br> <br> **Escenario 2: Actualizar perfil** <br> Dado que se envía PUT /api/users/profile con datos válidos <br> Cuando se procesa la petición <br> Entonces el sistema actualiza los campos permitidos <br> Y retorna el perfil actualizado <br> Y retorna código 200 <br> <br> **Escenario 3: Datos inválidos** <br> Dado que se envían datos inválidos en actualización <br> Cuando se validan los datos <br> Entonces el sistema retorna error 400 <br> Y retorna lista de errores de validación por campo | EP-03 |
| TS-23 | Sistema de Notificaciones Básico | Como desarrollador, quiero crear un servicio básico de notificaciones para enviar emails simples a los usuarios. | **Escenario 1: Enviar email simple** <br> Dado que se requiere enviar un email <br> Cuando se llama al servicio de notificaciones <br> Entonces el sistema envía el email usando configuración SMTP <br> Y registra el envío en logs <br> Y retorna confirmación de envío <br> <br> **Escenario 2: Configurar preferencias** <br> Dado que se envía PUT /api/users/notifications con preferencias <br> Cuando se procesa la petición <br> Entonces el sistema actualiza las preferencias del usuario <br> Y retorna código 200 <br> <br> **Escenario 3: Error en envío** <br> Dado que falla el envío de email <br> Cuando se detecta el error <br> Entonces el sistema registra el error en logs <br> Y retorna error apropiado al llamador | EP-04, EP-05 |

<hr>

### 3.3. Impact Mapping

<hr>

<img src="https://i.imgur.com/Abd2EgL.jpeg"/>
<hr>

<hr>

<img src="https://i.imgur.com/GqQM8At.jpeg"/>
<hr>

<hr>

<img src="https://i.imgur.com/fA9MI5O.jpeg"/>
<hr>

<hr>

### 3.4. Product Backlog
<hr>
En esta sección, el equipo establecio el product backlog de acuerdo al peso en story points de cada historia sea tecnica o de usuario.
<hr>

# 

| StoryID | Título | Descripción | Story Points (1/3/5/8) |
|---------|--------|-------------|------------------------|
| US-08 | Ver Información del Startup | Como potencial cliente, quiero conocer información sobre la empresa desarrolladora, para evaluar su credibilidad y confiabilidad. | 1 |
| US-09 | Conocer la Misión de la Startup | Como visitante interesado, quiero conocer la misión de la empresa, para entender sus valores y propósito. | 1 |
| US-10 | Conocer la Visión de la Startup | Como visitante interesado, quiero conocer la visión de la empresa, para entender sus objetivos a largo plazo y su proyección de futuro. | 1 |
| US-04 | Visualización de una Sección Principal | Como visitante de la página, quiero ver una sección principal atractiva que me presente un breve resumen de la idea del producto, para entender rápidamente de qué se trata el servicio. | 2 |
| US-05 | Navegación sin errores | Como visitante, quiero navegar por la página web sin encontrar errores, para tener una experiencia fluida que me anime a registrarme. | 2 |
| US-06 | Navegación mediante Encabezado | Como usuario, quiero un menú de navegación claro en el encabezado, para acceder fácilmente a las diferentes secciones de la página. | 2 |
| US-07 | Visualización del Pie de página | Como visitante, quiero ver un pie de página organizado con accesos directos e información de contacto, para encontrar información adicional rápidamente. | 2 |
| US-19 | Mensajes de éxito retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre éxito para entender fácilmente el resultado de mis acciones. | 2 |
| US-20 | Mensajes de error retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | 2 |
| US-22 | Cierre de Sesión | Como usuario autenticado, quiero cerrar mi sesión de forma segura para proteger mi cuenta cuando termine de usar la aplicación. | 2 |
| US-01 | Visualización de Características y Beneficios | Como visitante de la landing page, Quiero ver claramente las características y beneficios de la plataforma, Para entender cómo puede ayudarme y decidir si registrarme. | 3 |
| US-02 | Visualización de Testimonios | Como visitante indeciso sobre la plataforma, Quiero ver testimonios de usuarios reales, Para aumentar mi confianza en el servicio antes de registrarse. | 3 |
| US-03 | Adaptabilidad a Diferentes Dispositivos | Como visitante que accede desde diferentes dispositivos, Quiero que la landing page se adapte correctamente a mi pantalla, Para tener una experiencia óptima independientemente del dispositivo que use. | 3 |
| US-11 | Conocer más a fondo los servicios que ofrecen | Como visitante interesado, quiero conocer de manera más específica los servicios que ofrecen por medio de capturas de pantallas, para comprender su solución y decidir si optar por ella. | 3 |
| US-12 | Ver planes de suscripción disponibles | Como visitante interesado, quiero ver una sección clara que me presente los planes de suscripción disponibles, separados por Planes para Técnicos y Planes para Propietarios, para comparar fácilmente sus características y precios. | 3 |
| US-18 | Validación de datos de registro | Como usuario, quiero recibir retroalimentación inmediata sobre la validez de los datos que ingresó durante el registro para corregir errores rápidamente. | 3 |
| US-23 | Visualización de Perfil de Propietario | Como propietario registrado, quiero visualizar mi perfil, para revisar mi información personal y preferencias almacenadas en el sistema. | 3 |
| US-30 | Configuración de Notificaciones Personalizadas | Como usuario de la plataforma, quiero configurar mis preferencias de notificaciones (email, SMS, push) y frecuencia, para recibir información relevante sin ser saturado de mensajes. | 3 |
| US-43 | Descripción Detallada del Problema Eléctrico | Como propietario que ya ha seleccionado un servicio, quiero añadir una descripción detallada de mi problema, para que el técnico asignado conozca el contexto específico antes de su llegada. | 3 |
| US-45 | Cancelación de servicios programados | Como cliente, quiero cancelar un servicio programado con anticipación para evitar cargos innecesarios. | 3 |
| US-47 | Historial de servicios contratados | Como cliente, quiero ver un historial de los servicios que he contratado anteriormente para referencia futura. | 3 |
| US-55 | Eliminar Servicios del Catálogo | Como técnico registrado, quiero eliminar servicios que ya no ofrezco de mi catálogo, para evitar que el sistema me asigne trabajos que no puedo realizar. | 3 |
| US-63 | Historial de Clientes Atendidos | Como Técnico, quiero acceder a un historial detallado de los clientes que he atendido, para dar seguimiento a relaciones profesionales y mejorar mi servicio basado en experiencias previas. | 3 |
| US-68 | Exportación de datos de consumo | Como usuario, quiero exportar mis datos históricos de consumo en formatos comunes (CSV, Excel) para análisis externos. | 3 |
| TS-01 | Registrar Propiedad | Como desarrollador, quiero crear un endpoint POST para registrar una propiedad asociada a un propietario. | 3 |
| TS-02 | Obtener Propiedades por Propietario | Como desarrollador, quiero crear un endpoint GET para listar todas las propiedades registradas por un propietario. | 3 |
| TS-04 | Actualizar Stock de Componente | Como desarrollador, quiero crear un endpoint PATCH para actualizar el stock de un componente del inventario del técnico. | 3 |
| TS-12 | Obtener Evaluaciones por Técnico | Como desarrollador, quiero crear un endpoint GET para obtener las evaluaciones de un técnico. | 3 |
| TS-22 | Endpoint de Gestión de Perfiles | Como desarrollador, necesito crear endpoints para visualizar y editar perfiles de usuario para soportar la funcionalidad de gestión de cuentas diferenciada por tipo de usuario. | 3 |
| TS-15 | Reinicio Mensual de Contador | Como desarrollador, quiero crear una tarea programada (cron job) que se ejecute mensualmente. | 3 |
| TS-19 | Verificación de Email | Como desarrollador, quiero crear endpoints para verificar emails de usuarios para completar el proceso de registro. | 3 |
| TS-21 | Recuperación de Contraseña | Como desarrollador, quiero crear endpoints para recuperación de contraseña para permitir a usuarios restablecer sus credenciales. | 3 |
| TS-22 | Endpoints de Gestión de Perfiles | Como desarrollador, quiero crear endpoints CRUD para gestión de perfiles para permitir a usuarios actualizar su información personal. | 3 |
| US-13 | Registro de cuentas como Dueño de Hogar | Como dueño de hogar, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mi vivienda. | 5 |
| US-14 | Registro de cuentas como Dueño de Empresa | Como dueño o representante de empresa, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mis instalaciones comerciales. | 5 |
| US-15 | Registro de cuentas para Técnicos | Como Técnico de componentes eléctricos yo servicios, quiero registrarme para tener una cuenta en la aplicación, para ofrecer mis productos y servicios a los usuarios. | 5 |
| US-16 | Verificación de cuenta por correo electrónico | Como usuario, quiero verificar mi cuenta a través de un enlace enviado por correo electrónico para confirmar mi identidad. | 5 |
| US-17 | Inicio de sesión de usuarios | Como usuario registrado, quiero iniciar sesión en la aplicación con mis credenciales para acceder a mi cuenta y utilizar las funcionalidades de la plataforma. | 5 |
| US-21 | Recuperación de Contraseña | Como usuario registrado, quiero recuperar mi contraseña en caso de olvidarla, para volver a acceder a mi cuenta de manera segura. | 5 |
| US-24 | Edición de Perfil de Propietario | Como propietario registrado, quiero editar mi información personal y preferencias, para mantener mi perfil actualizado y tener más control sobre este. | 5 |
| US-25 | Visualización de Perfil de Técnico | Como Técnico registrado Quiero visualizar mi perfil profesional Para revisar cómo se presenta mi información y servicios a los clientes potenciales. | 5 |
| US-27 | Entrar a un dashboard Personalizado | Como usuario de la plataforma, quiero acceder a un dashboard personalizado al iniciar sesión, para visualizar de forma inmediata la información relevante según mi rol y actividad reciente. | 5 |
| US-28 | Crear Portafolio Digital con Evidencias de Trabajo | Como Técnico de servicios eléctricos, quiero crear un portafolio digital dentro de mi perfil que incluya fotos, descripciones y referencias de trabajos anteriores, para mostrar mi experiencia y generar mayor confianza en potenciales clientes. | 5 |
| US-29 | Configuración de Zona de Cobertura Geográfica | Como técnico registrado, quiero configurar mi zona de cobertura geográfica especificando radio de acción y ubicaciones donde ofrezco servicios, para recibir solicitudes solo de clientes dentro de mi área de trabajo. | 5 |
| US-31 | Crear Componente Eléctrico | Como técnico Quiero registrar nuevos componentes eléctricos en mi inventario Para mantener un inventario completo de mi infraestructura eléctrica. | 5 |
| US-32 | Editar Componente Eléctrico | Como técnico Quiero modificar la información de los componentes eléctricos registrados Para mantener actualizada la información técnica y de consumo. | 5 |
| US-33 | Eliminar Componente Eléctrico | Como técnico Quiero eliminar componentes eléctricos de mi inventario Para mantener actualizada mi configuración cuando retire o reemplace equipos. | 5 |
| US-34 | Registro de Propiedad (Propietario) | Como propietario, quiero registrar una nueva propiedad en el sistema, incluyendo su dirección y geolocalización, para solicitar servicios para ella. | 5 |
| US-35 | Edición de Información de Propiedad (Propietario) | Como propietario, quiero editar la información de mis propiedades registradas (ej. dirección, características), para mantenerla actualizada. | 5 |
| US-36 | Eliminación de Propiedad (Propietario) | Como propietario, quiero eliminar una propiedad de mi cuenta, si ya no la gestiono. | 5 |
| US-37 | Registro de Inventario de Componentes (Técnico) | Como Técnico, quiero registrar los componentes eléctricos que tengo en mi inventario, incluyendo cantidad y costo, para controlar mi stock. | 5 |
| US-38 | Actualización de Stock de Componentes (Técnico) | Como Técnico, quiero actualizar las cantidades de mis componentes en inventario después de una compra o uso en un servicio, para mantener la precisión del stock. | 5 |
| US-39 | Configuración de Alertas de Stock Mínimo (Técnico) | Como Técnico, quiero definir umbrales de stock mínimo para mis componentes y recibir alertas cuando el stock alcance ese nivel, para planificar reposiciones. | 5 |
| US-40 | Contratación de Servicios Eléctricos mediante Wizard | Como propietario de PyME, quiero contar con un proceso guiado paso a paso para contratar servicios eléctricos, para solucionar mis problemas de forma rápida y sin complicaciones. | 5 |
| US-41 | Selección de Propiedad | Como propietario con múltiples propiedades, quiero seleccionar la propiedad específica donde necesito el servicio, para que el sistema asigne al técnico más cercano a esa ubicación. | 5 |
| US-42 | Carga Manual de Datos de Recibos Eléctricos (3-6 recibos) | Como propietario solicitando un servicio, quiero ingresar manualmente los datos clave de mi último recibo eléctrico durante el proceso de solicitud, para registrar mi historial de consumo y permitir análisis a largo plazo en mi panel de Analytics. | 5 |
| US-44 | Selección de Servicio Específico del Catálogo | Como propietario, después de seleccionar mi propiedad, quiero ver una lista de servicios específicos disponibles en mi zona (ej 'Instalación de tomacorriente', 'Diagnóstico General') y seleccionar el que necesito, para que el sistema sepa exactamente qué trabajo solicitar y pueda automatizar la asignación. | 5 |
| US-46 | Notificación de Asignación Automática de Técnico (Propietario) | Como propietario, después de que mi solicitud de servicio es asignada automáticamente, quiero recibir una notificación con la información del técnico asignado. | 5 |
| US-48 | Configurar Horarios de Trabajo Semanales | Como técnico registrado, quiero configurar mis horarios de trabajo por día de la semana (ej Lunes 8AM-6PM, Martes 10AM-4PM) y definir la duración promedio que me toma cada tipo de servicio, para que el sistema pueda asignarme automáticamente trabajos solo en mis horarios laborales disponibles. | 5 |
| US-49 | Modificar Horarios de Trabajo Existentes | Como técnico registrado, quiero modificar mis horarios de trabajo ya configurados (cambiar horas de inicio/fin, días laborales), para ajustar mi disponibilidad según cambios en mi situación personal o comercial. | 5 |
| US-50 | Bloquer Fechas y Horarios Específicos | Como técnico registrado, quiero bloquear fechas específicas (vacaciones, emergencias) o horarios puntuales (citas médicas, otros compromisos) en mi calendario, para evitar que el sistema me asigne trabajos durante esos períodos. | 5 |
| US-51 | Visualizar Agenda de Trabajos Asignados Automáticamente | Como técnico registrado, quiero visualizar en un calendario todos los trabajos que el sistema me ha asignado automáticamente dentro de mis horarios disponibles, para planificar mi día y ver mi carga de trabajo semanal. | 5 |
| US-52 | Configurar Tiempo de Traslado Entre Servicios | Como técnico registrado, quiero configurar el tiempo promedio que necesito para trasladarme entre ubicaciones en mi zona de cobertura, para que el sistema considere estos intervalos al asignarme trabajos consecutivos. | 5 |
| US-54 | Modificar Servicios y sus Recetas de Componentes | Como técnico registrado, quiero modificar los servicios existentes en mi catálogo (precio, descripción, componentes necesarios), para mantener actualizada mi oferta y las recetas de materiales. | 5 |
| US-56 | Establecimiento Precios por Tipo de Servicio y Zona | Como técnico registrado, quiero establecer precios diferenciados por tipo de servicio y opcionalmente por zona dentro de mi área de cobertura, para tener una estructura tarifaria clara y rentable. | 5 |
| US-57 | Beneficio de Solicitud Prioritaria | Como propietario con suscripción Premium, al crear una solicitud de servicio, quiero tener disponible y activar la opción de marcar como prioritaria, para que mi solicitud tenga preferencia en el sistema de asignación y así resolver mi problema más rápidamente. | 5 |
| US-58 | Notificación de Límite de Solicitudes Alcanzado | Como propietario del plan Básico, al intentar crear una solicitud que excede mi límite mensual (2), quiero ser notificado claramente por el sistema y ver una opción directa para mejorar mi plan a Premium, para entender las reglas del plan gratuito y continuar usando el servicio si lo necesito. | 5 |
| US-59 | Seguimiento de Estados de Servicio en Tiempo Real | Como propietario y técnico, quiero ver el estado actual del servicio (programado, confirmado, en progreso, completado) actualizado en tiempo real, para estar informado sobre el progreso del trabajo. | 5 |
| US-60 | Registro Fotográfico de Trabajos (Antes/Después) | Como técnico ejecutando un servicio, quiero tomar y subir fotografías del área de trabajo antes y después de la intervención, para documentar el trabajo realizado y protegerme ante reclamos. | 5 |
| US-61 | Generación de Reportes Técnicos Estructurados | Como técnico completando un servicio, quiero generar un reporte técnico estructurado que incluya los componentes utilizados de la 'receta' original, los procedimientos realizados y recomendaciones, para profesionalizar mi servicio y dejar constancia del trabajo. | 5 |
| US-62 | Actualización Automática de Inventario Post-Servicio | Como técnico que completa un servicio, quiero que el sistema descuente automáticamente del mi inventario los componentes que marqué como utilizados en el reporte técnico, para mantener mi stock actualizado sin trabajo manual. | 5 |
| US-64 | Sistema de Calificación Post-Servicio | Como usuario, quiero calificar y dejar reseñas sobre los servicios que he utilizado, para compartir mi experiencia con otros usuarios y proporcionar retroalimentación a los Técnicos. | 5 |
| US-65 | Visualización de Calificaciones y Reseñas | Como usuario, quiero ver las calificaciones y reseñas dejadas por otros usuarios, para tomar decisiones informadas sobre qué servicios utilizar. | 5 |
| US-66 | Retroalimentación directa de servicios | Como Técnico, quiero recibir retroalimentación directa sobre mis servicios para mejorar mi oferta. | 5 |
| TS-03 | Crear Componente | Como desarrollador, quiero crear un endpoint POST para que el técnico registre un nuevo componente en su inventario. | 5 |
| TS-05 | Crear Servicio de Técnico | Como desarrollador, quiero crear un endpoint POST para que el técnico defina un nuevo servicio en su catálogo, incluyendo su receta de componentes. | 5 |
| TS-06 | Obtener Servicios por Zona | Como desarrollador, quiero crear un endpoint GET que devuelva los servicios disponibles en una zona geográfica específica. | 5 |
| TS-08 | Enviar Solicitud de Servicio | Como desarrollador, quiero crear un endpoint POST que registre los detalles de una solicitud de servicio. | 5 |
| TS-10 | Actualización Automática de Stock | Como desarrollador, quiero crear un listener que reaccione al evento Servicio Completado para descontar el stock. | 5 |
| TS-11 | Enviar Evaluación de Servicio | Como desarrollador, quiero crear un endpoint POST para registrar una evaluación. | 5 |
| TS-16 | Sesión de Portal de Stripe | Como desarrollador, quiero crear un endpoint que genere una sesión para el Portal de Cliente de Stripe. | 5 |
| TS-17 | Endpoint de Autenticación JWT | Como desarrollador, quiero crear un endpoint de login que genere tokens JWT para permitir la autenticación segura de usuarios. | 5 |
| TS-18 | Endpoint de Registro de Usuarios | Como desarrollador, quiero crear endpoints de registro diferenciados para permitir el registro de propietarios y técnicos. | 5 |
| TS-20 | Middleware de Autorización | Como desarrollador, quiero crear middleware de autorización para controlar acceso a endpoints según roles de usuario. | 5 |
| TS-23 | Sistema de Notificaciones Básico | Como desarrollador, quiero crear un servicio básico de notificaciones para enviar emails simples a los usuarios. | 5 |
| US-26 | Edición de Perfil de Técnico | Como Técnico registrado, quiero editar mi información profesional, certificaciones y servicios ofrecidos para mantener mi perfil actualizado y atractivo para los clientes. | 8 |
| US-53 | Crear Servicios en Catálogo con Recetas de Componentes | Como técnico registrado, quiero crear nuevos servicios en mi catálogo especificando qué componentes eléctricos exactos necesito y en qué cantidades (receta), para que el sistema verifique automáticamente si tengo stock suficiente antes de asignarme ese tipo de trabajo. | 8 |
| TS-07 | Iniciar Flujo de Solicitud | Como desarrollador, quiero crear un endpoint que valide el plan del propietario al iniciar una solicitud. | 8 |
| TS-09 | Asignar Técnico Automáticamente | Como desarrollador, quiero implementar la lógica para asignar automáticamente un técnico a una solicitud. | 8 |
| TS-13 | Conectar a Base de Datos | Como desarrollador, quiero configurar la conexión a la base de datos PostgreSQL. | 8 |
| TS-14 | Listener de Webhook de Stripe | Como desarrollador, quiero crear un endpoint para recibir y procesar webhooks de Stripe. | 8 |

<hr>

<div style="page-break-after: always;"></div>

## Capítulo IV: Product Design

Este capítulo detalla el diseño de la solución propuesta desde una perspectiva técnica y visual. Incluye la arquitectura de software bajo principios de Domain-Driven Design (DDD), la selección de tecnologías, el diseño de base de datos y el modelado de entidades. También se presentan los mockups, diagramas de flujo y lineamientos de experiencia de usuario.
 
### 4.1. Style Guidelines

#### 4.1.1. General Style Guidelines

**Branding:**

El logo de ElectroLink representa la esencia de la plataforma como un puente moderno y confiable entre soluciones eléctricas y quienes las necesitan. El enchufe central simboliza el rubro eléctrico y la conexión energética, mientras que el contorno en forma de techo alude a hogares y oficinas, principales escenarios donde se brindan los servicios. Las líneas internas sugieren flujo de energía y conectividad digital, reforzando el enfoque tecnológico. La paleta de colores —azul eléctrico, blanco y naranja— transmite confianza, claridad e innovación. Todo esto, junto con una tipografía limpia y moderna, refuerza la identidad de ElectroLink como una herramienta accesible, profesional y orientada a resolver problemas reales.

**Variantes de Logo:**

*Logo Original*

<img src="https://i.imgur.com/6rBCfjh.png"/>

*Logo sin Letras*

<img src="https://i.imgur.com/yD4YEyL.png"/>

*Colores Invertidos*

<img src="https://i.imgur.com/uMK9ErV.png"/>

**Typography:**

La tipografía de nuestra marca tiene un estilo moderno y ordenado, va de la mano con la imagen de nuestra marca y lo que nosotros, como startup, queremos transmitir. Se usará un lenguaje casual y sencillo, con la finalidad de que el público se sienta cómodo usando nuestra plataforma.
La tipografía debe ser clara y legible, utilizando la fuente "Abel", que se mantendrá consistente en toda la plataforma. Los títulos y subtítulos usarán una fuente ligeramente más grande que el cuerpo del texto para mejorar la jerarquía visual. En general, se debe usar un tamaño que garantice que todo el texto sea fácilmente legible tanto en pantallas pequeñas como grandes.

**Colors:**

La paleta de colores elegida para la web de ElectroLink fue diseñada para complementar visualmente el logo sin competir con él, manteniendo una identidad coherente, moderna y profesional. El azul grisáceo suave establece una base limpia y tecnológica, ideal para fondos que no cansan la vista y dan protagonismo al contenido. Este tono, junto al celeste claro para botones o elementos interactivos, mantiene la sensación de confianza y dinamismo que el logo transmite, pero con una suavidad que hace la interfaz más amigable.
Por otro lado, el gris cálido y el grafito profundo aportan equilibrio visual y legibilidad. Son tonos sobrios que ayudan a jerarquizar la información sin recargarla, perfectos para textos y detalles estructurales. El naranja pastel, inspirado en el logo pero más atenuado, actúa como acento para destacar avisos o llamadas a la acción sin ser intrusivo. Finalmente, el verde menta claro introduce un toque de frescura y vitalidad, ideal para confirmar acciones exitosas o transmitir sensación de progreso. En conjunto, esta paleta respalda los valores de la marca: precisión, accesibilidad, tecnología y conexión humana.

## Paleta de Colores – ElectroLink

| Color                | Uso                                              | Código Hex              |
|----------------------|--------------------------------------------------|--------------------------|
| Azul grisáceo suave  | Fondo de secciones, tarjetas, menús laterales    | `#B5D5F5`, `#E8EEF7`     |
| Gris cálido          | Texto secundario, bordes suaves, fondos suaves   | `#A9B1BA`                |
| Celeste claro        | Hover, botones secundarios, íconos de ayuda      | `#B5D5F5`, `#3DADFF`     |
| Amarillo pastel      | Elementos destacados suaves, fondos de aviso     | `#FFE492`, `#D5D6D8`     |
| Grafito profundo     | Texto principal, íconos oscuros                  | `#2E3A59`                |

<hr>

#### 4.1.2. Web Style Guidelines

De manera que el contenido de nuestro sitio web se vea organizado y sea mostrado de manera adecuada, implementamos el patrón F. El objetivo del patrón F en un sitio web es reflejar la forma natural en la que los usuarios escanean el contenido, empezando por la parte superior izquierda y moviéndose en forma de "F" hacia abajo. Este diseño resalta la información clave en las primeras líneas y en el lateral izquierdo, donde la vista se concentra más. Mejora la usabilidad al alinear la estructura con el comportamiento visual del usuario, facilitando la lectura rápida y efectiva. Se utiliza para mejorar la experiencia del usuario y destacar contenido relevante.

<img src="https://i.imgur.com/ThilDbx.png"/>

## 4.1. Information Architecture

La arquitectura de información que se implementará en ElectroLink está diseñada para facilitar una experiencia de navegación clara, eficiente y centrada en conectar usuarios con proveedores de servicios y componentes eléctricos. Desde el menú principal, los visitantes podrán acceder rápidamente a categorías clave como "Proveedores", "Servicios", "Asesoramiento", y "Mantenimientos preventivos", lo que les permitirá encontrar con facilidad las soluciones que se ajusten a sus necesidades técnicas o del hogar.
La plataforma contará con un sistema de filtrado inteligente que permitirá a los usuarios buscar proveedores según ubicación, especialización (instalaciones, mantenimiento, venta de componentes), certificaciones legales y valoraciones de otros clientes. Además, ElectroLink ofrecerá un apartado de asesoría técnica, donde los usuarios podrán consultar artículos, guías rápidas y recomendaciones para la gestión segura de instalaciones eléctricas tanto en hogares como en negocios.
Asimismo, cada proveedor tendrá un perfil verificado con información detallada sobre sus servicios, casos anteriores, contacto directo y una sección de opiniones. También se incluirá un sistema de solicitud rápida de cotización, permitiendo a los clientes establecer una comunicación ágil y efectiva. Con esta arquitectura, ElectroLink busca no solo ordenar y categorizar la información de manera accesible, sino también fomentar la confianza, la transparencia y una red de colaboración técnica eficiente, alineada con estándares de seguridad y legalidad en el rubro eléctrico.


#### 4.2.1. Organization Systems
Para representar la estructura de los usuario se han realizado diagramas para la explicación de la funcionalidades de la aplicación y el recorrido del usuario en la misma.
<img src="https://i.imgur.com/wdxy51q.png"/>

#### 4.2.2. Labeling Systems

| Sección                                     | Etiqueta                        | Descripción                                                                 |
|--------------------------------------------|----------------------------------|-----------------------------------------------------------------------------|
| **Menú de inicio**                          | Inicio                           | Página principal con visión general de la plataforma y acceso rápido a secciones. |
|                                             | Cómo funciona                    | Explicación clara y visual del funcionamiento del sistema paso a paso.     |
|                                             | Testimonios                      | Opiniones y experiencias reales de usuarios satisfechos.                   |
|                                             | Contacto                         | Formulario y canales disponibles para consultas, soporte o sugerencias.    |
|                                             |                                  |                                                                            |
| **Botones de ingreso y salida               | Iniciar Sesión                   | Botón donde los usuarios podrán iniciar sesión con su cuenta.              |
|   de la plataforma**                        | Iniciar Sesión con Google        | Botón que permite a los usuarios iniciar sesión con su cuenta de Google.   |
|                                             | Iniciar Sesión con Facebook      | Botón que permite a los usuarios iniciar sesión con su cuenta de Facebook. |
|                                             | Registrarse                      | Botón donde los usuarios podrán crearse una cuenta en la plataforma.       |
|                                             | Dashboard                        | Botón que dirige a la interfaz del usuario seleccionado.                   |
|                                             | Cerrar Sesión                    | Botón que permite al usuario empezar una conversación con el asistente virtual. |
|                                             |                                  |                                                                            |
| **Sección menú del propietario**            | Historial de servicios           | Visualiza el registro de mantenimientos y reparaciones realizadas.         |
|                                             | Inventario de electrodomésticos  | Consulta la lista de equipos registrados y su consumo energético.          |
|                                             | Buscar proveedores               | Encuentra técnicos y proveedores certificados.                             |
|                                             | Detectar problema                | Analiza factores para identificar fallas o excesos de consumo.             |
|                                             | Monitorear energía               | Seguimiento del consumo eléctrico mensual y estado de componentes.         |
|                                             | Inventario de electrodomésticos (Subir) | Añade nuevos dispositivos con sus características de consumo.       |
|                                             | Suscripción                      | Gestión del plan actual y beneficios exclusivos.                           |
|                                             | Mi perfil                        | Edición de información personal, preferencias y datos de contacto.         |
|                                             |                                  |                                                                            |
| **Menú de proveedores y técnicos**          | Gestión y Agenda de Citas        | Organiza, programa y visualiza citas con clientes.                         |
|                                             | Gestión de Servicios Ofrecidos   | Administra los servicios disponibles y sus detalles.                       |
|                                             | Historial de Servicios           | Registro completo de todos los servicios realizados.                       |
|                                             | Panel de Métricas y Rendimiento  | Estadísticas clave sobre actividad y eficiencia del proveedor.             |
|                                             | Inventario y Catálogo de Productos (En caso aplique) | Gestiona stock y presenta productos disponibles.       |
|                                             | Subscripción                     | Visualiza y gestiona el plan de suscripción y beneficios.                  |
|                                             | Mi Perfil                        | Edita y actualiza la información personal y profesional.                   |

<hr>

### 4.2.3. SEO Tags and Meta Tags

**Landing Page Title:** ElectroLink - Tu conexión segura a la electricidad

**Description:** ElectroLink es una plataforma enfocada en conectar a proveedores de componentes o servicios eléctricos con clientes que necesitan asesoramiento o asistencia para realizar mantenimientos preventivos en sus hogares u oficinas.

**Meta Keywords:** seguridad, ahorro eléctrico, mantenimiento, asesoramiento.

**ElectroLink Meta Author:** ElectroLink

**Meta Description:** facilitar la conexión entre clientes que necesitan servicios eléctricos confiables y proveedores calificados.

**Title:** ElectroLink

**Description:** Buscar conectar a dueños de hogares urbanos con proveedores técnicos eléctricos certificados, garantizando servicios seguros y eficientes dentro de los parámetros legales mediante una plataforma intuitiva y fácil de usar.

**Meta Keywords:** seguridad, ahorro eléctrico, mantenimiento, asesoramiento.

**Meta Author:** ElectroLink

<hr>

### 4.2.4. Searching Systems

ElectroLink cuenta con un sistema de búsqueda avanzada que permite a los usuarios encontrar servicios y productos eléctricos de forma eficiente, a través de múltiples filtros:

| **Filtro**                         | **Descripción**                                                                                                                                          |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tipo de Servicio**              | Permite al usuario buscar proveedores en función del tipo de servicio requerido (instalación, mantenimiento preventivo, reparación, auditoría eléctrica, etc.). |
| **Ubicación / Zona**              | Filtro geográfico que ayuda a encontrar proveedores o técnicos disponibles en una zona específica o cercana al domicilio/oficina del usuario.              |
| **Disponibilidad de Agenda**      | Permite filtrar proveedores según fechas y horarios disponibles para programar una cita.                                                                 |
| **Certificación del Proveedor**   | Muestra solo técnicos o empresas que cuentan con certificaciones válidas y actualizadas en el área eléctrica.                                             |
| **Rango de Precio**               | Filtra servicios o productos según el presupuesto disponible del usuario, desde opciones económicas hasta servicios premium.                             |
| **Proveedores con Mejores Reseñas** | Filtro para mostrar técnicos con mayores calificaciones o comentarios positivos según otros usuarios.                                                   |
| **Categoría de Producto Eléctrico** | Ayuda a encontrar productos específicos en el inventario (bombillas, disyuntores, medidores, enchufes, etc.).                                           |
| **Historial de Consumo Energético** | Permite visualizar patrones de consumo eléctrico mensual o anual filtrando por fecha o dispositivos.                                                   |
| **Planes de Suscripción**         | Filtra y compara distintos planes de suscripción según los beneficios ofrecidos (monitoreo, asesoría, prioridad en atención, etc.).                       |


### 4.2.5. Navigation Systems

Los sistemas de navegación de ElectroLink han sido diseñados para guiar de forma intuitiva a los usuarios a través del Landing Page y la aplicación, facilitando la exploración del contenido y el acceso a las funcionalidades clave. La estructura sigue una lógica clara que permite a cada tipo de usuario (hogar, oficina, proveedor) encontrar rápidamente lo que necesita mediante menús jerárquicos, enlaces destacados y botones de acción visibles.

<img src="https://i.imgur.com/UnlLqHv.png"/>

### 4.3. Landing Page UI Design

### 4.3.1. Landing Page Wireframe.

<img src="https://i.imgur.com/RIIZVSE.png"/>

<img src="https://i.imgur.com/IsmTEYP.png"/>

<img src="https://i.imgur.com/dwrbsjw.png"/>

<img src="https://i.imgur.com/MdqLiaz.png"/>

### 4.3.2. Landing Page Mock-up

<img src="https://i.imgur.com/hXEACTz.png"/>

<img src="https://i.imgur.com/gHvT3uz.png"/>

### 4.4. Web Applications UX/UI Design.

### 4.4.1. Web Applications Wireframes.

## Web Applications Wireframes - ElectroLink

En esta sección se presentan los **wireframes de la aplicación web de ElectroLink**, los cuales permiten visualizar cómo será la estructura y disposición de los elementos en la interfaz. Estos bocetos funcionales aseguran una experiencia fluida, clara e inclusiva para los diferentes segmentos de usuarios, como propietarios de hogares, pequeños empresarios y proveedores técnicos, incluyendo además personas con ansiedad social, TEA, o discapacidades físicas.

El propósito de los wireframes es establecer la **estructura base de la aplicación**, mostrando la organización de la información, la navegación y la ubicación de los elementos interactivos sin enfocarse aún en los aspectos visuales finales. Esta etapa es crucial para garantizar una **experiencia de usuario intuitiva y accesible desde el inicio del diseño**.

---

### Elementos clave del diseño

#### Arquitectura de la información

- El contenido y las funciones están organizadas para facilitar el acceso a herramientas como el historial de servicios, monitoreo de consumo energético, o gestión de citas.
- Los wireframes incluyen pantallas clave como:
  - Panel de control del propietario.
  - Dashboard del proveedor técnico.
  - Formulario para solicitar mantenimientos preventivos.
  - Historial de dispositivos y consumo energético.
- Se ha priorizado una **navegación simple y accesible**, permitiendo que usuarios con diversas habilidades puedan moverse con facilidad por la plataforma.

#### Estructura de la interfaz

- Los elementos interactivos (botones, menús, tarjetas de información) están ubicados estratégicamente para que el usuario pueda realizar tareas con pocos clics.
- Las pantallas permiten acceso directo a secciones importantes como:
  - Subir o editar dispositivos eléctricos.
  - Contactar proveedores certificados.
  - Visualizar métricas de rendimiento o consumo.
- Se incluye también una sección de perfil adaptable y configurable, especialmente útil para personas que requieren adaptaciones visuales, físicas o cognitivas.

---

### Principios de diseño aplicados

- **Simplicidad**: Cada interfaz está diseñada para minimizar la carga cognitiva, con estructuras limpias que priorizan las acciones más importantes para el usuario.
- **Consistencia**: Todos los botones, iconos y menús siguen un mismo estilo visual y funcional, lo que reduce el tiempo de aprendizaje para los usuarios.
- **Accesibilidad**: Se aplican principios de diseño inclusivo, incluyendo opciones como:
  - Ajuste del tamaño de texto y botones.
  - Contraste de colores adecuado.
  - Navegación compatible con teclado y lectores de pantalla.
  - Diseño responsive para su uso en laptops, tablets y móviles.

---
Los wireframes son una guía esencial para la implementación efectiva de la plataforma ElectroLink, alineando las necesidades de los usuarios con un diseño funcional, ordenado y accesible para todos.

<img src="https://i.imgur.com/nwjF5Kr.png"/>

<img src="https://i.imgur.com/7GeJ7Ua.png"/>

<img src="https://i.imgur.com/C5Q56pR.png"/>

<img src="https://i.imgur.com/8gOZ6GA.png"/>

<img src="https://i.imgur.com/5JAGI69.png"/>

<img src="https://i.imgur.com/s4KR7ll.png"/>

<img src="https://i.imgur.com/i8ba802.png"/>

### 4.4.2. Web Applications Wireflow Diagrams

<img src="https://i.imgur.com/0BN4OZM.png"/>

<img src="https://i.imgur.com/nZSSUMC.png"/>

<img src="https://i.imgur.com/XQd56bO.png"/>

<img src="https://i.imgur.com/soOCrA8.png"/>
<br>
_Enlace del Diagrama Lucidchart:_
https://lucid.app/lucidchart/9bc93c27-6140-47f1-9cfc-e7c0c5a15134/edit?invitationId=inv_f9a0cb75-977e-4669-a09e-21a42409c64d&page=0_0

### 4.4.2. Web Applications Mock-ups

<img src="https://i.imgur.com/G3TSic5.png"/>

<img src="https://i.imgur.com/wZoh5ZE.png"/>

<img src="https://i.imgur.com/nDd5iLM.png"/>

<img src="https://i.imgur.com/bXvd8W1.png"/>

<img src="https://i.imgur.com/ZxeRM6c.png"/>

<img src="https://i.imgur.com/peSNSOz.png"/>

<img src="https://i.imgur.com/6Ah62mr.png"/>

### 4.4.3. Web Applications User Flow Diagrams

<img src="https://i.imgur.com/28bjNjk.png"/>

## 4.5. Web Applications Prototyping

Esta sección presenta los prototipos de interfaz de usuario , los cuales incluyen simulaciones de interacción y navegación. Las decisiones de
interacción se fundamentan en criterios clave, como la facilidad de uso, la accesibilidad y la optimización para distintos dispositivos.

<img src="https://i.imgur.com/rUlcOAc.png"/>
<br>
_Enlace del diseño en Figma:_
https://www.figma.com/design/sU4hpNItE2lZ88WrlTUKwy/Untitled?node-id=31-624&t=9AhvJafsRNaQO2cX-1


## 4.6. Domain-Driven Software Architecture


### 4.6.1. Software Architecture Context Diagrams
<img src="https://imgur.com/6gbMyIf.jpeg"/>


### 4.6.2. Software Architecture Container Diagrams
<img src="https://imgur.com/ZZDW5y4.jpeg"/>


### 4.6.3. Software Architecture Components Diagrams
Authentication Bounded Context
<img src="https://imgur.com/YNbXMVY.jpeg" />

Profile Management Bounded Context
<img src="https://imgur.com/DHEUMxc.jpeg"/>

Invoice Monitoring Bounded Context
<img src="https://imgur.com/qQiuMvP.jpeg" />

Service Management Bounded Context
<img src="https://imgur.com/ZFMpv6y.jpeg" />

Service Contracting Bounded Context
<img src="https://imgur.com/rkgoUoA.jpeg" />

Subscription Billing Bounded Context
<img src="https://imgur.com/OsW1q22.jpeg" />

<hr>

### 4.7. Software Object-Oriented Design
<hr>

<hr>

#### 4.7.1. Class Diagrams
<hr>

<img src="https://i.imgur.com/U7exloi.jpeg"/>
<hr>

#### 4.7.2. Class Dictionary


| Clase | Atributo | Descripción | Tipo de dato |
| :---- | :---- | :---- | :---- |
| User | \-userID | id del usuario |  int |
| User | \-email | email del usuario | String |
| User | \-password | contraseña del usuario | String |
| User | \-phoneNumber | teléfono del usuario | String |
| User | \-firstName | nombre del usuario | String |
| User | \-lastName | apellido del usuario | String |
| User | \-registrationDate | fecha del registro del usuario | DateTime |
| User | \-isVerified | verificación de registro | Boolean |
| User | \-type | tipo de usuario | UserType |
| Provider | \-companyName | nombre de la compañia del proveedor | String |
| Provider | \-taxID | número de identificación fiscal | String |
| Provider | \-businessLicense | licencia de trabajo del proveedor | String |
| Provider | \-certifications | certificaciones del proveedor | List\<Certification\> |
| Provider | \-servicesOffered | servicios ofrecidos | List\<Service\>  |
| Provider | \-availabilitySchedule | horario de disponibilidad | List\<Availability\>  |
| Provider | \-isVerified | verificación de los datos del proveedor | Boolean |
| Provider | \-averageRating | rating promedio del proveedor | Double |
| HomeOwner | \-address | dirección del dueño de hogar | String |
| HomeOwner | \-properties | propiedades del dueño de hogar | List\<Property\> |
| BusinessOwner | \-companyName | nombre de la compañía del dueño PYME | String |
| BusinessOwner |  \-taxID | número de identificación fiscal | String |
| BusinessOwner | \-companyAddress | dirección de la compañía | String |
| BusinessOwner | \-BusinessProperties | propiedades de la compañía | List\<Property\> |
| Administrator | \-adminLevel | nivel de administrador | String |
| Report | \-reportID | id del reporte | int |
| Report | \-reporterID | id del reportante | int |
| Report | \-reportedID | id del reportado | int |
| Report | \-description | descripción del reporte | String |
| Report | \-reportDate | fecha del reporte | DateTime |
| Report | \-evidenceAttachments | evidencias del reporte | List\<String\> |
| Report | \-status | estado del reporte | ReportStatus |
| Report | \-ReportType | tipo del reporte |  ReportType |
| Property | \-propertyID | id de la propiedad | int |
| Property | \-address | dirección de la propiedad | String |
| Property | \-type | tipo de la propiedad | PropertyType  |
| Property | \-squareFootage | el área de la propiedad | int |
| Property | \-components | componentes electricos de la propiedad | List\<ElectricalComponent\> |
| ServiceRequest | \-requestID | id de la solicitud del servicio | int |
| ServiceRequest | \-userID | id del usuario | int |
| ServiceRequest | \-propertyID | id de la propiedad | int |
| ServiceRequest | \-serviceID | id del servicio | int |
| ServiceRequest | \-description | descripción de la solicitud del servicio | String |
| ServiceRequest | \-requestDate | fecha de la solicitud | DateTime |
| ServiceRequest | \-priority | nivel de prioridad de la solicitud | ServicePriority |
| ServiceRequest |  \-status | estado de la solicitud | ServiceRequestStatus |
| Invoice | \-invoiceID | id de la factura | int |
| Invoice | \-bookingID | id de la reserva | int |
| Invoice | \-invoiceNumber | número de la factura | String |
| Invoice | \-issueDate | fecha de emisión | DateTime |
| Invoice |  \-dueDate | fecha de vencimiento | DateTime |
| Invoice |  \-subtotal | subtotal de la factura | double |
| Invoice | \-tax | impuestos cobrados | double |
| Invoice | \-total | total de la factura | double |
| Invoice | \-status | estado de la factura | InvoiceStatus |
| ElectricalComponent | \-componentID | id del componente | int |
| ElectricalComponent | \-name | nombre del componente | String |
| ElectricalComponent | \-model | model del componente | String |
| ElectricalComponent | \-manufacturer | fabricante del componente | String |
| ElectricalComponent |  \-installationDate | fecha de la instalación del componente | DateTime |
| ElectricalComponent | \-lastMaintenanceDate | ultima fecha de mantenimiento del componente | DateTime |
| ElectricalComponent | \-status | estado del componente | ComponentStatus |
| ServiceBooking | \-bookingID | id de la reserva | int |
| ServiceBooking | \-requestID | id de la solicitud | int |
| ServiceBooking |  \-providerID | id del proveedor | int |
| ServiceBooking | \-scheduledDate | fecha establecida para el servicio | DateTime |
| ServiceBooking | \-startTime | hora de inicio del servicio | Time |
| ServiceBooking | endTime | hora de finalización del servicio | Time |
| ServiceBooking | \-finalPrice | precio final del servicio | double |
| ServiceBooking | \-status | estado del servicio | BookingStatus |
| ServiceRecord | \-recordID | id del registro del servicio | int |
| ServiceRecord |  \-bookingID | id de la reserva | int |
| ServiceRecord | \-workDone | trabajo realizado | String |
| ServiceRecord |  \-partsReplaced | partes reemplazadas durante el servicio | List\<String\> |
| ServiceRecord | \-technicalNotes | notas técnicas del servicio  | String |
| ServiceRecord | \-recommendations | recomendaciones del proveedor | List\<String\> |
| ServiceRecord | \-completionDate | fecha de finalización del servicio | DateTime |
| ServiceRecord | \-finalCost | costo final del servicio | double |
| Review | \-reviewID | id de la reseña | int |
| Review |  \-userID | id del usuario | int |
| Review |  \-providerID | id del proveedor | int |
| Review |  \-bookingID | id de la reserva | int |
| Review | \-rating | calificación del servicio | int |
| Review | \-comment | comentarios realizados post-servicio | String |
| Review |  \-reviewDate | flecha del resumen | DateTime |
| Review |  \-photos | fotos realizadas durante el servicio | List\<String\> |
| Payment | \-paymentID | id del pago | int |
| Payment | \-bookingID | id de la reserva | int |
| Payment |  \-amount | monto del pago | double |
| Payment | \-paymentDate | fecha del pago | DateTime |
| Payment | \-method | método del pago | PaymentMethod |
| Payment | \-status | estado del pago | PaymentStatus |
| Payment | \-transactionReference | referencia de la transacción | String |
| Notification | \-notificationID | id de la notificación | int |
| Notification | \-userID | id del usuario | int |
| Notification | \-title | título de la notificación |  String  |
| Notification | \-message | mensaje de la notificación |  String  |
| Notification |  \-sentDate | fecha de envío de la notificación | DateTime |
| Notification | \-isRead | validación de lectura de la notificación | boolean |
| Notification | \-type | tipo de notificación | NotificationType |
| Certification | \-certificationID | id del certificado | int |
| Certification | \-name | nombre del certificado | String |
| Certification | \-issuingOrganization | organización emitora de la certificación | String |
| Certification | \-issueDate | fecha de emisión de la certificación | DateTime |
| Certification | \-expiryDate | fecha de vencimiento de la certificación | DateTime |
| Certification | \-verificationCode | código de verificación de la certificación | String |
| Availability | \-availabilityID | id de la disponibilidad | int |
| Availability | \-day | fecha de la disponibilidad | DayOfWeek |
| Availability |  \-startTime | hora de inicio | Time |
| Availability | \-endTime | hora de finalización | Time |
| Availability | \-isAvailable | verificación de disponibilidad | Boolean |
| Suscription | \-subscriptionID | id de la suscripción | int |
| Suscription |  \-providerID | id del proveedor | int |
|  Suscription |  \-plan | plan de suscripción | SubscriptionPlan  |
| Suscription | \-startDate | fecha de inicio de la suscripción | DateTime |
| Suscription |  \-endDate | fecha de fin de la suscripción | DateTime |
| Suscription | \-billingCycle | ciclo de facturación de la suscripción | PaymentFrequency |
| Suscription | \-autoRenew | verificación de auto recarga del pago | boolean |
| Service | \-serviceID | id del servicio | int |
| Service | \-name | nombre del servicio |  String |
| Service | \-description | descripción del servicio | String |
| Service |  \-basePrice | precio base del servicio | double |
| Service | \-estimatedDuration | duración estimada del servicio | int |
| Service | \-inclusions | lo que incluye el servicio |  List\<String\>  |
| Service | \-category | categoría del servicio | ServiceCategory |
| Widget | \-widgetID | id del widget | int |
| Widget | \-title | título del widget | String |
| Widget | \-type | tipo del widget | WidgetType |
| Widget | \-positionX | posición en x del widget | int |
| Widget | \-positionY | posición en y del widget | int |
| Widget | \-width | anchura del widget | int |
| Widget | \-height | altura del widget | int |
| Widget | \-configuration | configuración del widget | Map\<String, Object\> |
| Dashboard | \-userID | id del usuario | int |
| Dashboard | \-widgets | widgets del dashboard | List\<Widget\> |
| Dashboard |  \-type | tipo de dashboard | DashboardType |
| Favorite | \-favoriteID | id de favoritos | int |
| Favorite | \-userID | id del usuario | int |
| Favorite | \-providerID | id del proveedor | int |
| Favorite | \-addedDate | fecha de inclusión a favoritos | DateTime |
| SupportTicket | \-ticketID | id del ticket | int |
| SupportTicket | \-userID | id del usuario | int |
| SupportTicket |  \-subject | asunto del ticket | String |
| SupportTicket | \-description | descripción del ticket | String |
| SupportTicket | \-submissionDate | fecha de envío del ticket | DateTime |
| SupportTicket | \-priority | prioridad del ticket | TicketPriority |
| SupportTicket |  \-status | estado del ticket | TicketStatus |
| SupportTicket | \-conversation | conversación del soporte | List\<Message\> |
| Message | \-messageID | id del mensaje | int |
| Message |  \-senderID | id del mensajero | int |
| Message | \-receiverID | id del receptor | int |
| Message | \-content | contenido del mensaje | String |
| Message | \-sentDate | fecha de envío del mensaje | DateTime |
| Message | \-isRead | verificación de que ha sido leído | boolean |
| Message |  \-attachments | adjuntos del mensaje |  List\<String\> |
<hr>

<hr>

### 4.8. Database Design
<hr>

<hr>

#### 4.8.1. Database Diagram

<hr>

<img src="https://i.imgur.com/z040ytB.png"/>
<hr>

<div style="page-break-after: always;"></div>

## Capítulo V: Product Implementation, Validation & Deployment

Se documenta el proceso de implementación progresiva del sistema mediante sprints. Se incluyen las decisiones técnicas clave, estrategias de control de versiones, convenciones de codificación y validación del producto con usuarios reales. Además, se abordan los procedimientos de despliegue, pruebas funcionales y ajustes realizados tras retroalimentación de validación.

## 5.1. Software Configuration Management

Aunque la falta de una gestión adecuada de la configuración del software puede generar desorden, confusión y versiones inconsistentes entre los miembros del equipo, implementar un control riguroso sobre el código fuente, los documentos de diseño y los activos digitales asegura que todos trabajen de manera coordinada y eficiente. Así, la colaboración entre desarrolladores se fortalece y se evitan errores derivados de trabajar con archivos desactualizados.

<hr>

### 5.1.1. Software Development Environment Configuration

**Project Management**

| Plataforma    | Descripción                                                                                                                                                                                                                                                                                           | Enlace                       |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| Trello        | Esta plataforma de gestión de proyectos ofrece funcionalidades para el seguimiento detallado del progreso de cada tarea a lo largo de su ciclo de vida, además de permitir la designación clara de responsables para cada actividad dentro del equipo de trabajo.                                      | https://trello.com           |
| Uxpressia     | Herramienta en línea que ayuda en el proceso de mapeo.                                                                                                                                                                                                                                              | https://uxpressia.com/      |
| Canva         | Es una aplicación web de diseño y comunicación visual donde los usuarios pueden diseñar lo que deseen y publicarlo. Cuenta con diversos formatos y estilos de creación para todo tipo de trabajo.                                                                                                    | https://www.canva.com      |
| Vertabelo     | Fundamental para el diseño, la documentación y la gestión de bases de datos relacionales, ya que simplifica el proceso de modelado, fomenta la colaboración y ayuda a garantizar la calidad y la coherencia de la estructura de los datos.                                                        | https://vertabelo.com   |
| Lucidchart    | Sirve como un lienzo visual versátil para representar cualquier tipo de información estructurada o proceso, facilitando la comprensión, la comunicación y la colaboración entre equipos.                                                                                                                | https://www.lucidchart.com/ |
| C4 Model      | Sistema de notación visual para arquitectos de software y equipos de desarrollo que ayuda a describir la arquitectura de un sistema de software en diferentes niveles de abstracción.                                                                                                                    | https://c4model.com            |

**Product UX/UI Desing**

| Plataforma | Descripción                                                                                                                                                                                                                            | Link                                                    |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Figma      | Herramienta para el diseño de productos digitales que fomenta la colaboración, agiliza el flujo de trabajo y permite crear experiencias de usuario efectivas y visualmente atractivas.                                                 | https://www.figma.com |

**Software Development**

| Plataforma           | Descripción                                                                                                                                                                                                                            | Link                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| HTML                | Sirve para definir la estructura y el contenido de una página web.                                                                                                                                                                      | https://www.w3schools.com/html/default.asp                                      |
| CSS                 | Se encarga de la presentación visual y el estilo de la página web.                                                                                                                                                                       | https://www.w3schools.com/css/default.asp                                       |
| JS                  | Añade interactividad y dinamismo a la página web.                                                                                                                                                                                        | https://www.w3schools.com/js/default.asp                               |
| Visual Studio Code  | Entorno de desarrollo que facilita la escritura, edición, depuración y gestión de código para una amplia gama de lenguajes y proyectos.                                                                                                    | https://code.visualstudio.com          |

**Software Documentation**

| Plataforma | Descripción                                             | Link                                                              |
|------------|---------------------------------------------------------|-------------------------------------------------------------------|
| GitHub     | Gestión de la documentación en función a repositorios y organizaciones | https://github.com          |
| Markdown   | Formato base para la presentación y documentación del proyecto | https://markdown.es/                     |
<br>

### 5.1.2. Source Code Management

Definir convenciones de nomenclatura para ramas en Git mejora la organización del flujo de trabajo y facilita la colaboración entre desarrolladores. Siguiendo buenas prácticas como las de Git Flow o trunk-based development, se puede establecer una estructura ordenada y predecible.

- Además, utilizar un esquema de nombres predecible permite:

- Automatizar procesos (CI/CD).

- Identificar fácilmente el propósito y alcance de una rama.

GitFlow es un modelo de gestión de ramas en Git que facilita el manejo de proyectos grandes mediante la separación en ramas principales y de características. En nuestro proyecto, utilizamos las siguientes ramas:

* **Rama `main`:** Esta rama contiene el código en producción, incluyendo archivos CSS, imágenes, JavaScript y la página principal en HTML. Aseguramos que todo el contenido aquí esté en un estado estable y listo para ser desplegado.

* **Rama `gh-pages`:** Esta rama se utiliza para desplegar y mostrar una versión visualizable del proyecto en GitHub Pages, permitiendo que cualquier persona acceda a la página `index.html` en tiempo real.

Además, contamos con un repositorio separado que organiza nuestras tareas en epics, utilizando archivos `.feature` que describen los criterios de aceptación para cada funcionalidad. Esto nos ayuda a mantener un seguimiento claro del progreso del desarrollo.

Elegimos GitHub como nuestra plataforma de colaboración para facilitar el seguimiento del progreso, la gestión de cambios y la visualización de actualizaciones. Las actualizaciones al código se reflejan automáticamente en `gh-pages`, permitiendo que los interesados vean los avances en tiempo real.

**Convenciones:** 

✔ Convenciones para ramas feature
Prefijo: `feature/`
Formato: `feature/nombre-corto-descriptivo`

Ejemplo:
`feature/login-ui`
`feature/pdf-export`
`feature/api-integration-usuarios`

✔ Convenciones para ramas release
Prefijo: `release/`
Formato: `release/x.y.z (donde x, y, z son número mayor, menor y de parche)`

Ejemplo:
`release/1.0.0`
`release/2.1.0`

✔ Convenciones para ramas hotfix
Prefijo: `hotfix/`
Formato: `hotfix/x.y.z-nombre-corto`

Ejemplo:
`hotfix/1.0.1-fix-login-error`
`hotfix/2.3.2-bug-carrito`

Repositorio principal: [https://github.com/Open-Source-4341/ElectroLink](https://github.com/Open-Source-4341/ElectroLink)

<br>

### 5.1.3. Source Code Style Guide & Conventions

Se nombrará las siguientes etiquetas que utilizamos para desarrollar nuestra solución

**HTML** 

* `<!DOCTYPE html>` - Define el tipo de documento como HTML5.
* `<html>` - Raíz del documento HTML.
* `<head>` - Encabezado del documento, donde se incluyen metadatos.
* `<meta>` - Define metadatos sobre el documento (charset y viewport).
* `<title>` - Título del documento.
* `<link>` - Para enlaces de icono, hoja de estilos CSS y fuente externa.
* `<body>` - Cuerpo del documento, donde se encuentra el contenido visible.
* `<header>` - Encabezado de la página.
* `<div>` - Contenedor para el logo y otros elementos.
* `<img>` - Imagen del logo.
* `<nav>` - Contenedor para la navegación.
* `<ul>` - Lista no ordenada de enlaces de navegación.
* `<li>` - Elemento de lista para cada enlace de navegación.
* `<a>` - Enlaces de navegación.
* `<button>` - Botón para el modo de deuteranopia.
* `<section>` - Define secciones de contenido principal:
    * Sección principal: `<h1>`, `<p>`
    * Por Qué Interactiva: `<h2>`, `<span>`, `<div>`, `<h3>`, `<p>`
    * Valor Propuesto: `<h3>`, `<p>`, `<img>`
    * Presentamos a...: `<h2>`, `<h4>`, `<p>`, `<img>`
    * Servicios: `<h2>`, `<div>`, `<h4>`, `<p>`
    * Testimonios: `<h2>`, `<p>`, `<img>`
    * Cómo empezar: `<h2>`, `<h5>`, `<strong>`, `<p>`
    * Descargar: `<h2>`, `<h3>`, `<span>`, `<a>`, `<img>`
* `<footer>` - Pie de página.
* `<small>` - Texto de derechos reservados.
* `<script>` - Script JavaScript para funcionalidades.

**CSS**

* `width:` Representa el ancho de un elemento.
* `height:` Representa el alto de un elemento.
* `padding:` Representa el espacio con relleno entre el borde y el contenido.
* `font-family:` Representa el tipo de letra.
* `font-size:` Representa el tamaño de letra.
* `font-weight:` Representa el grueso o el peso de la letra.
* `font-style:` Representa el estilo de letra.
* `Text-align:` Representa la alineación del texto.
* `color:` Otorga color al elemento.
* `Background-color:` Otorga color del fondo del elemento. 

<hr>

### 5.1.4. Software Deployment Configuration.

**Consideraciones Preliminares al Despliegue:**

* **Implementación de Archivos Web:** Se requiere la implementación completa de la página web utilizando archivos HTML, CSS y JS para garantizar su correcta operatividad. Se autoriza el uso de diversos formatos para los archivos de imagen (jpg, png, webp, etc.).
* **Mecanismo de Publicación en Github:** En virtud del servicio Github Pages, todos los archivos necesarios para la funcionalidad de la aplicación se cargarán al repositorio compartido de Github, facilitando la colaboración simultánea entre los miembros del equipo.
* **Protocolo de Pruebas de Funcionamiento:** Tras cada actualización e integración al repositorio, se ejecutarán pruebas internas para asegurar la correcta operación de la página. Asimismo, se someterá la página a pruebas por parte de usuarios externos al grupo de trabajo para obtener una evaluación imparcial.

**Requisitos Mandatorios para el Despliegue:**

* Existencia de un repositorio dentro de la organización de GitHub.
* El repositorio debe poseer visibilidad pública.
* Disposición de los permisos de Github necesarios.
* Disponibilidad del código fuente de la Landing Page.

**Procedimiento de Despliegue de la Landing Page:**

* Carga del código fuente de la Landing Page al repositorio de destino en GitHub.
* Acceso a la interfaz de configuración del repositorio en GitHub.
* Selección de la sección denominada "Pages".
* Una vez completados los pasos precedentes, se iniciará el proceso de construcción, tras el cual la Landing Page deberá estar accesible en breve.

<hr>

## 5.2. Landing Page, Services & Applications Implementation
### 5.2.1. Sprint 1

## 5.2.1.1. Sprint Planning 1

Esta sección presenta los detalles de la primera reunión de planificación de Sprint del equipo. Durante esta sesión, se definieron los objetivos principales del Sprint, la capacidad del equipo y las tareas a abordar. Al ser el primer Sprint del proyecto, no se incluyen resúmenes de revisión ni retrospectiva previos. El enfoque principal fue la implementación de la landing page, con el objetivo de validar el interés del público en la propuesta de negocio. A continuación, se detallan los aspectos clave discutidos durante la reunión:


| Sprint # | Sprint 1 |
|----------|----------|
| Date | 2025-22-04 |
| Time | 3:00 PM |
| Location | Virtual - Meet |
| Prepared By | Matias Aliaga |
| Attendees (to planning meeting) | Matias Aliaga , Ivo Machado , Leandro Conteras, Italo Sanchez, Ricardo del Aguila  |
| Sprint n - 1 Review Summary | Este es el primer Sprint, por lo que el presente campo no aplica. |
| Sprint n - 1 Retrospective Summary | Este es el primer Sprint, por lo que el presente campo no aplica. |
| Sprint 1 Goal | Nuestra prioridad en este spring fue implementar la landing Page.Creemos que este MVP brindara la exposicipon necesaria a nuestra Idea de Negocio. Esto se confirmará cuando las visitas a nuestra landing page superen un cierto índice de visitas. |
| Sprint 1 Velocity | Nuestro equipo puede aceptar hasta 28 story points |
| Sum of Story Points | La suma de Story Points atendidos es de 28 story points |

#### 5.2.1.2. Aspect Leaders and Collaborators

| Team Member (Last Name, First Name) | GitHub Username | Bounded Context Definition (L) / Collaborator (C) | Landing Page Development Leader(L) / Collaborator (C) |
|-------------------------------------|------------------|--------------------------------------------------|--------------------------------------------------------|
| Aliaga Aguirre, Ethan Matias        | MatFragg         | L                                                | L                                                      |
| Del Aguila Ayala, Ricard            | Rexest01         | C                                                | C                                                      |
| Sanchez, Italo Ludwing              | ItaloSanche      | C                                                | C                                                      |
| Contreras, Leandro                  | WiDDsito         | C                                                | C                                                      |
| Machado, Ivo                        | ivommb11         | C                                                | C                                                      |



#### 5.2.1.3. Sprint Backlog 1

En esta sección se detalla el Sprint Backlog correspondiente al Sprint 1, el cual incluye todas las historias de usuario priorizadas, así como las tareas específicas asociadas a cada una. Cada tarea contiene su respectiva descripción, estimación en horas, asignación de responsable y estado de avance. Este backlog sirvió como guía para la ejecución del Sprint y permitió al equipo mantener un control claro sobre el desarrollo de la landing page y sus componentes clave.

Enlace del board donde se trabako el Sprint Backlog #1: https://trello.com/b/iKXzrJ60/electrolink

<img  src="https://i.imgur.com/hTNhqqE.png"/>

| Sprint # | Sprint 1 |  |  |  |  |  |  |
|---------|---------|---------|---------|---------|---------|---------|---------|
| **User Story** | | **Work-Item/task** | | | | | |
| **ID** | **Title** | **Id** | **Title** | **Description** | **Estimation(Hrs)** | **Assigned To** | **Status** |
| US-01 | Visualización de una Sección Principal | T01-1 | Diseñar hero section | Diseñar hero section con imagen de fondo atractiva | 1 | Matias Aliaga | Done |
| US-01 | Visualización de una Sección Principal | T01-2 | Crear estructura HTML | Crear estructura HTML para la sección principal | 0.5 | Matias Aliaga | Done |
| US-01 | Visualización de una Sección Principal | T01-3 | Implementar estilos CSS | Implementar estilos CSS para la sección principal | 1 | Matias Aliaga | Done |
| US-01 | Visualización de una Sección Principal | T01-4 | Redactar título y texto | Redactar título impactante y texto descriptivo breve | 0.5 | Matias Aliaga | Done |
| US-01 | Visualización de una Sección Principal | T01-5 | Añadir call-to-action | Añadir call-to-action (CTA) prominente | 0.5 | Matias Aliaga | Done |
| US-02 | Visualización de Testimonios | T02-1 | Diseñar layout | Diseñar layout de la sección de testimonios | 0.5 | Matias Aliaga | Done |
| US-02 | Visualización de Testimonios | T02-2 | Implementar HTML | Implementar estructura HTML para los testimonios | 0.5 | Matias Aliaga | Done |
| US-02 | Visualización de Testimonios | T02-3 | Crear estilos CSS | Crear estilos CSS para la sección de testimonios | 0.5 | Matias Aliaga | Done |
| US-02 | Visualización de Testimonios | T02-4 | Agregar imágenes y testimonios | Agregar imágenes de perfil y redactar testimonios de ejemplo | 1 | Matias Aliaga | Done |
| US-02 | Visualización de Testimonios | T02-5 | Implementar carrusel | Implementar carrusel para mostrar múltiples testimonios | 1 | Matias Aliaga | Done |
| US-03 | Adaptabilidad a Diferentes Dispositivos | T03-1 | Implementar diseño responsive | Implementar diseño responsive usando media queries | 1 | Matias Aliaga | Done |
| US-03 | Adaptabilidad a Diferentes Dispositivos | T03-2 | Optimizar imágenes | Optimizar imágenes para diferentes tamaños de pantalla | 0.5 | Matias Aliaga | Done |
| US-03 | Adaptabilidad a Diferentes Dispositivos | T03-3 | Adaptar navegación móvil | Adaptar navegación para dispositivos móviles (menú hamburguesa) | 1 | Matias Aliaga | Done |
| US-03 | Adaptabilidad a Diferentes Dispositivos | T03-4 | Probar en múltiples dispositivos | Probar la landing page en múltiples dispositivos y navegadores | 1 | Matias Aliaga | Done |
| US-03 | Adaptabilidad a Diferentes Dispositivos | T03-5 | Ajustar problemas visuales | Ajustar problemas de visualización identificados durante las pruebas | 0.5 | Matias Aliaga | Done |
| US-04 | Visualización de Características y Beneficios | T04-1 | Diseñar sección de características | Diseñar sección de características con iconos representativos | 1 | Matias Aliaga | Done |
| US-04 | Visualización de Características y Beneficios | T04-2 | Crear estructura HTML | Crear estructura HTML para la sección de características y beneficios | 0.5 | Matias Aliaga | Done |
| US-04 | Visualización de Características y Beneficios | T04-3 | Implementar estilos CSS | Implementar estilos CSS para la sección de características | 1 | Matias Aliaga | Done |
| US-04 | Visualización de Características y Beneficios | T04-4 | Redactar contenido | Redactar contenido claro y conciso para cada característica/beneficio | 1 | Matias Aliaga | Done |
| US-04 | Visualización de Características y Beneficios | T04-5 | Implementar animaciones | Implementar animaciones sutiles para mejorar la experiencia de usuario | 1 | Matias Aliaga | Done |
| US-05 | Navegación sin errores | T05-1 | Implementar detección de errores | Implementar sistema de detección de errores (error handling) | 0.5 | Matias Aliaga | Done |
| US-05 | Navegación sin errores | T05-2 | Verificar enlaces | Verificar todos los enlaces internos | 0.5 | Matias Aliaga | Done |
| US-05 | Navegación sin errores | T05-3 | Realizar pruebas de rendimiento | Realizar pruebas de rendimiento para identificar cuellos de botella | 1 | Matias Aliaga | Done |
| US-05 | Navegación sin errores | T05-4 | Optimizar tiempos de carga | Optimizar tiempos de carga de la página | 1 | Matias Aliaga | Done |
| US-05 | Navegación sin errores | T05-5 | Implementar feedback visual | Implementar feedback visual para interacciones del usuario | 0.5 | Matias Aliaga | Done |
| US-06 | Navegación mediante Encabezado | T06-1 | Diseñar estructura del encabezado | Diseñar la estructura del encabezado y menú de navegación | 0.5 | Matias Aliaga | Done |
| US-06 | Navegación mediante Encabezado | T06-2 | Implementar HTML | Implementar HTML para el encabezado y menú | 0.5 | Matias Aliaga | Done |
| US-06 | Navegación mediante Encabezado | T06-3 | Crear estilos CSS | Crear estilos CSS para el encabezado | 0.5 | Matias Aliaga | Done |
| US-06 | Navegación mediante Encabezado | T06-4 | Programar comportamiento de scroll | Programar comportamiento de scroll (encabezado fijo/sticky) | 1 | Matias Aliaga | Done |
| US-06 | Navegación mediante Encabezado | T06-5 | Implementar efectos visuales | Implementar efectos visuales para elementos activos del menú | 0.5 | Matias Aliaga | Done |
| US-07 | Visualización del Pie de pagina | T07-1 | Diseñar estructura | Diseñar estructura del pie de página | 0.5 | Matias Aliaga | Done |
| US-07 | Visualización del Pie de pagina | T07-2 | Implementar HTML | Implementar HTML para el pie de página | 0.5 | Matias Aliaga | Done |
| US-07 | Visualización del Pie de pagina | T07-3 | Crear estilos CSS | Crear estilos CSS para el pie de página | 0.5 | Matias Aliaga | Done |
| US-07 | Visualización del Pie de pagina | T07-4 | Agregar enlaces | Agregar enlaces a redes sociales e información de contacto | 0.5 | Matias Aliaga | Done |
| US-07 | Visualización del Pie de pagina | T07-5 | Implementar mapa del sitio | Implementar mapa del sitio y políticas de privacidad | 0.5 | Matias Aliaga | Done |
| US-08 | Ver Información del Startup | T08-1 | Diseñar sección | Diseñar sección "Sobre nosotros" | 0.5 | Matias Aliaga | Done |
| US-08 | Ver Información del Startup | T08-2 | Implementar HTML | Implementar HTML para la sección de información | 0.5 | Matias Aliaga | Done |
| US-08 | Ver Información del Startup | T08-3 | Crear estilos CSS | Crear estilos CSS para la sección | 0.5 | Matias Aliaga | Done |
| US-08 | Ver Información del Startup | T08-4 | Redactar contenido | Redactar contenido sobre la empresa y su historia | 0.5 | Matias Aliaga | Done |
| US-09 | Conocer la Misión de la Startup | T09-1 | Diseñar presentación | Diseñar presentación visual de la misión | 0.5 | Matias Aliaga | Done |
| US-09 | Conocer la Misión de la Startup | T09-2 | Implementar HTML | Implementar HTML para la sección de misión | 0.5 | Matias Aliaga | Done |
| US-09 | Conocer la Misión de la Startup | T09-3 | Crear estilos CSS | Crear estilos CSS para destacar la misión | 0.5 | Matias Aliaga | Done |
| US-09 | Conocer la Misión de la Startup | T09-4 | Redactar texto | Redactar texto claro y conciso sobre la misión | 0.5 | Matias Aliaga | Done |
| US-10 | Conocer la Visión de la Startup | T10-1 | Diseñar presentación | Diseñar presentación visual de la visión | 0.5 | Matias Aliaga | Done |
| US-10 | Conocer la Visión de la Startup | T10-2 | Implementar HTML | Implementar HTML para la sección de visión | 0.5 | Matias Aliaga | Done |
| US-10 | Conocer la Visión de la Startup | T10-3 | Crear estilos CSS | Crear estilos CSS para destacar la visión | 0.5 | Matias Aliaga | Done |
| US-10 | Conocer la Visión de la Startup | T10-4 | Redactar texto | Redactar texto claro y conciso sobre la visión | 0.5 | Matias Aliaga | Done |



#### 5.2.1.3. Development Evidence for Sprint Review
En esta sección presentamos el flujo de trabajo para la creación y actuallización de la landing page

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Commited on (Date) |
|------------|--------|-----------|----------------|---------------------|--------------------|
| ElectroLink - Open Source - 4341 | main | 01 | Landing Page | - | 22/04/2025 |


#### 5.2.1.4. Testing Suite Evidence for Sprint Review

En esta sección se muestra el resultado de las pruebas de aceptación.


| Epic / Story ID | Título | Criterios de Aceptación | Resultado |
|----------------|--------|--------------------------|-----------|
| US-01 | Visualización de Características y Beneficios | **Escenario #1: Visualización de beneficios para propietarios**<br>Given que un propietario potencial se encuentra visitando la landing page<br>When se desplaza hasta la sección "Resolvemos problemas reales"<br>Then debe ver claramente los beneficios específicos para propietarios<br>And cada beneficio debe tener un ícono representativo<br>And una descripción breve y clara<br>And los beneficios deben ser visibles sin necesidad de hacer clic en ningún elemento. | Pasado |
| US-01 | Visualización de Características y Beneficios | **Escenario #2: Visualización de características principales**<br>Given que un visitante se encuentra en la landing page<br>When se desplaza hasta la sección "Características principales"<br>Then debe ver al menos 6 características destacadas de la plataforma<br>And cada característica debe tener un título descriptivo<br>And una explicación concisa de su funcionamiento<br>And un ícono visual que represente la característica. | Pasado |
| US-01 | Visualización de Características y Beneficios | **Escenario #3: Comparativa para proveedores y clientes**<br>Given que un visitante indeciso se encuentra en la landing page<br>When navega a la sección "¿Qué ofrecemos?"<br>Then debe ver una clara comparativa de beneficios por tipo de usuario<br>And puede identificar fácilmente qué le ofrece la plataforma según su rol<br>And visualiza casos de uso relevantes para su situación. | Pasado |
| US-02 | Visualización de Testimonios | **Escenario #1:** Visualización de testimonios diversos<br>- Sección "Lo que dicen nuestros usuarios"<br>- Al menos 3 testimonios diferentes<br>- Información completa (nombre, tipo, calificación, comentario)<br>- Testimonios de propietarios y proveedores<br>- Calificaciones visualmente claras | Pasado |
| US-02 | Visualización de Testimonios | **Escenario #2:** Navegación entre testimonios en móviles<br>- Deslizamiento horizontal funcional<br>- Indicadores de paginación<br>- Indicador de testimonio actual | Pasado |
| US-02 | Visualización de Testimonios | **Escenario #3:** Visualización de casos de éxito<br>- Sección "Casos de éxito" visible<br>- Ejemplos concretos (problema, solución, resultados)<br>- Situaciones identificables | Pasado |
| US-03 | Adaptabilidad a Diferentes Dispositivos | **Escenario #1: Visualización en dispositivo móvil**<br>Given que un visitante se encuentra usando un smartphone<br>When accede a la landing page<br>Then todos los elementos deben reorganizarse para adaptarse a la pantalla pequeña<br>And no debe haber desplazamiento horizontal<br>And todos los textos deben ser legibles sin necesidad de zoom<br>And los botones deben tener un tamaño adecuado para interacción táctil. | Pasado |
| US-03 | Adaptabilidad a Diferentes Dispositivos | **Escenario #2: Visualización en tablet**<br>Given que un visitante se encuentra usando una tablet<br>When accede a la landing page<br>Then el diseño debe adaptarse al tamaño intermedio de pantalla<br>And aprovechar el espacio adicional comparado con un móvil<br>And mantener una experiencia de navegación fluida y atractiva. | Pasado |
| US-04 | Visualización de una Sección Principal | **Escenario #1: Visualización del hero banner en desktop**<br>Given que un visitante accede a la landing page desde un ordenador<br>When la página termina de cargar<br>Then debe ver una sección principal (hero) en la parte superior<br>And esta sección debe contener un título llamativo que explique el propósito de la plataforma<br>And debe incluir un subtítulo que resuma el valor principal del servicio<br>And debe mostrar al menos una imagen o ilustración relevante al servicio<br>And debe incluir un botón de llamada a la acción principal. | Pasado |
| US-04 | Visualización de una Sección Principal | **Escenario #2: Visualización del hero banner en móvil**<br>Given que un visitante accede a la landing page desde un dispositivo móvil<br>When la página termina de cargar<br>Then debe ver una sección principal adaptada al tamaño de la pantalla<br>And todos los elementos deben ser visibles sin necesidad de desplazamiento horizontal<br>And la imagen debe redimensionarse correctamente para no ocupar demasiado espacio vertical<br>And el botón de llamada a la acción debe ser claramente visible. | Pasado |
| US-05 | Navegación sin errores | **Escenario #1: Carga completa de la página**<br>Given que un visitante accede a la landing page<br>When la página se carga completamente<br>Then todos los elementos visuales deben mostrarse correctamente<br>And no deben aparecer errores en la consola del navegador<br>And no deben existir enlaces rotos o imágenes que no se cargan. | Pasado |
| US-05 | Navegación sin errores | **Escenario #2: Navegación entre secciones**<br>Given que un visitante utiliza los enlaces de navegación<br>When hace clic en un enlace para ir a una sección específica<br>Then la página debe desplazarse suavemente hasta esa sección<br>And el desplazamiento debe completarse en menos de 1 segundo<br>And la sección de destino debe quedar correctamente posicionada en la ventana. | Pasado |
| US-06 | Navegación mediante Encabezado | **Escenario #1: Visualización del encabezado en desktop**<br>Given que un visitante accede a la landing page<br>When observa la parte superior de la página<br>Then debe ver un encabezado con el logo de la empresa<br>And debe contener enlaces de navegación a las principales secciones de la página<br>And estos enlaces deben tener nombres descriptivos y claros<br>And el encabezado debe permanecer visible o fijo mientras se desplaza por la página. | Pasado |
| US-06 | Navegación mediante Encabezado | **Escenario #2: Menú hamburguesa en dispositivos móviles**<br>Given que un visitante accede desde un dispositivo móvil<br>When la página se carga<br>Then debe ver un menú hamburguesa en lugar del menú de navegación completo<br>And al hacer clic en el icono de hamburguesa, se debe desplegar el menú<br>And todos los enlaces deben ser accesibles y funcionales dentro del menú desplegable<br>And el menú debe cerrarse al hacer clic fuera de él o en un botón de cierre. | Pasado |
| US-07 | Visualización del Pie de página | **Escenario #1: Contenido completo del pie de página**<br>Given que un visitante se desplaza hasta el final de la landing page<br>When llega al pie de página<br>Then debe ver una sección organizada con los siguientes elementos:<br>And enlaces a páginas importantes (Términos y condiciones, Política de privacidad)<br>And información de contacto (correo electrónico, teléfono)<br>And enlaces a redes sociales con iconos reconocibles<br>And un formulario breve de suscripción o contacto (opcional)<br>And el copyright y año actual. | Pasado |
| US-07 | Visualización del Pie de página | **Escenario #2: Funcionamiento de los enlaces**<br>Given que un visitante está en el pie de página<br>When hace clic en cualquiera de los enlaces<br>Then debe ser dirigido a la página correspondiente<br>And los enlaces a redes sociales deben abrirse en una nueva pestaña<br>And no debe haber enlaces rotos o no funcionales. | Pasado |
| US-08 | Ver Información del Startup | **Escenario #1: Sección "Sobre nosotros"**<br>Given que un visitante navega por la landing page<br>When se desplaza hasta la sección "Sobre nosotros" o equivalente<br>Then debe encontrar información clara sobre la empresa<br>And debe mostrar el equipo fundador o principales responsables<br>And la información debe transmitir profesionalidad y generar confianza. | Pasado |
| US-08 | Ver Información del Startup | **Escenario #2: Acceso directo a información corporativa**<br>Given que un visitante está interesado en conocer más sobre la empresa<br>When busca en el menú de navegación o en el pie de página<br>Then debe encontrar fácilmente un enlace directo a la sección de información corporativa<br>And al hacer clic, debe llevarlo directamente a esa sección. | Pasado |
| US-09 | Conocer la Misión de la Startup | **Escenario #1: Visibilidad de la declaración de misión**<br>Given que un visitante navega por la sección "Sobre nosotros"<br>When busca información sobre los propósitos de la empresa<br>Then debe encontrar claramente destacada la declaración de misión<br>And esta debe estar redactada de forma concisa y comprensible<br>And debe comunicar efectivamente el propósito principal de la startup<br>And debe estar visualmente destacada del resto del contenido. | Pasado |
| US-09 | Conocer la Misión de la Startup | **Escenario #2: Alineación con los valores**<br>Given que un visitante lee la misión de la empresa<br>When continúa explorando la sección<br>Then debe encontrar información sobre los valores corporativos que sustentan la misión<br>And estos valores deben estar claramente conectados con la declaración de misión<br>And deben presentarse de manera que refuercen la credibilidad de la empresa. | Pasado |
| US-10 | Conocer la Visión de la Startup | **Escenario #1: Visibilidad de la declaración de visión**<br>Given que un visitante navega por la sección "Sobre nosotros"<br>When busca información sobre las metas futuras de la empresa<br>Then debe encontrar claramente destacada la declaración de visión<br>And esta debe estar redactada de forma inspiradora y orientada al futuro<br>And debe comunicar efectivamente hacia dónde se dirige la startup a largo plazo<br>And debe estar visualmente diferenciada de la misión. | Pasado | Screenshot_US10_E1.png | Diseño moderno con elementos gráficos de futuro |
| US-10 | Conocer la Visión de la Startup | **Escenario #2: Objetivos estratégicos**<br>Given que un visitante lee la visión de la empresa<br>When continúa explorando la sección<br>Then debe encontrar información sobre algunos objetivos estratégicos o metas<br>And estos deben mostrar cómo la empresa planea hacer realidad su visión<br>And deben presentarse de manera estructurada y comprensible. | Pasado |

<hr>

#### 5.2.1.5. Execution Evidence for Sprint Review
En esta entrega, nuestro equipo ha desplegado con éxito la landing page.
Enlace de la Landing Page: https://electrolinklp.netlify.app/

<img src="https://imgur.com/49OkXbc.png" />

<img src="https://imgur.com/BFhI8Dc.png" />

<img src="https://imgur.com/rJPW3H5.png" />

<img src="https://imgur.com/zbMWRS0.png" />

<img src="https://imgur.com/GVOlVpZ.png" />



<img src="https://imgur.com/c5HCnn9.png" />

<hr>

<hr>

#### 5.2.1.6. Services Documentation Evidence for Sprint Review

Para esta entrega no se han empleado APIS, por lo cuál no se he requerido hacer una documentación sobre servicios implementados durante el Sprint

<hr>

<hr>

#### 5.2.1.7. Software Deployment Evidence for Sprint

Para este primer Sprint , como equipo logramos implementar satisfactoriamente la primera versión de la landing page.

## Design

Para realizar el diseño de los wireframes y mockups de la **Landing Page** para este Sprint, se hizo uso de la plataforma **Figma**.
Para utilizar la plataforma:

1. Se accede a través de la página oficial de Figma: https://www.figma.com/login
    <img  src="https://i.imgur.com/GzXvBTl.png"/>
2. Luego, se crea un **Draft** que nos servirá como base para el proyecto colaborativo.
   <img  src="https://i.imgur.com/S0yChMr.png"/>
---

## Deployment

Para la landing page, se utilizará Netlify para el despliegue de la página.
<img  src="https://i.imgur.com/TvjlWO3.png"/>
<img  src="https://i.imgur.com/R6p1HPD.png"/>
<img  src="https://i.imgur.com/VSvMntJ.png"/>
<img  src="https://i.imgur.com/7qutxbP.png"/>
<img  src="https://i.imgur.com/JHy1GUn.png"/>
<img  src="https://i.imgur.com/JHy1GUn.png"/>
<img  src="https://i.imgur.com/ivg9PgP.png"/>
<img  src="https://i.imgur.com/fomzdmK.png"/>

Tras definir el repositorio , conectamos este mismo con el servicio de netlify para realizar el despliegue.
<img  src="https://i.imgur.com/9UcQNGz.jpeg"  />
<img  src="https://i.imgur.com/WwoVauY.jpeg"  />
<img  src="https://i.imgur.com/KjFrH4v.jpeg"  />


Para nuestro proyecto se crearon **2 repositorios**, el cuál fue:

- **ElectroLink** | https://github.com/HampCoders/Landing-Page: Este repositorio se usa para realizar el informe del proyecto de manera continua y subir la landing page. :
- **Documentación** | https://github.com/Open-Source-4341/ElectroLink/ : Este repositorio contiene el informe de nuestro proyecto.



<hr>

#### 5.2.1.8. Team Collaboration Insights during Sprint
A continuación, se muestran las capturas de los insights del repositorio.
<img  src="https://imgur.com/hioVjak.jpeg"/>

En el caso de  la landing page y su Sprint, el miembro Ethan Aliaga, fue el encargado de su diseño y despliegue. Pudiendo evidenciar en estas capturas, su partipación activa durante el desarrollo.

<hr>

#### 5.2.2. Sprint 2 
En esta sección se registra el avance del producto y las acciones colaborativas realizadas por el equipo durante el desarrollo del Sprint 2.
#### 5.2.2.1. Sprint Planning 2.
Durante la reunión de planificación del Sprint 2, el equipo identificó los objetivos prioritarios en función del alcance general del proyecto. Se establecieron entregables enfocados en mejorar la funcionalidad del sistema y avanzar con la implementación de módulos esenciales. A continuación, se resumen los acuerdos principales:

| **Sprint #** | Sprint 2 |
|--------------|----------|
| **Sprint Planning Background** |  |
| **Date** | 2025-05-12 |
| **Time** | 5:00 PM |
| **Location** | Virtual - Discord |
| **Prepared By** | Ivo Marcelo Machado Bracamonte |
| **Attendees (to planning meeting)** | Ludwing Sanchez Manrique / Ethan Matias Aliaga Aguirre / Leandro Saúl Contreras Lopez / Ivo Marcelo Machado Bracamonte / Ricardo Del Aguila Ayala |
| **Sprint n – 1 Review Summary** | Durante el Sprint anterior, se realizaron correcciones sugeridas por el profesor en el informe del proyecto, y se logró desarrollar la primera versión de la aplicación Front End. Este avance permitió establecer la base del sistema, con un diseño visual inicial y funcionalidades básicas. Aunque algunas pantallas no fueron completadas, el producto resultante fue funcional y bien recibido. |
| **Sprint n – 1 Retrospective Summary** | El equipo expresó satisfacción con el trabajo colaborativo, destacando la mejora en la comunicación interna y la distribución de tareas. Se identificaron oportunidades de mejora en la organización del tiempo y planificación de actividades. Se acordó priorizar la definición clara de objetivos semanales para mejorar la eficiencia del equipo. |
| **Sprint Goal & User Stories** |  |
| **Sprint n Goal** | Our focus is on consolidar la primera versión funcional del Front End con pantallas clave del sistema. We believe it delivers una experiencia inicial que permita validar la estructura visual y usabilidad básica de la aplicación con potenciales usuarios. This will be confirmed when se implementen al menos tres pantallas interactivas que permitan una navegación fluida y se obtenga retroalimentación positiva en pruebas de uso iniciales. |
| **Sprint n Velocity** | 100% |
| **Sum of Story Points** | 67 Story Points |


#### 5.2.2.2. Aspect Leaders and Collaborators. 

Durante el Sprint 2, se abordaron aspectos clave distribuidos en cuatro Bounded Contexts: Authentication, Profile Management, Service Management y Service Contracting. A fin de garantizar una gestión clara y colaborativa del trabajo, se elaboró la siguiente matriz LACX. En ella se identifica quién asume el rol de líder (L) y quiénes colaboran (C) en cada uno de estos aspectos, asegurando una comunicación efectiva y responsabilidades bien definidas dentro del equipo.

| **Team Member (Last Name, First Name)** | **GitHub Username** | **Authentication** | **Profile Management** | **Service Management** | **Service Contracting** |
|-----------------------------------------|----------------------|---------------------|-------------------------|-------------------------|--------------------------|
| Sánchez Manrique, Ludwing               | ItaloSanche          | L                   | C                       | C                       |                          |
| Aliaga Aguirre, Ethan Matías            | MatFragg             | C                   | L                       |                         | C                        |
| Contreras López, Leandro Saúl           | WiDDsito             | C                   | C                       | L                       | C                        |
| Machado Bracamonte, Ivo Marcelo         | ivommb11             | C                   |                         | C                       | L                        |
| Del Aguila Ayala, Ricardo               | Rexest01             |                     | C                       | C                       | C                        |



#### 5.2.2.3. Sprint Backlog 2.

Durante este Sprint, el equipo centró sus esfuerzos en el desarrollo de la capa Frontend de la aplicación, estableciendo las bases visuales y funcionales que interactúan directamente con los usuarios. Se priorizó la implementación de componentes clave asociados a cada uno de los bounded contexts asignados individualmente a los integrantes, lo cual permitió una distribución clara de responsabilidades y un avance paralelo de las funcionalidades. Cada miembro del equipo asumió el liderazgo en el desarrollo de un conjunto específico de componentes, asegurando coherencia y continuidad en cada dominio funcional.

Además, como parte del compromiso con la experiencia del usuario, se implementó una nueva versión de la Landing Page, con un enfoque visual renovado. Esta incluye imágenes representativas de los servicios ofrecidos, buscando captar la atención desde el primer contacto y comunicar de manera más efectiva la propuesta de valor de la plataforma. Esta mejora visual no solo fortalece la identidad de marca, sino que también establece una conexión más directa con las necesidades de los usuarios.

Este es nuestro link de invitación a nuestro Trello : https://trello.com/b/iKXzrJ60/electrolink-aplicaciones-web

<img  src="https://i.postimg.cc/J0tYs39W/trytrytryr.png"/>

### Sprint Backlog 2

| User Story ID | User Story                              | Work-Item / Task ID | Work-Item / Task Title                       | Description                                                                 | Estimation (Hours) | Assigned To | Status |
|---------------|------------------------------------------|----------------------|----------------------------------------------|-----------------------------------------------------------------------------|---------------------|--------------|--------|
| US11          | Conocer más a fondo los servicios que ofrecen | T11-1         | Agregar imagenes acerca de los servicios que ofrecemos | 1 | Matias Aliaga | done |
| US31          | Crear Registro de Consumo Eléctrico | T31-1         | Diseñar formulario de ingreso | Diseñar formulario de ingreso de nuevo registro de consumo | 1 | Matias Aliaga | done |
| US31          | Crear Registro de Consumo Eléctrico | T31-2         | Implementar validaciones | Implementar validaciones de campos del formulario (valores numéricos, fechas, etc.) | 1 | Matias Aliaga | done |
| US31          | Crear Registro de Consumo Eléctrico | T31-3             | Crear endpoint backend | Crear endpoint en backend para almacenar nuevos registros | 1.5 |  Matias Aliaga  | done |
| US31          | Crear Registro de Consumo Eléctrico | T31-5             | Implementar confirmación | Implementar mensaje de confirmación tras registro exitoso | 0.5 | Matias Aliaga  | done |
| US32          | Editar Registro de Consumo Eléctrico | T32-1             | Diseñar interfaz de selección | Diseñar interfaz para seleccionar registros existentes | 0.5 |  Matias Aliaga  | done |
| US32          | Editar Registro de Consumo Eléctrico | T32-2             | Implementar formulario de edición | Implementar formulario de edición con datos precargados | 1 | Matias Aliaga  | done |
| US32          | Editar Registro de Consumo Eléctrico | T32-3             | Crear endpoint de actualización | Crear endpoint en backend para actualizar registros | 1 | Matias Aliaga  | done |
| US32          | Editar Registro de Consumo Eléctrico | T32-4             | Añadir validaciones | Añadir validaciones para cambios en los datos | 0.5 | Matias Aliaga  | done |
| US32          | Editar Registro de Consumo Eléctrico | T32-5                   | Implementar confirmación | Implementar confirmación de modificaciones | 0.5 | Matias Aliaga  | done |
| US33          | Eliminar Registro de Consumo Eléctrico | T33-1                 | Diseñar interfaz de selección | Diseñar interfaz para visualizar y seleccionar registros a eliminar | 0.5 | Matias Aliaga  | done |
| US33          | Eliminar Registro de Consumo Eléctrico | T33-2                 | Implementar diálogo de confirmación | Implementar diálogo de confirmación antes de eliminar | 0.5 | Matias Aliaga  | done |
| US33          | Eliminar Registro de Consumo Eléctrico | T33-3                 | Crear endpoint de eliminación | Crear endpoint en backend para eliminación de registros | 1 | | done |
| US37          | Búsqueda por Ubicación y Tipo de Servicio | TS0371               | Desarrollo del formulario de búsqueda         | Implementación de campos para ingresar ubicación y tipo de servicio         | 1                   | Italo        | done   |
| US37          | Búsqueda por Ubicación y Tipo de Servicio | TS0372               | Lógica de filtrado por parámetros             | Programación de lógica para mostrar resultados según filtros definidos      | 1                   | Italo        | done   |
| US37          | Búsqueda por Ubicación y Tipo de Servicio | TS0373               | Estructura de vista de resultados             | Creación de componente visual para mostrar lista de técnicos                | 0.5                 | Italo        | done   |
| US38          | Búsqueda Geolocalizada                   | TS0381               | Captura de ubicación a partir de IP pública   | Consumo de API externa para obtener datos geográficos de la IP              | 1                   | Italo        | done   |
| US38          | Búsqueda Geolocalizada                   | TS0382               | Visualización de ubicación en mapa            | Integración del mapa con coordenadas detectadas mediante Leaflet            | 1                   | Italo        | done   |
| US38          | Búsqueda Geolocalizada                   | TS0383               | Renderizado de datos geográficos              | Despliegue en pantalla de país, región y ciudad obtenidos desde la IP       | 0.5                 | Italo        | done   |
| US39          | Filtrado por Disponibilidad y Calificación | TS0391               | Lógica de filtro por disponibilidad horaria   | Programación de condiciones para disponibilidad en la vista de resultados   | 0.5                 | Italo        | done   |
| US39          | Filtrado por Disponibilidad y Calificación | TS0392               | Renderizado de calificación promedio          | Mostrar visualmente la calificación de cada técnico                         | 0.5                 | Italo        | done   |
| US53          | Gestión de Agenda y Citas                | TS0531               | Visualización de agenda                      | Mostrar lista de tareas agendadas con detalles del cliente y servicio      | 1.5                 | Ivo          | done   |
| US53          | Gestión de Agenda y Citas                | TS0532               | Crear tarea                                  | Formulario para agendar nueva cita con fecha, cliente y servicio           | 1.5                 | Ivo          | done   |
| US53          | Gestión de Agenda y Citas                | TS0533               | Editar tarea                                 | Lógica y formulario para actualizar una cita existente                     | 1.5                 | Ivo          | done   |
| US53          | Gestión de Agenda y Citas                | TS0534               | Eliminar tarea                               | Botón y lógica para eliminar cita de la agenda                             | 0.5                 | Ivo          | done   |
| US54          | Gestión de Servicios Ofrecidos           | TS0541               | Visualización del catálogo de servicios      | Mostrar lista de servicios y componentes eléctricos asociados              | 1.5                 | Ivo          | done   |
| US55          | Crear Servicios Ofrecidos           | TS04551               | Crear servicio                               | Formulario con inclusiones y componentes eléctricos                        | 1.5                 | Ivo          | done   |
| US56          | Editar Servicios Ofrecidos           | TS04561               | Editar servicio                              | Actualizar servicio y sus componentes                                       | 1.5                 | Ivo          | done   |
| US57          | Eliminar Servicios Ofrecidos           | TS0571               | Eliminar servicio                            | Lógica para borrar servicio del inventario                                 | 0.5                 | Ivo          | done   |
| US43          | Historial de Clientes Atendidos          | TS0431               | Card de historial en dashboard               | Mostrar historial de clientes atendidos como resumen en el dashboard       | 0.5                 | Ivo          | done   |
| US44          | Sistema de Calificación Post-Servicio    | TS0441               | Desarrollo del formulario de calificación     | Implementación de formulario para ingresar calificación y comentario        | 1.5                 | Leandro        | done   |
| US44          | Sistema de Calificación Post-Servicio    | TS0442               | Lógica de envío de calificación y reseña      | Programación de lógica para registrar y almacenar la reseña en la base de datos | 2               | Leandro        | done   |
| US44          | Sistema de Calificación Post-Servicio    | TS0443               | Asociación de reseña con usuario y servicio   | Establecer relaciones entre usuarios, servicios y sus respectivas calificaciones | 1.5             | Leandro       | done   |
| US45          | Visualización de Calificaciones y Reseñas | TS0451               | Renderizado de calificaciones y comentarios   | Mostrar lista de reseñas y calificaciones en la vista del técnico o servicio | 1.5               | Leandro        | done   |
| US45          | Visualización de Calificaciones y Reseñas | TS0452               | Cálculo de promedio de calificaciones         | Lógica para calcular y mostrar promedio de puntuación por técnico o servicio | 1.5               | Leandro        | done   |

#### 5.2.2.4. Development Evidence for Sprint Review.

## Development Evidence for Sprint Review

Durante el Sprint se avanzó en la implementación de los siguientes productos: Landing Page, Aplicaciones Web y Servicios Web. A continuación se presenta la evidencia de desarrollo mediante commits registrados en los repositorios utilizados durante este periodo. La tabla incluye el nombre del repositorio, rama de trabajo, identificador del commit, mensaje del commit, descripción detallada del cambio y la fecha en que se realizó.

| Repository                                | Branch | Commit ID | Commit Message                                 | Commit Message Body                                         | Committed on  |
|-------------------------------------------|--------|-----------|-----------------------------------------------|-------------------------------------------------------------|---------------|
| Open-Source-4341/ElectroLink-FE           | master | ca287e0   | Merge pull request #1 from Open-Source-4341/main | All Bounded Contexts Implemented                            | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | da23457e0 | Reestructuré el proyecto dentro de la carpeta ItaloFiles |Service Contracting Bounded Context        | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | r4a2564e0 | Agrego mi proyecto en la carpeta Ivo           | Componentes iniciales del módulo asignado                   | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | u67287gdf |Agrego mi proyecto en la carpeta de LeandroFiles | Agregar reviews del Contracting Bounded Context             | 2025-05-13    |


#### 5.2.2.5. Execution Evidence for Sprint Review. 

Durante este Sprint, el equipo logró implementar exitosamente las principales vistas del frontend de la aplicación ElectroLink, priorizando una experiencia de usuario fluida, intuitiva y visualmente coherente con el diseño propuesto. Se completó la estructura de navegación entre módulos clave, así como la visualización de datos simulados y el despliegue de componentes funcionales para cada uno de los bounded contexts asignados.

El enfoque colaborativo permitió que cada integrante trabajara de forma autónoma y coordinada en su respectivo contexto funcional, asegurando así una integración efectiva de los distintos componentes en la interfaz final. Como evidencia del progreso, a continuación se presentan capturas de pantalla de las vistas más representativas desarrolladas durante este Sprint, 

<img  src="https://i.imgur.com/7PeSCNZ.png"/>
<img  src="https://i.imgur.com/ZOES2dC.png"/>
<img  src="https://i.imgur.com/svmtfRX.png"/>

<img  src="https://i.imgur.com/rlAqZAP.png"/>
<img  src="https://i.imgur.com/D66T8Me.png"/>

<img  src="https://i.imgur.com/G9aLEWM.png"/>
<img  src="https://i.postimg.cc/G2TdCr9r/Whats-App-Image-2025-05-13-at-12-26-14-1.jpg"/>

<img  src="https://i.postimg.cc/hvwDmjwX/Whats-App-Image-2025-05-13-at-12-25-36.jpg"/>


<img  src="https://i.postimg.cc/TwZKgCBj/92d49261-de39-4745-86c1-207df61e3600.webp"/>


<img  src="https://i.postimg.cc/Wzwsz8V1/Whats-App-Image-2025-05-13-at-12-25-26.jpg"/>

<img  src="https://i.postimg.cc/B616S2tj/image-23.webp"/>

<img  src="https://i.postimg.cc/5NJ0JYJt/image-24.webp"/>

<img  src="https://i.postimg.cc/5NJ0JYJt/image-24.webp"/>


#### 5.2.2.6. Services Documentation Evidence for Sprint Review. 

En el segundo sprint identificamos 20 endpoints provenientes de 5 controladores diferentes. Utilizamos swagger para la presente documentacion

### Technicians Controller

| Verbo HTTP | Endpoint                         | Summary                        | Request Body | Parámetros   |
|------------|----------------------------------|--------------------------------|--------------|--------------|
| GET        | /api/v1/technicians              | Obtener todos los técnicos     | No           | -            |
| GET        | /api/v1/technicians/{id}         | Obtener técnico por ID         | No           | id           |
| POST       | /api/v1/technicians              | Crear nuevo técnico            | Sí           | -            |
| PUT        | /api/v1/technicians/{id}         | Actualizar datos de técnico    | Sí           | id           |
| DELETE     | /api/v1/technicians/{id}         | Eliminar técnico               | No           | id           |

### Clients Controller

| Verbo HTTP | Endpoint                         | Summary                        | Request Body | Parámetros   |
|------------|----------------------------------|--------------------------------|--------------|--------------|
| GET        | /api/v1/clients                  | Obtener todos los clientes     | No           | -            |
| GET        | /api/v1/clients/{id}             | Obtener cliente por ID         | No           | id           |
| POST       | /api/v1/clients                  | Registrar nuevo cliente        | Sí           | -            |
| PUT        | /api/v1/clients/{id}             | Actualizar cliente             | Sí           | id           |
| DELETE     | /api/v1/clients/{id}             | Eliminar cliente               | No           | id           |

### Services Controller

| Verbo HTTP | Endpoint                         | Summary                             | Request Body | Parámetros   |
|------------|----------------------------------|-------------------------------------|--------------|--------------|
| GET        | /api/v1/services                 | Listar todos los servicios          | No           | -            |
| GET        | /api/v1/services/{id}            | Obtener servicio por ID             | No           | id           |
| POST       | /api/v1/services                 | Crear nuevo servicio                | Sí           | -            |
| PUT        | /api/v1/services/{id}            | Actualizar datos del servicio       | Sí           | id           |
| DELETE     | /api/v1/services/{id}            | Eliminar servicio                   | No           | id           |

### Reviews Controller

| Verbo HTTP | Endpoint                                 | Summary                             | Request Body | Parámetros   |
|------------|------------------------------------------|-------------------------------------|--------------|--------------|
| GET        | /api/v1/technicians/{id}/reviews         | Obtener reseñas del técnico         | No           | id           |
| POST       | /api/v1/technicians/{id}/reviews         | Crear nueva reseña                  | Sí           | id           |
| DELETE     | /api/v1/reviews/{reviewId}               | Eliminar reseña                     | No           | reviewId     |

### Electrical Invoice Controller

| Verbo HTTP | Endpoint                                      | Summary                                           | Request Body | Parámetros   |
|------------|-----------------------------------------------|---------------------------------------------------|--------------|--------------|
| GET        | /api/v1/invoice/electrical-invoice/           | Obtener últimos registros creados                 | No           | -            |
| GET        | /api/v1/invoice/electrical-invoice/:id        | Obtener una factura por ID                        | No           | id           |
| POST       | /api/v1/invoice/electrical-invoice/           | Crear una nueva factura eléctrica                 | Sí           | -            |
| PUT        | /api/v1/invoice/electrical-invoice/:id        | Reemplazar completamente la factura existente     | Sí           | id           |
| PATCH      | /api/v1/invoice/electrical-invoice/:id        | Modificar parcialmente una factura existente      | Sí           | id           |
| DELETE     | /api/v1/invoice/electrical-invoice/:id        | Eliminar una factura por ID                       | No           | id           |



#### 5.2.2.7. Software Deployment Evidence for Sprint Review. 

Para ste despliegue hemos usado Beeseptor y FireBase

<img  src="https://i.postimg.cc/43035GwX/Captura-de-pantalla-2025-05-13-165620.png"/>

<img  src="https://i.postimg.cc/T3YnwrPF/Captura-de-pantalla-2025-05-13-165849.png"/>

Enlaces de las paginas desplegadas:
Service Contracting Bounded Context:
- https://service-management-bc-italo.web.app/technician-search
- https://invoices-ae6e5.web.app

Service Management Bounded Context :
- https://service-management-bc.firebaseapp.com/dashboard

#### 5.2.2.8. Team Collaboration Insights during Sprint. 

En esta sección se presenta el desarrollo colaborativo del equipo en la implementación del Sprint, mostrando analíticos de participación y commits.

<img  src="https://i.postimg.cc/pX3VXqgR/image-25.webp"/>

<img  src="https://i.postimg.cc/jSVKrC7j/image-26.webp"/>

<img  src="https://i.postimg.cc/6QpBMgZV/image-27.webp"/>


### 5.2.3. Sprint 3 
En esta sección se registra el avance del producto y las acciones colaborativas realizadas por el equipo durante el desarrollo del Sprint 2.

#### 5.2.3.1. Sprint Planning 3. 
Durante la reunión de planificación del Sprint 3, el equipo identificó los objetivos prioritarios en función del alcance general del proyecto. Se establecieron entregables enfocados en mejorar la funcionalidad de la plataforma y avanzar con la implementación de módulos esenciales. A continuación, se resumen los acuerdos principales:

| **Sprint #** | Sprint 3 |
|--------------|----------|
| **Sprint Planning Background** |  |
| **Date** | 2025-06-05 |
| **Time** | 4:00 PM |
| **Location** | Virtual - Discord |
| **Prepared By** | Ethan Matias Aliaga Aguirre |
| **Attendees (to planning meeting)** | Ludwing Sanchez Manrique / Ethan Matias Aliaga Aguirre / Eric Olivera Barzola / Ivo Marcelo Machado Bracamonte / Ricardo Del Aguila Ayala |
| **Sprint n–3 Review Summary** | Durante el Sprint anterior, se realizaron ajustes estructurales sugeridos por el profesor en la arquitectura del backend. Se implementaron con éxito múltiples endpoints RESTful, cubriendo los módulos principales como solicitudes, servicios, reportes y calificaciones. Esto permitió establecer una base sólida para la lógica del negocio y la persistencia de datos. Aunque algunos endpoints avanzados y validaciones específicas quedaron pendientes, el backend resultante fue estable, funcional y bien recibido en la revisión. |
| **Sprint n–3 Retrospective Summary** | El equipo manifestó satisfacción con el trabajo backend logrado, destacando la mejora en la integración de servicios y la claridad en la división de responsabilidades. Se identificaron áreas de mejora en la gestión del tiempo al implementar controladores complejos. Se acordó priorizar la documentación de endpoints y pruebas de integración, así como reforzar la planificación técnica por capas (servicios, entidades, controladores) para optimizar el desarrollo en los siguientes sprints. |
| **Sprint Goal & User Stories** |  |
| **Sprint n-3 Goal** | Nuestro enfoque es en implementar un conjunto de funcionalidades clave como la Administración de Propiedades y Componentes, el Control de Inventario del Técnico,  el Flujo de Solicitud de Servicios, la Configuración de Agenda y Cobertura, con sus interfaces de calendario y mapa junto a los endpoints que guardan la información, la Administración del Catálogo de Servicios, el Manejo de Suscripciones Premium y finalmente el Seguimiento y Calificación de Servicios, con las interfaces de visualización y los endpoints que proveen el estado del servicio y registran las calificaciones, implementando las interfaces de usuario para nuestra aplicación Frontend como sus servicios y lógica de negocio a través del API. Creemos que esto entrega a los propietarios de PyMEs la capacidad de solicitar servicios eléctricos de manera eficiente, y a los técnicos las herramientas para ofrecer sus servicios de forma estructurada, gestionando su inventario, horarios y zona de cobertura. Esto se confirmará cuando un ciclo de servicio completo pueda ser demostrado de principio a fin. Específicamente, cuando los propietarios puedan registrar sus propiedades, completar el flujo de contratación de un servicio a través del wizard, suscribirse a un plan premium, recibir la notificación de asignación de un técnico, y finalmente calificar el servicio una vez completado. Del mismo modo, se confirmará cuando los técnicos puedan configurar su catálogo de servicios y precios, establecer sus horarios y zonas de cobertura, gestionar el inventario de sus componentes, y visualizar en su agenda los servicios que les han sido asignados.|
| **Sprint n Velocity** | 100% |
| **Sum of Story Points** | 233 Story Points |

#### 5.2.3.2. Aspect Leaders and Collaborators. 

Durante este sprint, la asignación de responsabilidades técnicas se mantuvo por bounded contexts. Cada miembro asumió un rol activo en la implementación de endpoints REST y lógica de dominio. Se fortaleció la colaboración entre integrantes para asegurar la integración fluida entre componentes y la consistencia en las reglas de negocio.

| **Team Member (Last Name, First Name)** | **GitHub Username** | **Assets and Resource Management Bounded Context** | **Services Desing and Planning Management Bounded Context** | **Service Contracting Bounded Context** | **Analytics Bounded Context** |
|-----------------------------------------|---------------------|-------------------------------------------|---------------------------------------------------|-------------------------|--------------------------|
| Sánchez Manrique, Ludwing               | ItaloSanche         |                                           | C                                                 |                         |                          |
| Aliaga Aguirre, Ethan Matías            | MatFragg            | L                                         |                                                   |                         | C                        |
| Contreras Lopez , Leandro Saul           | WiDDsito          | C                                         |                                                   |                         | L                        |
| Machado Bracamonte, Ivo Marcelo         | ivommb11            |                                           | L                                                 |                         |                          |
| Del Aguila Ayala, Ricardo               | Rexest01            |                                           |                                                   | L                       | C                        |

#### 5.2.3.3. Sprint Backlog 3. 

Durante este Sprint, el equipo enfocó sus esfuerzos en el desarrollo de la capa Backend de la aplicación, implementando la lógica de negocio y los servicios necesarios para dar soporte funcional a cada uno de los bounded contexts. Se priorizó la creación de entidades, controladores, servicios y repositorios en base a una arquitectura por capas y principios de diseño orientado a dominios. Cada integrante asumió la implementación del backend correspondiente a su bounded context asignado, permitiendo un desarrollo distribuido y coherente. Esta fase ha sido clave para establecer la base de comunicación entre el frontend y la lógica del sistema, asegurando la persistencia de datos y el correcto flujo de la información.

Este es nuestro link de invitación a nuestro Trello : https://trello.com/b/pPESu5NU/sprint-backlog-3

<img  src="https://i.imgur.com/0XuNwIT.png"/>


| Sprint # | Sprint 3 | | | | | | |
|----------|----------|---|---|---|---|---|---|
| **User Story** | | **Work-Item/task** | | | | | |
| **ID** | **Title** | **Id** | **Title** | **Description** | **Estimation(Hrs)** | **Assigned To** | **Status** |
| **TS-13** | Conectar a Base de Datos | T001 | Configurar conexión PostgreSQL | Configurar pool de conexiones, variables de entorno y migración inicial | 4 | Ricardo  | Done |
| | | T002 | Implementar modelos de datos principales | Crear entidades: User, Property, Component, Service, Technician | 6 |Ricardo |Done |
| | | T003 | Configurar repositorios y DAOs | Implementar patrones de acceso a datos con transacciones | 4 |Ricardo |Done |
| | | T004 | Setup de testing con BD | Configurar base de datos de testing y fixtures | 2 |Ricardo | Done|
| **US-31** | Crear Componente Eléctrico | T001 | Backend: API crear componente | Endpoint POST /components con validaciones y persistencia | 3 | Ethan | Done|
| | | T002 | Frontend: Formulario componente | Componente React con validación de formularios | 4 |Ethan | Done |
| | | T003 | Frontend: Integración API | Conectar formulario con endpoint, manejo de errores | 2 | Ethan| Done|
| **US-32** | Editar Componente Eléctrico | T001 | Backend: API editar componente | Endpoint PUT /components/:id con validaciones | 2 | Ethan| Done |
| | | T002 | Frontend: Modal de edición | Componente modal con formulario prellenado | 3 |Ethan | Done |
| | | T003 | Frontend: Actualización en tiempo real | Actualizar lista tras edición exitosa | 2 |Ethan| Done|
| **US-33** | Eliminar Componente Eléctrico | T001 | Backend: API eliminar componente | Endpoint DELETE /components/:id con validaciones de dependencias | 2 | Ethan|Done |
| | | T002 | Frontend: Confirmación de eliminación | Modal de confirmación con advertencias | 2 |Ethan | Done|
| | | T003 | Frontend: Actualización de UI | Remover elemento de lista tras eliminación | 1 |Ethan | Done|
| **US-34** | Registro de Propiedad (Propietario) | T001 | Backend: API crear propiedad | Endpoint POST /properties con validación de dirección | 4 |Ethan|Done |
| | | T002 | Frontend: Formulario registro propiedad | Componente con campos de dirección y validación | 5 | Ethan| Done|
| | | T003 | Frontend: Integración geolocalización | Integrar Google Maps API para validar dirección | 3 |Ethan |Done |
| **US-35** | Edición de Información de Propiedad | T001 | Backend: API actualizar propiedad | Endpoint PUT /properties/:id con validaciones | 3 |Ethan |Done |
| | | T002 | Frontend: Formulario de edición | Componente de edición con datos prellenados | 4 |Ethan |Done |
| | | T003 | Frontend: Validación de cambios | Detectar cambios y confirmar actualización | 2 |Ethan | Done|
| **US-36** | Eliminación de Propiedad | T001 | Backend: API eliminar propiedad | Endpoint DELETE /properties/:id con validación de servicios activos | 3 | Ethan| Done|
| | | T002 | Frontend: Confirmación múltiple | Modal con advertencias sobre servicios asociados | 3 |Ethan |Done |
| | | T003 | Frontend: Actualización de estado | Actualizar dashboard tras eliminación | 1 |Ethan |Done |
| **US-37** | Registro de Inventario de Componentes | T001 | Backend: API inventario técnico | Endpoint POST /technicians/:id/inventory | 3 | Ethan| Done|
| | | T002 | Frontend: Gestión de inventario | Interfaz para agregar componentes al inventario | 4 | Ethan| Done|
| | | T003 | Frontend: Búsqueda de componentes | Funcionalidad de búsqueda y filtrado | 3 | Ethan| Done|
| **US-38** | Actualización de Stock de Componentes | T001 | Backend: API actualizar stock | Endpoint PUT /inventory/:id/stock con validaciones | 2 |Ethan |Done |
| | | T002 | Frontend: Interfaz actualización stock | Componente para modificar cantidades | 3 | Ethan| Done|
| | | T003 | Frontend: Notificaciones de cambio | Mostrar confirmaciones y errores | 2 |Ethan |Done |
| **US-39** | Configuración de Alertas de Stock Mínimo | T001 | Backend: Sistema de alertas | Lógica para detectar stock bajo y enviar notificaciones | 3 |Ethan | Done|
| | | T002 | Frontend: Configuración de umbrales | Interfaz para establecer límites mínimos | 3 |Ethan | Done |
| | | T003 | Frontend: Panel de alertas | Dashboard con alertas de stock activas | 2 |Ethan | Done |
| **US-40** | Contratación de Servicios Eléctricos mediante Wizard | T001 | Backend: API wizard servicio | Endpoint para manejar flujo paso a paso | 4 | Ivo | Done |
| | | T002 | Frontend: Componente wizard | Wizard multi-paso con navegación | 5 | Ivo | Done |
| | | T003 | Frontend: Validación por pasos | Validar datos en cada paso del wizard | 3 | Ivo |Done |
| **US-41** | Selección de Propiedad | T001 | Backend: API propiedades usuario | Endpoint GET /users/:id/properties | 2 |Ivo |Done |
| | | T002 | Frontend: Selector de propiedades | Componente dropdown con propiedades del usuario | 3 |Ivo |Done |
| | | T003 | Frontend: Vista previa propiedad | Mostrar detalles de propiedad seleccionada | 2 | Ivo| Done|
| **US-42** | Carga Manual de Datos de Recibos Eléctricos (3-6 recibos) | T001 | Backend: Recibir los recibos electricos  | Implementar la logica de negocio para recibir los recibos electriclos | 2 | Ivo | Done|
| | | T002 | FrontEnd: Input Field para ingregar data de recibos electricos | Desarrollar el campo para ingresar la data de los recibos electricos | 1 |Ivo | Done|
| **US-43** | Descripción Detallada del Problema | T001 | Frontend: Editor de descripción | Componente de texto enriquecido con validación | 3 | Ivo| Done |
| | | T002 | Backend: Sanitizar información | Sanitizar la información que es enviada en este campo | 2 |Ivo | Done|
| **US-44** | Selección de Servicio del Catálogo | T001 | Backend: API catálogo servicios | Endpoint GET /services con filtros por zona | 3 |Ivo |Done |
| | | T002 | Frontend: Catálogo de servicios | Interfaz de selección con precios y descripciones | 4 | Ivo|Done |
| | | T003 | Frontend: Filtros de búsqueda | Filtros por categoría, precio y disponibilidad | 3 | Ivo| Done|
| **US-45** | Cancelación de Servicios Programados | T001 | Backend: API cancelar servicio | Endpoint PUT /services/:id/cancel con lógica de reembolso | 3 |Ivo | Done|
| | | T002 | Frontend: Botón de cancelación | Funcionalidad de cancelación con confirmación | 2 |Ivo | Done|
| **US-46** | Notificación de Asignación de Técnico | T001 | Backend: Sistema de notificaciones | Servicio para enviar notificaciones push/email | 4 | Ivo|Done |
| | | T00.2 | Frontend: Panel de notificaciones | Componente para mostrar notificaciones en tiempo real | 3 |Ivo |Done|
| | | T003 | Frontend: Detalles de asignación | Vista con información del técnico asignado | 2 |Ivo | Done|
| **US-47** | Historial de servicios contratados | T001 | Backend: API historial servicios | Endpoint GET /users/:id/services con paginación | 2 |Ivo |Done |
| | | T002 | Frontend: Lista de servicios | Componente con historial paginado y filtros | 3 |Ivo | Done|
| | | T003 | Frontend: Detalles de servicio | Modal con información completa del servicio | 2 | Ivo|Done |
| **US-48** | Configurar Horarios de Trabajo Semanales | T001 | Backend: API horarios técnico | Endpoint POST /technicians/:id/schedule | 3 |Ivo |Done |
| | | T002 | Frontend: Calendario de configuración | Interfaz de calendario para establecer horarios | 4 |Ivo | Done|
| | | T003 | Frontend: Validación de horarios | Validar solapamientos y horarios válidos | 2 | Ivo|Done |
| **US-49** | Modificar Horarios de Trabajo | T001 | Backend: API actualizar horarios | Endpoint PUT /technicians/:id/schedule | 2 |Ivo | Done|
| | | T002 | Frontend: Edición de horarios | Interfaz para modificar horarios existentes | 3 |Ivo |Done |
| | | T003 | Frontend: Confirmación de cambios | Validar impacto en servicios programados | 2 |Ivo |Done |
| **US-50** | Bloquear Fechas y Horarios | T001 | Backend: API bloquear fechas | Endpoint POST /technicians/:id/blocked-dates | 2 | Ivo|Done |
| | | T002 | Frontend: Selector de fechas bloqueadas | Componente calendario para seleccionar fechas | 3 |Ivo | Done|
| | | T003 | Frontend: Gestión de bloqueos | Lista de fechas bloqueadas con opción de desbloquear | 2 | Ivo|Done |
| **US-51** | Visualizar Agenda Asignada | T001 | Backend: API agenda técnico | Endpoint GET /technicians/:id/agenda | 3 |Ivo |Done |
| | | T002 | Frontend: Vista de calendario | Componente calendario con servicios asignados | 4 | Ivo|Done |
| | | T003 | Frontend: Detalles de citas | Modal con información completa de cada servicio | 2 |Ivo |Done |
| **US-52** | Configurar Tiempo de Traslado | T001 | Backend: API tiempo traslado | Endpoint PUT /technicians/:id/travel-time | 2 |Ivo | Done|
| | | T002 | Frontend: Configuración traslado | Interfaz para establecer tiempos de traslado por zona | 3 |Ivo | Done|
| | | T003 | Frontend: Cálculo automático | Mostrar impacto en disponibilidad de horarios | 2 |Ivo |Done |
| **US-53** | Crear Servicios con Recetas | T001 | Backend: API crear servicio | Endpoint POST /services con recetas de componentes | 5 |Ivo |Done |
| | | T002 | Frontend: Constructor de recetas | Interfaz para definir componentes necesarios | 5 | Ivo|Done |
| | | T003 | Frontend: Calculadora de costos | Calcular precio basado en componentes y tiempo | 3 |Ivo |Done|
| **US-54** | Modificar Servicios / Recetas | T001 | Backend: API actualizar servicio | Endpoint PUT /services/:id con validación de cambios | 3 | Ivo|Done |
| | | T002 | Frontend: Editor de servicios | Interfaz para modificar servicios existentes | 4 | Ivo| Done|
| | | T003 | Frontend: Impacto de cambios | Mostrar servicios afectados por modificaciones | 2 | Ivo| Done|
| **US-55** | Eliminar Servicios del Catálogo | T001 | Backend: API eliminar servicio | Endpoint DELETE /services/:id con validaciones | 2 |Ivo | Done|
| | | T002 | Frontend: Confirmación eliminación | Modal con advertencia sobre servicios activos | 2 |Ivo | |
| **US-56** | Establecer Precios por Servicio y Zona | T001 | Backend: API precios zonales | Endpoint POST /services/:id/zone-pricing | 3 | Ivo| Done|
| | | T002 | Frontend: Configurador de precios | Interfaz para establecer precios por zona | 4 |Ivo |Done |
| | | T003 | Frontend: Vista previa de precios | Mostrar matriz de precios por zona | 2 |Ivo |Done |
| **US-29** | Configuración de Zona de Cobertura Geográfica | T001 | Backend: API zonas de cobertura | Endpoint POST /technicians/:id/coverage-zones | 3 |Ivo | Done|
| | | T002 | Frontend: Mapa de cobertura | Integración con mapas para definir zonas | 4 |Ivo |Done |
| | | T003 | Frontend: Gestión de zonas | Lista y edición de zonas de cobertura | 2 |Ivo | Done|
| **US-57** | Beneficio de Solicitud Prioritaria | T001 | Backend: Lógica de priorización | Sistema para priorizar solicitudes premium | 3 | Ivo| Done|
| | | T002 | Frontend: Indicador de prioridad | Mostrar beneficios de solicitud prioritaria | 2 | Ivo|Done |
| | | T003 | Frontend: Cola de solicitudes | Vista diferenciada para solicitudes prioritarias | 2 | Ivo|Done |
| **US-58** | Notificación de Límite de Solicitudes Alcanzado | T001 | Backend: Contador de solicitudes | Lógica para rastrear límite de solicitudes mensuales | 3 |Ivo |Done |
| | | T002 | Frontend: Notificación de límite | Mostrar advertencia cuando se acerque al límite | 2 |Ivo |Done |
| | | T003 | Frontend: Opción de upgrade | Botón para actualizar a plan premium | 2 |Ivo |Done |
| **US-59** | Seguimiento de Estados en Tiempo Real | T001 | Backend: Endpoint GET /services/{id}/status | Desarrollar un endpoint simple que devuelva el estado actual de un servicio. Será utilizado por el frontend para consultas periódicas (polling). | 4 | Ricardo | Done|
| | | T002 | Frontend: Componente de seguimiento | Interfaz con estados actualizados en tiempo real | 3 | Ricardo| Done|
| | | T003 | Frontend: Notificaciones push | Sistema de notificaciones push para cambios | 2 |Ricardo |Done |
| **US-60** | Registro Fotográfico Antes/Después | T001 | Backend: API subida de imágenes | Endpoint para subir y gestionar imágenes del servicio | 3 |Ricardo | Done|
| | | T002 | Frontend: Cámara/galería | Componente para tomar fotos o seleccionar de galería | 4 | Ricardo| Done|
| | | T003 | Frontend: Comparador de imágenes | Interfaz para mostrar antes/después lado a lado | 2 |Ricardo |Done |
| **US-61** | Generación de Reportes Técnicos | T001 | Backend: Generador de reportes | Servicio para generar reportes PDF del servicio | 4 |Ricardo |Done |
| | | T002 | Frontend: Formulario de reporte | Interfaz para completar información técnica | 3 |Ricardo | Done|
| | | T003 | Frontend: Vista previa PDF | Mostrar preview del reporte antes de enviar | 2 | Ricardo|Done |
| **US-62** | Actualización Automática de Inventario | T001 | Backend: Lógica de descuento automático | Sistema para descontar componentes tras servicio | 4 |Ricardo |Done |
| | | T002 | Frontend: Notificación de cambios | Mostrar cambios en inventario tras servicio | 2 |Ricardo | Done|
| | | T003 | Frontend: Log de movimientos | Historial de movimientos de inventario | 2 |Ricardo | Done|
| **US-64** | Sistema de Calificación Post-Servicio | T001 | Backend: API de evaluaciones | Endpoint POST /services/:id/rating | 3 | Ricardo|Done |
| | | T002 | Frontend: Formulario de calificación | Interfaz de rating con estrellas y comentarios | 3 | Ricardo|Done |
| | | T003 | Frontend: Recordatorio de evaluación | Notificación para evaluar servicio completado | 2 |Ricardo |Done |
| **US-65** | Visualizar Calificaciones y Reseñas | T001 | Backend: API obtener calificaciones | Endpoint GET /technicians/:id/ratings | 2 |Ricardo | Done|
| | | T002 | Frontend: Perfil del técnico | Mostrar promedio y reseñas en perfil | 3 |Ricardo |Done |
| | | T003 | Frontend: Filtros de reseñas | Filtrar reseñas por puntuación y fecha | 2 | Ricardo|Done|
| **US-66** | Retroalimentación directa de servicios | T001 | Backend: API de feedback | Endpoint POST /services/:id/feedback | 2 | Ricardo| Done|
| | | T002 | Frontend: Formulario de feedback | Interfaz para enviar comentarios adicionales | 3 | Ricardo|Done |
| **TS-01** | Registrar Propiedad (Endpoint) | T001 | Implementar endpoint POST /properties | Crear endpoint con validaciones de negocio | 4 |Italo | Done|
| **TS-02** | Obtener Propiedades por Propietario | T001 | Implementar endpoint GET /users/:id/properties | Endpoint con filtros y paginación | 3 |Italo | Done|
| **TS-03** | Crear Componente (Endpoint) | T001 | Implementar endpoint POST /components | Crear componente con validaciones | 4 |Italo |Done |
| | | T002 | Validaciones de negocio componentes | Validar unicidad, formato y reglas de negocio | 2 |Italo |Done |
| **TS-04** | Actualizar Stock de Componente | T001 | Implementar endpoint PUT /inventory/:id/stock | Actualizar stock con control de concurrencia | 3 |Italo |Done |
| **TS-05** | Crear Servicio de Técnico | T001 | Implementar endpoint POST /services | Crear servicio con recetas de componentes | 4 |Italo | Done|
| | | T002 | Validación de recetas | Validar componentes disponibles y precios | 2 | Italo|Done |
| **TS-06** | Obtener Servicios por Zona | T001 | Implementar endpoint GET /services | Filtrar servicios por zona geográfica | 4 |Italo |Done |
| | | T002 | Optimización de consultas geográficas | Índices y optimizaciones para búsqueda por zona | 2 |Italo |Done|
| **TS-07** | Iniciar Flujo de Solicitud | T001 | Implementar endpoint POST /service-requests | Crear solicitud con validaciones | 5 |Italo | Done|
| | | T002 | Lógica de validación de disponibilidad | Verificar disponibilidad de técnicos y componentes | 4 |Italo |Done |
| **TS-08** | Enviar Solicitud de Servicio | T001 | Implementar endpoint PUT /service-requests/:id/submit | Confirmar y enviar solicitud | 3 |Italo | Done|
| | | T002 | Integración con sistema de notificaciones | Notificar a técnicos disponibles | 3 |Italo | Done|
| **TS-09** | Asignar Técnico Automáticamente | T001 | Algoritmo de asignación automática | Lógica para asignar técnico óptimo | 6 | Italo| Done|
| | | T002 | Factores de asignación | Considerar distancia, disponibilidad, rating | 3 |Italo|Done|
| **TS-10** | Actualización Automática de Stock | T001 | Servicio de actualización automática | Descontar stock tras completar servicio | 4 |Italo Done|
| | | T002 | Manejo de stock insuficiente | Lógica para manejar falta de componentes | 2 |Italo |Done |
| **TS-11** | Enviar Evaluación de Servicio | T001 | Implementar endpoint POST /evaluations | Guardar evaluación con validaciones | 3 |Italo | Done|
| | | T002 | Actualización de rating del técnico | Recalcular promedio de calificaciones | 3 |Italo |Done |
| **TS-12** | Obtener Evaluaciones por Técnico | T001 | Implementar endpoint GET /technicians/:id/evaluations | Obtener evaluaciones con paginación | 3 |Italo | Done|
| **TS-14** | Listener Webhook de Stripe | T001 | Implementar webhook handler | Procesar eventos de Stripe de forma segura | 5 | Italo|Done |
| | | T002 | Manejo de eventos de suscripción | Procesar creación, actualización y cancelación | 4 |Italo |Done |
| **TS-15** | Reinicio Mensual de Contador | T001 | Job de reinicio mensual | Cron job para resetear contadores de solicitudes | 3 |Italo |Done |
| **TS-16** | Sesión de Portal de Stripe | T001 | Implementar endpoint portal Stripe | Crear sesión para gestionar suscripción | 4 |Italo |Done |
| | | T002 | Configuración de portal | Configurar opciones disponibles en portal | 2 | Italo|Done |

<hr>
#### 5.2.3.4.Development Evidence for Sprint Review.

| Repository                                | Branch | Commit ID | Commit Message                                 | Commit Message Body                                         | Committed on  |
|-------------------------------------------|--------|-----------|-----------------------------------------------|-------------------------------------------------------------|---------------|
| HampCoders/Electrolink-Backend | HEAD -> main, origin/main, origin/HEAD | ff88fe7 | Merge pull request #6 from HampCoders/feature/ServiceDesignAndPlanning-bc | Implementing ServiceDesignAndPlanning Bounded Context | Sat Jun 21 17:37:59 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/ServiceDesignAndPlanning-bc | ef68b22 | Implementing ServiceDesignAndPlanning Bounded Context |  | Sat Jun 21 17:37:07 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 0defeab | Merge pull request #4 from HampCoders/feature/ServiceOperations-BC | SOM Backend Implementation | Sat Jun 21 17:02:13 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/ServiceOperations-BC | 4b88ae2 | Implementación inicial de ServiceOperations bounded context |  | Sat Jun 21 17:01:27 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/Analytics-bounded-context | 3400e28 | feature: Add Analitics Bounded Context |  | Sat Jun 21 03:05:22 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 450356b | Merge pull request #3 from HampCoders/feature/Analytics-bounded-context | Merge pull request #2 from HampCoders/main | Sat Jun 21 02:07:40 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 6ba24ae | Merge pull request #2 from HampCoders/main | Merge main to feature Analitycs | Sat Jun 21 02:06:01 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 2a7ae64 | Merge branch 'develop' |  | Thu Jun 19 13:12:44 2025 -0500 |
:
| HampCoders/Electrolink-Backend | HEAD -> main, origin/main, origin/HEAD | ff88fe7 | Merge pull request #6 from HampCoders/feature/ServiceDesignAndPlanning-bc | Implementing ServiceDesignAndPlanning Bounded Context | Sat Jun 21 17:37:59 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/ServiceDesignAndPlanning-bc | ef68b22 | Implementing ServiceDesignAndPlanning Bounded Context |  | Sat Jun 21 17:37:07 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 0defeab | Merge pull request #4 from HampCoders/feature/ServiceOperations-BC | SOM Backend Implementation | Sat Jun 21 17:02:13 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/ServiceOperations-BC | 4b88ae2 | Implementación inicial de ServiceOperations bounded context |  | Sat Jun 21 17:01:27 2025 -0500 |
| HampCoders/Electrolink-Backend | origin/feature/Analytics-bounded-context | 3400e28 | feature: Add Analitics Bounded Context |  | Sat Jun 21 03:05:22 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 450356b | Merge pull request #3 from HampCoders/feature/Analytics-bounded-context | Merge pull request #2 from HampCoders/main | Sat Jun 21 02:07:40 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 6ba24ae | Merge pull request #2 from HampCoders/main | Merge main to feature Analitycs | Sat Jun 21 02:06:01 2025 -0500 |
| HampCoders/Electrolink-Backend |  | 2a7ae64 | Merge branch 'develop' |  | Thu Jun 19 13:12:44 2025 -0500 |
<hr>

<hr>
#### 5.2.3.5.Execution Evidence for Sprint Review.

<img  src="https://i.imgur.com/Xwg2jcV.png"/>

<img  src="https://i.imgur.com/QA0k4b0.png"/>

<img  src="https://i.imgur.com/5po1hr0.png"/>

<img  src="https://i.imgur.com/R0O1iDK.png"/>

<img  src="https://i.imgur.com/e4CJSPS.png"/>

<img  src="https://i.imgur.com/pX8TsuU.png"/>
 
#### 5.2.3.6. Services Documentation Evidence for Sprint Review. 

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/v1/catalog/types` | Crear tipo de componente |
| **GET** | `/api/v1/catalog/types` | Obtener todos los tipos de componentes |
| **GET** | `/api/v1/catalog/types/{typeId}` | Obtener tipo de componente por ID |
| **PUT** | `/api/v1/catalog/types/{typeId}` | Actualizar tipo de componente por ID |
| **DELETE** | `/api/v1/catalog/types/{typeId}` | Eliminar tipo de componente por ID |
| **POST** | `/api/v1/catalog/components` | Crear componente |
| **GET** | `/api/v1/catalog/components` | Obtener todos los componentes |
| **PUT** | `/api/v1/catalog/components/{componentId}` | Actualizar componente por ID |
| **DELETE** | `/api/v1/catalog/components/{componentId}` | Eliminar componente por ID |

---

### Technician Inventory

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/v1/technicians/{technicianId}/inventory` | Crear inventario de técnico |
| **GET** | `/api/v1/technicians/{technicianId}/inventory` | Obtener inventario de técnico |
| **POST** | `/api/v1/technicians/{technicianId}/inventory/stock-items` | Agregar ítem al stock |
| **PUT** | `/api/v1/technicians/{technicianId}/inventory/{componentId}` | Actualizar componente del inventario |
| **DELETE** | `/api/v1/technicians/{technicianId}/inventory/{componentId}` | Eliminar componente del inventario |

---

### Properties

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/owners/{ownerId}/properties` | Obtener propiedades de un propietario |
| **POST** | `/api/v1/owners/{ownerId}/properties` | Crear propiedad |
| **GET** | `/api/v1/owners/{ownerId}/properties/{propertyId}` | Obtener propiedad por ID |
| **PUT** | `/api/v1/owners/{ownerId}/properties/{propertyId}` | Actualizar propiedad |
| **PUT** | `/api/v1/owners/{ownerId}/properties/{propertyId}/photo` | Actualizar foto |
| **PUT** | `/api/v1/owners/{ownerId}/properties/{propertyId}/address` | Actualizar dirección |
| **DELETE** | `/api/v1/owners/{ownerId}/properties/{propertyId}` | Eliminar propiedad |

---

### Technicians

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/technicians/{technicianId}` | Obtener técnico por ID |
| **POST** | `/api/v1/technicians` | Crear técnico |
| **GET** | `/api/v1/technicians` | Obtener todas las categorías |
| **GET** | `/api/v1/technicians/{technicianId}/works` | Obtener trabajos por técnico |

---

### Works

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/works/{workId}` | Obtener trabajo por ID |
| **POST** | `/api/v1/works` | Crear nuevo trabajo |
| **GET** | `/api/v1/works` | Obtener todos los trabajos |
| **POST** | `/api/v1/works/{workId}/image` | Agregar imagen a un trabajo |

---

### Ratings

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/v1/ratings/{id}/rating` | Crear calificación |
| **GET** | `/api/v1/ratings/{id}/rating` | Obtener calificación por ID |
| **GET** | `/api/v1/ratings/technician/{technicianId}/ratings` | Obtener calificaciones por técnico |
| **DELETE** | `/api/v1/ratings/{id}` | Eliminar calificación |
| **PUT** | `/api/v1/ratings/{id}` | Actualizar calificación |
| **GET** | `/api/v1/ratings` | Obtener todas las calificaciones |

---

### Reports

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/v1/reports/{id}/report` | Crear reporte |
| **GET** | `/api/v1/reports/{id}` | Obtener reporte por ID |
| **DELETE** | `/api/v1/reports/{id}` | Eliminar reporte |
| **POST** | `/api/v1/reports/{id}/photo` | Agregar foto al reporte |
| **GET** | `/api/v1/reports` | Obtener todos los reportes |

---

### Service Operations

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/v1/service-operations` | Crear operación de servicio |
| **GET** | `/api/v1/service-operations` | Obtener todas las operaciones |
| **PUT** | `/api/v1/service-operations/{id}/status` | Actualizar estado de la operación |
| **GET** | `/api/v1/service-operations/{id}/status` | Obtener estado de la operación |
| **GET** | `/api/v1/service-operations/technician/{technicianId}/history` | Obtener historial del técnico |

---

### Requests

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/requests/{requestId}` | Obtener solicitud por ID |
| **PUT** | `/api/v1/requests/{requestId}` | Actualizar una solicitud |
| **DELETE** | `/api/v1/requests/{requestId}` | Eliminar una solicitud |
| **GET** | `/api/v1/requests/client/{clientId}` | Obtener solicitudes por cliente |
| **POST** | `/api/v1/requests` | Crear nueva solicitud |

---

### Schedules

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/schedules/technician/{technicianId}` | Obtener agenda por técnico |
| **POST** | `/api/v1/schedules` | Crear nueva agenda |
| **PUT** | `/api/v1/schedules/{scheduleId}` | Actualizar agenda |
| **DELETE** | `/api/v1/schedules/{scheduleId}` | Eliminar agenda |

---

### Services

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/v1/services/{serviceId}` | Obtener servicio por ID |
| **PUT** | `/api/v1/services/{serviceId}` | Actualizar servicio |
| **DELETE** | `/api/v1/services/{serviceId}` | Eliminar servicio |
| **POST** | `/api/v1/services` | Crear nuevo servicio |

---

#### 5.2.3.7. Software Deployment Evidence for Sprint Review. 

<img  src="https://i.imgur.com/AHQ3KII.png"/>

<img  src="https://i.imgur.com/olaOQvK.png"/>

<img  src="https://i.imgur.com/ZgVkMkA.png"/>
<img  src="https://i.imgur.com/Rawm4sz.png"/>
<img  src="https://i.imgur.com/p7CTMeD.png"/>
<img  src="https://i.imgur.com/pjB7ptM.png"/>
<img  src="https://i.imgur.com/27MSHgu.png"/>

#### 5.2.3.8. Team Collaboration Insights during Sprint.  

<img  src="https://i.imgur.com/JfJ7B61.png"/>

<img  src="https://i.imgur.com/H4SLsdv.png"/>

<hr>

### 5.2.4. Sprint 4
En esta sección , el equipo definio la planificación y presentó evidencias del desarrollo del sprint 4

#### 5.2.4.1. Sprint Planning 4
En esta sección, el equipo planificó el Sprint 4

| **Sprint #** | Sprint 4 |
|--------------|----------|
| **Sprint Planning Background** |  |
| **Date** | 2025-07-05 |
| **Time** | 4:00 PM |
| **Location** | Virtual - Discord |
| **Prepared By** | Ethan Matias Aliaga Aguirre |
| **Attendees (to planning meeting)** | Ludwing Sanchez Manrique / Ethan Matias Aliaga Aguirre / Leandro Saul Contreras / Ivo Marcelo Machado Bracamonte / Ricardo Del Aguila Ayala |
| **Sprint n–4 Review Summary** | Durante el Sprint anterior, se realizaron ajustes estructurales sugeridos por el profesor en la arquitectura del backend. Se implementaron con éxito múltiples endpoints RESTful, cubriendo los módulos principales como solicitudes, servicios, reportes y calificaciones. Esto permitió establecer una base sólida para la lógica del negocio y la persistencia de datos. Aunque algunos endpoints avanzados y validaciones específicas quedaron pendientes, el backend resultante fue estable, funcional y bien recibido en la revisión. |
| **Sprint n–4 Retrospective Summary** | El equipo manifestó satisfacción con el trabajo backend logrado hasta el momento, destacando adaptabilidad de cada uno de los integrantes frente a situaciones complejas. Se identificaron áreas de mejora en la gestión del tiempo al implementar controladores complejos. Se acordó levantar las observaciones con respecto al Sprint 3. |
| **Sprint Goal & User Stories** |  |
| **Sprint n-4 Goal** | Nuestro enfoque es en implementar un conjunto de funcionalidades clave como la Administración de Identidad y Acceso y Perfil y Preferencias. Creemos que esto entrega a los usuarios la capacidad de gestionar su acceso y preferencias  para garantizar una experiencia personalizada. Esto se confirmará cuando los usuarios, sean técnicos o propietarios, puedan registrarse como usuarios , personalizar su perfil en Electrolink.|
| **Sprint n-4 Velocity** | 100% |
| **Sum of Story Points** | 174 Story Points |

<br>

#### 5.2.4.2. Aspect Leaders and Collaborators.
Durante este sprint, la asignación de responsabilidades técnicas se mantuvo por bounded contexts. Cada miembro asumió un rol activo en la implementación de endpoints REST y lógica de dominio. Se fortaleció la colaboración entre integrantes para asegurar la integración fluida entre componentes y la consistencia en las reglas de negocio.

| **Team Member (Last Name, First Name)** | **GitHub Username** | **Service Operation and Monitoring** | **Profile and Preferences** | *Identity and Assets Management** |
|-----------------------------------------|---------------------|-------------------------------------------|---------------------------------------------------|-------------------------|--------------------------|
| Sánchez Manrique, Ludwing               | ItaloSanche         |                                           | C                                                 | L                                        |
| Aliaga Aguirre, Ethan Matías            | MatFragg            |                                          |   C                                                |                                          |
| Contreras Lopez , Leandro Saul           | WiDDsito          | C                                         |                                                    |                                          |
| Machado Bracamonte, Ivo Marcelo         | ivommb11            |                                           | L                                                 |   C                                       |
| Del Aguila Ayala, Ricardo               | Rexest01            |  L                                         |                                                   |                                          |

<br>

#### 5.2.4.3. Sprint Backlog 4
En esta sección, se presenta el sprint backlog 4
| Sprint # | Sprint 4 | | | | | | |
|----------|----------|---|---|---|---|---|---|
| **User Story** | | **Work-Item/task** | | | | | |
| **ID** | **Title** | **Id** | **Title** | **Description** | **Estimation(Hrs)** | **Assigned To** | **Status** |
| **US-13** | Registro de cuentas como Dueño de Hogar | T001 | Backend: API de registro para Dueño de Hogar | Crear endpoint POST /register/home-owner con validaciones de datos. | 5 | | |
| | | T002 | Frontend: Formulario de registro | Desarrollar el componente React para el formulario de registro de Dueño de Hogar. | 5 | | |
| **US-14** | Registro de cuentas como Dueño de Empresa | T001 | Backend: API de registro para Dueño de Empresa | Crear endpoint POST /register/business-owner con campos específicos para empresas. | 5 | | |
| | | T002 | Frontend: Formulario de registro de Empresa | Desarrollar el componente React para el formulario de registro de Dueño de Empresa. | 5 | | |
| **US-15** | Registro de cuentas para Técnicos | T001 | Backend: API de registro para Técnicos | Crear endpoint POST /register/technician con validaciones para perfil de técnico. | 5 | | |
| | | T002 | Frontend: Formulario de registro de Técnico | Desarrollar el componente React para el formulario de registro de Técnico. | 5 | | |
| **US-16** | Verificación de cuenta por correo | T001 | Backend: Lógica de envío de correo de verificación | Implementar servicio para generar un token único y enviarlo por correo tras el registro. | 5 | | |
| | | T002 | Backend: Endpoint de confirmación | Crear endpoint GET /verify-email/:token que valide el token y active la cuenta del usuario. | 5 | | |
| **US-17** | Inicio de sesión de usuarios | T001 | Backend: API de autenticación (Login) | Crear endpoint POST /login que valide credenciales y retorne un JWT. | 5 | | |
| | | T002 | Frontend: Lógica de inicio de sesión | Implementar formulario de login, llamada a la API y almacenamiento seguro del token. | 5 | | |
| **US-18** | Validación de datos de registro | T001 | Backend: Validación de datos en APIs | Reforzar validaciones en todos los endpoints de registro (formato, unicidad de email). | 3 | | |
| | | T002 | Frontend: Validación en tiempo real | Implementar validaciones en los formularios de registro para dar feedback inmediato al usuario. | 3 | | |
| **US-21** | Recuperación de Contraseña | T001 | Backend: Flujo de recuperación | Crear endpoints para solicitar un enlace de reseteo y para actualizar la contraseña con un token válido. | 5 | | |
| | | T002 | Frontend: Interfaz de recuperación | Desarrollar las vistas para solicitar el reseteo y para ingresar la nueva contraseña. | 5 | | |
| **US-22** | Cierre de Sesión | T001 | Backend: Lógica de Cierre de Sesión | Implementar endpoint para invalidar el token si se usa una lista de revocación (opcional). | 2 | | |
| | | T002 | Frontend: Funcionalidad de Logout | Implementar botón de cierre de sesión que elimine el token del almacenamiento local y redirija al login. | 2 | | |
| **US-23** | Visualización de Perfil de Propietario | T001 | Backend: API para obtener perfil de propietario | Crear endpoint GET /profile/owner para devolver la información del usuario autenticado. | 3 | | |
| | | T002 | Frontend: Componente de visualización | Desarrollar una vista que muestre la información del perfil del propietario. | 3 | | |
| **US-24** | Edición de Perfil de Propietario | T001 | Backend: API para actualizar perfil de propietario | Crear endpoint PUT /profile/owner para modificar los datos del usuario. | 5 | | |
| | | T002 | Frontend: Formulario de edición de perfil | Desarrollar un formulario pre-poblado para que el propietario edite su información. | 5 | | |
| **US-25** | Visualización de Perfil de Técnico | T001 | Backend: API para obtener perfil de técnico | Crear endpoint GET /profile/technician para devolver el perfil profesional del técnico. | 4 | | |
| | | T002 | Frontend: Vista de perfil público de técnico | Desarrollar la vista que muestra el perfil del técnico, incluyendo portafolio y calificaciones. | 6 | | |
| **US-26** | Edición de Perfil de Técnico | T001 | Backend: API para actualizar perfil de técnico | Crear endpoint PUT /profile/technician para modificar datos, certificaciones y especialidades. | 8 | | |
| | | T002 | Frontend: Formulario de edición de perfil técnico | Desarrollar una interfaz completa para que el técnico gestione toda su información profesional. | 8 | | |
| **US-27** | Dashboard Personalizado | T001 | Backend: API de datos para Dashboard | Crear un endpoint que agregue y devuelva los datos relevantes para el dashboard según el rol del usuario. | 5 | | |
| | | T002 | Frontend: Componente de Dashboard | Desarrollar el componente principal del dashboard que visualice la información de la API. | 5 | | |
| **US-28** | Crear Portafolio Digital | T001 | Backend: API CRUD para Portafolio | Crear endpoints para que el técnico pueda agregar, editar y eliminar trabajos de su portafolio. | 5 | | |
| | | T002 | Frontend: Interfaz de gestión de portafolio | Desarrollar la interfaz que permita al técnico subir imágenes y descripciones de sus trabajos. | 5 | | |
| **US-30** | Configuración de Notificaciones | T001 | Backend: API para preferencias de notificación | Crear endpoint PUT /settings/notifications para guardar las preferencias del usuario. | 3 | | |
| | | T002 | Frontend: Formulario de configuración | Desarrollar la interfaz para que el usuario pueda activar/desactivar notificaciones. | 3 | | |
| **US-63** | Historial de Clientes Atendidos | T001 | Backend: API de historial de clientes | Crear endpoint GET /technician/clients para listar los clientes atendidos por el técnico. | 3 | | |
| | | T002 | Frontend: Vista de historial de clientes | Desarrollar la interfaz que muestre la lista de clientes atendidos. | 3 | | |
| **TS-17** | Endpoint de Autenticación JWT | T001 | Implementar endpoint de login | Desarrollar la lógica del endpoint POST /login que genera y firma un token JWT. | 5 | | |
| | | T002 | Crear middleware de validación de token | Desarrollar un middleware para proteger rutas que verifique la validez del token JWT. | 5 | | |
| **TS-18** | Endpoint de Registro de Usuarios | T001 | Endpoint de registro de Propietario | Implementar endpoint POST /register/owner con la lógica de negocio correspondiente. | 5 | | |
| | | T002 | Endpoint de registro de Técnico | Implementar endpoint POST /register/technician con la lógica de negocio correspondiente. | 5 | | |
| **TS-19** | Verificación de Email | T001 | Endpoint para generar y enviar token | Implementar la lógica para crear un token de verificación y enviarlo por correo electrónico. | 3 | | |
| | | T002 | Endpoint para validar token | Crear el endpoint que recibe el token desde el enlace del correo y activa la cuenta. | 3 | | |
| **TS-20** | Middleware de Autorización | T001 | Implementar middleware de roles | Crear un middleware que extraiga el rol del usuario desde el token JWT. | 5 | | |
| | | T002 | Aplicar middleware a rutas protegidas | Integrar el middleware de autorización en los endpoints que requieren roles específicos (ej. técnico). | 5 | | |
| **TS-21** | Recuperación de Contraseña | T001 | Endpoint de solicitud de reseteo | Crear endpoint que reciba un email, genere un token de reseteo y lo envíe por correo. | 3 | | |
| | | T002 | Endpoint de confirmación de nueva contraseña | Crear endpoint que valide el token y actualice la contraseña en la base de datos. | 3 | | |
| **TS-22** | Endpoints de Gestión de Perfiles | T001 | Endpoints GET y PUT para perfiles | Implementar los endpoints para leer y actualizar la información de los perfiles de usuario. | 4 | | |
| | | T002 | Endpoint DELETE para perfiles | Implementar el endpoint para la eliminación de cuentas de usuario, incluyendo limpieza de datos asociados. | 4 | | |
| **TS-23** | Sistema de Notificaciones Básico | T001 | Integración de servicio de email | Configurar un servicio como SendGrid o Nodemailer dentro de la aplicación. | 4 | | |
| | | T002 | Creación de servicio de notificación | Crear una clase o función de servicio para abstraer el envío de correos electrónicos. | 4 | | |
<br>

#### 5.2.4.4. Development Evidence for Sprint Review 
En esta sección, se muestran evidencias del desarrollo del sprint 4

#### 5.2.4.5. Execution Evidence for Sprint Review
En esta sección, se presenta evidencia de ejecución para el sprint 4 

#### 5.2.4.6. Services Documentation Evidence for Sprint Review
En esta sección, se presenta la evidencia de documentación de lo desarrollado en el sprint 4

#### 5.2.4.7. Software Deployment Evidence for Sprint Review
En esta sección, el equipo presenta la evidencia sobre el despliegué tanto de la solución front-end, el back-end y la landing page de la solución.

#### 5.2.4.8. Team Collaboration Insights during Sprint
En esta sección, el equipo presenta evidencia de la colaboración activa en github.

### 5.3. Validation Interviews. 

#### 5.3.1. Diseño de Entrevistas. 

# Entrevistas por Segmento - Plataforma ElectroLink

## Segmento: Clientes

1. ¿Qué tan fácil te resultó registrarte y entender para qué servía ElectroLink como cliente?
2. ¿Cómo fue tu experiencia al navegar desde el Home hasta encontrar un técnico?
3. Al ver las cards de técnicos, ¿qué información fue clave para tomar una decisión (reseñas, distancia, disponibilidad)?
4. ¿La sección de “Servicios activos” en el dashboard te ayudó a hacer seguimiento de lo que contrataste?
5. ¿Pudiste identificar sin problemas en qué estado estaba tu solicitud o mantenimiento?
6. ¿Sentiste que el diseño de la app era confiable y profesional desde el primer momento?
7. ¿Qué tan útil te pareció el botón “Buscar técnico”? ¿Qué filtro usaste más?
8. ¿La función de geolocalización y mapa te ayudó a elegir al mejor técnico cercano?
9. ¿Te sentiste cómodo contratando a alguien por internet directamente desde la plataforma?
10. ¿Te sirvió el módulo de notificaciones para saber cuándo ocurriría el mantenimiento?
11. ¿Después de recibir el servicio, pudiste calificar al técnico fácilmente?
12. ¿Qué cambiarías en la experiencia visual o funcional para que ElectroLink sea aún más clara o rápida de usar?

---

## Segmento: PYMEs

1. ¿Tu empresa ya tenía una forma de gestionar proveedores eléctricos? ¿Qué cambió con ElectroLink?
2. ¿El dashboard de “Gestión de agenda” te pareció fácil de entender para programar mantenimientos?
3. ¿La opción de ver “Métricas y Rendimiento” fue útil para tomar decisiones de mejora?
4. ¿Consideras valioso poder ver el “Historial de servicios” directamente en la plataforma?
5. ¿ElectroLink te permite tener control sobre los días y horas en que recibes mantenimiento?
6. ¿Qué tan clara te parece la visualización de técnicos preferidos? ¿Los volverías a contratar?
7. ¿La interfaz de búsqueda por tipo de servicio eléctrico y ubicación te pareció ágil?
8. ¿Usaste el sistema de reseñas para elegir a quién contratar? ¿Confiaste en él?
9. ¿Crees que el diseño transmite formalidad y profesionalismo suficiente para una pyme?
10. ¿Qué tan útil sería para ti recibir un reporte automático del mantenimiento realizado?
11. ¿Te sirvió ver alertas de “Notificaciones” como recordatorio de mantenimientos?
12. ¿Qué funcionalidades crees que le hacen falta a ElectroLink para facilitarte la gestión como empresa?

---

## Segmento: Proveedores

1. ¿Fue fácil registrarte como proveedor y configurar tu perfil dentro de ElectroLink?
2. ¿El dashboard de proveedor refleja claramente tu estado (disponible/no disponible, servicios en curso)?
3. ¿Te sentiste representado profesionalmente con el diseño y datos de tu perfil?
4. ¿Qué tan útil te parece tener un módulo específico para gestionar tus servicios activos?
5. ¿La sección de “Inventario y Catálogo” fue fácil de actualizar con tus propios servicios?
6. ¿Consideras útil tener tus “Métricas y Rendimiento” disponibles en tiempo real?
7. ¿Las reseñas de los clientes te han servido para mejorar tu trabajo o conseguir más solicitudes?
8. ¿Qué tan fácil fue para ti agregar un horario a la agenda y gestionar tu disponibilidad?
9. ¿La función de ver tu perfil como los clientes lo ven te parece clara y justa?
10. ¿Pudiste cargar bien tus certificaciones y ver cómo aparecen en la app?
11. ¿Sentiste que la app te dio mayor visibilidad profesional que buscar clientes por tu cuenta?
12. ¿Qué cosas le agregarías al panel de proveedor para sentirte más apoyado como técnico?
---

#### 5.3.2. Registro de Entrevistas. 

1. Leonardo Prieto<br>

   <img src="https://i.ibb.co/99cNgWzz/lol-Imgur.png" style="width:800px; height:400px;"/>
    _Entrevista del Frontend Application a Leonardo Prieto_

   Duración: 6:28 min<br>
   Empieza: 00:00
   
*Resumen de la opinión del entrevistado sobre la aplicación Electrolink*

1. **Comprensión general de la plataforma**:

   * Leonardo comprendió rápidamente que **la aplicación conecta clientes con proveedores de servicios eléctricos**, lo cual indica que el objetivo principal está bien comunicado.

2. **Experiencia de usuario (UX)**:

   * Destaca que **la interfaz le transmite confianza**, lo cual es clave para cualquier plataforma online. Aunque no profundiza en detalles visuales, su respuesta sugiere que la estructura y navegación iniciales son adecuadas.

3. **Información clave para el usuario**:

   * Menciona que **la disponibilidad del técnico** es un factor determinante para tomar decisiones como cliente, lo que sugiere que este dato debería estar muy visible y actualizado en la interfaz.

4. **Funcionalidad destacada**:

   * Encuentra **muy útil la opción de búsqueda por localización**, ya que permite identificar técnicos cercanos, algo esencial en servicios presenciales.

5. **Sugerencias de mejora**:

   * Sugiere **implementar un sistema de chat en tiempo real** entre técnico y cliente. Esto permitiría una comunicación más fluida, resolver dudas previas al servicio y facilitar la coordinación.
   * Propone **añadir imágenes y más información visual** para hacer el apartado visual más atractivo y mejorar el diseño en general.

---

**Análisis general**

Leonardo refleja el perfil de un **usuario potencialmente interesado** en usar la aplicación. Su retroalimentación valida que:

* El **objetivo principal se comunica con claridad**.
* Hay un **mínimo viable funcional** con buen potencial.
* **La confianza en la plataforma es positiva**, aunque aún hay espacio para mejorar la presentación visual.

Además, sus comentarios demuestran que valora:

* La **usabilidad práctica (disponibilidad, localización)**.
* La **comunicación directa (chat)**.
* Una **presentación atractiva (imágenes e información enriquecida)**.

---

2. Piero Tenorio Medina <br>
   <img  src="https://i.ibb.co/V09GMF8T/imagen.png" style="width:800px; height:400px;"/>
   _Entrevista del Frontend Application a Piero Tenorio_

   Enlace: https://youtu.be/Epc6R8F4hjE <br>
   Duración: 7:53 min<br>
   Empieza: 00:00<br>
   
*Resumen de la opinión del entrevistado sobre la aplicación Electrolink*

1. **Comprensión general de la plataforma**:

   * Piero comprendió rápidamente el proposito de la aplicación, lo cual es el punto deseado..

2. **Experiencia de usuario (UX)**:

   * Destaca que la interfaz le transmite confianza, lo cual es clave para cualquier plataforma online. Aunque si reforzaria en lo que la organización visual de algunos elementos.

3. **Información clave para el usuario**:

   * Menciona que las secciones para manejar sus componentes electricos son bastante buenas pero considera mejorar la paleta de colores.

4. **Funcionalidad destacada**:

   * Encuentra muy útil la sección para agregar componetes a su inventario..

5. **Sugerencias de mejora**:

   * Sugiere mejorar la organización visual para poder evitar la fatiga al momento de buscar entre secciones.Asimismo, piensa que es muy importante utilizar mostrar la vista de componentes mediante tablas.

---

**Análisis general**

Leonardo refleja el perfil de un **usuario potencialmente interesado** en usar la aplicación. Su retroalimentación valida que:

* El **objetivo principal se comunica con claridad**.
* Hay un **mínimo viable funcional** con buen potencial.
* **La confianza en la plataforma es positiva**, aunque aún hay espacio para mejorar la presentación visual.

Además, sus comentarios demuestran que valora:

* La **usabilidad práctica (disponibilidad, localización)**.
* La **comunicación directa (chat)**.
* Una **presentación atractiva (imágenes e información enriquecida)**.

---

#### 5.3.3. Evaluaciones según heurísticas.

<hr>
Evaluación Heurística de ElectroLink

**Carrera:** Ingeniería de Software  
**Curso:** Desarrollo de Aplicaciones Open Source  
**Auditor:** ElectroLink  
**Plataforma evaluada:** ElectroLink – Plataforma Web  

---

## Tareas evaluadas

- Comprender el propósito del sitio al ingresar  
- Navegar y entender la propuesta de valor tanto para propietarios como para proveedores  
- Visualizar e interactuar con el catálogo de servicios  
- Acceder a testimonios, valores, misión y visión de la empresa  
- Evaluar la visual jerárquica de acciones clave (registrarse, buscar técnicos, mostrar perfil)  
- Interacción de proveedores con sus servicios e inventario  
- Mostrar el trabajo realizado (visibilidad a clientes)  
- Comparar perfiles técnicos y ver reseñas  
- Reportar un servicio finalizado (cliente y proveedor)  
- Evaluar accesibilidad visual e inclusividad  

---

## Tabla resumen de problemas detectados

| #  | Problema detectado                                                                 | Severidad | Heurística/Principio violado                                       |
|----|-------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------|
| 1  | Falta un botón de regreso rápido al inicio en páginas extensas                     | 2         | Control del usuario                                               |
| 2  | Íconos e imágenes no tienen descripciones accesibles (sin `alt`)                   | 3         | Inclusive Design – Experiencias comparables                      |
| 3  | Jerarquía visual poco clara en botones de acción principal                         | 2         | Visibilidad y jerarquía visual                                    |
| 4  | No hay diferenciación visual clara entre botones de cliente y proveedor            | 2         | Consistencia y estándares                                         |
| 5  | No se explicita claramente el beneficio tangible de publicar un servicio           | 2         | Reconocer en lugar de recordar                                   |
| 6  | En vistas de gestión, no se resalta lo más urgente (como “nuevas solicitudes”)     | 3         | Visibilidad del estado del sistema                               |
| 7  | No hay retroalimentación visual luego de acciones (ej. guardar inventario)         | 3         | Visibilidad del estado del sistema                               |
| 8  | No hay ayudas contextuales (tooltips o descripciones) en íconos de servicios       | 2         | Ayuda y documentación                                             |
| 9  | No se destacan los beneficios diferenciales para PYMEs respecto a clientes comunes | 2         | Reconocer en lugar de recordar / Personalización del contenido    |
| 10 | No se ofrecen opciones de configuración accesibles (contraste, tamaños)            | 3         | Diseño inclusivo                                                  |
| 11 | La opción “Mostrar tu trabajo” no guía claramente cómo se verá al cliente          | 2         | Correspondencia entre sistema y el mundo real                     |
| 12 | El flujo de registro y rol no se valida con confirmación clara al usuario          | 3         | Prevención de errores / Control del usuario                       |

---

## Descripción de problemas clave

### Problema #2: Falta de etiquetas accesibles en íconos e imágenes  
**Severidad:** 3  
**Heurística violada:** Inclusive Design  
**Descripción:** Los íconos que representan funcionalidades como “servicio garantizado”, “componentes”, “perfiles”, etc., no tienen `alt` ni descripciones para lectores de pantalla.  
**Recomendación:** Añadir `alt`, `aria-label` o tooltips en cada ícono o imagen decorativa relevante.

---

### Problema #6: No se resalta lo más urgente para el proveedor  
**Severidad:** 3  
**Heurística violada:** Visibilidad del estado del sistema  
**Descripción:** En el panel del proveedor, las nuevas solicitudes o acciones pendientes no están resaltadas con prioridad visual.  
**Recomendación:** Usar badges, resaltado en rojo o secciones tipo “acciones recientes”.

---

### Problema #7: No hay retroalimentación visual tras acciones clave  
**Severidad:** 3  
**Heurística violada:** Visibilidad del estado del sistema  
**Descripción:** Al guardar componentes, aceptar solicitudes o subir fotos, el usuario no recibe un mensaje inmediato o animación de confirmación.  
**Recomendación:** Mostrar mensajes toast, iconos animados de éxito o loaders donde aplique.


<hr>

<div style="page-break-after: always;"></div>

### Conclusiones

- El equipo logró mantener una estructura de trabajo colaborativa, distribuyendo adecuadamente las responsabilidades según las fortalezas de cada integrante.
- Las metodologías aplicadas (Lean UX, entrevistas, Journey Mapping) permitieron una comprensión más profunda de los usuarios, lo que fortaleció la propuesta de valor de Electrolink.
- Se cumplieron los objetivos del primer sprint, consolidando la base técnica del sistema, el diseño de la interfaz y el despliegue de la landing page.
- A pesar de algunas diferencias en la carga de trabajo entre miembros, se logró avanzar en los entregables de manera efectiva y dentro de los plazos establecidos.

<div style="page-break-after: always;"></div>

### Recomendaciones

- Fomentar una distribución más equitativa de tareas técnicas y documentales para asegurar un esfuerzo balanceado entre todos los miembros.
- Continuar con la validación frecuente de los avances con usuarios reales, especialmente antes de cada iteración, para mantener la alineación entre desarrollo y necesidades reales.
- Aprovechar las fortalezas individuales del equipo para asignar responsabilidades específicas que optimicen los tiempos de desarrollo.
- Documentar de manera más sistemática los aprendizajes y desafíos encontrados en cada sprint, para mejorar continuamente el proceso.
<hr>

<hr>

<div style="page-break-after: always;"></div>

### Bibliografía

- Angular Cookbook. (2021). Packt Publishing.

- Angular. Retrieved. (s. f.). [https://angular.io/guide/i18n-overview](https://angular.io/guide/i18n-overview)

- Del Aguila-Obra, A. R., Al-dweeri, R. M., & Padilla-Meléndez, A. (2012). *Factores determinantes de la calidad de los servicios electrónicos en el contexto de los operadores postales*. *Universia Business Review*, (35), 114-123. [https://www.redalyc.org/pdf/433/43323842006.pdf](https://www.redalyc.org/pdf/433/43323842006.pdf)

- Deinum, Marten. author. (2018). Spring Boot 2 Recipes A Problem-Solution Approach  (1st ed. 2018.). Apress. [https://doi.org/10.1007/978-1-4842-3963-6](https://doi.org/10.1007/978-1-4842-3963-6)

- Fredrich, T., & Pearson eCollege. (s. f.). RESTAPITutorial. [https://www.restapitutorial.com](https://www.restapitutorial.com)

- Mohammad-Al-dweeri, R. (2011). *La calidad en los servicios electrónicos como estrategia competitiva: Modelo de análisis de sus componentes y efectos sobre la satisfacción y la lealtad*. [https://libros.metabiblioteca.org/handle/001/291](https://libros.metabiblioteca.org/handle/001/291)
  
- Ramos, Á. F. V., & Sánchez-Franco, M. J. (2004). *La calidad de servicio electrónico: un análisis de los efectos moderadores del comportamiento de uso de la web*. *Cuadernos de Economía y Dirección de la Empresa*, (21), 121-125. [https://dialnet.unirioja.es/descarga/articulo/1143462.pdf](https://dialnet.unirioja.es/descarga/articulo/1143462.pdf)

- Selvaraj, S. (2024). Mastering REST APIs: Boosting Your Web Development Journey with Advanced API Techniques (1.a ed.). Apress L. P. [https://doi.org/10.1007/979-8-8688-0309-3](https://doi.org/10.1007/979-8-8688-0309-3)

- Leonard, Anghel. author. (2020). Spring Boot Persistence Best Practices Optimize Java Persistence Performance in Spring Boot Applications  (1st ed. 2020.). Apress. [https://doi.org/10.1007/978-1-4842-5626-8](https://doi.org/10.1007/978-1-4842-5626-8])

- Karanam, R. R. (2017). Mastering Spring 5.0. Packt Publishing, Limited.

<hr>

<div style="page-break-after: always;"></div>

### Anexos

- Enlace de Landing Page :
[https://electrolinklp.netlify.app/](https://electrolinklp.netlify.app/)

- Videos About the Product y About the Team
[https://drive.google.com/drive/folders/1x2hjIgoX-pYteq0LMI-BeeicCZ-Og6Me?usp=drive_link](https://drive.google.com/drive/folders/1x2hjIgoX-pYteq0LMI-BeeicCZ-Og6Me?usp=drive_link)

<hr>
