# "Modelling of Information Systems" Group Project

## Modelling of an information system for a courier service

Project consists of:

- UML diagrams
  - [x] 1 usecase diagram
  - [x] 2 activity diagrams
  - [x] 1 class diagram
  - [x] 3 sequence diagrams
  - [ ] 1 package diagram
- Partial implementation
  - Client
    - [ ] Pregled profila
    - [ ] Ažuriranje podataka
  - [ ] Kreiranje pošiljke
    - [ ] Upisivanje modela plaćanja
    - [ ] Upisivanje infomracija primaoca
    - [ ] Upisivanje napomena za kurira
  - [ ] Obaveštenje o promeni statusa pošiljke
  - [ ] Pregled istorijata pošiljki
    - [ ] Prikaz napravljene pošiljke
      - [ ] Ocenjivanje kurira
      - [ ] Otvaranje novog tiketa za podršku
      - [ ] Prikaz tiketa za podršku
  - [ ] Pregled istorijata tiketa
    - [ ] Prikaz tiketa za podršku
  - Administrator
    - [x] Pregled svih dispečera (`/admin/dispatchers`)
    - [x] Prikaz dispečera (`/admin/dispatchers/1`)
    - [x] Otpuštanje dispečera (button)
    - [x] Ažuriranje podataka o dispečeru (`/admin/dispatchers/1/update`)
    - [x] Zapošljavanje dispečera (`/admin/dispatchers/hire`)
  - Dispatcher
    - [x] Pregled svih pošiljki (`/dispatcher/packages`)
      - [x] Prikaz pošiljke (`/dispatcher/packages/1`)
        - [x] Ažuriranje statusa pošiljke (dropdown selector)
    - [x] Pregled svih kurira (`/dispatcher/couriers`)
      - [x] Prikaz kurira (`/dispatcher/couriers/1`)
        - [x] Pregled recenzija (`/dispatcher/couriers/1/ratings`)
        - [x] Otpuštanje kurira (button)
        - [x] Ažuriranje podataka o kuriru (`/dispatcher/couriers/1/update`)
        - [ ] Dodeljivanje nedodeljenih paketa
        - [x] Brisanje dodeljenih paketa (button in table)
    - [ ] Pregled svih zahteva za podršku (`/dispatcher/tickets`)
      - [ ] Prikaz tiketa za podršku (`/dispatcher/tickets/open`)
        - [ ] Zatvaranje tiketa za podršku (button)
    - [x] Zapošljavanje kurira (`/dispatcher/couriers/hire`)
  - Courier:
    - [ ] Pregled dodeljenih pošiljki (`/courier/packages`)
      - [ ] Prikaz pošiljke (`/courier/packages/1`)
        - [ ] Ažuriranje statusa pošiljke (dropdown selector)
        - [ ] Izdavanje računa (`/courier/packages/1/receipt`)
        - [ ] Prikaz ruta do adrese pošiljke (`/courier/packages/1/route`)

Final paper written in Serbian which encompasses all of the above can be found [here](https://github.com/matijakljajic/misuns/blob/main/MIS_tim33.pdf).

## Team 33

- [Aleksa Siriški](https://github.com/aleksasiriski)
- [Miša Stefanović](https://github.com/mikmik1011)
- [Matija Kljajić](https://github.com/matijakljajic)
