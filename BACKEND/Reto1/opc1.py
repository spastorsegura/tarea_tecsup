# 1. Ingresar un nombre y su edad.
# 2. Si es menor de edad que indique que dependiendo de la hora (si es mas de las 6pm) debe ir a dormir y si no hacer la tarea.
# 3. Si es mayor de edad que indique que no esta obligado a hacer nada.
from datetime import datetime, date, time, timedelta

nombre=input("ingrese su nombre")
edad=input("ingrese su edad")
ahora=datetime.now()
hora=time(ahora.hour)
format_hora="%H:%M:%S"

ha=time.strftime(hora,format_hora)

if int(edad) <18:
    if ha>="18:00:00":
        print("Hola",nombre,"Debe ir a dormir")
    else:
        print("Hola",nombre,"Hacer la tarea")
else:
    print("No está obligado hacer nada")


