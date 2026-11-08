import type { LegalTexts } from './types';

/**
 * Has to be read by a lawyer (Serbia, and for Banja Luka users also Bosnia and
 * Herzegovina) before the first store submission (claude/lista-za-objavu.md).
 * Raise EULA_VERSION in config.ts if a change to the Terms needs fresh consent.
 * The same texts are published as web pages by tools/build-legal.ts.
 */
export const legalSr: LegalTexts = {
  privacy: {
    title: 'Politika privatnosti',
    updatedLabel: 'Poslednja izmena',
    operatorLabel: 'Rukovalac podacima',
    contactLabel: 'Kontakt',
    notSet: 'biće objavljeno pre lansiranja',
    sections: [
      {
        heading: '1. O čemu je reč',
        paragraphs: [
          'Plan na dlanu je aplikacija za planiranje poseta i obaveza: istražuješ mesta u svojoj okolini, upisuješ ih u plan, dobijaš podsetnik, otvaraš navigaciju i vidiš gde i kako možeš da parkiraš. Planove i lične obaveze čuvaš na telefonu, a uz nalog i na serveru.',
          'Ova politika objašnjava koje podatke o ličnosti obrađujemo, zašto, gde se čuvaju i koja su tvoja prava. Primenjuje se Zakon o zaštiti podataka o ličnosti Republike Srbije, a za korisnike u Bosni i Hercegovini i Zakon o zaštiti ličnih podataka Bosne i Hercegovine (odeljak 13).',
          'Rukovalac podacima je fizičko lice navedeno na vrhu ove stranice. Sa nama se dopisuješ isključivo mejlom, na kontakt adresu navedenu na vrhu.',
        ],
      },
      {
        heading: '2. Ukratko',
        paragraphs: [
          'Ne prodajemo podatke, ne prikazujemo reklame, ne koristimo analitiku ni servise za praćenje i ne pravimo profil o tebi na serveru. Predlozi dana i vremena računaju se samo na tvom telefonu.',
          'Tvoju poziciju ne upisujemo nigde: koristi se samo dok je aplikacija otvorena.',
          'Ako koristiš aplikaciju kao gost, sve što uneseš ostaje samo na telefonu. Ako se prijaviš, na server idu nalog, planovi, lične obaveze, liste, oznake „završeno“, omiljena mesta, liste mesta sa beleškama i podešavanja aplikacije, da ih ne izgubiš kada promeniš telefon ili ponovo instaliraš aplikaciju. Tablica, mesto parkiranja, nedavne pretrage i navike uvek ostaju samo na telefonu.',
        ],
      },
      {
        heading: '3. Šta se čuva samo na tvom telefonu',
        paragraphs: [
          'Sledeći podaci nikada se ne šalju na server, ni kada imaš nalog: registarska tablica za SMS za parking, mesto gde je parkiran tvoj automobil i podatak o plaćenoj SMS karti, nedavne pretrage, odgovori iz ličnog podešavanja i navike koje aplikacija uči iz tvojih planova.', 'Dok koristiš aplikaciju kao gost, i svi ostali podaci (planovi, lične obaveze, liste, omiljena mesta, liste mesta sa beleškama, podešavanja) postoje samo na telefonu.',
          'Mesto parkiranja čuva se samo kada pritisneš „Parkirao sam“ i briše se kada pritisneš „Krenuo sam“ ili posle 12 sati.',
          'Navike (npr. u koje vreme obično planiraš) aplikacija računa samo na telefonu iz tvojih planova i odgovora iz podešavanja. Koriste se samo da ti predloži dan i vreme, ne šalju se na server i brišu se sa „Obriši podatke na ovom telefonu“ ili brisanjem aplikacije.',
          'Ovi podaci se brišu kada obrišeš aplikaciju ili njene podatke u podešavanjima telefona. Mi im nemamo pristup.',
          'Telefon čuva i: poslednje učitana mesta po području od oko 1 km (najviše 30 područja, najviše 7 dana), da bi „U blizini“ radilo bez interneta; procenjeno vreme puta do mesta iz plana, sa početnom tačkom zaokruženom na oko 100 m (najviše 24 sata), da bi podsetnici radili i bez interneta; i oznake koje pokazuju koji su događaji iz kalendara već uvezeni. Ovo se briše pri odjavi, sa „Obriši podatke na ovom telefonu“ ili brisanjem aplikacije.',
          'Vidžet na početnom ekranu (Android) prikazuje sledeći plan: naziv mesta i vreme. Vidi ih svako ko drži tvoj telefon; naziv mesta možeš da sakriješ u podešavanjima podsetnika („Prikaži naziv mesta u vidžetu“).',
          'Istorija parking karata (zona, vreme i tarifa zone u trenutku slanja SMS-a) čuva se samo na telefonu, da bi ti aplikacija pokazala okvirne troškove parkinga po mesecu. Ulazi u rezervnu kopiju koju praviš i briše se sa „Obriši podatke na ovom telefonu“.',
        ],
      },
      {
        heading: '4. Šta se čuva na serveru',
        paragraphs: [
          'Nalog: mejl adresa i način prijave. Lozinku čuva sistem za prijavu (Supabase Auth) samo u zaštićenom, heširanom obliku; ni mi je ne možemo videti. Ako se prijaviš preko Google ili Apple naloga, dobijamo mejl adresu koju taj servis podeli sa nama; kod Apple prijave to može biti skrivena adresa koju pravi Apple.',
          'Podaci prijavljenog korisnika: planovi (mesto, datum, vreme, ponavljanje, kratka beleška, podešavanje podsetnika, način putovanja i parking koji izabereš za plan; to je javni parking sa mape, ne tvoja pozicija), lične obaveze (naziv, vreme, ponavljanje, beleška), liste stvari uz planove i šta je na njima štiklirano, oznake da je plan ili obaveza završena za određeni dan, omiljena mesta, liste mesta sa beleškama i podešavanja aplikacije (jezik, zvuci, izbor aplikacije za navigaciju i podešavanja podsetnika). Čuvaju se da bi ostali sačuvani kada promeniš telefon ili ponovo instaliraš aplikaciju, i da bi bili isti na svakom telefonu na kome se prijaviš. Kada se prijaviš, ono što je uneto u režimu gosta prenosi se na nalog. Ne čuvamo istoriju kretanja ni pređene rute.',
          'Predlozi mesta koja nedostaju (samo uz nalog): naziv, vrsta mesta, tačka koju izabereš na mapi, kratka napomena i vreme slanja. Vidiš ih samo ti i mi; koristimo ih da proverimo i dodamo mesto, a drugi korisnici ih ne vide.',
          'Doprinosi, samo ako je dodavanje sadržaja uključeno i ako ga koristiš: cene koje prijaviš, potvrde cena, glasovi za oznake, prijave sadržaja, korisnici koje blokiraš i zapis o prihvatanju pravila za dodavanje (sa datumom). Tvoje cene drugima se prikazuju bez imena.',
          'Tehnički podaci: naš pružalac servera beleži tehničke podatke o zahtevima (IP adresu, vreme i vrstu zahteva) radi bezbednosti i ispravnog rada i čuva ih 1 dan. Pozicija iz pretrage šalje se u telu zahteva i ne upisuje se u te zapise.',
        ],
      },
      {
        heading: '5. Lokacija',
        paragraphs: [
          'Aplikacija traži dozvolu za lokaciju samo dok je koristiš. Ne koristi lokaciju u pozadini i ne traži dozvolu „Uvek“.',
          'Lokaciju obrađujemo da bismo ti pružili funkcije koje koristiš (izvršenje ugovora, tj. Uslova korišćenja), i to samo ako u telefonu dozvoliš pristup. Pozicija služi da se mapa centrira na tvoju okolinu, da se mesta poređaju po udaljenosti, da se proceni okvirno vreme do mesta i da se proveri da li si u zoni naplate parkiranja. Za pretragu obližnjih mesta pozicija se šalje serveru uz upit, ali se nigde ne upisuje i ne čuva. Provera zone parkiranja radi se na telefonu.',
          'Za tačnije vreme puta aplikacija šalje našem serveru za rute početnu tačku zaokruženu na oko 100 m i mesto iz plana, a dobija samo trajanje i dužinu puta. Server te podatke ne upisuje i ne čuva. Kada server nije dostupan, vreme puta se procenjuje na telefonu, kao ranije.',
          'Dozvolu možeš da isključiš u podešavanjima telefona. Aplikacija i tada radi, ali bez sortiranja po udaljenosti od tebe i bez provere zone na licu mesta.',
        ],
      },
      {
        heading: '6. Podsetnici i kalendar',
        paragraphs: [
          'Podsetnici su lokalna obaveštenja koja zakazuje tvoj telefon. Ne koristimo push servis i ne šaljemo obaveštenja sa servera. Podsetnik „Kreni za 10 minuta“ ponavlja se dok ga ne potvrdiš.',
          'Da li će se obaveštenje pojaviti i oglasiti zavisi od dozvole za obaveštenja, režima „Ne uznemiravaj“, tihog režima i štednje baterije na tvom telefonu. Na Androidu aplikacija traži i dozvolu „Alarmi i podsetnici“, da podsetnik stigne u tačno vreme. Zato podsetnik nije garancija.',
          'Kada plan izvezeš u kalendar, aplikacija pravi .ics fajl, a ti biraš kalendar u koji ide. Taj kalendar čuva podatke po svojim pravilima.',
          'Uvoz iz kalendara: tek kada dodirneš „Uvezi iz kalendara“, aplikacija traži dozvolu da čita kalendar telefona i prikazuje događaje za narednih 7 dana. Kalendar se čita samo na telefonu, nikad u pozadini, i aplikacija u njega ništa ne upisuje. Da bi pronašla mesto, aplikacija šalje našem serveru samo deo lokacije ili naslova događaja kao upit za pretragu, koji se ne čuva. Na server ide samo plan koji izabereš, a naslov događaja postaje beleška plana.',
          'Vremenska prognoza: za planove u naredna 2 dana aplikacija preko našeg servera pita norveški meteorološki zavod (MET Norway) za prognozu na mestu iz plana. Šalje se samo tačka mesta zaokružena na oko 1 km, nikad tvoja pozicija. Prognoza služi da predloži raniji polazak ili prevoz kada pada kiša; to možeš da isključiš u podešavanjima podsetnika.',
          'Temperatura na početnom ekranu: aplikacija na telefonu odredi u kom si gradu ili širem području, pa traži prognozu samo za centar tog grada (Beograd, Banja Luka) ili za tačku grube mreže od oko 50 km. Tvoja pozicija se ne šalje.',
        ],
      },
      {
        heading: '7. Parking i SMS',
        paragraphs: [
          'SMS za plaćanje parkiranja šalješ lično, iz svoje SMS aplikacije: Plan na dlanu samo pripremi poruku sa tvojom tablicom i brojem zone. Poruku prima preduzeće koje naplaćuje parkiranje u tom gradu, a tvoj mobilni operater je naplaćuje. Oba subjekta tu poruku obrađuju po svojim pravilima, kao zasebni rukovaoci; mi ne vidimo da li je SMS poslat ni da li je stigao.',
        ],
      },
      {
        heading: '8. Rezervna kopija i „Prijavi problem“',
        paragraphs: [
          'Rezervnu kopiju pravi i deli tvoj telefon, na mesto koje ti izabereš (npr. mejl ili oblak). Mi je ne dobijamo.',
          'Deljenje dolaska, plana dana ili liste mesta pravi običnu poruku koju šalješ iz aplikacije koju izabereš (npr. Viber ili SMS). Poruka ne ide preko našeg servera i mi je ne vidimo. Beleške se ne dodaju, osim ako to uključiš.',
          '„Prijavi problem“ otvara formu u kojoj opišeš problem i, ako želiš, dodaš do tri slike iz galerije. Zatim se otvara tvoja mejl aplikacija sa pripremljenom porukom koju vidiš i možeš da promeniš pre slanja; mejl šalješ ti. Uz opis se dodaje samo verzija aplikacije, sistem telefona (iOS ili Android) i, sa kartice mesta, ime i oznaka mesta. Lokacija, tablica i beleške se ne dodaju. Aplikacija ima pristup samo slikama koje izabereš, ne celoj galeriji. Primamo samo ono što pošalješ i koristimo to samo da odgovorimo i ispravimo problem.',
        ],
      },
      {
        heading: '9. Pravni osnov',
        paragraphs: [
          'Izvršenje ugovora (Uslovi korišćenja): nalog i podaci sačuvani na nalogu (planovi, obaveze, liste, omiljena mesta, podešavanja), doprinosi i lokacija za funkcije koje pokreneš (mapa, mesta u blizini, procena puta, provera zone). Lokaciju aplikacija čita samo ako u telefonu dozvoliš pristup; dozvolu možeš da povučeš u svakom trenutku, a tada se ove funkcije ne koriste.',
          'Legitimni interes: tehnički zapisi servera i zaštita od zloupotrebe, radi bezbednosti aplikacije i korisnika; odgovor na mejl koji nam pošalješ. Obaveštenja zakazuje tvoj telefon, uz dozvolu koju daješ u njegovim podešavanjima.',
        ],
      },
      {
        heading: '10. Ko još obrađuje podatke i gde',
        paragraphs: [
          'Server i baza: Supabase, kao naš obrađivač, na osnovu ugovora o obradi podataka. Podaci se čuvaju u data centru u Cirihu, u Švajcarskoj. Švajcarska je članica Konvencije Saveta Evrope o zaštiti lica u odnosu na automatsku obradu podataka o ličnosti, pa se prenos zasniva na članu 64 Zakona o zaštiti podataka o ličnosti (država sa primerenim nivoom zaštite). Ako tehnička podrška Supabase-a pristupi podacima iz druge države (npr. SAD), taj pristup je ograničen na održavanje usluge i uređen standardnim ugovornim klauzulama iz ugovora o obradi podataka.',
          'Prijava: ako izabereš prijavu preko Google ili Apple naloga, prijava ide preko tog servisa, po njegovim pravilima.',
          'Mape: na iPhone-u mapa je Apple Maps, a na Android-u Google Maps. Da bi prikazao mapu, telefon preuzima delove mape sa servera Apple-a ili Google-a, koji pritom vide tehničke podatke o uređaju i prikazanom području, po svojim pravilima privatnosti. Navigacija se otvara u aplikaciji Apple Maps ili Google Maps.',
          'Vremenska prognoza: MET Norway (Norveška). Dobija samo približnu tačku mesta iz plana, bez ikakvog podatka o tebi; upit ide preko našeg servera, pa ne vidi ni tvoju IP adresu. Izvor podataka o vremenu: MET Norway (Norveški meteorološki zavod), licenca CC BY 4.0 (creativecommons.org/licenses/by/4.0). Izvor je naveden i u karticama plana i podsetnika („Vreme: MET Norway“). Podatke prikazujemo kao kratku prognozu i predlog polaska; ne menjamo ih, osim što ih zaokružujemo i sažimamo.',
          'Rute: vreme puta računa naš sopstveni server za rute (OSRM, nad podacima OpenStreetMap-a), na računaru pod našom kontrolom. Upit do njega šalje naš server, a ne tvoj telefon, pa server za rute ne vidi tvoju IP adresu. Veza od našeg servera do tog računara ide preko usluge Tailscale Funnel (Tailscale Inc.); šifrovana je sve do tog računara, pa Tailscale-ovi posrednički serveri ne mogu da pročitaju sadržaj upita. Šalju se samo zaokružena početna tačka i mesto iz plana, i ne čuvaju se.',
          'Podaci o mestima potiču iz OpenStreetMap-a (© OpenStreetMap contributors, licenca ODbL) i iz javno objavljenih cenovnika firmi.',
        ],
      },
      {
        heading: '11. Koliko dugo čuvamo podatke',
        paragraphs: [
          'Nalog i podatke sačuvane na nalogu čuvamo dok ne obrišeš nalog. Nalog možeš da obrišeš u aplikaciji (u Nalogu izaberi „Obriši nalog“) ili bez aplikacije, kako je opisano na stranici „Brisanje naloga i podataka“. Tada brišemo nalog, planove, lične obaveze, liste, oznake „završeno“, omiljena mesta, liste mesta sa beleškama, podešavanja, predloge mesta, glasove za oznake, tvoje prijave sadržaja, blokade i zapis o prihvatanju pravila.',
          'Cene prijavljene sa tvog naloga ostaju u bazi bez ikakve veze sa tobom (anonimno), jer čine zajedničke podatke o cenama.',
          'Rokovi: tehnički zapisi servera 1 dan; mejlovi za podršku i prijave problema do 12 meseci od poslednje poruke; zapis o prihvatanju pravila dok postoji nalog. Duže samo ako je to potrebno za utvrđivanje, ostvarivanje ili odbranu pravnog zahteva. Automatske rezervne kopije baze trenutno se ne prave; ako ih uvedemo, čuvaće se najviše 7 dana, pa obrisani podaci iz njih nestaju u tom roku. Poziciju telefona ne čuvamo uopšte.',
        ],
      },
      {
        heading: '12. Tvoja prava',
        paragraphs: [
          'Imaš pravo da zatražiš pristup svojim podacima, ispravku, brisanje, ograničenje obrade i prenos podataka, kao i da prigovoriš obradi i povučeš dozvolu. Nalog možeš da obrišeš u aplikaciji; za ostalo nam piši na kontakt adresu, po mogućstvu sa mejla naloga. Ako ne možemo da potvrdimo da zahtev dolazi od tebe, tražićemo dodatnu potvrdu.',
          'Odgovaramo bez odlaganja, a najkasnije u roku od 30 dana. U složenim slučajevima rok se može produžiti u skladu sa zakonom, o čemu te obaveštavamo u prvih 30 dana. Ako zahtev ne možemo da ispunimo, obrazložićemo zašto i reći ti kome možeš da se obratiš.',
          'Ako smatraš da je obrada nezakonita, možeš da podneseš pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti (www.poverenik.rs).',
        ],
      },
      {
        heading: '13. Korisnici u Bosni i Hercegovini i Švajcarskoj',
        paragraphs: [
          'Za korisnike u Bosni i Hercegovini primenjuje se i Zakon o zaštiti ličnih podataka Bosne i Hercegovine. Imaš ista prava kao u odeljku 12, a pritužbu možeš da podneseš i Agenciji za zaštitu ličnih podataka u Bosni i Hercegovini (www.azlp.ba).',
          'Cene i tarife u Bosni i Hercegovini prikazuju se u konvertibilnim markama (KM).',
          'Za korisnike u Švajcarskoj primenjuje se i švajcarski Savezni zakon o zaštiti podataka (FADP); pritužbu možeš da podneseš i Saveznom povereniku za zaštitu podataka i informacija (www.edoeb.admin.ch).',
        ],
      },
      {
        heading: '14. Deca',
        paragraphs: [
          'Po pravilima korišćenja, aplikacija je namenjena osobama od 16 godina i starijim. Svesno ne pravimo naloge za mlađe; ako saznamo da je nalog napravila mlađa osoba, obrisaćemo ga.',
        ],
      },
      {
        heading: '15. Izmene',
        paragraphs: [
          'Ako ovu politiku promenimo, novu verziju objavićemo u aplikaciji i na internet stranici, sa novim datumom. O važnim izmenama obavestićemo te u aplikaciji.',
        ],
      },
    ],
  },
  terms: {
    title: 'Uslovi korišćenja',
    updatedLabel: 'Poslednja izmena',
    operatorLabel: 'Pružalac usluge',
    contactLabel: 'Kontakt',
    notSet: 'biće objavljeno pre lansiranja',
    sections: [
      {
        heading: '1. Prihvatanje',
        paragraphs: [
          'Korišćenjem aplikacije Plan na dlanu prihvataš ove uslove. Ako se ne slažeš, nemoj da je koristiš. Aplikacija je besplatna. Uslugu pruža fizičko lice navedeno na vrhu ove stranice.',
        ],
      },
      {
        heading: '2. Šta aplikacija radi',
        paragraphs: [
          'Plan na dlanu ti pomaže da istražiš mesta u svojoj okolini, da ih isplaniraš, dobiješ podsetnik, otvoriš navigaciju i vidiš parking u blizini. Cene i tarife prikazuju se u valuti mesta, na primer u dinarima (RSD) u Srbiji i u konvertibilnim markama (KM) u Bosni i Hercegovini. Podaci o mestima i parkingu ne postoje za svako područje.',
          'Podaci o mestima potiču iz OpenStreetMap-a i iz javno objavljenih cenovnika, pa mogu biti nepotpuni ili zastareli. Radno vreme, cene, adrese, parking i zone naplate proveri na licu mesta ili kod firme. Vreme putovanja je okvirna procena.',
          'Podsetnici su pomoć, a ne garancija: zavise od podešavanja i stanja tvog telefona. Ne oslanjaj se na njih za hitne obaveze, lekove ili obaveze važne za bezbednost.',
        ],
      },
      {
        heading: '3. Šta aplikacija ne radi',
        paragraphs: [
          'Aplikacija ne zakazuje termine, ne prima plaćanja i nije povezana sa prikazanim firmama niti ih predstavlja. Plan je tvoja lična beleška o poseti; termin dogovaraš direktno sa firmom, a iz aplikacije možeš da je pozoveš.',
        ],
      },
      {
        heading: '4. Gost i nalog',
        paragraphs: [
          'Aplikaciju možeš da koristiš kao gost, bez vremenskog ograničenja. Tvoji planovi tada postoje samo na telefonu i nestaju ako obrišeš aplikaciju ili promeniš telefon, osim ako napraviš rezervnu kopiju.',
          'Sa nalogom se planovi, lične obaveze, liste, omiljena mesta i podešavanja čuvaju i na serveru, pa ostaju i kada promeniš telefon ili ponovo instaliraš aplikaciju. Kada se prijaviš, ono što je uneto u režimu gosta prenosi se na nalog. Ti odgovaraš za tačnost podataka i za čuvanje lozinke. Jedan nalog je za jednu osobu. Nalog možeš u svakom trenutku da obrišeš u aplikaciji (u Nalogu izaberi „Obriši nalog“).',
        ],
      },
      {
        heading: '5. Parkiranje i SMS',
        paragraphs: [
          'Plaćanje parkiranja je tvoja odgovornost. Aplikacija ne šalje SMS umesto tebe, ne vidi da li je SMS stigao i ne garantuje da se prikazana zona, tarifa ili najduže trajanje poklapaju sa stvarnim stanjem. Uvek proveri saobraćajni znak i uputstvo na licu mesta.',
          'SMS naplaćuje tvoj mobilni operater. Kratki brojevi za plaćanje parkiranja obično rade samo sa SIM karticom iz te države; sa stranom SIM karticom plati na drugi način. Podsetnik o isteku karte je okvirni proračun aplikacije, a ne potvrda preduzeća za parkiranje.',
        ],
      },
      {
        heading: '6. Dodavanje sadržaja',
        paragraphs: [
          'Dodavanje cena, potvrda i oznaka može biti isključeno. Kada je uključeno, pre prvog unosa tražićemo da prihvatiš ova pravila.',
          'Dodaj samo cene koje su stvarno plaćene ili istaknute na cenovniku i oznake koje stvarno važe za to mesto.',
          'Zabranjeni su lažni, šaljivi i reklamni unosi, uvrede, pretnje, govor mržnje, lični podaci drugih osoba i sve što krši zakon. Prema uvredljivom i nedozvoljenom sadržaju imamo nultu toleranciju: takav sadržaj uklanjamo, a nalog koji ga dodaje isključujemo.',
          'Slobodni tekstualni komentari, ocene i fotografije nisu dostupni.',
        ],
      },
      {
        heading: '7. Prijave, blokiranje i moderacija',
        paragraphs: [
          'Kada je dodavanje sadržaja uključeno, svaki unos možeš da prijaviš, a korisnika da blokiraš direktno u aplikaciji. Svaku prijavu prvi put pregledamo u roku od 24 sata; sadržaj koji očigledno krši pravila odmah sklanjamo, a ostale slučajeve rešavamo što pre. Možemo da uklonimo unos, ograničimo ili trajno isključimo nalog koji ponavlja kršenja.',
          'Grešku u podacima o mestu možeš da nam javiš preko „Prijavi problem“. Ako smatraš da je neki podatak netačan ili da šteti tvom poslovanju, piši nam na kontakt adresu; razmotrićemo zahtev za ispravku ili uklanjanje i omogućiti odgovor firme.',
        ],
      },
      {
        heading: '8. Licenca za tvoj sadržaj',
        paragraphs: [
          'Sadržaj koji dodaš ostaje tvoj. Daješ nam neisključivu i besplatnu dozvolu da ga koristimo samo za rad, održavanje i razvoj aplikacije: da ga prikazujemo drugima (bez tvog imena) i da iz njega računamo srednje vrednosti i statistiku. Posle brisanja naloga zadržavamo samo podatke koji više ne mogu da se povežu sa tobom (npr. iznos cene, mesto i datum, bez ikakvog identifikatora). Ova dozvola nije osnov za obradu tvojih podataka o ličnosti; to uređuje Politika privatnosti.',
        ],
      },
      {
        heading: '9. Dozvoljeno korišćenje',
        paragraphs: [
          'Aplikaciju koristi samo za lično planiranje. Zabranjeno je automatsko preuzimanje podataka iz aplikacije ili sa servera, ometanje rada servera, zaobilaženje zaštite i korišćenje aplikacije za slanje neželjenih poruka.',
        ],
      },
      {
        heading: '10. Tuđi sadržaji i usluge',
        paragraphs: [
          'Mape, navigacija, prijava preko Google ili Apple naloga i podaci trećih strana (Apple, Google, OpenStreetMap) podležu uslovima tih servisa. Podaci OpenStreetMap-a: © OpenStreetMap contributors, licenca ODbL.',
        ],
      },
      {
        heading: '11. Odgovornost',
        paragraphs: [
          'Aplikacija je besplatna i trudimo se da radi pouzdano. Podaci o mestima, radnom vremenu, cenama i parkingu potiču od trećih strana (OpenStreetMap, javni cenovnici, gradska preduzeća), pa u meri u kojoj zakon dozvoljava ne odgovaramo za štetu nastalu zbog netačnosti tih podataka, zbog kazne za parkiranje, zbog podsetnika koji telefon nije prikazao ili zbog privremene tehničke nedostupnosti.',
          'To ne ograničava našu odgovornost za štetu prouzrokovanu namerno ili krajnjom nepažnjom, niti prava koja ti kao potrošaču daju obavezni propisi.',
        ],
      },
      {
        heading: '12. Izmene i prestanak',
        paragraphs: [
          'Aplikaciju možemo da unapređujemo i menjamo. Uslove menjamo kada se promeni usluga ili propis. O izmenama koje utiču na tvoja prava, obradu podataka ili odgovornost obavestićemo te u aplikaciji najmanje 15 dana pre nego što počnu da važe, sa datumom početka važenja; kada je to potrebno, tražićemo da ih izričito prihvatiš. Ako se sa izmenom ne slažeš, možeš da prestaneš da koristiš aplikaciju i da obrišeš nalog pre tog datuma. Sitne izmene (ispravke grešaka, pojašnjenja) važe od objavljivanja.',
          'Nalog koji ozbiljno ili ponovljeno krši ove uslove možemo da ukinemo, uz obrazloženje poslato na mejl naloga. Uslugu možeš da prestaneš da koristiš u svakom trenutku.',
        ],
      },
      {
        heading: '13. Merodavno pravo',
        paragraphs: [
          'Primenjuje se pravo Republike Srbije. Za sporove je nadležan stvarno nadležan sud u Beogradu, osim ako obavezni propisi o zaštiti potrošača ili o nadležnosti (u Srbiji ili u državi u kojoj živiš) predviđaju drugi sud; tada važe ti propisi. Prava koja ti kao potrošaču daju takvi propisi ostaju netaknuta. Privatnost je uređena Politikom privatnosti.',
        ],
      },
    ],
  },
  deletion: {
    title: 'Brisanje naloga i podataka',
    updatedLabel: 'Poslednja izmena',
    operatorLabel: 'Rukovalac podacima',
    contactLabel: 'Kontakt',
    notSet: 'biće objavljeno pre lansiranja',
    sections: [
      {
        heading: '1. U aplikaciji',
        paragraphs: [
          'Otvori Plan na dlanu, dodirni dugme naloga, zatim „Obriši nalog“ i potvrdi. Nalog i podaci na serveru brišu se odmah.',
        ],
      },
      {
        heading: '2. Bez aplikacije',
        paragraphs: [
          'Pošalji mejl na kontakt adresu sa vrha ove stranice, sa mejl adrese naloga, sa naslovom „Brisanje naloga“. Ako za prijavu koristiš Apple nalog sa skrivenom adresom, navedi tu adresu. Proverićemo da zahtev dolazi od vlasnika naloga, obrisati nalog najkasnije u roku od 30 dana i javiti ti kada je gotovo.',
        ],
      },
      {
        heading: '3. Šta se briše, a šta ostaje',
        paragraphs: [
          'Brišu se: nalog (mejl i način prijave), planovi, lične obaveze, liste, oznake „završeno“, omiljena mesta, liste mesta sa beleškama i podešavanja sačuvani na nalogu, predlozi mesta, glasovi za oznake, prijave sadržaja, blokade i zapis o prihvatanju pravila.',
          'Ostaju, bez ikakve veze sa tobom: cene prijavljene sa tvog naloga, jer čine zajedničke podatke o cenama.',
          'Tehnički zapisi servera brišu se sami posle 1 dana. Automatske rezervne kopije baze trenutno se ne prave.',
        ],
      },
      {
        heading: '4. Podaci samo na telefonu',
        paragraphs: [
          'Tablica, mesto parkiranja, nedavne pretrage i navike, kao i sve što je uneto u režimu gosta, postoje samo na tvom telefonu i nikad nisu bili kod nas. Kopija podataka sa naloga ostaje i na telefonu. Sve to se briše kada obrišeš aplikaciju ili njene podatke u podešavanjima telefona. Izvezene rezervne kopije brišeš tamo gde su sačuvane.',
        ],
      },
    ],
  },
};
