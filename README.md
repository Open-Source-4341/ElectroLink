<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="upc-logo" width="80px" height="80px"/>
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

## Registro de Versiones del Informe




| Versión | Fecha       | Autores                                                                                                                                                          | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TB1     | 22/04/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | Capítulo I: Introducción  <br> Capítulo II: Requirements Elicitation & Analysis  <br> Capítulo III: Requirements Specification  <br> Capítulo IV: Product Design  <br> Capítulo V: Product Implementation, Validation & Deployment  <br><br> **5.1. Software Configuration Management**  <br> 5.1.1. Software Development Environment Configuration  <br> 5.1.2. Source Code Management  <br> 5.1.3. Source Code Style Guide & Conventions  <br> 5.1.4. Software Deployment Configuration  <br><br> **5.2. Landing Page, Services & Applications Implementation (Sprint 1)**  <br> 5.2.1.1. Sprint Planning 1  <br> 5.2.1.2. Aspect Leaders and Collaborators  <br> 5.2.1.3. Sprint Backlog 1  <br> 5.2.1.4. Development Evidence for Sprint Review  <br> 5.2.1.5. Execution Evidence for Sprint Review  <br> 5.2.1.6. Services Documentation Evidence for Sprint Review  <br> 5.2.1.7. Software Deployment Evidence for Sprint Review  <br> 5.2.1.8. Team Collaboration Insights during Sprint |
| TP      | 13/05/2025  | - Del Aguila Ayala, Ricardo Alejandro  <br> - Machado Bracamonte, Ivo Marcelo  <br> - Sanchez Manrique, Italo Ludwing  <br> - Aliaga Aguirre, Ethan Matias  <br> - Contreras Lopez, Leandro Saúl | **5.2.2. Sprint 2**  <br> 5.2.2.1. Sprint Planning 2  <br> 5.2.2.2. Aspect Leaders and Collaborators  <br> 5.2.2.3. Sprint Backlog 2  <br> 5.2.2.4. Development Evidence for Sprint Review  <br> 5.2.2.5. Execution Evidence for Sprint Review  <br> 5.2.2.6. Services Documentation Evidence for Sprint Review  <br> 5.2.2.7. Software Deployment Evidence for Sprint Review  <br> 5.2.2.8. Team Collaboration Insights during Sprint  <br><br> Avance de Conclusiones, Bibliografía y Anexos |



# 


<hr>

## Project Report Collaboration Insights  

