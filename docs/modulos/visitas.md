# 04. Visitas

Gestiona visitas sociales a colaboradores desde su creación hasta su cierre. Este módulo es el núcleo operativo de la plataforma y te permite planificar grupos de visitas, revisar información detallada por secciones, y procesar visitas a través de sus diferentes estados: pendientes, validadas, confirmadas y rechazadas.

## Objetivo

Organizar grupos de visitas, capturar y revisar información detallada de colaboradores por secciones, validar datos, confirmar visitas y migrar información a sistemas de nómina.

---

## Grupos de Visitas

Los grupos organizan campañas de visitas, asignando empleados a encuestadores específicos.

### Buscar grupos

![Grupos de Visitas - Buscador](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/01.Buscador.png)

Desde la vista principal puedes localizar grupos existentes por nombre. La tabla muestra los grupos registrados con sus acciones disponibles.

### Asignar empleados al grupo

![Asignar Empleados al Grupo](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/02.Asignar_Empleados_Grupo.png)

Selecciona los colaboradores que serán visitados dentro de este grupo. Puedes agregar múltiples empleados en una sola operación.

### Visualizar empleados asignados

![Visualizar Empleados Asignados](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/03.Visualizar_Empleados_Asignados.png)

Consulta el listado de empleados ya vinculados al grupo. Desde aquí puedes verificar asignaciones y hacer ajustes si es necesario.

### Asignar usuarios al grupo

![Asignar Usuarios al Grupo](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/04.Asignar_Usuarios_Grupo.png)

Vincula a los encuestadores (usuarios del sistema) responsables de realizar las visitas de este grupo. Cada usuario verá en la app móvil solo los empleados asignados a él.

### Editar información del grupo

![Editar Información del Grupo](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/05.Editar_Informacion_Grupo.png)

Modifica el nombre, descripción u otros datos del grupo. Los cambios aplican de inmediato sin afectar las visitas ya capturadas.

### Eliminar grupo

![Eliminar Grupo](/img/AplicacionWeb/04.Visitas/Grupos%20de%20Visitas/06.Eliminar_Grupo.png)

Elimina grupos completados o creados por error. El sistema solicita confirmación antes de ejecutar la eliminación.

> **Cuándo usar esta sección:** Antes de iniciar una campaña de visitas. Crea el grupo, asigna los colaboradores a visitar y define los encuestadores responsables.

---

## Lista de Visitas

Procesa visitas en ciclo de vida desde captura hasta cierre. Cada visita pasa por estados que reflejan su progreso de revisión:

```
Pendientes → Validadas → Confirmadas
                ↓
           Rechazadas (para corrección)
```

### Acciones generales sobre visitas

Desde la vista principal de lista puedes gestionar registros de forma directa.

**Buscar visitas**

![Lista de Visitas - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/00.Acciones/15.Lista_Visitas_Buscador.png)

Filtra el listado por empleado, grupo, estado u otros criterios. Accede rápidamente al registro que necesitas revisar.

**Editar visita**

![Lista de Visitas - Editar](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/00.Acciones/15.Lista_Visitas_Editar.png)

Modifica datos generales de una visita directamente desde el listado sin necesidad de abrir el detalle completo.

**Eliminar visita**

![Lista de Visitas - Eliminar](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/00.Acciones/15.Lista_Visitas_Eliminar.png)

Remueve registros incorrectos o duplicados. El sistema solicita confirmación para evitar eliminaciones accidentales.

---

### Visitas Pendientes

Visitas capturadas en campo que aún no han sido revisadas. Contienen formularios detallados por secciones temáticas del colaborador.

#### Buscar visitas pendientes

![Visitas Pendientes - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/01.Buscador.png)

Vista principal con todas las visitas pendientes de revisión. Filtra por empleado, encuestador o grupo para localizar rápidamente el registro.

#### Acciones disponibles por visita

![Visitas Pendientes - Acciones](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/02.Acciones.png)

Desde el menú de acciones de cada visita puedes abrir el detalle por sección, marcar como validada o rechazar el registro.

#### Detalle — Sección General

![Sección General](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/03.Secion_General.png)

Muestra los datos básicos de la visita: fecha, encuestador, grupo y colaborador. Es el punto de partida para revisar el formulario completo.

**Marcar como validada**

![Marcar Validado](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/03.Seccion_General_MarcarValidado.png)

Cuando toda la información del formulario es correcta y completa, usa esta opción para mover la visita al estado **Validada**.

**Rechazar visita**

![Rechazar Visita](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/03.Seccion_General_Rechazar.png)

