# User Story - Adminisztrátori szerepkör
## Mesterember app

---
### 1. Bejelentkezési oldal
---
**1. agilis felhasználói történet:**
> Egy oldal, ahol adminisztrátorként be lehet jelentkezni.

**Elfogadási kritériumok:**
* Űrlapot tartalmaz
* Beírható a felhasználónév és a jelszó
* A jelszó beírása rejtve történik
* Küldés gombot tartalmaz
---
**2. agilis felhasználói történet:**
> Az adminisztrátori bejelentkezési kísérlet sikeres vagy sikertelen.

**Elfogadási kritériumok:**
* Sikeres bejelentkezés után a Dashboardra navigál
* Sikertelen bejelentkezés esetén hibaüzenetet jelenít meg

---
### 2. Dashboard
---
**1. agilis felhasználói történet:**
> Lehetőség van az aloldalakra navigálni.

**Elfogadási kritériumok:**
* Ikonokkal ellátott navigációs sávot tartalmaz
---
**2. agilis felhasználói történet:**
> Összesített adatmegjelenítés, amely segítségével áttekinthetők a legfontosabb adatok.

**Elfogadási kritériumok:**
* Adatkártyákat és/ vagy grafikonokat tartalmaz

---
### 3. Mesterek aloldal
---
**1. agilis felhasználói történet:**
> Egy listán megtekinthetők a mesteremberek főbb adatai.

**Elfogadási kritériumok:**
* A megjelenítendő adatok:
		- név
		- telefonszám
		- megyék és azon belüli városok, ahol a felhasználó munkát vállal
---
**2. agilis felhasználói történet:**
> Minden listaelem esetében megjeleníthető egy részletes adatlap.

**Elfogadási kritériumok:**
* A megjelenítendő adatok:
		- név
		- telefonszám
		- felhasználó típusa: cég | egyéni vállalkozó | magánszemély
		- megyék és azon belüli városok, ahol a felhasználó munkát vállal
		- elérhetőség: napok, és azokon belül egy időintervallum
		- bemutatkozás
		- értékelhető-e?
---
**3. agilis felhasználói történet:**
> A lista elemei szerkeszthetők.

**Elfogadási kritériumok:**
* A listaelemek melletti gombra kattintva egy szerkesztő űrlapra jutunk.
* Az űrlapról szerkesztés nélkül is vissza tudunk navigálni a Mesterek aloldalra.
* Adatmódosítás esetén egy Mentés gombra kattintva automatiksan visszanavigálunk a Mesterek aloldalra.
---
**4. agilis felhasználói történet:**
> A lista elemei szerkeszthetők.

**Elfogadási kritériumok:**
* A listaelemek melletti gombra kattintva egy szerkesztő űrlapra jutunk.
* Az űrlapról szerkesztés nélkül is vissza tudunk navigálni a Mesterek aloldalra.
* Adatmódosítás esetén egy Mentés gombra kattintva automatiksan visszanavigálunk a Mesterek aloldalra.
---
**5. agilis felhasználói történet:**
> A lista elemei növekvő/csökkenő sorrendbe rendezhetők.

**Elfogadási kritériumok:**
* Bármelyik oszlop fejlécére kattintva váltakozva növekvő/csökkenő sorrendbe rendeződnek az oszlop értékei.
---
**6. agilis felhasználói történet:**
> A lista elemei név szerint kereshetők.

**Elfogadási kritériumok:**
* Keresőmezőt tartalmaz
* Részleges egyezésre azonnal találatot ad

---
### 4. Térkép aloldal
---
**1. agilis felhasználói történet:**
> Az oldalon áttekinthető, hogy a felhasználók mely megyékben és városokban vannak jelen.

**Elfogadási kritériumok:**
* Az oldalon megjelenik Magyarország térképe megyékre bontva.
* Megjelennek betűrendben a megyék nevei és az egyes megyék alatt szintén betűrendben a városok.
* A városok mellett zárójelben látható, hogy hány mesterember vállal ott munkát.
* A megyék és a városok neveire kattintva egy listaoldalon láthatók az adott városhoz tartozó mesterek főbb adatai.

---
### 5. Ráérések aloldal
---
**1. agilis felhasználói történet:**
> Az oldalon az adminisztrátor által megadott időpontban ráérő mesterekre lehet keresni.

**Elfogadási kritériumok:**
* A nap egy lenyíló listából választható ki a hét napjai közül.
* Az időpont egy lenyíló listából választható ki a nap órái közül (1-24).
* Keresés gombot tartalmaz.
---
**2. agilis felhasználói történet:**
> A Keresés gombra kattintva kilistázódnak a beállításoknak megfelelő felhasználók.

**Elfogadási kritériumok:**
* A listán a felhasználók főbb adatai jelennek meg (lásd: 3.1. pont)
* Minden listaelem esetében megjeleníthető egy részletes adatlap (lásd: 3.2. pont)

---
## **A projekt egyéb adatai**
---
**A felhasználói felület:**
Minden oldalnak reszponzívnak kell lennie, azaz minden méretű képernyőn esztétikusan kell megjelennie.

**Prioritás:**
magas

**Megvalósítás időtartama:**
4 hét

**További fejlesztési lehetőségek:**
- A Dashboard esetében lehetőséget lehet biztosítani az adminisztrátori profil kezelésére. Azaz meg lehet valósítani, hogy az adminisztrátor jelszót tudjon változtatni, valamint hogy ki lehessen jelentkezni az adminisztrátori fiókból.

- Az alkalmazás még további hasznos aloldalakkal bővíthető, például:
		- Telefonkönyv ---> egy név-telefonszám listában lehet keresni mindkét értékre
		- Cégek ---> csak a cégként regisztrálókat listázza
		- Értékelhetők ---> csak a más felhasználók által értékelhető mestereket listázza
		
- Lapozók hozzáadhatók a hosszú listákat tartalmazó oldalakhoz.