**Enlace de la organización del proyecto**
- [Organización GitHub: Open-Source-4341](https://github.com/Open-Source-4341)
- [Repositorio GitHub: ElectroLink](https://github.com/Open-Source-4341)

<img src="https://i.imgur.com/u3VdgdH.jpeg"/>
<hr>

## Resumen de commits por contribuidor

| **Posición** | **Usuario**     | **Commits** | **Líneas añadidas (+)** | **Líneas eliminadas (-)** |
|--------------|------------------|-------------|---------------------------|-----------------------------|
| #1           | **Ricardo Del Aguila**      | 38          | 1,065                     | 101                         |
| #2           | **Ivo Machado**    | 16          | 416                       | 16                          |
| #3           | **Italo Sanchez**  | 15          | 265                       | 19                          |
| #4           | **Ethan Aliaga**     | 7           | 1,787                     | 14                          |
| #5           | **Leandro Contreras**     | 6           | 244                       | 1                           |

## Tabla de Contenidos

## Tabla de Contenidos

- [Capítulo I: Introducción](#capítulo-i-introducción)
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



## Student Outcome


| **Criterio específico** | **Acciones realizadas** | **Conclusiones** |
|-------------------------|--------------------------|------------------|
| Comunica oralmente con efectividad a diferentes rangos de audiencia. | **Del Aguila Ayala, Ricardo Alejandro**  <br> **TB1:** Trabajé en la arquitectura del software aplicando Domain-Driven Design. Redacté historias de usuario, lideré la implementación de la landing page y documenté técnicamente cada componente. <br> **TP:** Coordiné la documentación del Sprint 2, incluyendo el Sprint Planning, Backlog y evidencias técnicas. Me enfoqué en comunicar con precisión los avances del equipo en el repositorio y en mantener alineadas las entregas técnicas con los criterios definidos. | **TB1:** Mostró una capacidad sólida para comunicar temas técnicos complejos al equipo. <br> **TP:** Reflejó una comunicación efectiva en los entregables de Sprint, facilitando la organización del equipo en base a criterios claros y bien documentados. |
| Comunica oralmente con efectividad a diferentes rangos de audiencia. | **Sánchez Manrique, Italo Ludwing** <br> **TB1:** Participé en la elaboración de User Persona, diagramas de flujo y prototipos web. También contribuí en la guía de estilos asegurando coherencia visual. <br> **TP:** Lideré la implementación de funcionalidades en mi módulo del frontend. Documenté los endpoints usados y colaboré en el Sprint Review. Me aseguré de que la lógica visual reflejara fielmente las necesidades funcionales del sistema. | **TB1:** Destacó por representar la voz del usuario mediante elementos visuales. <br> **TP:** Mantuvo una comunicación visual clara en el desarrollo del módulo asignado, facilitando la integración con el resto del sistema. |
| Comunica oralmente con efectividad a diferentes rangos de audiencia. | **Machado Bracamonte, Ivo Marcelo** <br> **TB1:** Me encargué del sistema de etiquetado, mock-ups y diseño visual de la landing page. Aporté prototipos para guiar el desarrollo del frontend. <br> **TP:** Implementé y documenté vistas funcionales del frontend en mi carpeta de trabajo. Mostré visualmente los avances en el Sprint Review y elaboré evidencia gráfica con capturas y video del sistema. | **TB1:** Comunicó de forma visual ideas complejas que facilitaron la implementación. <br> **TP:** Destacó por su capacidad de comunicar avances visuales y funcionales a través de documentación multimedia clara y directa. |
| Comunica oralmente con efectividad a diferentes rangos de audiencia. | **Aliaga Aguirre, Ethan Matías** <br> **TB1:** Contribuí al diseño orientado a objetos e implementación técnica de la landing page. Coordiné con el equipo para asegurar calidad estructural del sistema. <br> **TP:** Participé en el desarrollo técnico del módulo correspondiente a mi bounded context. Aporté evidencia de implementación y colaboré en tareas de integración del frontend. | **TB1:** Facilitó el desarrollo estructurado gracias a una comunicación técnica constante. <br> **TP:** Mantuvo claridad técnica en sus contribuciones, alineando la implementación con el diseño y funcionalidad esperada. |
| Comunica oralmente con efectividad a diferentes rangos de audiencia. | **Contreras Lopez, Leandro Saúl** <br> **TB1:** Configuré el entorno de desarrollo común y gestioné el Product Backlog. También trabajé en las metaetiquetas SEO. <br> **TP:** Reestructuré la carpeta de trabajo para mi bounded context. Contribuí en la documentación del Sprint y la implementación de funcionalidades específicas. Organicé evidencias de implementación y validación de servicios. | **TB1:** Su aporte permitió un entorno de desarrollo claro y compartido. <br> **TP:** Logró comunicar con claridad los objetivos de su módulo, facilitando el seguimiento técnico y organizativo del equipo.



<hr>

## Capítulo I: Introducción 

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


<hr> 

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

### 1.1. Análisis competitivo

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
- **Link:** [Ver entrevista](https://www.youtube.com/watch?v=nTeFYzyawYk)  
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
- **Link:** [Ver entrevista](https://www.youtube.com/watch?v=_z8UNTi_cmA)  
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
- **Link:** [Ver entrevista](https://www.youtube.com/watch?v=m8Q_n7i_xEk)  
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
- **Link:** [Ver entrevista](https://youtu.be/I_ISRdC6mHI)  
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
## Capítulo III: Requirements Specification

<hr>

<hr>

### 3.1. To-Be Scenario Mapping

<img src="https://i.imgur.com/fxj0F1w.jpeg"/>

<img src="https://i.imgur.com/vfkqiDy.jpeg"/>

<img src="https://i.imgur.com/X2xKKWG.jpeg"/>

<hr>

<hr>

### 3.2. User Stories

<hr>

Epicas

| ID | Título | Descripción de la Épica |
| :---- | :---- | :---- |
| EP-01 | Gestión de Acceso de Usuarios | Como usuario, quiero un sistema completo de acceso para registrarse, autenticarme y gestionar mistar credenciales de manera segura según su perfil específico |
| EP-02 | Experiencia de Usuario en Procesos de Autenticación | Como usuario, quiero tener una experiencia clara y asistida durante los procesos de registro y autenticación para completarlos con éxito y sin frustraciones. |
| EP-03 | Personalización y Seguridad de la Cuenta | Como usuario, quiero tener control sobre la seguridad y la configuración de mi cuenta para proteger mi información y adaptarla a mis necesidades específicas. |
| EP-04 | Contratación y Seguimiento de Servicios Eléctricos | Como propietario o PYME, quiero contratar servicios paso a paso y darles seguimiento, para resolver mis problemas eléctricos de manera estructurada y segura. |
| EP-05 | Programación y Gestión de Servicios Preventivos | Como propietario o PYME, quiero programar mantenimientos preventivos y revisar mi historial de servicios, para garantizar un sistema eléctrico seguro y funcional. |
| EP-06 | Gestión Operativa de los Proveedores | Como proveedor, quiero administrar mi agenda, servicios y pagos, para tener control sobre mis operaciones y oportunidades de negocio. |
| EP-07 | Funcionalidades de Confianza y Transparencia en el Ecosistema | Como usuario, quiero interactuar con un entorno confiable, transparente y claro, para sentirme seguro al contratar servicios, comparar opciones y tomar decisiones informadas. |
| EP-08 | Navegación en la Landing Page | Como visitante , quiero navegar en una Landing page que me brinde información necesaria para tomar una decisión informada. |

# 

| Epic/StoryID | Título | Descripción | Criterios de aceptación | Relacionado con epica |
| :---- | :---- | :---- | :---- | :---- |
| US-01 | Visualización de Características y Beneficios | Como visitante de la landing page, Quiero ver claramente las características y beneficios de la plataforma, Para entender cómo puede ayudarme y decidir si registrarme. | **Escenario #1: Visualización de beneficios para propietarios**<br>Given que un propietario potencial se encuentra visitando la landing page<br>When se desplaza hasta la sección "Resolvemos problemas reales"<br>Then debe ver claramente los beneficios específicos para propietarios<br>And cada beneficio debe tener un ícono representativo<br>And una descripción breve y clara<br>And los beneficios deben ser visibles sin necesidad de hacer clic en ningún elemento.<br><br>**Escenario #2: Visualización de características principales**<br>Given que un visitante se encuentra en la landing page<br>When se desplaza hasta la sección "Características principales"<br>Then debe ver al menos 6 características destacadas de la plataforma<br>And cada característica debe tener un título descriptivo<br>And una explicación concisa de su funcionamiento<br>And un ícono visual que represente la característica.<br><br>**Escenario #3: Comparativa para proveedores y clientes**<br>Given que un visitante indeciso se encuentra en la landing page<br>When navega a la sección "¿Qué ofrecemos?"<br>Then debe ver una clara comparativa de beneficios por tipo de usuario<br>And puede identificar fácilmente qué le ofrece la plataforma según su rol<br>And visualiza casos de uso relevantes para su situación. | EP-08 |
| US-02 | Visualización de Testimonios | Como visitante indeciso sobre la plataforma, Quiero ver testimonios de usuarios reales, Para aumentar mi confianza en el servicio antes de registrarse. | **Escenario #1: Visualización de testimonios diversos**<br>Given que el visitante se encuentra en la landing page<br>When se desplaza hasta la sección "Lo que dicen nuestros usuarios"<br>Then debe ver al menos 3 testimonios diferentes<br>And cada testimonio debe mostrar: Nombre de usuario, tipo de usuario, calificación y comentario<br>And observa testimonios tanto de propietarios como de proveedores<br>And las calificaciones deben ser visualmente claras (estrellas).<br><br>**Escenario #2: Navegación entre testimonios en dispositivos móviles**<br>Given que el visitante se encuentra usando un dispositivo móvil<br>When accede a la sección de testimonios<br>Then puede deslizar horizontalmente para ver todos los testimonios<br>And ve indicadores de paginación que muestran cuántos testimonios hay disponibles<br>And en qué testimonio se encuentra actualmente.<br><br>**Escenario #3: Visualización de casos de éxito destacados**<br>Given que el visitante está explorando la landing page<br>When navega hasta la sección "Casos de éxito"<br>Then puede ver ejemplos concretos de problemas resueltos a través de la plataforma<br>And cada caso incluye el problema inicial, la solución y los resultados obtenidos<br>And puede identificarse con situaciones similares a las que podría enfrentar. | EP-08 |
| US-03 | Adaptabilidad a Diferentes Dispositivos | Como visitante que accede desde diferentes dispositivos, Quiero que la landing page se adapte correctamente a mi pantalla, Para tener una experiencia óptima independientemente del dispositivo que use. | **Escenario #1: Visualización en dispositivo móvil**<br>Given que un visitante se encuentra usando un smartphone<br>When accede a la landing page<br>Then todos los elementos deben reorganizarse para adaptarse a la pantalla pequeña<br>And no debe haber desplazamiento horizontal<br>And todos los textos deben ser legibles sin necesidad de zoom<br>And los botones deben tener un tamaño adecuado para interacción táctil.<br><br>**Escenario #2: Visualización en tablet**<br>Given que un visitante se encuentra usando una tablet<br>When accede a la landing page<br>Then el diseño debe adaptarse al tamaño intermedio de pantalla<br>And aprovechar el espacio adicional comparado con un móvil<br>And mantener una experiencia de navegación fluida y atractiva. | EP-08 |
| US-04 | Visualización de una Sección Principal | Como visitante de la página, quiero ver una sección principal atractiva que me presente un breve resumen de la idea del producto, para entender rápidamente de qué se trata el servicio. | **Escenario #1: Visualización del hero banner en desktop**<br>Given que un visitante accede a la landing page desde un ordenador<br>When la página termina de cargar<br>Then debe ver una sección principal (hero) en la parte superior<br>And esta sección debe contener un título llamativo que explique el propósito de la plataforma<br>And debe incluir un subtítulo que resuma el valor principal del servicio<br>And debe mostrar al menos una imagen o ilustración relevante al servicio<br>And debe incluir un botón de llamada a la acción principal.<br><br>**Escenario #2: Visualización del hero banner en móvil**<br>Given que un visitante accede a la landing page desde un dispositivo móvil<br>When la página termina de cargar<br>Then debe ver una sección principal adaptada al tamaño de la pantalla<br>And todos los elementos deben ser visibles sin necesidad de desplazamiento horizontal<br>And la imagen debe redimensionarse correctamente para no ocupar demasiado espacio vertical<br>And el botón de llamada a la acción debe ser claramente visible. | EP-08 |
| US-05 | Navegación sin errores | Como visitante, quiero navegar por la página web sin encontrar errores, para tener una experiencia fluida que me anime a registrarme. | **Escenario #1: Carga completa de la página**<br>Given que un visitante accede a la landing page<br>When la página se carga completamente<br>Then todos los elementos visuales deben mostrarse correctamente<br>And no deben aparecer errores en la consola del navegador<br>And no deben existir enlaces rotos o imágenes que no se cargan.<br><br>**Escenario #2: Navegación entre secciones**<br>Given que un visitante utiliza los enlaces de navegación<br>When hace clic en un enlace para ir a una sección específica<br>Then la página debe desplazarse suavemente hasta esa sección<br>And el desplazamiento debe completarse en menos de 1 segundo<br>And la sección de destino debe quedar correctamente posicionada en la ventana. | EP-08 |
| US-06 | Navegación mediante Encabezado | Como usuario, quiero un menú de navegación claro en el encabezado, para acceder fácilmente a las diferentes secciones de la página. | **Escenario #1: Visualización del encabezado en desktop**<br>Given que un visitante accede a la landing page<br>When observa la parte superior de la página<br>Then debe ver un encabezado con el logo de la empresa<br>And debe contener enlaces de navegación a las principales secciones de la página<br>And estos enlaces deben tener nombres descriptivos y claros<br>And el encabezado debe permanecer visible o fijo mientras se desplaza por la página.<br><br>**Escenario #2: Menú hamburguesa en dispositivos móviles**<br>Given que un visitante accede desde un dispositivo móvil<br>When la página se carga<br>Then debe ver un menú hamburguesa en lugar del menú de navegación completo<br>And al hacer clic en el icono de hamburguesa, se debe desplegar el menú<br>And todos los enlaces deben ser accesibles y funcionales dentro del menú desplegable<br>And el menú debe cerrarse al hacer clic fuera de él o en un botón de cierre. | EP-08 |
| US-07 | Visualización del Pie de página | Como visitante, quiero ver un pie de página organizado con accesos directos e información de contacto, para encontrar información adicional rápidamente. | **Escenario #1: Contenido completo del pie de página**<br>Given que un visitante se desplaza hasta el final de la landing page<br>When llega al pie de página<br>Then debe ver una sección organizada con los siguientes elementos:<br>And enlaces a páginas importantes (Términos y condiciones, Política de privacidad)<br>And información de contacto (correo electrónico, teléfono)<br>And enlaces a redes sociales con iconos reconocibles<br>And un formulario breve de suscripción o contacto (opcional)<br>And el copyright y año actual.<br><br>**Escenario #2: Funcionamiento de los enlaces**<br>Given que un visitante está en el pie de página<br>When hace clic en cualquiera de los enlaces<br>Then debe ser dirigido a la página correspondiente<br>And los enlaces a redes sociales deben abrirse en una nueva pestaña<br>And no debe haber enlaces rotos o no funcionales. | EP-08 |
| US-08 | Ver Información del Startup | Como potencial cliente, quiero conocer información sobre la empresa desarrolladora, para evaluar su credibilidad y confiabilidad. | **Escenario #1: Sección "Sobre nosotros"**<br>Given que un visitante navega por la landing page<br>When se desplaza hasta la sección "Sobre nosotros" o equivalente<br>Then debe encontrar información clara sobre la empresa<br>And debe mostrar el equipo fundador o principales responsables<br>And la información debe transmitir profesionalidad y generar confianza.<br><br>**Escenario #2: Acceso directo a información corporativa**<br>Given que un visitante está interesado en conocer más sobre la empresa<br>When busca en el menú de navegación o en el pie de página<br>Then debe encontrar fácilmente un enlace directo a la sección de información corporativa<br>And al hacer clic, debe llevarlo directamente a esa sección. | EP-08 |
| US-09 | Conocer la Misión de la Startup | Como visitante interesado, quiero conocer la misión de la empresa, para entender sus valores y propósito. | **Escenario #1: Visibilidad de la declaración de misión**<br>Given que un visitante navega por la sección "Sobre nosotros"<br>When busca información sobre los propósitos de la empresa<br>Then debe encontrar claramente destacada la declaración de misión<br>And esta debe estar redactada de forma concisa y comprensible<br>And debe comunicar efectivamente el propósito principal de la startup<br>And debe estar visualmente destacada del resto del contenido.<br><br>**Escenario #2: Alineación con los valores**<br>Given que un visitante lee la misión de la empresa<br>When continúa explorando la sección<br>Then debe encontrar información sobre los valores corporativos que sustentan la misión<br>And estos valores deben estar claramente conectados con la declaración de misión<br>And deben presentarse de manera que refuercen la credibilidad de la empresa. | EP-08 |
| US-10 | Conocer la Visión de la Startup | Como visitante interesado, quiero conocer la visión de la empresa, para entender sus objetivos a largo plazo y su proyección de futuro. | **Escenario #1: Visibilidad de la declaración de visión**<br>Given que un visitante navega por la sección "Sobre nosotros"<br>When busca información sobre las metas futuras de la empresa<br>Then debe encontrar claramente destacada la declaración de visión<br>And esta debe estar redactada de forma inspiradora y orientada al futuro<br>And debe comunicar efectivamente hacia dónde se dirige la startup a largo plazo<br>And debe estar visualmente diferenciada de la misión.<br><br>**Escenario #2: Objetivos estratégicos**<br>Given que un visitante lee la visión de la empresa<br>When continúa explorando la sección<br>Then debe encontrar información sobre algunos objetivos estratégicos o metas<br>And estos deben mostrar cómo la empresa planea hacer realidad su visión<br>And deben presentarse de manera estructurada y comprensible. | EP-08 |
| US-11 | Conocer más a fondo los servicios que ofrecen | Como visitante interaso, quiero conocer de manera más espeficia los servicios que ofrecen por medio de capturas de pantallas, para comprender su solución y decidir si optar por ella | Escenario #1: Visibilidad de los servicios que ofrecen Given que un visitante se encuentra en la landing page When se encuentra en una sección relacionada con la información de la start up Then debe encontrar información sobre las soluciones presentadas | EP-08 |
| US-12 | Registro de cuentas como Dueño de Hogar | Como dueño de hogar, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mi vivienda | Escenario #1: Acceso a la sección de registro<br>- El usuario no se encuentra registrado<br>- El usuario navega a la aplicación<br>- El usuario accede a la opción de registro<br>- El usuario es dirigido a la sección de registro<br>- El usuario puede ver el formulario de registro completo<br>- El formulario contiene todos los campos necesarios para crear una cuenta<br><br>Escenario #2: Selección de tipo de usuario<br>- El usuario no registrado accede a la página de registro<br>- El usuario visualiza las opciones de tipo de usuario<br>- El usuario selecciona "Dueño de Hogar"<br>- El sistema muestra el formulario específico para dueños de hogares<br>- Los campos relevantes para este tipo de usuario son presentados<br><br>Escenario #3: Aceptación de términos y condiciones<br>- El usuario aún no está registrado<br>- El usuario accede a la página de registro<br>- El usuario debe ver una casilla de verificación para aceptar los términos y condiciones<br>- El usuario debe ver un enlace a los términos y condiciones<br>- El usuario no puede completar el registro sin marcar esta casilla | EP-01 |
| US-13 | Registro de cuentas como Dueño de Empresa | Como dueño o representante de empresa, quiero registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mis instalaciones comerciales | Escenario #1: Acceso a la sección de registro<br>- El usuario no se encuentra registrado<br>- El usuario navega a la aplicación<br>- El usuario accede a la opción de registro<br>- El usuario es dirigido a la sección de registro<br>- El usuario puede ver el formulario de registro completo<br>- El formulario contiene todos los campos necesarios para crear una cuenta<br><br>Escenario #2: Selección de tipo de usuario<br>- El usuario no registrado accede a la página de registro<br>- El usuario visualiza las opciones de tipo de usuario<br>- El usuario selecciona "Dueño de Empresa"<br>- El sistema muestra el formulario específico para dueños de empresas<br>- Los campos relevantes para este tipo de usuario son presentados<br><br>Escenario #3: Registro exitoso con datos válidos<br>- El usuario no registrado accede a la página de registro<br>- El usuario selecciona "Dueño de Empresa"<br>- El usuario completa todos los campos obligatorios con información válida<br>- El usuario solicita el registro<br>- El sistema crea cuenta de usuario<br>- El usuario es redirigido a una página de confirmación | EP-01 |
| US-14 | Registro de cuentas para Proveedores | Como proveedor de componentes eléctricos y/o servicios, quiero registrarme para tener una cuenta en la aplicación, para ofrecer mis productos y servicios a los usuarios | Escenario #1: Acceso a la sección de registro<br>- El usuario no se encuentra registrado<br>- El usuario navega a la aplicación<br>- El usuario accede a la opción de registro<br>- El usuario es dirigido a la sección de registro<br>- El usuario puede ver el formulario de registro completo<br>- El formulario contiene todos los campos necesarios para crear una cuenta<br><br>Escenario #2: Selección de tipo de usuario<br>- El usuario no registrado accede a la página de registro<br>- El usuario visualiza las opciones de tipo de usuario<br>- El usuario selecciona "Proveedor"<br>- El sistema muestra el formulario específico para proveedores<br>- Los campos relevantes para este tipo de usuario son presentados<br><br>Escenario #3: Registro exitoso con datos válidos<br>- El usuario no registrado accede a la página de registro<br>- El usuario selecciona "Proveedor"<br>- El usuario completa todos los campos obligatorios con información válida<br>- El usuario solicita el registro<br>- El sistema crea cuenta de usuario<br>- El usuario es redirigido a una página de confirmación<br>- El sistema informa que la cuenta está pendiente de verificación administrativa | EP-01 |
| US-15 | Validación de datos de registro | Como usuario, quiero recibir retroalimentación inmediata sobre la validez de los datos que ingresó durante el registro para corregir errores rápidamente. | Escenario #1: Validación de formato de correo electrónico<br>- El usuario se encuentra en el formulario de registro<br>- El usuario ingresa un texto en el campo de correo electrónico<br>- El texto no tiene formato de correo electrónico válido<br>- El sistema muestra un mensaje de error indicando "Por favor, ingrese un correo electrónico válido"<br>- El campo se resalta para indicar error<br><br>Escenario #2: Validación de correo electrónico ya registrado<br>- El usuario está en el formulario de registro<br>- El usuario ingresa un correo electrónico que ya está registrado en el sistema<br>- El usuario cambia a otro campo<br>- El sistema muestra un mensaje de error indicando "Este correo electrónico ya está en uso"<br>- El campo se resalta para indicar error<br><br>Escenario #3: Validación de fortaleza de contraseña<br>- El usuario se encuentra en el formulario de registro<br>- El usuario ingresa el texto en el campo de contraseña<br>- El sistema muestra un indicador de fortaleza de contraseña en tiempo real<br>- El sistema proporciona recomendaciones sobre cómo mejorar la seguridad de la contraseña<br>- El usuario no puede completar el registro si la contraseña no cumple con los requisitos mínimos<br><br>Escenario #4: Validación de coincidencia de contraseñas<br>- El usuario se encuentra en el formulario de registro<br>- El usuario ingresa contraseñas diferentes en los campos "Contraseña" y "Confirmar contraseña"<br>- El sistema muestra un mensaje de error indicando "Las contraseñas no coinciden"<br>- Los campos se resaltan para indicar error<br><br>Escenario #5: Validación de campos obligatorios<br>- El usuario se encuentra en el formulario de registro<br>- El usuario intenta enviar el formulario dejando campos obligatorios en blanco<br>- El sistema muestra mensajes de error junto a cada campo obligatorio vacío<br>- El usuario no puede completar el registro | EP-02 |
| US-16 | Verificación de cuenta por correo electrónico | Como usuario, quiero verificar mi cuenta a través de un enlace enviado por correo electrónico para confirmar mi identidad. | Escenario #1: Envío de correo de verificación<br>- El usuario se ha registrado exitosamente<br>- El usuario completó el proceso de registro<br>- El sistema envía un correo electrónico de verificación<br>- El correo contiene el nombre del usuario<br>- El correo contiene un enlace único de verificación<br>- El correo contiene instrucciones claras sobre cómo verificar la cuenta<br><br>Escenario #2: Verificación exitosa de cuenta<br>- El usuario ha recibido un correo electrónico de verificación<br>- El usuario accede al enlace de verificación<br>- La cuenta es verificada en el sistema<br>- El usuario es redirigido a una página de confirmación<br>- El sistema muestra un mensaje indicando que la cuenta ha sido verificada exitosamente<br>- El usuario puede iniciar sesión con sus credenciales<br><br>Escenario #3: Intento de inicio de sesión sin verificación<br>- El usuario se ha registrado pero no ha verificado su cuenta<br>- El usuario intenta iniciar sesión con sus credenciales<br>- El sistema muestra un mensaje indicando que debe verificar su cuenta<br>- El sistema muestra una opción para reenviar el correo de verificación<br><br>Escenario #4: Reenvío de correo de verificación<br>- El usuario se ha registrado pero no ha recibido o ha perdido el correo de verificación<br>- El usuario solicita reenviar el correo de verificación<br>- El sistema envía un nuevo correo electrónico de verificación<br>- El enlace anterior queda invalidado<br><br>Escenario #5: Enlace de verificación expirado<br>- El usuario ha recibido un correo electrónico de verificación<br>- El usuario accede al enlace después de que haya expirado (72 horas)<br>- El sistema muestra un mensaje indicando que el enlace ha expirado<br>- El sistema muestra una opción para solicitar un nuevo enlace de verificación | EP-01 |
| US-17 | Mensajes de éxito retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre éxito para entender fácilmente el resultado de mis acciones. | Escenario #1: Mensaje de éxito al completar el registro<br>- El usuario ha completado correctamente el formulario de registro<br>- El sistema procesa la solicitud con éxito<br>- El sistema muestra un mensaje de confirmación<br>- El mensaje es claramente visible en la parte superior de la página<br>- El mensaje tiene un color distintivo de éxito (verde)<br><br>Escenario #2: Mensaje informativo sobre la verificación por correo<br>- El usuario ha completado exitosamente el registro<br>- El usuario es redirigido a la página de confirmación<br>- El sistema muestra información clara sobre el proceso de verificación<br>- La información es presentada en un formato fácil de leer | EP-02 |
| US-18 | Mensajes de error retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | Escenario #1: Mensaje de error por problemas del sistema<br>- El usuario ha completado el formulario de registro<br>- Ocurre un error del sistema durante el procesamiento<br>- El sistema muestra un mensaje de error<br>- El mensaje es claramente visible en la parte superior de la página<br>- El mensaje tiene un color distintivo de error (rojo)<br>- Los datos ingresados permanecen en el formulario | EP-02 |
| US-19 | Inicio de sesión de usuarios | Como usuario registrado, quiero iniciar sesión en la aplicación con mis credenciales para acceder a mi cuenta y utilizar las funcionalidades de la plataforma. | Escenario #01: Acceso a la pantalla de inicio de sesión<br>- El usuario se encuentra registrado<br>- El usuario navega por la aplicación<br>- El usuario accede a la opción de inicio de sesión<br>- El usuario es dirigido a la pantalla de inicio de sesión<br>- El usuario puede ver el formulario con campos para ingresar credenciales<br><br>Escenario #02: Inicio de sesión exitoso con credenciales válidas<br>- El usuario se encuentra en la pantalla de inicio de sesión<br>- El usuario ingresa su correo electrónico registrado<br>- El usuario ingresa su contraseña correcta<br>- El usuario solicita iniciar sesión<br>- El sistema valida las credenciales<br>- El usuario es redirigido al dashboard correspondiente a su tipo de usuario<br>- El usuario puede ver su información personal y opciones disponibles<br><br>Escenario #03: Intento de inicio de sesión con credenciales inválidas<br>- El usuario se encuentra en la pantalla de inicio de sesión<br>- El usuario ingresa un correo electrónico y/o contraseña incorrectos<br>- El usuario solicita iniciar sesión<br>- El sistema muestra un mensaje de error indicando "Credenciales inválidas"<br>- El usuario permanece en la pantalla de inicio de sesión<br>- Los campos del formulario se mantienen con la información ingresada excepto la contraseña<br><br>Escenario #04: Intento de inicio de sesión con cuenta no verificada<br>- El usuario está registrado pero no ha verificado su cuenta<br>- El usuario ingresa sus credenciales correctas<br>- El usuario solicita iniciar sesión<br>- El sistema muestra un mensaje indicando que la cuenta requiere verificación<br>- El sistema ofrece la opción de reenviar el correo de verificación<br>- El usuario no puede acceder a las funcionalidades de la aplicación<br><br>Escenario #05: Opción "Recordar usuario" en inicio de sesión<br>- El usuario se encuentra en la pantalla de inicio de sesión<br>- El usuario ha ingresado sus credenciales<br>- El usuario marca la opción "Recordar usuario"<br>- El usuario completa el inicio de sesión exitosamente<br>- En su próxima visita a la aplicación, su correo electrónico aparece pre-completado en el formulario de inicio de sesión<br><br>Escenario #06: Acceso a la recuperación de contraseña<br>- El usuario se encuentra en la pantalla de inicio de sesión<br>- El usuario no recuerda su contraseña<br>- El usuario puede ver una opción de recuperación de contraseña<br>- Al seleccionar esta opción, el usuario es dirigido a la funcionalidad de recuperación de contraseña | EP-01 |
| US-20 | Recuperación de Contraseña | Como usuario registrado, quiero recuperar mi contraseña en caso de olvidarla, para volver a acceder a mi cuenta de manera segura. | Escenario #01: Acceso a la funcionalidad de recuperación de contraseña<br>- El usuario se encuentra registrado<br>- El usuario accede a la pantalla de inicio de sesión<br>- El usuario selecciona la opción de recuperación de contraseña<br>- El usuario es dirigido a la página de recuperación de contraseña<br>- El usuario puede ver un formulario para solicitar la recuperación<br><br>Escenario #02: Solicitud de recuperación con correo válido<br>- El usuario se encuentra en la página de recuperación de contraseña<br>- El usuario ingresa el correo electrónico asociado a su cuenta<br>- El usuario solicita el envío de instrucciones<br>- El sistema envía un correo con instrucciones de recuperación<br>- El sistema muestra un mensaje de confirmación indicando que revise su correo<br>- El mensaje incluye instrucciones sobre qué hacer si no recibe el correo<br><br>Escenario #03: Correo de recuperación con enlace de restablecimiento<br>- El usuario se encuentra en la página de recuperación de contraseña<br>- El usuario recibe el correo electrónico de recuperación<br>- El correo contiene un enlace único y seguro para restablecer su contraseña<br>- El correo incluye información sobre tiempo de expiración del enlace<br>- El enlace dirige al usuario a una página para establecer una nueva contraseña<br><br>Escenario #04: Finalización exitosa del restablecimiento de contraseña<br>- El usuario se encuentra en la página de restablecimiento<br>- El usuario ingresa y confirma una nueva contraseña válida<br>- El usuario solicita guardar la nueva contraseña<br>- La contraseña es actualizada en el sistema<br>- El usuario recibe un mensaje de confirmación del cambio exitoso<br>- El usuario es dirigido a la página de inicio de sesión para acceder con su nueva contraseña<br><br>Escenario #05: Intento de restablecimiento con enlace expirado<br>- El usuario ha recibido un correo de recuperación<br>- El usuario accede al enlace después de que haya expirado (24 horas)<br>- El sistema muestra un mensaje indicando que el enlace ha expirado<br>- El sistema ofrece la opción de solicitar un nuevo enlace de recuperación<br>- El usuario no puede restablecer su contraseña con este enlace<br><br>Escenario #06: Nueva contraseña que no cumple requisitos de seguridad<br>- El usuario se encuentra en la página de restablecimiento<br>- El usuario ingresa una nueva contraseña que no cumple los requisitos mínimos de seguridad<br>- El usuario intenta guardarla<br>- El sistema muestra mensajes de error indicando los requisitos de la contraseña<br>- El sistema no actualiza la contraseña hasta que cumpla con los requisitos | EP-03 |
| US-21 | Cierre de Sesión | Como usuario autenticado, quiero cerrar mi sesión de forma segura para proteger mi cuenta When termine de usar la aplicación. | Escenario #1: Cierre de sesión desde cualquier pantalla<br>- El usuario está autenticado en la aplicación<br>- El usuario selecciona la opción de cierre de sesión<br>- La sesión es terminada de forma segura<br>- El usuario es redirigido a la página de inicio de sesión<br>- El sistema muestra un mensaje confirmando que ha cerrado sesión exitosamente<br><br>Escenario #2: Intento de acceso a páginas protegidas después del cierre de sesión<br>- El usuario ha cerrado su sesión<br>- El usuario intenta acceder directamente a una URL que requiere autenticación<br>- El sistema redirige al usuario a la página de inicio de sesión<br>- El sistema muestra un mensaje indicando que debe iniciar sesión para acceder<br><br>Escenario #3: Cierre de sesión por inactividad<br>- El usuario se encuentra autenticado<br>- El usuario permanece inactivo en la aplicación por un periodo prolongado (80 días)<br>- La sesión es cerrada automáticamente por seguridad<br>- Al intentar realizar una acción, el usuario es redirigido a la página de inicio de sesión<br>- El sistema muestra un mensaje indicando que la sesión expiró por inactividad | EP-03 |
| US-22 | Visualización de Perfil de Propietario | Como propietario registrado, quiero visualizar mi perfil, para revisar mi información personal y preferencias almacenadas en el sistema | Escenario: Acceso a la sección de perfil Given que soy un usuario autenticado When hago clic en la opción "Mi Perfil" o mi nombre/avatar en la barra de navegación Then soy dirigido a la página de visualización de mi perfil And puedo ver toda mi información personal actual And puedo ver mis preferencias configuradasEscenario: Visualización de información personal para propietario de hogar Given que soy un propietario de hogar autenticado When accedo a mi perfil Then puedo ver la siguiente información Escenario: Visualización de información personal para propietario de empresa Given que soy un propietario de empresa autenticado When accedo a mi perfil Then puedo ver la siguiente información Escenario: Visualización de historial de servicios solicitados Given que soy un propietario autenticado (hogar o empresa) When accedo a mi perfil Then puedo ver una sección de "Historial de Servicios" And puedo ver una lista de los servicios que he solicitado And para cada servicio puedo ver fecha, tipo de servicio, proveedor y estado | EP-03 |
| US-23 | Edición de Perfil de Propietario | Como propietario registrado, quiero editar mi información personal y preferencias, para mantener mi perfil actualizado y tener más control sobre este. | Escenario: Acceso a la opción de edición de perfil Given que el usuario esta visualizando mi perfil When hace clic en el botón "Editar Perfil" Then se habilitan los campos editables de su perfil And puede modificar su información personal Escenario: Edición exitosa de información básica Given que el usuario está en modo de edición de perfil When modificar mi información personal (teléfono, dirección, etc.) And hace clic en "Guardar Cambios" Then sus cambios se almacenan en el sistema And observa un mensaje de confirmación And visualiza su perfil actualizado Escenario: Edición de información no permitida Given que el usuario está en modo de edición de perfil When intenta modificar información no editable (correo electrónico registrado, tipo de usuario) Then estos campos aparecen deshabilitados o como solo lectura And observa una nota explicando que esta información no puede ser modificada directamente Escenario: Cambio de contraseña desde el perfil Given que el usuario se encuentra en modo de edición de perfil When seleccione la opción "Cambiar Contraseña" Then se le solicita ingresar su contraseña actual And se le solicita ingresar y confirmar la nueva contraseña And al completar correctamente, su contraseña es actualizada Escenario: Actualización de preferencias de notificaciones Given que el usuario está en modo de edición de perfil When accede a la sección "Preferencias de Notificaciones" Then puede configurar qué notificaciones desea recibir And puede elegir los canales de comunicación (correo, SMS, push) And sus preferencias se guardan al hacer clic en "Guardar" Escenario: Carga de nueva foto de perfil/logo Given que el usuario está en modo de edición de perfil When hace clic en la opción para cambiar mi foto de perfil o logo Then puede seleccionar una nueva imagen desde su dispositivo And puede recortar/ajustar la imagen And al confirmar, la nueva imagen se establece como sus foto de perfil/logo | EP-03 |
| US-24 | Visualización de Perfil de Proveedor | Como proveedor registrado Quiero visualizar mi perfil profesional Para revisar cómo se presenta mi información y servicios a los clientes potenciales | Escenario: Acceso a la visualización del perfil Given que el proveedor se encuentra autenticado When hace clic en la opción "Mi Perfil" o su nombre/avatar en la barra de navegación Then es dirigido a la página de visualización de su perfil profesional And puede ver toda su información como aparece para los clientes Escenario: Visualización de información profesional Given que el proveedor se encuentra autenticado When accede a mi perfil Then puede ver la siguiente información Escenario: Visualización de certificaciones Given que el proveedor se encuentra autenticado When accede a su perfil Then puede ver una sección de "Certificaciones" And puede ver todas las certificaciones que ha subido And puede ver el estado de verificación de cada certificación Escenario: Visualización de reseñas recibidas Given que el proveedor se encuentra autenticado When accede a mi perfil Then puede ver una sección de "Reseñas y Calificaciones" And puede ver todas las reseñas dejadas por clientes anteriores And puede ver la calificación individual y promedio | EP-03 |
| US-25 | Edición de Perfil de Proveedor | Como proveedor registrado, quiero editar mi información profesional, certificaciones y servicios ofrecidos para mantener mi perfil actualizado y atractivo para los clientes. | Escenario: Acceso a la edición del perfil Given que el usuario se encuentra visualizando su perfil de proveedor When hace clic en el botón "Editar Perfil" Then se habilitan las secciones editables de su perfil profesional And puede modificar su información Escenario: Actualización de información básica Given que el usuario se encuentra en modo de edición de perfil When modifica su información básica (descripción, contacto, etc.) And hace clic en "Guardar Cambios" Then sus cambios se almacenan en el sistema And observa un mensaje de confirmación And visualiza su perfil actualizado Escenario: Gestión de servicios ofrecidos Given que el usuario se encuentra en modo de edición de perfil When accede a la sección "Servicios Ofrecidos" Then puede añadir nuevos servicios de una lista predefinida And puede eliminar servicios que ya no ofrece And puede actualizar descripciones o precios de referencia Escenario: Carga de nuevas certificaciones Given que el usuario se encuentra en modo de edición de perfil When accede a la sección "Certificaciones" And hace clic en "Añadir Certificación" Then puede subir un archivo de certificación And puede agregar detalles como institución, fecha y descripción And la certificación queda marcada como "Pendiente de verificación" Escenario: Actualización del portafolio de trabajos Given que el usuario se encuentra en modo de edición de perfil When accede a la sección "Portafolio" Then puede añadir nuevas imágenes o ejemplos de trabajos realizados | EP-03 |
| US-26 | Mensajes de éxito de actualización de perfil | Como usuario, quiero recibir mensajes claros y accesibles al completar la actualización de perfil sobre éxito para entender fácilmente el resultado de mis acciones. | Escenario #1: Mensaje de éxito al completar el registro Given que el usuario ha completado correctamente el formulario de registro When el sistema procesa mi solicitud con éxito Then observa un mensaje de confirmación que incluye: And el mensaje es claramente visible en la parte superior de la página And el mensaje tiene un color distintivo de éxito (verde) Escenario #3: Mensaje informativo sobre la verificación por correo Given que el usuario ha completado exitosamente el registro When es redirigido a la página de confirmación Then observa información clara sobre: And la información es presentada en un formato fácil de leer | EP-02 |
| US-27 | Mensajes de error de actualización de perfil | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | Escenario #1: Mensaje de error por problemas del sistema Given que el usuario ha completado el formulario de registro When ocurre un error del sistema durante el procesamiento Then observa un mensaje de error que incluye: And el mensaje es claramente visible en la parte superior de la página And el mensaje tiene un color distintivo de error (rojo) And sus datos ingresados permanecen en el formulario | EP-02 |
| US-28 | Entrar a un dashboard Personalizado | Como usuario de la plataforma, quiero acceder a un dashboard personalizado al iniciar sesión, para visualizar de forma inmediata la información relevante según mi rol y actividad reciente. | Escenario #1: Visualización del dashboard para cliente Given que he iniciado sesión como cliente (propietario/PyME) When accedo a la página principal Then veo un resumen de mis servicios activos And veo mis próximos mantenimientos programados And veo notificaciones recientes y recordatorios And veo recomendaciones personalizadas de servicios y guías Escenario #2: Visualización del dashboard para técnico/proveedor Given que he iniciado sesión como proveedor When accedo a la página principal Then veo mi agenda de servicios del día And veo las solicitudes pendientes que requieren mi atención And veo un resumen de mis ingresos y estadísticas recientes And veo mis calificaciones recientes y alertas importantes | EP-03 |
| US-29 | Gestión de Técnicos Favoritos | Como cliente, quiero marcar y gestionar una lista de técnicos favoritos, para contactarlos fácilmente para futuros servicios y dar preferencia a aquellos con los que he tenido buenas experiencias. | Escenario #1: Añadir técnico a favoritos Given que he recibido un servicio satisfactorio de un técnico When visito su perfil profesional And hago clic en "Añadir a favoritos" Then el técnico se añade a mi lista de favoritos And recibo confirmación de la acción. Escenario #2: Visualización de lista de favoritos Given que he marcado varios técnicos como favoritos When accedo a la sección "Técnicos Favoritos" Then veo un listado de todos mis técnicos favoritos And puedo filtrarlos por especialidad And veo su disponibilidad actual y datos de contacto. Escenario #3: Contratación directa de favoritos Given que estoy en mi lista de técnicos favoritos When selecciono "Contratar servicio" en un técnico específico Then se inicia el wizard de contratación con ese técnico preseleccionado And puedo omitir el paso de selección de técnico And el técnico recibe notificación prioritaria de mi solicitud | EP-07 |
| US-30 | Registrar Consumo Eléctrico Manualmente | Como usuario interesado en el control energético, quiero anotar manualmente mi consumo mensual de electricidad, para llevar un seguimiento y detectar posibles aumentos o ahorros en el tiempo. | **Escenario #1: Registro de consumo mensual**<br>**Given** el usuario ha accedido a la sección de registro de consumo<br>**When** ingresa la lectura del medidor y el período correspondiente<br>**Then** el sistema almacena el registro con fecha y hora<br>**Y** muestra un mensaje de confirmación.<br><br>**Escenario #2: Validación de datos**<br>**Given** el usuario está registrando su consumo<br>**When** ingresa un valor no numérico o negativo<br>**Then** el sistema muestra un mensaje de error<br>**Y** solicita corregir el dato. | EP-06 |
| US-31 | Crear Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder crear un nuevo registro de consumo mensual Para iniciar el seguimiento de mi gasto eléctrico. | **Escenario #1: Registro de lectura inicial**<br>**Given** que el usuario accede al módulo de consumo eléctrico<br>**When** ingresa la lectura del medidor, fecha y período correspondiente<br>**Then** el sistema calcula y almacena el consumo<br>**And** muestra un resumen del registro creado.<br><br>**Escenario #2: Carga de comprobante**<br>**Given** que el usuario está registrando su consumo<br>**When** adjunta una foto o archivo de su factura eléctrica<br>**Then** el sistema asocia este documento al registro<br>**And** permite su visualización posterior. | EP-06 |
| US-32 | Editar Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder modificar registros de consumo existentes Para corregir errores o actualizar información. | **Escenario #1: Modificación de registro existente**<br>**Given** que el usuario visualiza su historial de consumo<br>**When** selecciona un registro específico y modifica los valores<br>**Then** el sistema recalcula el consumo si es necesario<br>**And** actualiza los gráficos comparativos correspondientes.<br><br>**Escenario #2: Validación de cambios**<br>**Given** que el usuario está editando un registro<br>**When** ingresa valores que generan anomalías estadísticas<br>**Then** el sistema muestra una alerta de variación inusual<br>**And** solicita confirmación antes de guardar los cambios. | EP-06 |
| US-33 | Eliminar Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder eliminar registros de consumo incorrectos Para mantener la precisión de mi historial de consumo. | **Escenario #1: Eliminación de registro**<br>**Given** que el usuario visualiza su historial de consumo<br>**When** selecciona un registro y elige la opción "Eliminar"<br>**Then** el sistema solicita confirmación<br>**And** elimina el registro tras la confirmación.<br><br>**Escenario #2: Impacto en estadísticas**<br>**Given** que el usuario elimina un registro de consumo<br>**When** confirma la eliminación<br>**Then** el sistema recalcula automáticamente las estadísticas y promedios<br>**And** actualiza los gráficos y tendencias mostradas al usuario. | EP-06 |
| US-31 | Extracción de datos de consumo | Como usuario, quiero que el sistema extraiga automáticamente los datos relevantes de mis facturas cargadas (kWh consumidos, monto, periodo) para evitar la entrada manual de datos | **Escenario #1: Extracción exitosa**<br>**Given** el usuario ha subido una factura en formato digital<br>**When** el sistema procesa el documento<br>**Then** extrae correctamente el consumo en kWh, el monto y el período<br>**Y** presenta los datos extraídos para confirmación del usuario.<br><br>**Escenario #2: Extracción parcial**<br>**Given** el usuario ha subido una factura<br>**When** el sistema no puede reconocer todos los datos<br>**Then** muestra los campos que pudo extraer<br>**Y** permite al usuario completar manualmente los faltantes. | EP-06 |
| US-32 | Visualización de historial de consumo | Como usuario, quiero visualizar gráficamente mi historial de consumo eléctrico para identificar tendencias y patrones | **Escenario #1: Visualización de gráficos**<br>**Given** el usuario tiene registros de consumo<br>**When** accede a la sección de historial<br>**Then** el sistema muestra gráficos de consumo mensual<br>**Y** permite visualizar tendencias anuales.<br><br>**Escenario #2: Filtrado por período**<br>**Given** el usuario está en la sección de historial<br>**When** selecciona un rango de fechas específico<br>**Then** los gráficos se actualizan mostrando solo los datos de ese período. | EP-06 |
| US-33 | Configuración de alertas de consumo | Como usuario, quiero configurar alertas personalizadas When mi consumo supere ciertos umbrales predefinidos para tomar medidas proactivas | **Escenario #1: Creación de alerta**<br>**Given** el usuario está en la sección de alertas<br>**When** establece un umbral de consumo máximo<br>**Then** el sistema registra la alerta correctamente.<br><br>**Escenario #2: Notificación de alerta**<br>**Given** el usuario tiene una alerta configurada<br>**When** un nuevo registro de consumo supera el umbral establecido<br>**Then** el sistema envía una notificación al usuario. | EP-06 |
| US-34 | Exportación de datos de consumo | Como usuario, quiero exportar mis datos históricos de consumo en formatos comunes (CSV, Excel) para análisis externos | **Escenario #1: Exportación completa**<br>**Given** el usuario está en la sección de historial<br>**When** solicita exportar todos sus datos<br>**Then** el sistema genera un archivo en el formato seleccionado<br>**Y** permite su descarga.<br><br>**Escenario #2: Exportación parcial**<br>**Given** el usuario ha aplicado filtros a su historial<br>**When** solicita exportar los datos<br>**Then** el sistema solo incluye los registros filtrados en el archivo generado. | EP-06 |
| US-35 | Repositorio de facturas | Como usuario, quiero tener un repositorio organizado de todas mis facturas eléctricas para acceder fácilmente a ellas cuando las necesite | **Escenario #1: Almacenamiento de facturas**<br>**Given** el usuario quiere guardar una factura<br>**When** sube el documento al sistema<br>**Then** la factura se almacena correctamente<br>**Y** aparece en su repositorio personal.<br><br>**Escenario #2: Búsqueda de facturas**<br>**Given** el usuario tiene varias facturas almacenadas<br>**When** utiliza los filtros de búsqueda por fecha o monto<br>**Then** el sistema muestra solo las facturas que cumplen con los criterios especificados. | EP-06 |
| US-36 | Verificación de facturas | Como usuario, quiero verificar si el cálculo de mi factura es correcto según las tarifas vigentes para detectar posibles errores de facturación | **Escenario #1: Verificación exitosa**<br>**Given** el usuario ha subido una factura<br>**When** solicita la verificación de cálculos<br>**Then** el sistema recalcula el monto según las tarifas vigentes<br>**Y** muestra una comparación con el monto facturado.<br><br>**Escenario #2: Detección de discrepancia**<br>**Given** existe una diferencia entre el cálculo del sistema y el monto facturado<br>**When** la diferencia supera un porcentaje significativo<br>**Then** el sistema resalta la discrepancia<br>**Y** ofrece un informe detallado de la verificación. | EP-06 |
| US-37 | Sistema de Recomendaciones Personalizadas | Como cliente, quiero recibir recomendaciones personalizadas de servicios y productos basados en mi historial y necesidades, para descubrir soluciones relevantes que puedan mejorar mi experiencia. | **Escenario #1: Visualización de recomendaciones**<br>**Given** el usuario ha iniciado sesión en su cuenta<br>**When** accede a la sección de recomendaciones<br>**Then** visualiza sugerencias de servicios basados en sus contrataciones previas<br>**Y** visualiza productos relacionados con sus instalaciones.<br><br>**Escenario #2: Ajuste de preferencias**<br>**Given** el usuario está en la sección de recomendaciones<br>**When** selecciona configurar preferencias<br>**Then** puede indicar qué tipos de recomendaciones desea recibir<br>**Y** puede establecer un presupuesto máximo para recomendaciones<br>**Y** sus preferencias se aplican a futuras sugerencias. | EP-07 |
| US-38 | Búsqueda por Ubicación y Tipo de Servicio | Como usuario, quiero buscar servicios filtrando por ubicación y tipo de servicio, para encontrar rápidamente los que se ajustan a mis necesidades específicas. | **Escenario #1: Búsqueda combinada**<br>**Given** el usuario está en la sección de búsqueda<br>**When** ingresa una ubicación y selecciona un tipo de servicio<br>**Then** el sistema muestra resultados que cumplen ambos criterios.<br><br>**Escenario #2: Sin resultados**<br>**Given** el usuario ha realizado una búsqueda<br>**When** no existen servicios que cumplan los criterios especificados<br>**Then** el sistema muestra un mensaje informativo<br>**Y** sugiere criterios alternativos. | EP-04 |
| US-39 | Búsqueda Geolocalizada | Como usuario, quiero buscar servicios cerca de mi ubicación actual, para encontrar opciones convenientes sin necesidad de introducir manualmente mi ubicación. | **Escenario #1: Acceso a ubicación**<br>**Given** el usuario inicia una búsqueda geolocalizada<br>**When** autoriza el acceso a su ubicación<br>**Then** el sistema muestra servicios ordenados por proximidad.<br><br>**Escenario #2: Radio de búsqueda**<br>**Given** el sistema conoce la ubicación del usuario<br>**When** el usuario ajusta el radio de búsqueda<br>**Then** los resultados se actualizan mostrando servicios dentro del nuevo radio especificado. | EP-04 |
| US-40 | Filtrado por Disponibilidad y Calificación | Como usuario, quiero filtrar servicios por su disponibilidad horaria y calificación promedio, para encontrar servicios bien valorados que se ajusten a mi agenda. | **Escenario #1: Filtro por disponibilidad**<br>**Given** el usuario está viendo resultados de búsqueda<br>**When** selecciona un rango horario específico<br>**Then** el sistema muestra solo los servicios disponibles en ese horario.<br><br>**Escenario #2: Filtro por calificación**<br>**Given** el usuario está viendo resultados de búsqueda<br>**When** establece una calificación mínima<br>**Then** el sistema filtra los resultados mostrando solo aquellos con igual o mayor calificación. | EP-04 |
| US-41 | Sistema de Calificación Post-Servicio | Como usuario, quiero calificar y dejar reseñas sobre los servicios que he utilizado, para compartir mi experiencia con otros usuarios y proporcionar retroalimentación a los proveedores. | **Escenario #1: Calificación del servicio**<br>**Given** el usuario ha recibido un servicio<br>**When** completa el formulario de calificación<br>**Then** el sistema registra su puntuación y comentarios<br>**Y** actualiza la calificación promedio del proveedor.<br><br>**Escenario #2: Edición de reseña**<br>**Given** el usuario ha dejado una reseña previamente<br>**When** decide modificar su calificación o comentarios<br>**Then** el sistema permite la edición durante un período limitado<br>**Y** actualiza los datos correspondientes. | EP-07 |
| US-42 | Visualización de Calificaciones y Reseñas | Como usuario, quiero ver las calificaciones y reseñas dejadas por otros usuarios, para tomar decisiones informadas sobre qué servicios utilizar. | **Escenario #1: Vista de resumen**<br>**Given** el usuario está consultando un servicio<br>**When** accede a la sección de reseñas<br>**Then** visualiza la calificación promedio y el número total de reseñas.<br><br>**Escenario #2: Filtrado de reseñas**<br>**Given** el usuario está viendo las reseñas<br>**When** aplica filtros por puntuación o fecha<br>**Then** el sistema muestra solo las reseñas que cumplen con los criterios seleccionados. | EP-07 |
| US-43 | Contratación de Servicios Eléctricos mediante Wizard | Como propietario de PyME, quiero contar con un proceso guiado paso a paso para contratar servicios eléctricos, para solucionar mis problemas de forma rápida y sin complicaciones. | **Escenario #1: Completar proceso guiado**<br>**Given** el usuario inicia el proceso de contratación<br>**When** completa todos los pasos requeridos en el asistente<br>**Then** el sistema genera una solicitud de servicio<br>**Y** confirma la programación del mismo.<br><br>**Escenario #2: Guardar progreso**<br>**Given** el usuario está en medio del proceso de contratación<br>**When** decide guardar su progreso para continuar más tarde<br>**Then** el sistema almacena los datos ingresados<br>**Y** permite retomar el proceso desde el mismo punto en una sesión futura. | EP-04 |
| US-44 | Historial de servicios contratados | Como cliente, quiero ver un historial de los servicios que he contratado anteriormente para referencia futura | **Escenario #1: Visualización de historial**<br>**Given** el usuario accede a su historial de servicios<br>**When** no aplica ningún filtro<br>**Then** visualiza todos los servicios contratados ordenados cronológicamente.<br><br>**Escenario #2: Detalle de servicio**<br>**Given** el usuario está revisando su historial<br>**When** selecciona un servicio específico<br>**Then** el sistema muestra los detalles completos incluyendo fecha, proveedor, costo y estado. | EP-05 |
| US-45 | Cancelación de servicios programados | Como cliente, quiero cancelar un servicio programado con anticipación para evitar cargos innecesarios | **Escenario #1: Cancelación sin penalización**<br>**Given** el usuario tiene un servicio programado<br>**When** solicita cancelarlo dentro del plazo permitido<br>**Then** el sistema procesa la cancelación sin cargos<br>**Y** envía una confirmación.<br><br>**Escenario #2: Cancelación tardía**<br>**Given** el usuario cancela un servicio fuera del plazo establecido<br>**When** confirma estar de acuerdo con la penalización aplicable<br>**Then** el sistema procesa la cancelación con el cargo correspondiente<br>**Y** emite el comprobante respectivo. | EP-04 |
| US-46 | Gestión de Disponibilidad de Proveedor | Como proveedor Quiero gestionar mi disponibilidad horaria y calendario Para que los clientes puedan solicitar mis servicios en horarios en que estoy disponible. | Escenario: Acceso a la gestión de disponibilidad Given que el proveedor se encuentra autenticado When accede a la sección "Mi Disponibilidad" dentro de su perfil Then puede ver un calendario con mi disponibilidad actual And puede ver una vista general de mis horarios disponibles Escenario: Configuración de horario regular Given que el usuario se encuentra en la sección "Mi Disponibilidad" When selecciona la opción "Configurar Horario Regular" Then puede establecer sus horas disponibles para cada día de la semana And puede marcar días completos como no disponibles And sus cambios se guardan al hacer clic en "Guardar Configuración" Escenario: Bloqueo de fechas específicas Given que el usuario se encuentra en la sección "Mi Disponibilidad" When selecciona fechas específicas en el calendario And marca estas fechas como "No Disponible" Then estas fechas se bloquean en su calendario And los clientes no pueden solicitar servicios en estas fechas Escenario: Configuración de tiempos de desplazamiento Given que el usuario se encuentra en la sección "Mi Disponibilidad" When configura sus "Tiempos de Desplazamiento". Then puede establecer el tiempo estimado entre servicios. And el sistema considera estos tiempos al mostrar su disponibilidad. And evita solapamientos en las solicitudes de servicio. | EP-06 |
| US-47 | Crear Disponibilidad de Proveedor | Como proveedor Quiero poder crear nuevos bloques de disponibilidad en mi calendario Para ofrecer mis servicios en horarios específicos. |  |
| US-48 | Editar Disponibilidad de Proveedor | Como proveedor Quiero poder modificar mis bloques de disponibilidad existentes Para ajustar mis horarios según mis necesidades cambiantes. | **Escenario #1: Modificar horario de disponibilidad**<br>**Given** que el proveedor visualiza su calendario<br>**When** selecciona un bloque de disponibilidad existente y modifica sus datos<br>**Then** los cambios se guardan correctamente<br>**And** se actualiza la visualización del calendario.<br><br>**Escenario #2: Edición con citas existentes**<br>**Given** que el proveedor intenta editar un bloque con citas confirmadas<br>**When** realiza modificaciones que afectarían las citas existentes<br>**Then** el sistema muestra una advertencia<br>**And** requiere confirmación antes de proceder. | EP-06 |
| US-49 | Eliminar Disponibilidad de Proveedor | Como proveedor Quiero poder eliminar bloques de disponibilidad de mi calendario Para bloquear horarios que ya no estaré disponible. | **Escenario #1: Eliminar bloque de disponibilidad**<br>**Given** que el proveedor visualiza su calendario<br>**When** selecciona un bloque y elige la opción "Eliminar"<br>**Then** el bloque se elimina del calendario<br>**And** ese horario ya no aparece como disponible para los clientes.<br><br>**Escenario #2: Eliminación con citas programadas**<br>**Given** que el proveedor intenta eliminar un bloque con citas confirmadas<br>**When** confirma la acción de eliminación<br>**Then** el sistema notifica automáticamente a los clientes afectados<br>**And** ofrece opciones para reprogramar. | EP-06 |
| US-50 | Gestión de Agenda y Citas | Como técnico/proveedor, quiero gestionar mi agenda de servicios y citas, para organizar eficientemente mi trabajo y maximizar mi productividad. | Escenario #1: Visualización de agenda diaria/semanal/mensual Given que he iniciado sesión como proveedor When accedo a "Agenda de Servicios" Then puedo alternar entre vistas diaria, semanal y mensual And veo claramente mis servicios programados con códigos de color And puedo ver detalles rápidos al pasar el cursor sobre cada cita Escenario #2: Confirmación de citas pendientes Given que tengo solicitudes de servicio pendientes When accedo a mi panel de citas Then puedo ver las solicitudes que requieren confirmación And puedo aceptar, reprogramar o rechazar cada solicitud And al tomar una acción, el cliente recibe notificación automática. Escenario #3: Bloqueo de horarios no disponibles Given que estoy en mi agenda de servicios When selecciono "Bloquear horario" Then puedo marcar franjas horarias como no disponibles And puedo establecer motivos (personal, otro trabajo, descanso) And estos horarios no aparecen como disponibles para los clientes. Escenario #4: Gestión de tiempos de traslado Given que estoy configurando mi agenda When activo "Considerar tiempos de traslado" Then el sistema calcula automáticamente tiempos entre servicios And sugiere horarios factibles basados en ubicaciones geográficas And me advierte de posibles conflictos por distancias excesivas. | EP-06 |
| US-51 | Gestión de Servicios Ofrecidos | Como proveedor, quiero gestionar mi catálogo de servicios ofrecidos, para mantenerlo actualizado y mostrar claramente a los clientes mi oferta y especialidades. | Escenario #1: Creación de nuevo servicio Given que estoy en la sección "Productos/Catálogo" When selecciono "Añadir nuevo servicio" Then puedo completar un formulario detallado (nombre, descripción, categoría) And puedo establecer precios base o rangos de precio estimado And puedo indicar materiales incluidos/no incluidos And puedo subir fotos de trabajos anteriores como referencia. Escenario #2: Edición de servicios existentes Given que tengo servicios publicados When selecciono un servicio específico para editar Then puedo modificar cualquier aspecto del servicio And los cambios se reflejan inmediatamente en mi perfil público And los clientes con servicios pendientes reciben notificación si es relevante. Escenario #3: Configuración de disponibilidad por servicio Given que estoy editando mis servicios When configuro "Disponibilidad específica" Then puedo establecer horarios específicos para cada tipo de servicio And puedo limitar el número de servicios de cada tipo por día/semana And puedo establecer zonas geográficas de cobertura por servicio. Escenario #4: Establecimiento de promociones temporales Given que estoy en la gestión de servicios When selecciono "Crear promoción" Then puedo seleccionar servicios específicos para promocionar And puedo establecer descuentos o beneficios adicionales And puedo definir un período de validez para la promoción And la promoción se destaca automáticamente en mi perfil | EP-06 |
| US-52 | Crear Servicios Ofrecidos | Como proveedor Quiero poder añadir nuevos servicios a mi catálogo Para ampliar mi oferta comercial. | **Escenario #1: Registro de nuevo servicio**<br>**Given** que el proveedor está en la sección "Catálogo"<br>**When** completa el formulario con todos los datos obligatorios del servicio<br>**Then** el servicio se crea correctamente<br>**And** aparece en su catálogo público.<br><br>**Escenario #2: Carga de imágenes del servicio**<br>**Given** que el proveedor está creando un nuevo servicio<br>**When** intenta cargar imágenes de muestra<br>**Then** el sistema permite subir hasta 5 imágenes<br>**And** verifica que tengan el formato y tamaño adecuados. | EP-06 |
| US-53 | Editar Servicios Ofrecidos | Como proveedor Quiero poder modificar los detalles de mis servicios existentes Para mantener la información actualizada. | **Escenario #1: Actualización de servicio existente**<br>**Given** que el proveedor visualiza su catálogo<br>**When** selecciona un servicio y modifica sus características<br>**Then** los cambios se guardan correctamente<br>**And** se actualizan inmediatamente en su perfil público.<br><br>**Escenario #2: Actualización de precios**<br>**Given** que el proveedor está editando un servicio<br>**When** modifica el precio o rango de precios<br>**Then** el sistema registra el historial de cambios de precio<br>**And** actualiza el valor mostrado a los clientes. | EP-06 |
| US-54 | Eliminar Servicios Ofrecidos | Como proveedor Quiero poder eliminar servicios de mi catálogo Para dejar de ofrecerlos al público. | **Escenario #1: Eliminación de servicio**<br>**Given** que el proveedor visualiza su catálogo<br>**When** selecciona un servicio y elige "Eliminar servicio"<br>**Then** el servicio se marca como no disponible<br>**And** deja de mostrarse en su catálogo público.<br><br>**Escenario #2: Eliminación con servicios pendientes**<br>**Given** que el proveedor intenta eliminar un servicio<br>**When** existen citas programadas para ese servicio<br>**Then** el sistema muestra una advertencia<br>**And** ofrece opciones para gestionar las citas pendientes. | EP-06 |
| US-55 | Historial de Clientes Atendidos | Como proveedor, quiero acceder a un historial detallado de los clientes que he atendido, para dar seguimiento a relaciones profesionales y mejorar mi servicio basado en experiencias previas. | **Escenario: Consulta de historial de clientes**<br>- Given el proveedor ha iniciado sesión<br>- When accede a la sección de historial de clientes<br>- Then puede visualizar un listado de todos los clientes atendidos<br>- Y puede filtrar por fechas, tipos de servicio o ubicación<br>- Y puede ver detalles de cada cliente y los servicios prestados<br><br>**Escenario: Visualización de detalles de servicios prestados**<br>- Given el proveedor está en el historial de clientes<br>- When selecciona un cliente específico<br>- Then puede ver el detalle de todos los servicios prestados<br>- Y puede acceder a la información de contacto del cliente<br>- Y puede visualizar notas anteriores sobre trabajos realizados<br><br>**Escenario: Registro de seguimiento de clientes**<br>- Given el proveedor está visualizando el detalle de un cliente<br>- When indica agregar una nota de seguimiento<br>- Then puede registrar observaciones sobre el cliente o servicio<br>- Y puede establecer recordatorios para seguimiento futuro<br>- Y estas notas solo son visibles para el proveedor | EP-06 |
| US-56 | Crear Portafolio Digital con Evidencias de Trabajo | Como proveedor de servicios eléctricos, quiero crear un portafolio digital dentro de mi perfil que incluya fotos, descripciones y referencias de trabajos anteriores, para mostrar mi experiencia y generar mayor confianza en potenciales clientes. | Escenario #1: Creación de nuevo trabajo en portafolioGiven que el proveedor ya tiene una cuenta activa en la plataforma And ha iniciado sesión correctamente When accede a la sección "Mi Portafolio" desde su perfil And selecciona la opción "Agregar nuevo trabajo" And sube una imagen, una descripción del trabajo y una referencia del cliente Then el sistema debe guardar y mostrar el nuevo trabajo en su portafolio And debe aparecer públicamente en su perfil visible para clientes And el proveedor debe editar o eliminar esa publicación en cualquier momento. Escenario #2: Organización de trabajos por categorías Given que el proveedor tiene varios trabajos en su portafolio When accede a la sección "Organizar Portafolio" Then puede crear y asignar categorías a cada trabajo And puede reordenar los trabajos dentro de cada categoría And los clientes pueden filtrar su portafolio por estas categorías. Escenario #3: Incorporación de testimonios de clientes Given que el proveedor ha completado trabajos registrados en la plataforma When selecciona "Solicitar testimonio" en un trabajo específico Then el sistema envía una invitación al cliente para dejar un comentario And el testimonio aprobado se integra automáticamente al portafolio And aparece junto al trabajo correspondiente. | | EP-07 |
| US-57 | Configuración de zonas de servicio | Como proveedor, quiero establecer zonas geográficas donde ofrezco mis servicios para enfocarme en clientes de áreas específicas | **Escenario: Definición de área de cobertura**<br>- Given el proveedor está en su perfil<br>- When accede a la configuración de zonas de servicio<br>- Then puede seleccionar áreas geográficas en un mapa<br>- Y puede establecer un radio de cobertura por cada punto seleccionado<br>- Y el sistema guarda estas configuraciones para futuras solicitudes<br><br>**Escenario: Configuración de tarifas por zona**<br>- Given el proveedor ha definido sus zonas de servicio<br>- When selecciona una zona específica<br>- Then puede establecer tarifas adicionales por desplazamiento<br>- Y puede definir zonas prioritarias con disponibilidad preferente<br>- Y el sistema aplica estas reglas al mostrar disponibilidad a los clientes<br><br>**Escenario: Exclusión de zonas**<br>- Given el proveedor gestiona sus zonas de servicio<br>- When marca zonas como excluidas<br>- Then estas áreas no aparecen disponibles para solicitudes<br>- Y el sistema no muestra al proveedor para clientes en estas zonas | EP-06 |
| US-58 | Retroalimentación directa de servicios | Como proveedor, quiero recibir retroalimentación directa sobre mis servicios para mejorar mi oferta | **Escenario: Revisión de valoraciones recibidas**<br>- Given el proveedor ha completado servicios<br>- When accede a la sección de retroalimentación<br>- Then puede ver las valoraciones recibidas de sus clientes<br>- Y puede filtrar por puntuación, fecha o tipo de servicio<br>- Y puede identificar los aspectos mejor y peor valorados<br><br>**Escenario: Respuesta a valoraciones**<br>- Given el proveedor está revisando sus valoraciones<br>- When selecciona responder a una valoración específica<br>- Then puede redactar y publicar una respuesta<br>- Y el cliente recibe notificación de la respuesta<br>- Y la respuesta aparece junto a la valoración original<br><br>**Escenario: Análisis de tendencias**<br>- Given el proveedor tiene historial de valoraciones<br>- When accede al análisis de retroalimentación<br>- Then puede visualizar gráficos de tendencias temporales<br>- Y puede comparar su rendimiento con el promedio de la plataforma<br>- Y recibe sugerencias automáticas para mejorar en áreas específicas | EP-07 |
| US-59 | Gestión de tarifas por tipo de servicio | Como proveedor, quiero establecer diferentes tarifas según el tipo de servicio para tener una estructura de precios clara y transparente | **Escenario: Configuración de tarifas base**<br>- Given el proveedor está gestionando sus servicios<br>- When accede a la configuración de tarifas<br>- Then puede establecer precios base para cada tipo de servicio<br>- Y puede definir si el precio es por hora o por trabajo completo<br>- Y puede establecer tarifas mínimas para cada categoría<br><br>**Escenario: Configuración de variables adicionales**<br>- Given el proveedor define sus tarifas<br>- When indica agregar variables de precio<br>- Then puede definir factores que modifican el precio base<br>- Y puede establecer porcentajes o montos fijos para cada variable<br>- Y estas variables son consideradas al calcular presupuestos<br><br>**Escenario: Creación de paquetes de servicios**<br>- Given el proveedor tiene varios servicios configurados<br>- When selecciona crear un paquete de servicios<br>- Then puede agrupar varios servicios bajo un precio único<br>- Y puede establecer un descuento para el paquete completo<br>- Y los clientes pueden seleccionar estos paquetes directamente | EP-06 |
| US-60 | Crear Componente Eléctrico | Como usuario del sistema Quiero poder registrar nuevos componentes eléctricos en mi instalación Para mantener un inventario completo de mi infraestructura eléctrica. | **Escenario #1: Registro de nuevo componente**<br>**Given** que el usuario accede a la sección "Componentes Eléctricos"<br>**When** completa el formulario<br>**Then** el sistema registra el nuevo componente<br>**And** lo incluye en el inventario del usuario.<br><br>**Escenario #2: Asignación de consumo estándar**<br>**Given** que el usuario está registrando un componente<br>**When** selecciona un tipo de componente predefinido<br>**Then** el sistema sugiere automáticamente valores estándar de consumo<br>**And** permite al usuario ajustar estos valores según sus necesidades. | EP-06 |
| US-61 | Editar Componente Eléctrico | Como usuario del sistema Quiero poder modificar la información de los componentes eléctricos registrados Para mantener actualizada la información técnica y de consumo. | **Escenario #1: Actualización de datos técnicos**<br>**Given** que el usuario visualiza su inventario de componentes<br>**When** selecciona un componente específico y modifica sus características<br>**Then** los cambios se guardan correctamente<br>**And** se actualizan las estadísticas de consumo asociadas.<br><br>**Escenario #2: Cambio de estado operativo**<br>**Given** que el usuario está editando un componente<br>**When** modifica el estado operativo (activo, en mantenimiento, fuera de servicio)<br>**Then** el sistema actualiza el estado del componente<br>**And** ajusta las proyecciones de consumo según corresponda. | EP-06 |
| US-62 | Eliminar Componente Eléctrico | Como usuario del sistema Quiero poder eliminar componentes eléctricos de mi inventario Para mantener actualizada mi configuración cuando retire o reemplace equipos. | **Escenario #1: Eliminación de componente**<br>**Given** que el usuario visualiza su inventario de componentes<br>**When** selecciona un componente y elige la opción "Eliminar"<br>**Then** el sistema solicita confirmación<br>**And** elimina el componente tras la confirmación.<br><br>**Escenario #2: Registro histórico**<br>**Given** que el usuario elimina un componente<br>**When** confirma la eliminación<br>**Then** el sistema mantiene un registro histórico del componente eliminado<br>**And** permite consultarlo en reportes históricos de consumo. | EP-06 |

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

<hr>

# 

 Epic/StoryID | Título | Descripción | Story Points (1/3/5/8) |
| :---- | :---- | :---- | :---- |
| US-01 | Visualización de Características y Beneficios | Como visitante de la landing page, Quiero ver claramente las características y beneficios de la plataforma, Para entender cómo puede ayudarme y decidir si registrarme. | 5 |
| US-02 | Visualización de Testimonios | Como visitante indeciso sobre la plataforma, Quiero ver testimonios de usuarios reales, Para aumentar mi confianza en el servicio antes de registrarse. | 3 |
| US-03 | Adaptabilidad a Diferentes Dispositivos | Como visitante que accede desde diferentes dispositivos, Quiero que la landing page se adapte correctamente a mi pantalla, Para tener una experiencia óptima independientemente del dispositivo que use. | 5 |
| US-04 | Visualización de una Sección Principal | Como visitante de la página, quiero ver una sección principal atractiva que me presente un breve resumen de la idea del producto, para entender rápidamente de qué se trata el servicio. | 3 |
| US-05 | Navegación sin errores | Como visitante, quiero poder navegar por la página web sin encontrar errores, para tener una experiencia fluida que me anime a registrarme. | 3 |
| US-06 | Navegación mediante Encabezado | Como usuario, quiero un menú de navegación claro en el encabezado, para poder acceder fácilmente a las diferentes secciones de la página. | 3 |
| US-07 | Visualización del Pie de página | Como visitante, quiero ver un pie de página organizado con accesos directos e información de contacto, para poder encontrar información adicional rápidamente. | 3 |
| US-08 | Ver Información del Startup | Como potencial cliente, quiero conocer información sobre la empresa desarrolladora, para evaluar su credibilidad y confiabilidad. | 1 |
| US-09 | Conocer la Misión de la Startup | Como visitante interesado, quiero conocer la misión de la empresa, para entender sus valores y propósito. | 1 |
| US-10 | Conocer la Visión de la Startup | Como visitante interesado, quiero conocer la visión de la empresa, para entender sus objetivos a largo plazo y su proyección de futuro. | 1 |
| US-11 | Conocer más a fondo los servicios que ofrecen | Como visitante interesado, quiero conocer de manera más específica los servicios que ofrecen por medio de capturas de pantallas, para comprender su solución y decidir si optar por ella. | 3 |
| US-12 | Registro de cuentas como Dueño de Hogar | Como dueño de hogar, quiero poder registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mi vivienda | 5 |
| US-13 | Registro de cuentas como Dueño de Empresa | Como dueño o representante de empresa, quiero poder registrarme para tener una cuenta en la aplicación, para gestionar los componentes eléctricos de mis instalaciones comerciales | 5 |
| US-14 | Registro de cuentas para Proveedores | Como proveedor de componentes eléctricos y/o servicios, quiero poder registrarme para tener una cuenta en la aplicación, para ofrecer mis productos y servicios a los usuarios | 5 |
| US-15 | Validación de datos de registro | Como usuario, quiero recibir retroalimentación inmediata sobre la validez de los datos que ingresó durante el registro para corregir errores rápidamente. | 8 |
| US-16 | Verificación de cuenta por correo electrónico | Como usuario, quiero verificar mi cuenta a través de un enlace enviado por correo electrónico para confirmar mi identidad. | 8 |
| US-17 | Mensajes de éxito retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre éxito para entender fácilmente el resultado de mis acciones. | 3 |
| US-18 | Mensajes de error retroalimentación de registro | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | 3 |
| US-19 | Inicio de sesión de usuarios | Como usuario registrado, quiero poder iniciar sesión en la aplicación con mis credenciales para acceder a mi cuenta y utilizar las funcionalidades de la plataforma. | 5 |
| US-20 | Recuperación de Contraseña | Como usuario registrado, quiero poder recuperar mi contraseña en caso de olvidarla, para poder volver a acceder a mi cuenta de manera segura. | 8 |
| US-21 | Cierre de Sesión | Como usuario autenticado, quiero cerrar mi sesión de forma segura para proteger mi cuenta When termine de usar la aplicación. | 3 |
| US-22 | Visualización de Perfil de Propietario | Como propietario registrado, quiero poder visualizar mi perfil, para revisar mi información personal y preferencias almacenadas en el sistema | 3 |
| US-23 | Edición de Perfil de Propietario | Como propietario registrado, quiero poder editar mi información personal y preferencias, para mantener mi perfil actualizado y tener más control sobre este. | 5 |
| US-24 | Visualización de Perfil de Proveedor | Como proveedor registrado Quiero poder visualizar mi perfil profesional Para revisar cómo se presenta mi información y servicios a los clientes potenciales | 3 |
| US-25 | Edición de Perfil de Proveedor | Como proveedor registrado, quiero poder editar mi información profesional, certificaciones y servicios ofrecidos para mantener mi perfil actualizado y atractivo para los clientes. | 8 |
| US-26 | Mensajes de éxito de actualización de perfil | Como usuario, quiero recibir mensajes claros y accesibles al completar la actualización de perfil sobre éxito para entender fácilmente el resultado de mis acciones. | 1 |
| US-27 | Mensajes de error de actualización de perfil | Como usuario, quiero recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario, para entender fácilmente el resultado de mis acciones y saber cómo proceder. | 1 |
| US-28 | Entrar a un dashboard Personalizado | Como usuario de la plataforma, quiero acceder a un dashboard personalizado al iniciar sesión, para visualizar de forma inmediata la información relevante según mi rol y actividad reciente. | 8 |
| US-29 | Gestión de Técnicos Favoritos | Como cliente, quiero poder marcar y gestionar una lista de técnicos favoritos, para contactarlos fácilmente para futuros servicios y dar preferencia a aquellos con los que he tenido buenas experiencias. | 5 |
| US-30 | Registrar Consumo Eléctrico Mensual | Como usuario interesado en el control energético, quiero poder anotar manualmente mi consumo mensual de electricidad, para llevar un seguimiento y detectar posibles aumentos o ahorros en el tiempo. | 3 |
| US-31 | Crear Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder crear un nuevo registro de consumo mensual Para iniciar el seguimiento de mi gasto eléctrico. | 5 |
| US-32 | Editar Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder modificar registros de consumo existentes Para corregir errores o actualizar información. | 3 |
| US-33 | Eliminar Registro de Consumo Eléctrico | Como usuario interesado en el control energético Quiero poder eliminar registros de consumo incorrectos Para mantener la precisión de mi historial de consumo. | 3 |
| US-34 | Extracción de datos de consumo | Como usuario, quiero que el sistema extraiga automáticamente los datos relevantes de mis facturas cargadas (kWh consumidos, monto, periodo) para evitar la entrada manual de datos | 8 |
| US-35 | Visualización de historial de consumo | Como usuario, quiero visualizar gráficamente mi historial de consumo eléctrico para identificar tendencias y patrones | 5 |
| US-36 | Configuración de alertas de consumo | Como usuario, quiero configurar alertas personalizadas cuando mi consumo supere ciertos umbrales predefinidos para tomar medidas proactivas | 3 |
| US-37 | Exportación de datos de consumo | Como usuario, quiero poder exportar mis datos históricos de consumo en formatos comunes (CSV, Excel) para análisis externos | 3 |
| US-38 | Repositorio de facturas | Como usuario, quiero tener un repositorio organizado de todas mis facturas eléctricas para acceder fácilmente a ellas cuando las necesite | 5 |
| US-39 | Verificación de facturas | Como usuario, quiero poder verificar si el cálculo de mi factura es correcto según las tarifas vigentes para detectar posibles errores de facturación | 8 |
| US-40 | Sistema de Recomendaciones Personalizadas | Como cliente, quiero recibir recomendaciones personalizadas de servicios y productos basados en mi historial y necesidades, para descubrir soluciones relevantes que puedan mejorar mi experiencia. | 8 |
| US-41 | Búsqueda por Ubicación y Tipo de Servicio | Como usuario, quiero poder buscar servicios filtrando por ubicación y tipo de servicio, para encontrar rápidamente los que se ajustan a mis necesidades específicas. | 3 |
| US-42 | Búsqueda Geolocalizada | Como usuario, quiero buscar servicios cerca de mi ubicación actual, para encontrar opciones convenientes sin necesidad de introducir manualmente mi ubicación. | 5 |
| US-43 | Filtrado por Disponibilidad y Calificación | Como usuario, quiero filtrar servicios por su disponibilidad horaria y calificación promedio, para encontrar servicios bien valorados que se ajusten a mi agenda. | 3 |
| US-44 | Sistema de Calificación Post-Servicio | Como usuario, quiero poder calificar y dejar reseñas sobre los servicios que he utilizado, para compartir mi experiencia con otros usuarios y proporcionar retroalimentación a los proveedores. | 5 |
| US-45 | Visualización de Calificaciones y Reseñas | Como usuario, quiero poder ver las calificaciones y reseñas dejadas por otros usuarios, para tomar decisiones informadas sobre qué servicios utilizar. | 3 |
| US-46 | Contratación de Servicios Eléctricos mediante Wizard | Como propietario de PyME, quiero contar con un proceso guiado paso a paso para contratar servicios eléctricos, para poder solucionar mis problemas de forma rápida y sin complicaciones. | 8 |
| US-47 | Historial de servicios contratados | Como cliente, quiero poder ver un historial de los servicios que he contratado anteriormente para referencia futura | 3 |
| US-48 | Cancelación de servicios programados | Como cliente, quiero poder cancelar un servicio programado con anticipación para evitar cargos innecesarios | 3 |
| US-49 | Gestión de Disponibilidad de Proveedor | Como proveedor Quiero poder gestionar mi disponibilidad horaria y calendario Para que los clientes puedan solicitar mis servicios en horarios en que estoy disponible. | 8 |
| US-50 | Crear Disponibilidad de Proveedor | Como proveedor Quiero poder crear nuevos bloques de disponibilidad en mi calendario Para ofrecer mis servicios en horarios específicos. | 5 |
| US-51 | Editar Disponibilidad de Proveedor | Como proveedor Quiero poder modificar mis bloques de disponibilidad existentes Para ajustar mis horarios según mis necesidades cambiantes. | 3 |
| US-52 | Eliminar Disponibilidad de Proveedor | Como proveedor Quiero poder eliminar bloques de disponibilidad de mi calendario Para bloquear horarios que ya no estaré disponible. | 3 |
| US-53 | Gestión de Agenda y Citas | Como técnico/proveedor, quiero poder gestionar mi agenda de servicios y citas, para organizar eficientemente mi trabajo y maximizar mi productividad. | 8 |
| US-54 | Gestión de Servicios Ofrecidos | Como proveedor, quiero poder gestionar mi catálogo de servicios ofrecidos, para mantenerlo actualizado y mostrar claramente a los clientes mi oferta y especialidades. | 5 |
| US-55 | Crear Servicios Ofrecidos | Como proveedor Quiero poder añadir nuevos servicios a mi catálogo Para ampliar mi oferta comercial. | 5 |
| US-56 | Editar Servicios Ofrecidos | Como proveedor Quiero poder modificar los detalles de mis servicios existentes Para mantener la información actualizada. | 3 |
| US-57 | Eliminar Servicios Ofrecidos | Como proveedor Quiero poder eliminar servicios de mi catálogo Para dejar de ofrecerlos al público. | 3 |
| US-58 | Historial de Clientes Atendidos | Como proveedor, quiero acceder a un historial detallado de los clientes que he atendido, para dar seguimiento a relaciones profesionales y mejorar mi servicio basado en experiencias previas. | 3 |
| US-59 | Crear Portafolio Digital con Evidencias de Trabajo | Como proveedor de servicios eléctricos, quiero crear un portafolio digital dentro de mi perfil que incluya fotos, descripciones y referencias de trabajos anteriores, para mostrar mi experiencia y generar mayor confianza en potenciales clientes. | 5 |
| US-60 | Configuración de zonas de servicio | Como proveedor, quiero poder establecer zonas geográficas donde ofrezco mis servicios para enfocarme en clientes de áreas específicas | 5 |
| US-61| Retroalimentación directa de servicios | Como proveedor, quiero poder recibir retroalimentación directa sobre mis servicios para mejorar mi oferta | 3 |
| US-62 | Gestión de tarifas por tipo de servicio | Como proveedor, quiero poder establecer diferentes tarifas según el tipo de servicio para tener una estructura de precios clara y transparente | 3 |



<hr>


## Capítulo IV: Product Design
 
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

[Ver diagrama en Lucidchart](https://lucid.app/lucidchart/9bc93c27-6140-47f1-9cfc-e7c0c5a15134/edit?invitationId=inv_f9a0cb75-977e-4669-a09e-21a42409c64d&page=0_0)

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

[Ver diseño en Figma](https://www.figma.com/design/sU4hpNItE2lZ88WrlTUKwy/Untitled?node-id=31-624&t=9AhvJafsRNaQO2cX-1)


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

## 5.1. Software Configuration Management

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

<hr>

##### 5.2.1.5. Execution Evidence for Sprint Review
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

##### 5.2.1.7. Software Deployment Evidence for Sprint

Para este primer Sprint , como equipo logramos implementar satisfactoriamente la primera versión de la landing page.

## Design

Para realizar el diseño de los wireframes y mockups de la **Landing Page** para este Sprint, se hizo uso de la plataforma **Figma**.
Para utilizar la plataforma:

1. Se accede a través de la página oficial de Figma: [Figma Login](https://www.figma.com/login)
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

##### 5.2.1.8. Team Collaboration Insights during Sprint
A continuación, se muestran las capturas de los insights del repositorio.
<img  src="https://imgur.com/hioVjak.jpeg"/>

En el caso de  la landing page y su Sprint, el miembro Ethan Aliaga, fue el encargado de su diseño y despliegue. Pudiendo evidenciar en estas capturas, su partipación activa durante el desarrollo.

<hr>

##### 5.2.2. Sprint 2 
En esta sección se registra el avance del producto y las acciones colaborativas realizadas por el equipo durante el desarrollo del Sprint 2.
##### 5.2.2.1. Sprint Planning 2.
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
| **Sprint n Velocity** | 16 Story Points |
| **Sum of Story Points** | 10 Story Points |




##### 5.2.2.2. Aspect Leaders and Collaborators. 

Durante el Sprint 2, se abordaron aspectos clave distribuidos en cuatro Bounded Contexts: Authentication, Profile Management, Service Management y Service Contracting. A fin de garantizar una gestión clara y colaborativa del trabajo, se elaboró la siguiente matriz LACX. En ella se identifica quién asume el rol de líder (L) y quiénes colaboran (C) en cada uno de estos aspectos, asegurando una comunicación efectiva y responsabilidades bien definidas dentro del equipo.

| **Team Member (Last Name, First Name)** | **GitHub Username** | **Authentication** | **Profile Management** | **Service Management** | **Service Contracting** |
|-----------------------------------------|----------------------|---------------------|-------------------------|-------------------------|--------------------------|
| Sánchez Manrique, Ludwing               | ItaloSanche          | L                   | C                       | C                       |                          |
| Aliaga Aguirre, Ethan Matías            | MatFragg             | C                   | L                       |                         | C                        |
| Contreras López, Leandro Saúl           | WiDDsito             | C                   | C                       | L                       | C                        |
| Machado Bracamonte, Ivo Marcelo         | ivommb11             | C                   |                         | C                       | L                        |
| Del Aguila Ayala, Ricardo               | Rexest01             |                     | C                       | C                       | C                        |



##### 5.2.2.3. Sprint Backlog 2.

Durante este Sprint, el equipo centró sus esfuerzos en el desarrollo de la capa Frontend de la aplicación, estableciendo las bases visuales y funcionales que interactúan directamente con los usuarios. Se priorizó la implementación de componentes clave asociados a cada uno de los bounded contexts asignados individualmente a los integrantes, lo cual permitió una distribución clara de responsabilidades y un avance paralelo de las funcionalidades. Cada miembro del equipo asumió el liderazgo en el desarrollo de un conjunto específico de componentes, asegurando coherencia y continuidad en cada dominio funcional.

Además, como parte del compromiso con la experiencia del usuario, se implementó una nueva versión de la Landing Page, con un enfoque visual renovado. Esta incluye imágenes representativas de los servicios ofrecidos, buscando captar la atención desde el primer contacto y comunicar de manera más efectiva la propuesta de valor de la plataforma. Esta mejora visual no solo fortalece la identidad de marca, sino que también establece una conexión más directa con las necesidades de los usuarios.

Este es nuestro link de invitación a nuestro Trello : [Ver Board del Sprint en Trello](https://trello.com/b/iKXzrJ60/electrolink-aplicaciones-web)

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

##### 5.2.2.4. Development Evidence for Sprint Review.

## Development Evidence for Sprint Review

Durante el Sprint se avanzó en la implementación de los siguientes productos: Landing Page, Aplicaciones Web y Servicios Web. A continuación se presenta la evidencia de desarrollo mediante commits registrados en los repositorios utilizados durante este periodo. La tabla incluye el nombre del repositorio, rama de trabajo, identificador del commit, mensaje del commit, descripción detallada del cambio y la fecha en que se realizó.

| Repository                                | Branch | Commit ID | Commit Message                                 | Commit Message Body                                         | Committed on  |
|-------------------------------------------|--------|-----------|-----------------------------------------------|-------------------------------------------------------------|---------------|
| Open-Source-4341/ElectroLink-FE           | master | ca287e0   | Merge pull request #1 from Open-Source-4341/main | All Bounded Contexts Implemented                            | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | da23457e0 | Reestructuré el proyecto dentro de la carpeta ItaloFiles |Service Contracting Bounded Context        | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | r4a2564e0 | Agrego mi proyecto en la carpeta Ivo           | Componentes iniciales del módulo asignado                   | 2025-05-13    |
| Open-Source-4341/ElectroLink-FE           | master | u67287gdf |Agrego mi proyecto en la carpeta de LeandroFiles | Agregar reviews del Contracting Bounded Context             | 2025-05-13    |


##### 5.2.2.5. Execution Evidence for Sprint Review. 

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


##### 5.2.2.6. Services Documentation Evidence for Sprint Review. 

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



##### 5.2.2.7. Software Deployment Evidence for Sprint Review. 

##### 5.2.2.8. Team Collaboration Insights during Sprint. 

En esta sección se presenta el desarrollo colaborativo del equipo en la implementación del Sprint, mostrando analíticos de participación y commits.

<img  src="https://i.postimg.cc/pX3VXqgR/image-25.webp"/>

<img  src="https://i.postimg.cc/jSVKrC7j/image-26.webp"/>

<img  src="https://i.postimg.cc/6QpBMgZV/image-27.webp"/>



<hr>

**Conclusiones**

### Conclusiones

- El equipo logró mantener una estructura de trabajo colaborativa, distribuyendo adecuadamente las responsabilidades según las fortalezas de cada integrante.
- Las metodologías aplicadas (Lean UX, entrevistas, Journey Mapping) permitieron una comprensión más profunda de los usuarios, lo que fortaleció la propuesta de valor de Electrolink.
- Se cumplieron los objetivos del primer sprint, consolidando la base técnica del sistema, el diseño de la interfaz y el despliegue de la landing page.
- A pesar de algunas diferencias en la carga de trabajo entre miembros, se logró avanzar en los entregables de manera efectiva y dentro de los plazos establecidos.

### Recomendaciones

- Fomentar una distribución más equitativa de tareas técnicas y documentales para asegurar un esfuerzo balanceado entre todos los miembros.
- Continuar con la validación frecuente de los avances con usuarios reales, especialmente antes de cada iteración, para mantener la alineación entre desarrollo y necesidades reales.
- Aprovechar las fortalezas individuales del equipo para asignar responsabilidades específicas que optimicen los tiempos de desarrollo.
- Documentar de manera más sistemática los aprendizajes y desafíos encontrados en cada sprint, para mejorar continuamente el proceso.
<hr>

<hr>

<hr>

**Bibliografía**

- Del Aguila-Obra, A. R., Al-dweeri, R. M., & Padilla-Meléndez, A. (2012). *Factores determinantes de la calidad de los servicios electrónicos en el contexto de los operadores postales*. *Universia Business Review*, (35), 114-123. [https://www.redalyc.org/pdf/433/43323842006.pdf](https://www.redalyc.org/pdf/433/43323842006.pdf)

- Mohammad-Al-dweeri, R. (2011). *La calidad en los servicios electrónicos como estrategia competitiva: Modelo de análisis de sus componentes y efectos sobre la satisfacción y la lealtad*. [https://libros.metabiblioteca.org/handle/001/291](https://libros.metabiblioteca.org/handle/001/291)
  
- Ramos, Á. F. V., & Sánchez-Franco, M. J. (2004). *La calidad de servicio electrónico: un análisis de los efectos moderadores del comportamiento de uso de la web*. *Cuadernos de Economía y Dirección de la Empresa*, (21), 121-125. [https://dialnet.unirioja.es/descarga/articulo/1143462.pdf](https://dialnet.unirioja.es/descarga/articulo/1143462.pdf)

<hr>

**Anexos**
- Enlace de Landing Page :
[https://electrolinklp.netlify.app/](https://electrolinklp.netlify.app/)

<hr>