Si detectas inconsistencias o datos incorrectos, rechaza la visita indicando el motivo. El registro pasa al estado **Rechazada** para corrección.

#### Detalle — Sección Identificación

![Sección Identificación](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/04.Seccion_Identificacion.png)

Muestra documentos de identidad, número de empleado y datos personales del colaborador. Verifica que coincidan con los registros de RH.

#### Detalle — Sección Ubicación

![Sección Ubicación](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/05.Seccion_Ubicacion.png)

Contiene dirección completa y referencia geográfica del domicilio del colaborador capturada durante la visita.

#### Detalle — Sección Familia

![Sección Familia](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/06.Seccion_Familia.png)

Lista los integrantes del núcleo familiar: nombre, parentesco, edad y ocupación.

**Acciones sobre miembros de familia**

![Sección Familia - Acciones](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/06.Seccion_Familia_Acciones.png)

Sobre cada integrante puedes editar su información o eliminarlo del registro si fue capturado incorrectamente.

**Editar integrante**

![Sección Familia - Editar](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/06.Seccion_Familia_Editar.png)

Modifica los datos de un familiar: nombre, parentesco, fecha de nacimiento u otros campos capturados en campo.

**Eliminar integrante**

![Sección Familia - Eliminar](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/06.Seccion_Familia_Eliminar.png)

Remueve un integrante registrado por error o que ya no forma parte del núcleo familiar.

#### Detalle — Sección Dinámica Familiar

![Sección Dinámica Familiar](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/07.Seccion_DinamicaFamiliar.png)

Captura información sobre la convivencia, relaciones y situación afectiva del colaborador en su entorno familiar.

#### Detalle — Sección Economía

![Sección Economía](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/08.Seccion_Economia.png)

Refleja ingresos, gastos y situación financiera del hogar. Útil para evaluar el contexto socioeconómico del colaborador.

#### Detalle — Sección Salud

![Sección Salud](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/09.Seccion_Salud.png)

Contiene información sobre cobertura médica, enfermedades crónicas y condiciones de salud del colaborador y su familia.

#### Detalle — Sección Vivienda

![Sección Vivienda](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/10.Seccion_Vivienda.png)

Describe las condiciones físicas del hogar: tipo de construcción, número de habitaciones, servicios básicos y estado general.

#### Detalle — Sección Trabajo

![Sección Trabajo](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/11.Seccion_Trabajo.png)

Muestra historial laboral, antigüedad, puesto actual y situación dentro de la empresa.

#### Detalle — Sección Transporte

![Sección Transporte](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/12.Seccion_Trasporte.png)

Registra el medio de transporte utilizado por el colaborador: tiempo de traslado, tipo de transporte y costo aproximado.

#### Detalle — Sección Anexos

![Sección Anexos](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/01.Pendientes/13.Seccion_Anexos.png)

Documentos adjuntos y fotografías capturadas durante la visita como evidencia. Verifica que los archivos sean legibles y correspondan al colaborador correcto.

> **Cuándo usar Pendientes:** Después de que los encuestadores sincronizan visitas desde la app móvil. Revisa cada sección y valida cuando la información es correcta y completa, o rechaza si hay inconsistencias.

---

### Visitas Validadas

Visitas con información revisada y aprobada, pendientes de confirmación final antes de ser procesadas.

#### Buscar visitas validadas

![Visitas Validadas - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/02.Validadas/01.Seccion_Buscador.png)

Listado de visitas que pasaron la revisión inicial. Desde aquí puedes confirmar o rechazar cada registro.

#### Marcar como confirmada

![Marcar Confirmado](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/02.Validadas/02.MarcarConfirmado.png)

Autoriza el cierre de la visita cuando la información es correcta y está lista para procesarse o migrarse a nómina.

#### Rechazar visita validada

![Rechazar Visita Validada](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/02.Validadas/03.Rechazar.png)

Si durante una revisión posterior se detecta un error, puedes rechazar la visita incluso desde este estado para enviarla a corrección.

> **Cuándo usar Validadas:** Esta es la etapa de control de calidad final. Confirma solo cuando estés seguro de que la información es precisa y completa antes de pasar a nómina.

---

### Visitas Confirmadas

Visitas completamente aprobadas y listas para integración con sistemas de nómina o archivo definitivo.

#### Buscar visitas confirmadas

![Visitas Confirmadas - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/01.Seccion_Buscador.png)

Vista con todas las visitas en estado confirmado. Puedes consultar su detalle o iniciar el proceso de migración a nómina.

#### Iniciar migración a nómina

