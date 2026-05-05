# 04. Visitas

Gestiona visitas sociales a colaboradores desde su creación hasta su cierre. Este módulo es el núcleo operativo de la plataforma y te permite planificar grupos de visitas, revisar información detallada, y procesar visitas a través de diferentes estados: pendientes, validadas, confirmadas y rechazadas.

## Objetivo

Organizar grupos de visitas, capturar información detallada de colaboradores, validar datos, confirmar visitas y migrar información a sistemas de nómina.

## Grupos de Visitas

Los grupos organizan campañas de visitas, asignando empleados a encuestadores específicos.

![Grupos de Visitas - Buscador](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/01.Buscador.png)

### Funcionalidad principal

**Qué puedes hacer:**

- **Buscar** - Localiza grupos existentes por nombre o criterio de búsqueda.
- **Crear** - Establece nuevos grupos asignando empleados y usuarios encuestadores.
- **Asignar** - Vincula colaboradores específicos a usuarios para división de trabajo.
- **Editar** - Modifica datos del grupo, empleados asignados o responsables.
- **Eliminar** - Remueve grupos completados o que no aplican.

### Cuándo usarlo

Utiliza esta sección antes de iniciar una campaña de visitas. Organiza los colaboradores a visitar y asigna cada grupo a los usuarios que realizarán las encuestas.

---

## Lista de Visitas

Procesa visitas en ciclo de vida desde captura hasta cierre. Cada visita pasa por estados que reflejan su validación y confirmación: desde pendientes (sin revisar) hasta confirmadas (procesadas) o rechazadas (con errores).

### Estados de la visita

Las visitas fluyen a través de estos estados para garantizar calidad de información:

```
Pendientes → Validadas → Confirmadas
                    ↓
                Rechazadas (corrección)
```

---

### Visitas Pendientes

Captura inicial de información de colaboradores. Incluye formularios detallados por secciones temáticas.

![Visitas Pendientes - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/01.Buscador.png)

#### Funcionalidad principal

**Qué puedes hacer:**

- **Buscar** - Localiza visitas pendientes por empleado, grupo o usuario.
- **Revisar por secciones** - Accede a formularios detallados:
  - *General* - Datos básicos de la visita
  - *Identificación* - Documentos y datos personales del colaborador
  - *Ubicación* - Domicilio y acceso geográfico
  - *Familia* - Información del núcleo familiar
  - *Economía* - Ingresos, gastos y situación financiera
  - *Salud* - Información médica y de cobertura
  - *Vivienda* - Condiciones de habitabilidad
  - *Trabajo* - Historial y situación laboral
  - *Transporte* - Acceso a movilidad
  - *Anexos* - Documentos adjuntos y evidencia
- **Marcar validada** - Confirma que la información es correcta y completa.
- **Rechazar** - Indica inconsistencias o errores que requieren corrección.

#### Cuándo usarlo

Inicia aquí después de crear grupos. Revisa cada sección completada durante la encuesta de campo. Valida cuando todos los datos son correctos o rechaza para recolectar información actualizada.

---

### Visitas Validadas

Visitas con información revisada y aprobada, pendientes de confirmación final.

#### Funcionalidad principal

**Qué puedes hacer:**

- **Buscar** - Localiza visitas validadas.
- **Marcar confirmada** - Autoriza el cierre de la visita y prepara para migración a nómina.
- **Rechazar** - Detecta errores posteriores a la validación inicial.

#### Cuándo usarlo

Revisa visitas validadas para confirmación final antes de procesar a nómina. Esta es la etapa de control de calidad previo al cierre.

---

### Visitas Confirmadas

Visitas completamente procesadas y listas para integración con sistemas de nómina o archivo.

#### Funcionalidad principal

**Qué puedes hacer:**

- **Consultar** - Revisa visitas cerradas y su información final.
- **Migrar a nómina** - Transfiere información confirmada a sistemas de payroll.
- **Comparar información** - Valida datos de visita contra registros existentes en nómina para detectar cambios o inconsistencias.
- **Generar reportes** - Obtén constancia de visitas confirmadas.

#### Cuándo usarlo

Usa esta sección para operaciones post-visita: migración de datos, auditoría comparativa, y archivado de información procesada.

---

### Visitas Rechazadas

Visitas que no pasaron validación y requieren corrección o reinvestigación.

#### Funcionalidad principal

**Qué puedes hacer:**

- **Consultar historial** - Accede al listado de visitas rechazadas.
- **Ver detalle** - Revisa razones del rechazo y secciones con inconsistencias.
- **Reabrir o reasignar** - Prepara la visita para reinvestigación con nueva información.

#### Cuándo usarlo

Utiliza esta sección para dar seguimiento a visitas problemáticas. Identifica si se requiere nueva encuesta de campo o corrección de errores de captura.

---

## Acciones Adicionales

### Vista de Todas las Visitas

Consolidado de todos los estados en una sola vista para análisis y búsquedas globales.

**Qué puedes hacer:**
- Ver resumen de visitas por estado.
- Aplicar acciones rápidas sin cambiar de sección.
- Exportar datos consolidados.

### Configuración de Visita

Ajustes de parámetros base que afectan cómo se captura y procesa información.

**Qué puedes hacer:**
- Consultar configuración de formularios.
- Habilitar o desactivar secciones según necesidad operativa.
- Ajustar validaciones de campo.

---

## Flujo Recomendado

1. **Planificar** - Crear grupos de visitas con empleados y usuarios asignados.
2. **Capturar** - Encuestadores completan formularios detallados en campo (o desde oficina).
3. **Validar** - Revisa secciones de visitas pendientes y marca como validadas.
4. **Confirmar** - Aprueba visitas validadas para cierre operativo.
5. **Procesar** - Migra visitas confirmadas a nómina.
6. **Auditar** - Consulta confirmadas para comparación y archivado.
7. **Gestionar rechazos** - Maneja visitas problemáticas con reinvestigación según sea necesario.

## Seguridad y Buenas Prácticas

- **Validación de datos** - Revisa todas las secciones antes de marcar como validada. Inconsistencias pueden retrasar procesamiento.
- **Comparación pre-nómina** - Siempre compara información de visita con registros de nómina antes de migrar, especialmente en cambios de salarios o situación laboral.
- **Documentación** - Adjunta evidencia (fotos, documentos) en la sección de anexos cuando sea requerida por política.
- **Oportunidad** - Procesa visitas rápidamente para evitar que información se desactualice entre captura y cierre.
