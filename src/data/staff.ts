export interface StaffMember {
  id: string; // URL slug
  name: string;
  role: string;
  image: string;
  objectPosition?: string;
  linkedin?: string;
  specialties: string[];
  education: { title: string; institution: string }[];
  courses?: { title: string; institution: string }[];
  experience: { title: string; company: string }[];
  academic: string[];
  affiliation?: string;
}

export const staffMembers: StaffMember[] = [
  {
    id: "omar-damian",
    name: "Omar Alfredo Damián Medina",
    role: "Líder de Operaciones Legales",
    image: "/images/staff/Omar Damián (gris).webp",
    objectPosition: "top",
    linkedin: "https://www.linkedin.com/in/omardamian/",
    specialties: [
      "Derecho del Consumo",
      "Derecho de la Competencia",
      "Regulación Publicitaria",
      "Datos Personales",
      "Seguros",
      "Derecho Civil Patrimonial",
      "Derecho Administrativo",
      "Autorregulación",
      "Negociación",
      "Litigios y Controversias"
    ],
    education: [
      { title: "Doctorando en Derecho y Ciencia Política", institution: "Universidad Nacional Mayor de San Marcos" },
      { title: "Magíster en Derecho Civil y Comercial", institution: "Universidad Nacional Mayor de San Marcos" },
      { title: "Abogado", institution: "Universidad de San Martín de Porres" },
      { title: "Programa de Especialización para Oficiales de Datos Personales", institution: "Centrum PUCP" },
      { title: "Especialización en Derecho Publicitario y Libre Competencia", institution: "Universidad del Pacífico" },
      { title: "Especialización en Protección al Consumidor", institution: "Universidad del Pacífico" },
      { title: "Especialización en Derecho de la Libre Competencia", institution: "Universidad ESAN" }
    ],
    experience: [
      { title: "Gerente de Operaciones Legales", company: "Almerco Abogados & Consultores" },
      { title: "Abogado Senior en la División de Regulación", company: "Bitel Perú" },
      { title: "Abogado en la Gerencia Corporativa de Autorregulación", company: "Corporación Falabella" },
      { title: "Profesional en Derecho", company: "Indecopi" },
      { title: "Profesional en Derecho", company: "Continental, Stanford y Tiendas Utilex" },
      { title: "Profesional en Derecho", company: "OSCE" }
    ],
    academic: [
      "Docente de «Aspectos Legales de un Digital Commerce» — Escuela de Postgrado de la Universidad Peruana de Ciencias Aplicadas",
      "Ponente Nacional e Internacional — Diversas áreas de su especialización",
      "«Derecho Procesal de Consumo» (Jurista Editores, 2026)",
      "«Código de Protección y Defensa del Consumidor. Ilustrado en esquemas» (Jurista Editores, 2025)",
      "«Consumo sustentable» (AA.VV. El Derecho, 2025)",
      "Autor y Coordinador, «Tratado de Protección y Defensa del Consumidor» (Instituto Pacífico, 2019)",
      "Autor, «Protección y Defensa del Consumidor - Jurisprudencia Especializada» (Grijley, 2da Edición, 2019)",
      "Autor, «Protección y Defensa del Consumidor - Jurisprudencia Especializada» (Lex Iuris, 2014)",
      "Adjunto de Opinión — Diario El Comercio"
    ],
    affiliation: "Ilustre Colegio de Abogados de Lima"
  },
  {
    id: "jason-garcia-blasquez",
    name: "Jason García-Blásquez Wong",
    role: "Senior en Operaciones Legales",
    image: "/images/staff/Jason García-Blásquez(gris).webp",
    objectPosition: "top",
    specialties: [
      "Protección al Consumidor",
      "Competencia",
      "Datos Personales",
      "Nuevas tecnologías",
      "Empresarial",
      "Societario",
      "Civil",
      "Notarial y Registral",
      "Telecomunicaciones"
    ],
    education: [
      { title: "Abogado", institution: "Universidad Privada Antenor Orrego" },
      { title: "Maestría en Derecho Empresarial", institution: "Universidad Nacional Mayor de San Marcos" },
      { title: "Especialización en Derecho Publicitario y Leal Competencia", institution: "Universidad del Pacífico" },
      { title: "Especialización en Derecho Empresarial y Financiero", institution: "Universidad ESAN" }
    ],
    experience: [
      { title: "Consultor de riesgos en entornos digitales y reestructuración de procesos empresariales", company: "Asesor legal externo" },
      { title: "Coordinador del área de personas jurídicas y procesos no contenciosos", company: "Notaría Polo Muñoz" },
      { title: "Socio de la división de Derecho de tecnología, medios y telecomunicaciones", company: "García-Blásquez & Co. Abogados" }
    ],
    academic: [
      "Director — Portal Pulso.pe",
      "Ponente — Foros y simposios nacionales e internacionales"
    ],
    affiliation: "Colegio de Abogados de La Libertad"
  },
  {
    id: "maria-ruiz",
    name: "María del Rosario Ruíz Alarcón",
    role: "Senior en Operaciones Legales",
    image: "/images/staff/María Ruiz(gris).webp",
    linkedin: "https://www.linkedin.com/in/mruizalarcon/",
    specialties: [
      "Penal",
      "Procesal Penal",
      "Justicia Militar-Policial",
      "Derechos Humanos",
      "Compliance",
      "Civil",
      "Conciliación",
      "Litigios y Controversias"
    ],
    education: [
      { title: "Abogada", institution: "Universidad Alas Peruanas" },
      { title: "Magíster en Gestión Pública", institution: "Universidad Tecnológica del Perú" },
      { title: "Conciliadora Extrajudicial", institution: "Registro Nro. 56324" },
      { title: "Conciliadora Especializada en Familia", institution: "Registro Nro. 17832" },
      { title: "Instructora en Derechos Humanos", institution: "Centro Interamericano de Derechos Humanos — Ministerio de Defensa" }
    ],
    experience: [
      { title: "Abogada", company: "Ministerio de Defensa" },
      { title: "Segunda Jefa del Área de Procesos Penales, Justicia Militar Policial y Juzgado de Tránsito Militar", company: "Procuraduría Pública de la Fuerza Aérea del Perú (FAP)" },
      { title: "Abogada Junior", company: "Estudio Jurídico Diaz & Abogados Asociados S.A.C." },
      { title: "Asistente Fiscal", company: "Fiscalía Militar Policial Nro. 12 – FAP del Tribunal Superior Militar Policial del Centro de Lima – TSMPC" }
    ],
    academic: [
      "Docente — Instituto Superior Tecnológico Aeronáutico «Suboficial de Segunda FAP Manuel Polo Jiménez»",
      "Ponente — Diversas áreas de su especialización"
    ],
    affiliation: "Ilustre Colegio de Abogados de Lima"
  },
  {
    id: "juan-carlos-zevallos",
    name: "Juan Carlos Zevallos Roncagliolo",
    role: "Senior en Operaciones Legales",
    image: "/images/staff/Juan Carlos Zevallos(gris).webp",
    linkedin: "https://www.linkedin.com/in/juan-zevallos-roncagliolo-71433044/",
    specialties: [
      "Derecho Comercial y Contractual",
      "Derecho Empresarial",
      "Derecho Laboral y Procesal",
      "Negociaciones",
      "Asuntos Corporativos",
      "Comunicación Corporativa",
      "Responsabilidad Social y Relaciones Institucionales",
      "Derecho Minero",
      "Derecho Administrativo (SUNAFIL, SUSALUD, Municipalidades, APN y Ministerios)",
      "Derecho Inmobiliario",
      "Derecho Público"
    ],
    education: [
      { title: "Bachiller en Derecho", institution: "Universidad Peruana de Ciencias Aplicadas (UPC)" },
      { title: "Abogado", institution: "Universidad Peruana de Ciencias Aplicadas (UPC)" },
      { title: "Instructor en Derecho Internacional Humanitario y Derechos Humanos acreditado ante el Ministerio de Defensa del Perú", institution: "Centro del Derecho Internacional Humanitario de las FFAA del Perú" },
      { title: "Especialización en Derecho Procesal Laboral y Derecho Procesal Penal (nueva y anterior ley)", institution: "Colegio de Abogados de Lima" },
      { title: "Especialización en Derecho Societario", institution: "ESAN" },
      { title: "Especialización en Derecho Laboral", institution: "ESAN" },
      { title: "Especialización en Derecho Comercial y Contratación Empresarial", institution: "ESAN" },
      { title: "Especialización en Negociación, Comunicación Corporativa y Responsabilidad Social", institution: "ESAN" },
      { title: "Especialización en Derecho Minero y del Medio Ambiente", institution: "Universidad Peruana de Ciencias Aplicadas (UPC)" },
      { title: "Especialización en Derecho Minero", institution: "Sociedad Nacional de Minería Petróleo y Energía (SNMPE)" },
      { title: "Especialización en Derecho Minero", institution: "Colegio de Abogados de Lima" },
      { title: "Especialización en Derecho de la Construcción", institution: "ESAN" }
    ],
    experience: [
      { title: "Asesor Legal Integral", company: "Gestión asuntos legales diversos: Derecho Comercial, Contractual, Administrativo – Regulatorio, Derecho Empresarial, Derecho Procesal, Negociaciones, Litigios Civiles, Administrativos y Laborales. Experiencia relevante en empresas de envergadura del sector minero, construcción, instituciones de salud, ONGD's y en compañías industriales." },
      { title: "Jefe Legal", company: "Turok Contratistas & Servicios Generales SAC" },
      { title: "Asesor Legal Externo", company: "Mercado & Competencia" },
      { title: "Jefe de Asesoría Jurídica", company: "Instituto Peruano de Paternidad Responsable (INPPARES)" },
      { title: "Asesor Legal", company: "Turok Contratistas & Servicios Generales SAC" },
      { title: "Asesor Legal Externo", company: "Turok Contratistas & Servicios Generales SAC" },
      { title: "Asesor Legal Externo", company: "Twitter Magic" },
      { title: "Analista", company: "Abogado Área Relaciones Laborales - Southern Peru Copper Corporation – Sucursal del Perú" }
    ],
    academic: [
      "Coautor — \"Protección y Defensa del Consumidor - Jurisprudencia Especializada\" (Tratado de Protección al Consumidor, Instituto Pacífico, 2019)",
      "Autor de artículos y ensayos en distintas materias legales — Derecho Corporativo, Derecho Laboral, Derecho Minero, Derecho Comercial, Buen Gobierno Corporativo, Derecho Digital e Industrias 4.0 y Responsabilidad Social, tanto en revistas como medios digitales nacionales e internacionales."
    ],
    affiliation: "Ilustre Colegio de Abogados de Lima"
  },
  {
    id: "erick-caceres",
    name: "Erick Cáceres Buleje",
    role: "Especialista en Asuntos Administrativos y Municipales",
    image: "/images/staff/Erick Cáceres(gris).webp",
    objectPosition: "top",
    specialties: [
      "Administrativo",
      "Municipal",
      "Autorizaciones y Licencias",
      "Empresarial",
      "Societario",
      "Civil",
      "Procesal"
    ],
    education: [
      { title: "Bachiller en Derecho", institution: "Universidad Tecnológica del Perú" },
      { title: "Diploma de Especialización en Derecho Tributario y Procedimiento de Ejecución Coactiva", institution: "Ilustre Colegio de Abogados de Lima" }
    ],
    experience: [
      { title: "Consultor de riesgos en entornos digitales y reestructuración de procesos empresariales", company: "Asesor legal externo" },
      { title: "Asesor legal", company: "Corporación Rockys (Pollerías Rockys, El auténtico Rodizio, Karaoke Sopranos, Villapan, Scencia y Viena)" },
      { title: "Profesional en Derecho", company: "Continental, Standford y Tiendas Utilex" }
    ],
    academic: []
  },
  {
    id: "max-carbonel",
    name: "Max Carbonel Puicón",
    role: "Consultor Estratégico de Operaciones Empresariales",
    image: "/images/staff/Max Carbonel(gris).webp",
    specialties: [
      "Administración",
      "Contabilidad",
      "Finanzas",
      "Concursal",
      "Planeamiento Estratégico y Financiero",
      "Liquidación empresarial"
    ],
    education: [
      { title: "Maestría en Dirección Financiera", institution: "Universidad de Piura" },
      { title: "Profesional en Administración de Negocios con especialidad en Finanzas", institution: "Universidad San Juan Bautista" },
      { title: "Diploma de Especialización en Dirección en Finanzas Corporativas", institution: "Universidad ESAN" }
    ],
    experience: [
      { title: "Administrador principal y responsable de Finanzas", company: "Almerco Abogados & Consultores" },
      { title: "Controller financiero", company: "Consultores A1" },
      { title: "Asesor en asuntos administrativos, contables y financieros de diversas empresas del mercado nacional e internacional", company: "Independiente" }
    ],
    academic: []
  },
  {
    id: "hugo-cuadros",
    name: "Hugo Sebastian Cuadros Rodriguez",
    role: "Abogado Asociado · Asuntos de Mercado",
    image: "/images/staff/Hugo Cuadros(gris).webp",
    specialties: [
      "Derecho Civil",
      "Derecho Penal",
      "Derecho Administrativo",
      "Protección de Datos Personales",
      "Derecho de Consumo",
      "Litigios y Controversias"
    ],
    education: [
      { title: "Abogado (Mención: Excelente)", institution: "Universidad Católica Sedes Sapientiae" },
      { title: "Bachiller en Derecho", institution: "Universidad Católica Sedes Sapientiae" }
    ],
    courses: [
      { title: "Curso en Medidas Cautelares", institution: "Cátedra Jurídica" },
      { title: "Curso de Litigación Oral", institution: "American Bar Association" },
      { title: "Curso en Neuroderecho y Biotecnología", institution: "Universidad Central de Chile" },
      { title: "Participación en XXII CADER", institution: "SUNARP" }
    ],
    experience: [
      { title: "Analista Legal", company: "Mercado & Competencia" },
      { title: "Auxiliar Legal", company: "Sarango Mendoza Abogados" },
      { title: "Practicante Preprofesional", company: "Paz Panduro Asesores & Consultores" }
    ],
    academic: [
      "Ponente Nacional e Internacional — Participación en eventos en Perú, Chile, Ecuador y Colombia",
      "Autor — «La minería en el Perú: un arma de doble filo para el progreso nacional»",
      "Autor — «Justicia inclusiva y tecnología: acceso a la justicia mediante IA»",
      "Tesis — «El uso de la inteligencia artificial en la administración de justicia peruana»",
      "Reconocimiento — Ganador de concurso de artículos jurídicos",
      "Reconocimiento — 2° lugar en concurso de ensayos – CONADIS"
    ]
  },
  {
    id: "leticia-villafuerte",
    name: "Leticia Guadalupe Villafuerte Alarcón",
    role: "Analista Legal Senior",
    image: "/images/staff/Leticia Villafuerte(gris).webp",
    specialties: [
      "Derecho Civil Patrimonial y Extrapatrimonial",
      "Derecho Penal",
      "Derecho Procesal",
      "Protección de Datos Personales",
      "Derecho del Consumo",
      "Litigios y Controversias"
    ],
    education: [
      { title: "Egresada (Mención: Tercio Superior)", institution: "Universidad Tecnológica del Perú" }
    ],
    courses: [
      { title: "Curso de conciliación extrajudicial", institution: "CIADERCO (2021)" },
      { title: "Conciliación extrajudicial especializado en familia", institution: "CIADERCO (2021)" },
      { title: "Diplomado especializado en el Nuevo Código Procesal Penal y Litigación Oral", institution: "Colegio de Abogados del Callao e IPEC (2021)" },
      { title: "Redacción jurídica y atención al usuario", institution: "Ilustre Colegio de Abogados de Tumbes y Professional Education (2021)" }
    ],
    experience: [
      { title: "Analista Legal", company: "Mercado & Competencia" },
      { title: "Asistente de despacho", company: "Juzgado de Paz Letrado de Tránsito y Seguridad Vial" },
      { title: "Asistente de despacho", company: "Juzgado de Paz Letrado" },
      { title: "Programa Secigra", company: "Juzgado de Paz Letrado" },
      { title: "Voluntariado universitario", company: "Fiscalía especializada en violencia contra la mujer e integrantes del grupo familiar" }
    ],
    academic: [
      "Reconocimiento — Integrante del Programa GENERACIÓN TOP (Comunidad exclusiva de alumnos talentosos respaldados por la Universidad Tecnológica del Perú, 2022-I)"
    ]
  },
  {
    id: "valeria-sevillano",
    name: "Valeria Andrea Sevillano Quispe",
    role: "Analista Legal Senior",
    image: "/images/staff/Valeria Sevillano(gris).webp",
    objectPosition: "top",
    specialties: [
      "Derecho Civil Patrimonial y Extrapatrimonial",
      "Derecho Inmobiliario",
      "Propiedad Horizontal",
      "Derecho Procesal",
      "Litigios y Controversias"
    ],
    education: [
      { title: "Estudiante de Derecho", institution: "Universidad Católica Sedes Sapientiae" }
    ],
    courses: [
      { title: "Programa Especialista en Excel empresarial", institution: "" },
      { title: "Curso de Especialización en Argumentación y redacción jurídica", institution: "" },
      { title: "Diplomado Especializado en Derecho Civil y Código Procesal Civil", institution: "" }
    ],
    experience: [
      { title: "Analista Legal", company: "Mercado & Competencia" },
      { title: "Auxiliar Administrativo", company: "Juzgado Civil del Módulo Básico de Justicia de Los Olivos" },
      { title: "Auxiliar legal", company: "2do Juzgado de Paz Letrado del Módulo Básico de Justicia de Los Olivos" }
    ],
    academic: []
  }
];