![Migrar a Nómina](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/02.MigrarNomina.png)

Desde el menú de acciones, selecciona **Migrar a Nómina** para iniciar el proceso de transferencia de datos al sistema de payroll.

#### Seleccionar fecha de ingreso (nuevo colaborador)

![Seleccionar Fecha de Ingreso](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/03.NuevoColaborador_Seleccionar_FechaIngresoAEmpresa.png)

Si el colaborador es nuevo en la empresa, el sistema solicita la fecha de ingreso antes de proceder con la migración.

#### Comparar información: Visita vs Nómina

![Comparar Información Visita vs Nómina](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/04.CompararInformacion_VisitavsNominaGP.png)

Vista lado a lado de los datos capturados en la visita versus los registros actuales en el sistema de nómina. Identifica diferencias en salarios, situación laboral u otros campos antes de confirmar la migración.

#### Confirmar migración

![Confirmar Migración](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/05.ConfirmarMigracion.png)

Revisa el resumen de cambios a aplicar en nómina. Confirma la operación para ejecutar la transferencia de datos.

#### Migración exitosa

![Mensaje Éxito en Migración](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/03.Confirmadas/06.MensajeExitoMigracion.png)

El sistema muestra un mensaje de confirmación cuando la migración se completó correctamente. La visita queda registrada como procesada.

> **Cuándo usar Confirmadas:** Para operaciones post-visita: migración de datos a nómina, auditoría comparativa y archivado. Siempre compara la información antes de confirmar la migración para evitar errores en nómina.

---

### Visitas Rechazadas

Visitas que no pasaron la validación y requieren corrección o reinvestigación en campo.

#### Buscar visitas rechazadas

![Visitas Rechazadas - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/04.Rechazadas/01.Buscador.png)

Listado de visitas rechazadas en cualquier etapa del proceso. Identifica cuáles requieren atención inmediata.

#### Acciones sobre visitas rechazadas

![Visitas Rechazadas - Acciones](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/04.Rechazadas/02.Acciones.png)

Desde el menú de acciones puedes consultar el detalle completo o preparar la visita para reinvestigación asignándola nuevamente al encuestador.

#### Consultar información de la visita

![Consultar Información](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/04.Rechazadas/03.ConsultarInformacion.png)

Revisa el detalle completo del registro rechazado: secciones capturadas, motivo del rechazo y datos problemáticos que requieren corrección.

> **Cuándo usar Rechazadas:** Para dar seguimiento a visitas con errores. Identifica si el problema fue de captura (corregible en sistema) o si requiere nueva visita de campo.

---

### Todas las Visitas

Vista consolidada de registros en todos los estados para análisis global y búsquedas transversales.

#### Buscador general

![Todas las Visitas - Buscador](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/05.Todas/01.Buscador.png)

Filtra el listado completo sin importar el estado de cada visita. Útil para reportes rápidos o localizar un registro específico.

#### Acciones desde vista general

![Todas las Visitas - Acciones](/img/AplicacionWeb/04.Visitas/Lista%20de%20Visitas/05.Todas/02.Acciones.png)

Aplica acciones sobre cualquier visita directamente desde esta vista sin necesidad de navegar al estado específico.

---

## Flujo Recomendado

1. **Planificar** — Crear grupos de visitas con empleados y usuarios asignados.
2. **Capturar** — Encuestadores completan formularios desde la app móvil en campo.
3. **Sincronizar** — Las visitas llegan al sistema web como **Pendientes**.
4. **Validar** — Revisar cada sección del formulario. Marcar como validada o rechazar según corresponda.
5. **Confirmar** — Aprobar visitas validadas para cierre operativo.
6. **Migrar** — Transferir visitas confirmadas a nómina, comparando información previa.
7. **Auditar** — Consultar confirmadas para archivado y seguimiento.
8. **Corregir** — Gestionar rechazadas asignando para reinvestigación cuando sea necesario.

## Buenas Prácticas

- **Revisa todas las secciones** antes de marcar una visita como validada. Omitir secciones puede generar datos incompletos en nómina.
- **Compara siempre** información de visita vs nómina antes de migrar, especialmente en cambios de salario o situación laboral.
- **Adjunta evidencia** en la sección de Anexos cuando la política lo requiera (fotos del domicilio, documentos firmados).
- **Procesa con oportunidad** — Valida y confirma rápidamente para evitar que la información se desactualice entre la captura y el cierre.
- **Documenta el rechazo** — Al rechazar una visita, indica claramente el motivo para que el encuestador sepa exactamente qué corregir.
