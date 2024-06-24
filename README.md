# "Modelling of Information Systems" Group Project

## Modelling of an information system for a courier company

### Professor's remarks:
- There are trivial copy-paste problems in sequence diagrams.
- Misunderstanding of 'MessageSender' interface and its usecase. According to professor, it should have been a controller class instead of an interface but still okay according to our explaination.
- Grade: 20/20

### Most Important Factor Being Graded
It should be noted that the professor mainly grades **consistency** between diagrams as the main point of this assignment is modelling itself, not the realisation/implementation of the model.

<details>

<summary>

<h3>Project & Implementation TODO</h3>

</summary>

- UML diagrams
  - [x] 1 usecase diagram
  - [x] 2 activity diagrams
  - [x] 1 class diagram
  - [x] 3 sequence diagrams
  - [x] 1 package diagram
- Partial implementation
  - [ ] Klijent (`/client`)
    - [x] Pregled profila (`/client/profile`)
      - [ ] Ažuriranje podataka (`/client/profile/update`)
    - [x] Kreiranje pošiljke (`/client/packages/send`)
      - [x] Upisivanje modela plaćanja (radio button)
      - [x] Upisivanje informacija primaoca (form)
      - [x] Upisivanje napomena za kurira (input)
    - [ ] Obaveštenje o promeni statusa pošiljke
    - [x] Pregled istorijata pošiljki (`/client/packages`)
      - [ ] Prikaz napravljene pošiljke (`/client/packages/1`)
        - [ ] Ocenjivanje kurira
        - [x] Otvaranje novog tiketa za podršku (wrong path)
        - [ ] Prikaz tiketa za podršku
    - [x] Pregled istorijata tiketa (`/client/tickets`)
      - [x] Prikaz tiketa za podršku (`/client/tickets/1`)
  - [x] Admin (`/admin`)
    - [x] Pregled svih dispečera (`/admin/dispatchers`)
      - [x] Prikaz dispečera (`/admin/dispatchers/1`)
        - [x] Otpuštanje dispečera (button)
        - [x] Ažuriranje podataka o dispečeru (`/admin/dispatchers/1/update`)
    - [x] Zapošljavanje dispečera (`/admin/dispatchers/hire`)
  - [ ] Dispečer (`/dispatcher`)
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
    - [x] Pregled svih zahteva za podršku (`/dispatcher/tickets`)
      - [x] Prikaz tiketa za podršku (`/dispatcher/tickets/open`)
        - [x] Zatvaranje tiketa za podršku (button)
    - [x] Zapošljavanje kurira (`/dispatcher/couriers/hire`)
  - [x] Kurir (`/courier`)
    - [x] Pregled dodeljenih pošiljki (`/courier/packages`)
      - [x] Prikaz pošiljke (`/courier/packages/1`)
        - [x] Ažuriranje statusa pošiljke (dropdown selector)
        - [x] Izdavanje računa (`/courier/packages/1/receipt`)
        - [x] Prikaz ruta do adrese pošiljke (`/courier/packages/1/route`)

</details>

Implementation is partially done in our case using Sveltekit and sqlite3.

Final paper written in Serbian which encompasses all of the above can be found [here](https://github.com/matijakljajic/misuns/blob/main/MIS_tim33.pdf).


## Team 33

- [Aleksa Siriški](https://github.com/aleksasiriski)
- [Miša Stefanović](https://github.com/mikmik1011)
- [Matija Kljajić](https://github.com/matijakljajic)
