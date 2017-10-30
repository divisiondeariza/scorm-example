# scorm-example
Ejemplo básico para empaquetar una web app como paquete SCORM. En [SCORMGeneric.js](https://github.com/divisiondeariza/scorm-example/blob/master/SCORMGeneric.js) Contiene dos funciones útiles para la gestión de las variables:

#### SCOInitialize()
>[Ver código](https://github.com/divisiondeariza/scorm-example/blob/master/SCORMGeneric.js#L22)

Se encarga de localizar la API que el framework de SCORM crea automáticamente dentro del documento.

#### SCOFinish()
>[Ver código](https://github.com/divisiondeariza/scorm-example/blob/master/SCORMGeneric.js#L36)

Envía la señal de finalización al paquete de SCRUM

## Manejo de los campos 
Una vez inicializado el paquete SCORM, es posible llamara la API deste la variable global *objAPI*, por ejemplo, para asignar al campo cmi.core.lesson el valor *completed* se llama

```javascript
  objAPI.LMSSetValue("cmi.core.lesson_status","completed");
```

### Campos modificables
Los campos modificables son:

- cmi
  - core
    - student_id
    - student_name 
    - lesson_location
    - credit
    - lesson_status
    - entry
    - score 
      - raw
      - min 
      - max
    - total_time
    - lesson_mode
    - exit
    - session_time   
  - suspend_data
  - launch_data
  - comments
  - comments_from_lms
  - objectives
  - student_data
    - mastery_score
    - max_time_allowed
    - time_limit_action
  - student_preference
    - audio
    - language
    - speed
    - text
  - interactions
