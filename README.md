# \# 🚀 Sistema de Gestión de Tareas (Arquitectura de Microservicios)

# 

# Este proyecto es una aplicación web full-stack que implementa una arquitectura de microservicios. Consta de dos servicios backend independientes (Usuarios y Tareas) y un frontend unificado en Angular.

# 

# \## 📋 Requisitos Previos

# 

# Asegúrate de tener instalado:

# \* \*\*Node.js\*\* (v14 o superior)

# \* \*\*Angular CLI\*\* (`npm install -g @angular/cli`)

# 

# ---

# 

# \## ⚙️ Instalación

# 

# El proyecto se divide en 3 carpetas principales. Debes instalar las dependencias en cada una de ellas por separado.

# 

# 1\.  \*\*Microservicio de Usuarios:\*\*

# &nbsp;   ```bash

# &nbsp;   cd usuarios-service

# &nbsp;   npm install

# &nbsp;   ```

# 

# 2\.  \*\*Microservicio de Tareas:\*\*

# &nbsp;   ```bash

# &nbsp;   cd tareas-service

# &nbsp;   npm install

# &nbsp;   ```

# 

# 3\.  \*\*Frontend Angular:\*\*

# &nbsp;   ```bash

# &nbsp;   cd frontend-angular

# &nbsp;   npm install

# &nbsp;   ```

# 

# ---

# 

# \## ▶️ Cómo Ejecutar la Aplicación

# 

# Para que el sistema funcione correctamente, \*\*debes tener abiertas 3 terminales simultáneamente\*\*, una para cada servicio:

# 

# \### 1. Terminal 1: Servicio de Usuarios (Backend)

# ```bash

# cd usuarios-service

# node index.js

