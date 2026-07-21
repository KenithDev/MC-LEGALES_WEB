export interface ServiceItem {
  text: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

export interface SubSpecialty {
  id: string;
  name: string;
  sidebarImage?: string;
  breakImage?: string;
  categories: ServiceCategory[];
}

export interface Especialidad {
  id: string;
  title: string;
  /** Hero image, 4:3 (right column on desktop, full width on mobile) */
  heroImage: string;
  /** Sidebar image, 4:5 (sticky next to the anchor nav) */
  sidebarImage: string;
  /** object-position for the sidebar image — lets you adjust the crop */
  sidebarObjectPosition?: string;
  /** Editorial break image, 16:9 (between category 3 and 4) */
  breakImage: string;
  /** Optional quote overlaid on the editorial break */
  breakQuote?: string;
  ctaImage?: string;
  categories: ServiceCategory[];
  subSpecialties?: SubSpecialty[];
}

// Company WhatsApp number (matches the site footer)
export const WHATSAPP_NUMBER = "51987208575";

export function buildWhatsAppLink(specialtyTitle: string): string {
  const message = encodeURIComponent(
    `Hola, me gustaría recibir más información sobre el servicio de ${specialtyTitle}.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const especialidades: Especialidad[] = [
  {
    id: "derecho-laboral",
    title: "Derecho Laboral y Migratorio",
    heroImage: "/images/servicios/HeroderechoLaboral.webp",
    sidebarImage: "/images/servicios/migraciones.webp",
    sidebarObjectPosition: "center center",
    breakImage: "/images/servicios/derechoLaboral2.webp",
    breakQuote:
      "Más de 10 años asesorando en cumplimiento laboral y migratorio.",
    ctaImage: "/images/servicios/migracionesCTA.webp",
    categories: [
      {
        id: "asesoria-especializada",
        name: "Asesoría especializada",
        items: [
          { text: "Contratación y desvinculación de personal" },
          { text: "Planificación y elaboración de contratos" },
          { text: "Tercerización laboral" },
          {
            text: "Redacción, revisión y modificación del Reglamento Interno de Trabajo (RIT)",
          },
          {
            text: "Redacción, revisión y modificación del Reglamento de Organización y Funciones (ROF)",
          },
          { text: "Negociación colectiva de sindicatos" },
          { text: "Beneficios Sociales" },
          { text: "Régimen Laboral" },
          { text: "Regímenes Laborales Especiales" },
          { text: "Seguros (SCTR, FOLA, Vida Ley, entre otros)" },
        ],
      },
      {
        id: "representacion-legal",
        name: "Representación Legal",
        items: [
          { text: "Litigios administrativos (Sancionadores y Fiscalización)" },
          { text: "Litigios judiciales" },
        ],
      },
      {
        id: "diseno-implementacion",
        name: "Diseño e implementación",
        items: [
          {
            text: "Auditorías laborales y de Seguridad y Salud en el Trabajo (SST)",
          },
          { text: "Reglamentos internos de SST" },
          { text: "Implementación del Sistema de Gestión de SST" },
          { text: "Matrices de requisitos legales laborales y de SST" },
          { text: "Políticas en materia de SST" },
          {
            text: "Protocolos de Prevención y Sanción del Hostigamiento Sexual",
          },
          { text: "Comités y Políticas de Hostigamiento Sexual" },
          { text: "Políticas Salariales" },
          { text: "Políticas de Teletrabajo" },
          { text: "Políticas obligatorias" },
        ],
      },
      {
        id: "migratorio",
        name: "Migratorio",
        items: [
          { text: "Obtención y regularización de calidad migratoria" },
          { text: "Contratación de personal extranjero" },
        ],
      },
      {
        id: "gestion-asesoria-laboral",
        name: "Gestión y Asesoría Laboral para empresas",
        items: [
          { text: "Elaboración y tramitación de contratos laborales" },
          { text: "Elaboración y gestión de planilla" },
          { text: "Contratación de seguros" },
          { text: "Asesoría en prevención de riesgos laborales" },
        ],
      },
      {
        id: "capacitaciones",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
  {
    id: "derecho-empresarial",
    title: "Derecho Empresarial y Societario",
    heroImage: "/images/servicios/derechoEmpresarialHero.webp",
    sidebarImage: "/images/servicios/DerechEmpresarialSidebar.webp",
    sidebarObjectPosition: "center 20%",
    breakImage: "/images/servicios/derechoEmpresarialAñosExp.webp",
    ctaImage: "/images/servicios/DerechoEmpresarialCTA.webp",
    categories: [
      {
        id: "constitucion-reorganizacion",
        name: "Constitución y Reorganización",
        items: [
          { text: "Constitución de EIRL" },
          { text: "Constitución de Sociedades" },
          { text: "Transformación y reorganización Societaria" },
        ],
      },
      {
        id: "disolucion-liquidacion",
        name: "Disolución y Liquidación Societaria",
        items: [
          { text: "Convocatoria a Junta General de Accionistas" },
          { text: "Formalización de poderes" },
          { text: "Publicación de aviso de liquidación" },
          {
            text: "Inscripción de acuerdo de liquidación en Registros Públicos",
          },
          { text: "Asesoría Contable: Servicios tributarios" },
          { text: "Asesoría Laboral: Cese colectivo" },
          { text: "Asesoría y Asistencia Administrativa" },
          { text: "Tasación de Activos" },
          {
            text: "Transferencia de activos hasta su extinción en registros públicos",
          },
          {
            text: "Presentación de demanda de declaración judicial de quiebra",
          },
          {
            text: "Trámite de partes registrales e inscripción de quiebra en Registros Públicos",
          },
        ],
      },
      {
        id: "estatutos-sociales",
        name: "Estatutos sociales y alcances generales",
        items: [
          { text: "Elaboración y modificación de estatutos sociales" },
          { text: "Aumento o disminución del capital social" },
          { text: "Ampliación o modificación de objeto social" },
          { text: "Acuerdos de inversión" },
          { text: "Reparto de utilidades" },
          { text: "Administración societaria" },
          { text: "Nombramiento o remoción de Directores" },
          { text: "Nombramiento o remoción de Gerentes" },
          { text: "Nombramiento o remoción de Apoderados" },
          {
            text: "Elaboración de las facultades y limitaciones de los administradores de la sociedad",
          },
          { text: "Revisión de apoderados y facultades otorgadas" },
        ],
      },
      {
        id: "junta-general-accionistas",
        name: "Junta General de Accionistas",
        items: [
          { text: "Convocatoria" },
          { text: "Juntas Obligatoria Anual" },
          { text: "Juntas Especiales" },
          { text: "Actas de asambleas" },
          {
            text: "Revisión de Junta General de Accionistas anual obligatoria",
          },
        ],
      },
      {
        id: "convenios-contratos",
        name: "Convenios y Contratos",
        items: [
          { text: "Convenio de accionistas" },
          { text: "Transferencia de acciones" },
          { text: "Contratos preparatorios" },
          { text: "Contratos financieros" },
          { text: "Franquicia" },
          { text: "Vesting" },
          { text: "Licenciamiento marcario" },
          { text: "Asociación en participación" },
          { text: "Consorcios" },
        ],
      },
      {
        id: "financiero",
        name: "Financiero",
        items: [
          { text: "Revisión y/o elaboración de plan de negocio" },
          { text: "Revisión de la idea de negocios" },
          { text: "Implementación del plan de negocios" },
          {
            text: "Revisión de aspectos macroeconómicos y microeconómicos de su emprendimiento.",
          },
          { text: "Elaboración del planeamiento estratégico" },
          {
            text: "Elaboración del plan financiero (Presupuesto, Flujo de caja económico y financiero, VAN, TIR, entre otros).",
          },
        ],
      },
    ],
  },
  {
    id: "litigio-y-controversia",
    title: "Litigios y Controversias",
    heroImage: "/images/servicios/LitigioControversiaHero.webp",
    sidebarImage: "/images/servicios/Litigio y Controversia.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/Litigio y Controversia.webp",
    ctaImage: "/images/servicios/LitigioControversiaCTA.webp",
    categories: [
      {
        id: "representacion-legal",
        name: "Representación Legal",
        items: [
          { text: "Litigios judiciales" },
          { text: "Litigios arbitrales" },
          { text: "Litigios administrativos" },
          {
            text: "Mecanismos alternativos de resolución de conflictos (Conciliación, Negociación, Mediación y Transacción)",
          },
        ],
      },
    ],
  },
  {
    id: "derecho-administrativo",
    title: "Derecho Administrativo",
    heroImage: "/images/servicios/derechoadministrativoHero.webp",
    sidebarImage: "/images/servicios/derechoadministrativoSidebar.webp",
    breakImage: "/images/servicios/DerechoAdministrativo.webp",
    ctaImage: "/images/servicios/derechoadministrativoCTA.webp",
    categories: [
      {
        id: "procedimientos-administrativos",
        name: "Procedimientos Administrativos",
        items: [
          { text: "Organismos Públicos" },
          { text: "Organismos Reguladores" },
          { text: "Procesos Judiciales" },
          { text: "Acciones Contenciosas Administrativas" },
        ],
      },
      {
        id: "personas-juridicas",
        name: "Personas jurídicas",
        items: [
          { text: "Licencia de Funcionamiento" },
          {
            text: "Certificado de Defensa Civil para diversos establecimientos",
          },
          { text: "Autorización de elementos de seguridad" },
          { text: "Certificado de conformidad de obras públicas" },
          {
            text: "Autorización para ejecución de obras de construcción, mejora e instalaciones de mobiliario",
          },
          {
            text: "Autorización para la instalación de elementos de seguridad (rejas, batientes, plumas levadizas y casetas de vigilancia)",
          },
          { text: "Autorización para ejecución de obras en vía pública" },
          { text: "Proyectos de Inversión Pública (PIP)" },
        ],
      },
      {
        id: "personas-naturales",
        name: "Personas naturales",
        items: [
          { text: "Expedición de Certificado Domiciliario" },
          { text: "Atención de solicitud de servicios y quejas" },
          {
            text: "Rectificación Administrativa de Partida de Nacimiento, Defunción y/o Matrimonio",
          },
          {
            text: "Constancia de No Inscripción en el Registro de Nacimientos, Defunciones y/o Matrimonios",
          },
          { text: "Copia Certificada de Acta de Celebración de Matrimonio" },
        ],
      },
    ],
  },
  {
    id: "derecho-civil",
    title: "Derecho Civil",
    heroImage: "/images/servicios/derechocivilHero.webp",
    sidebarImage: "/images/servicios/derechocivilSidebar.webp",
    breakImage: "/images/servicios/derechocivilAñosExp.webp",
    ctaImage: "/images/servicios/derechocivilCTA.webp",
    categories: [
      {
        id: "responsabilidad-civil",
        name: "Responsabilidad Civil",
        items: [
          { text: "Contractual y Extracontractual" },
          { text: "Individual y Solidaria" },
        ],
      },
      {
        id: "contratos",
        name: "Contratos",
        items: [
          { text: "Compraventa de bienes" },
          { text: "Compraventa de bien futuro" },
          { text: "Arrendamiento" },
          { text: "Factoring" },
          { text: "Franquicia" },
          { text: "Permutas" },
          { text: "Mutuos" },
          { text: "Obra" },
          { text: "Servidumbre" },
          { text: "Suministro" },
          { text: "Locación de servicios" },
          { text: "Subcontratación" },
          { text: "Cesión de posición contractual" },
        ],
      },
      {
        id: "convenios-especiales",
        name: "Convenios Especiales",
        items: [
          { text: "Obligaciones personales" },
          { text: "Arras preparatorias y penales" },
          { text: "Acuerdo de confidencialidad" },
          { text: "Cláusula de exclusividad" },
          { text: "Renuncia del fuero" },
          { text: "Convenios arbitrales" },
          { text: "Estrategias preventivas de contratación" },
        ],
      },
      {
        id: "notarial-registral",
        name: "Notarial y Registral",
        items: [
          { text: "Cartas Notariales" },
          { text: "Prescripción Adquisitiva de Dominio" },
          { text: "Anticipo de legítimas" },
          { text: "Constitución de garantías" },
          { text: "Levantamiento de cargas y gravámenes" },
          { text: "Constitución de Asociaciones" },
        ],
      },
      {
        id: "representacion-legal-civil",
        name: "Representación Legal",
        items: [
          { text: "Etapas pre-litigiosas" },
          { text: "Litigios administrativos" },
          { text: "Litigios judiciales" },
          { text: "Litigios arbitrales" },
        ],
      },
      {
        id: "mecanismos-alternativos",
        name: "Mecanismos alternativos de resolución de conflictos",
        items: [{ text: "Conciliación, Negociación, Mediación y Transacción" }],
      },
    ],
  },
  {
    id: "derecho-penal",
    title: "Derecho Penal",
    heroImage: "/images/servicios/derechopenalHero.webp",
    sidebarImage: "/images/servicios/derechopenalSidebar.webp",
    breakImage: "/images/servicios/DerechoPenal.webp",
    ctaImage: "/images/servicios/derechopenalCTA.webp",
    categories: [
      {
        id: "representacion-legal-penal",
        name: "Representación legal",
        items: [
          {
            text: "Procesos judiciales (en todas las etapas del proceso penal, desde el inicio de la investigación preliminar hasta juzgamiento, apelación de sentencia y casación)",
          },
        ],
      },
      {
        id: "representacion-legal-penal-corporativa",
        name: "Representación Legal Penal-Corporativa",
        items: [
          {
            text: "Delitos cometidos en el ejercicio de la actividad empresarial",
          },
          { text: "Delitos contra la empresa" },
        ],
      },
      {
        id: "diseno-implementacion-penal",
        name: "Diseño e implementación",
        items: [
          {
            text: "Políticas de prevención de ilícitos que comprometan a la empresa, su patrimonio y a sus representantes a toda escala",
          },
          { text: "Programas de control de riesgos de corrupción y PLAFT" },
        ],
      },
    ],
  },
  {
    id: "proteccion-de-datos",
    title: "Protección de Datos Personales",
    heroImage: "/images/servicios/Proteccion de datos Hero.webp",
    sidebarImage:
      "/images/servicios/Proteccion de datos Personales Sidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/protecciondedatospersonalesAñosExp.webp",
    ctaImage: "/images/servicios/Proteccion de datos personales CTA.webp",
    categories: [
      {
        id: "procedimientos-administrativos",
        name: "Procedimientos Administrativos",
        items: [
          { text: "Registro de Banco de Datos Personales" },
          { text: "Sancionadores y Fiscalización" },
        ],
      },
      {
        id: "diseno-implementacion",
        name: "Diseño e implementación",
        items: [
          { text: "Políticas de Privacidad" },
          { text: "Políticas de Derechos ARCO" },
          { text: "Políticas de Cookies" },
          { text: "Términos y Condiciones" },
          {
            text: "Adecuación contractual para la protección de Datos Personales",
          },
        ],
      },
      {
        id: "operaciones",
        name: "Operaciones",
        items: [
          { text: "Transferencia de Banco de Datos Personales a terceros" },
          { text: "Atención de Derechos ARCO" },
        ],
      },
      {
        id: "autorregulacion",
        name: "Autorregulación",
        items: [
          { text: "Diagnóstico del estado de cumplimiento normativo" },
          {
            text: "Implementación de Políticas para la prevención y eliminación de multas administrativas",
          },
        ],
      },
      {
        id: "procesos-judiciales",
        name: "Procesos Judiciales",
        items: [{ text: "Acciones Contenciosas Administrativas" }],
      },
      {
        id: "capacitaciones",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad Intelectual",
    heroImage: "/images/servicios/propiedadIntelectualHero.webp",
    sidebarImage: "/images/servicios/propiedadIntelectualSidebar.webp",
    sidebarObjectPosition: "center top",
    breakImage: "/images/servicios/propiedadintelectualAñosExp.webp",
    ctaImage: "/images/servicios/Propiedad intelectualCTA.webp",
    categories: [
      {
        id: "registros",
        name: "Registros",
        items: [
          { text: "Marcas" },
          { text: "Nombres y lemas comerciales" },
          { text: "Denominaciones de origen" },
          { text: "Derechos de autor" },
        ],
      },
      {
        id: "asesorias-especializadas",
        name: "Asesorías especializadas",
        items: [
          { text: "Negocios físicos y digitales (Ecommerce)" },
          { text: "Influencers" },
          { text: "Aplicativos" },
          { text: "Agencias publicitarias" },
          { text: "Anunciantes" },
          { text: "Publicidad Medioambiental" },
        ],
      },
      {
        id: "diseno-implementacion",
        name: "Diseño e implementación",
        items: [
          { text: "Contratos" },
          { text: "Campañas publicitarias" },
          { text: "Legales y promociones" },
          { text: "Concursos y sorteos" },
        ],
      },
      {
        id: "autorregulacion",
        name: "Autorregulación",
        items: [
          { text: "Diagnóstico del estado de cumplimiento normativo" },
          {
            text: "Implementación de Políticas para la prevención y eliminación de multas administrativas",
          },
        ],
      },
      {
        id: "procesos-judiciales",
        name: "Procesos Judiciales",
        items: [{ text: "Acciones Contenciosas Administrativas" }],
      },
      {
        id: "capacitaciones",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance de Mercado",
    heroImage: "/images/servicios/CompliancedemercadoHero.webp",
    sidebarImage: "/images/servicios/compliancedemercadoSidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/Compliance de Mercado.webp",
    ctaImage: "/images/servicios/compliancedemercadoCTA.webp",
    categories: [
      {
        id: "analisis-diagnostico",
        name: "Análisis y diagnóstico",
        items: [{ text: "Estado de cumplimiento normativo." }],
      },
      {
        id: "implementacion",
        name: "Implementación",
        items: [
          {
            text: "Estrategias de prevención y mitigación de riesgos regulatorios sobre la actividad empresarial de cada cliente.",
          },
        ],
      },
      {
        id: "accion",
        name: "Acción",
        items: [
          { text: "Eliminación de multas administrativas" },
          {
            text: "Representación ante el INDECOPI, organismos reguladores y defensorías con atribuciones en materia de consumo y el Consejo Nacional de Autorregulación Publicitaria (CONAR).",
          },
        ],
      },
    ],
  },
  {
    id: "proteccion-al-consumidor",
    title: "Protección al Consumidor",
    heroImage: "/images/servicios/protecciondelconsumidorHero.webp",
    sidebarImage: "/images/servicios/ProtecciondeConsumidorSidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/derechoconsumidorAñoExp.webp",
    ctaImage: "/images/servicios/derechoconsumidorCTA.webp",
    categories: [
      {
        id: "procedimientos-administrativos-consumidor",
        name: "Procedimientos Administrativos",
        items: [
          { text: "Protección al Consumidor" },
          { text: "Ejecución (Incumplimientos)" },
          { text: "Coactivos (Multas administrativas)" },
          {
            text: "Especiales (Negativa de información, atención de requerimientos, denuncia maliciosa, entre otros)",
          },
          { text: "Liquidaciones" },
        ],
      },
      {
        id: "mecanismos-alternativos",
        name: "Mecanismos alternativos de resolución de conflictos",
        items: [
          { text: "Libro de Reclamaciones" },
          { text: "Atención de Quejas y Reclamos" },
          { text: "Servicio de Atención al Ciudadano (SAC)" },
          { text: "Conciliación, Mediación y Transacción" },
          { text: "Arbitraje de Consumo" },
        ],
      },
      {
        id: "diseno-implementacion-consumidor",
        name: "Diseño e implementación",
        items: [
          { text: "Contratos" },
          { text: "Términos y Condiciones" },
          { text: "Políticas de Garantías" },
          { text: "Políticas de Cambios y Devoluciones" },
        ],
      },
      {
        id: "autorregulacion-consumidor",
        name: "Autorregulación",
        items: [
          { text: "Diagnóstico del estado de cumplimiento normativo" },
          {
            text: "Implementación de Políticas para la prevención y eliminación de multas administrativas",
          },
        ],
      },
      {
        id: "procesos-judiciales-consumidor",
        name: "Procesos Judiciales",
        items: [{ text: "Acciones Contenciosas Administrativas" }],
      },
      {
        id: "capacitaciones-consumidor",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
  {
    id: "regulacion-publicitaria",
    title: "Regulación Publicitaria",
    heroImage: "/images/servicios/regulacionPublicitariaHero.webp",
    sidebarImage: "/images/servicios/regulacionPublicitariaSidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/regulacionpublicitariaAñoExP.webp",
    ctaImage: "/images/servicios/regulacionpublicitariaCTA.webp",
    categories: [
      {
        id: "procedimientos-administrativos-publicitaria",
        name: "Procedimientos Administrativos",
        items: [
          {
            text: "Regulación Publicitaria (Autenticidad, veracidad, legalidad y adecuación social)",
          },
          { text: "Competencia Desleal" },
          { text: "Ejecución (Incumplimientos)" },
          { text: "Coactivos (Multas administrativas)" },
          {
            text: "Especiales (Negativa de información, atención de requerimientos, entre otros)",
          },
          { text: "Liquidaciones" },
        ],
      },
      {
        id: "asesorias-especializadas",
        name: "Asesorías especializadas",
        items: [
          { text: "Negocios físicos y digitales (Ecommerce)" },
          { text: "Influencers" },
          { text: "Aplicativos" },
          { text: "Agencias publicitarias" },
          { text: "Anunciantes" },
          { text: "Publicidad Medioambiental" },
        ],
      },
      {
        id: "diseno-implementacion-publicitaria",
        name: "Diseño e implementación",
        items: [
          { text: "Contratos" },
          { text: "Campañas publicitarias" },
          { text: "Legales y promociones" },
          { text: "Concursos y sorteos" },
        ],
      },
      {
        id: "autorregulacion-publicitaria",
        name: "Autorregulación",
        items: [
          { text: "Diagnóstico del estado de cumplimiento normativo" },
          {
            text: "Implementación de Políticas para la prevención y eliminación de multas administrativas",
          },
        ],
      },
      {
        id: "procesos-judiciales-publicitaria",
        name: "Procesos Judiciales",
        items: [{ text: "Acciones Contenciosas Administrativas" }],
      },
      {
        id: "capacitaciones-publicitaria",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
  {
    id: "derecho-inmobiliario",
    title: "Derecho Inmobiliario",
    heroImage: "/images/servicios/derechoinmobiliarioHero.webp",
    sidebarImage: "/images/servicios/derechoinmobiliarioSidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/Derecho Inmobiliario.webp",
    ctaImage: "/images/servicios/derechoInmobiliarioCTA.webp",
    categories: [
      {
        id: "servicios-generales",
        name: "Servicios Generales",
        items: [
          { text: "Saneamiento físico" },
          { text: "Saneamiento legal" },
          {
            text: "Revisión de partidas matrices para construcciones inmobiliarias",
          },
        ],
      },
      {
        id: "tramitacion-permisos",
        name: "Tramitación de permisos",
        items: [
          { text: "Construcción" },
          { text: "Demolición" },
          { text: "Interferencia de vía" },
        ],
      },
      {
        id: "elaboracion-revision-negociacion",
        name: "Elaboración, revisión y negociación",
        items: [
          { text: "Contratos de compra-venta de bienes futuros" },
          { text: "Términos de ejecución de obra" },
          {
            text: "Elaboración, revisión e implementación de contratos de obra",
          },
          {
            text: "Elaboración, revisión e implementación de contratos con empresas contratistas, subcontratistas y el Estado",
          },
          {
            text: "Elaboración y constitución de consorcio de ejecución de obra",
          },
          { text: "Negociación con proveedores, clientes y contratistas" },
        ],
      },
      {
        id: "contratos-de-obra",
        name: "Elaboración, negociación, supervisión y administración de contratos de obra",
        items: [
          { text: "Llave en mano" },
          { text: "Suma alzada" },
          { text: "Back to back" },
          { text: "NEC" },
        ],
      },
      {
        id: "contingencias",
        name: "Contingencias y SSOMA",
        items: [
          {
            text: "Revisión de contingencias laborales, SSOMA y planilla de construcción civil",
          },
        ],
      },
    ],
  },
  {
    id: "derecho-concursal",
    title: "Derecho Concursal",
    heroImage: "/images/servicios/DerechoConcursalHero.webp",
    sidebarImage: "/images/servicios/DerechoConcrusalSidebar.webp",
    sidebarObjectPosition: "center",
    breakImage: "/images/servicios/Derecho Concursal.webp",
    ctaImage: "/images/servicios/DerechoConcursalCTA.webp",
    categories: [
      {
        id: "representacion-legal",
        name: "Representación legal",
        items: [
          { text: "Créditos de acreedores" },
          { text: "Empresas concursadas" },
          { text: "Reestructuración integral de pasivos" },
          { text: "Compra de carteras y recuperación de créditos" },
          { text: "Elaboración de planes para reflotamiento empresarial" },
        ],
      },
    ],
  },
  {
    id: "justicia-militar",
    title: "Justicia Militar Policial",
    heroImage: "/images/servicios/JusticiaMilitarHero.webp",
    sidebarImage: "/images/servicios/JusticiamilitarSidebar.webp",
    sidebarObjectPosition: "center top",
    breakImage: "/images/servicios/Justicia Militar Policial.webp",
    ctaImage: "/images/servicios/JusticiaMilitarCTA.webp",
    categories: [
      {
        id: "representacion-militares-policias",
        name: "Representación de Militares y Policías procesados por delitos de función",
        items: [
          { text: "Etapa de investigación preparatoria" },
          { text: "Etapa intermedia" },
          { text: "Etapa de juicio oral" },
        ],
      },
    ],
  },
  {
    id: "derecho-de-seguros",
    title: "Derecho de Seguros",
    heroImage: "/images/servicios/DerechodeSegurosHero.webp",
    sidebarImage: "/images/servicios/DerechodeSegurosSidebar.webp",
    sidebarObjectPosition: "center top",
    breakImage: "/images/servicios/DerechodeSeguros.webp",
    ctaImage: "/images/servicios/DerechodeSegurosCTA.webp",
    categories: [
      {
        id: "asesoramiento-estrategico",
        name: "Asesoramiento estratégico",
        items: [
          { text: "Revisión de las condiciones generales de la póliza" },
          { text: "Recomendación de productos específicos" },
        ],
      },
      {
        id: "representacion-legal",
        name: "Representación legal",
        items: [
          { text: "Litigios administrativos (Indecopi y SBS)" },
          { text: "Litigios arbitrales" },
          { text: "Litigios judiciales" },
        ],
      },
      {
        id: "mecanismos-alternativos",
        name: "Mecanismos alternativos de resolución de conflictos",
        items: [
          { text: "Libro de Reclamaciones" },
          { text: "Atención de Quejas y Reclamos" },
          { text: "Servicio de Atención al Ciudadano (SAC)" },
          { text: "Conciliación, Mediación y Transacción" },
        ],
      },
      {
        id: "autorregulacion",
        name: "Autorregulación",
        items: [
          { text: "Diagnóstico del estado de cumplimiento normativo" },
          {
            text: "Implementación de Políticas para la prevención y eliminación de multas administrativas",
          },
        ],
      },
      {
        id: "procesos-judiciales",
        name: "Procesos Judiciales",
        items: [{ text: "Acciones Contenciosas Administrativas" }],
      },
      {
        id: "capacitaciones",
        name: "Capacitaciones",
        items: [
          { text: "Directorios, gerencias y jefaturas" },
          { text: "Operaciones comerciales y legales" },
        ],
      },
    ],
  },
];

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find((e) => e.id === slug);
}
