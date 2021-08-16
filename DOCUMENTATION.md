## **1. Az alkalmazás célja**

Az alkalmazás célja, hogy mesteremberek elérhetőségi és egyéb adatait nyilvántartsa és kezelje.

## **2. Az alkalmazás telepítése**

- Klónozza le a célgépre a `mesterember-app` nevű GitHub repository tartalmát.
- A terminálban a /backend és a /frontend mappában is telepítse az alkalmazás függőségeit az `npm i` paranccsal.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert is az `npm i -g @angular/cli` paranccsal.

## **3. Az alkalmazás konfigurálása**

A végpontok beállításait backend esetében egy .env fájlban, frontend esetében pedig az src/environments/environment.ts fájlban végezhetjük el.​

## **4. Az alkalmazás indítása**

### Backend

A Docker konténer indítása és inicializálása:

- Ha még nincs telepítve, akkor telepítse a Docker Desktop alkalmazás [innen](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
- Indítsa el a Docker Desktop alkalmazást.
- Lépjen be a /backend mappába a terminálban, és adja ki az `npm run dev` parancsot.  
(Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend.) 

A belépéshez e-mail-cím és jelszó párosok:  

E-mail | Jelszó
------------ | -------------
admin@gmail.com (admin) | admin_pw
user@gmail.com (user) | user_pw

### Frontend
A frontend külön működtetése:
- JSON server az `npm run server` paranccsal indítható.
- A frontend az `npm start` paranccsal indítható.

A belépéshez e-mail-cím és jelszó párosok:  

E-mail | Jelszó
------------ | -------------
fextill14@skyrock.com (admin) | test
bshortall1k@usa.gov (user) | test

## **5. A végpontok dokumentációja**

A végpontok OpenAPI 3 (Swagger) szabványú specifikációval vannak dokumentálva.
A Swagger dokumentáció elérhető a /backend/src/docs/swager.yaml fájlban.
Az API dokumentáció a böngészőben is megtekinthető ezen a címen: https://localhost:3000/api-docs

---

## **Linkek:**  

- [User Story (adminisztrátori szerepkör)](https://github.com/kss-nn/mesterember-app/blob/main/README.md)
