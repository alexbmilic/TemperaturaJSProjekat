export class Proizvod {

    // Klasican konstruktor za postavljanje argumenata (poziv u main-u je: Proizvod(123, "Mis", 200, 30))
    constructor(sifra1, naziv1, cena1, kolicina1)
    {
        this.sifra = sifra1;
        this.naziv = naziv1;
        this.cena = cena1;
        this.kolicina = kolicina1;
    }

    // Funkcija koja vraca ukupnu cenu za dati proizvod u prodavnici i ovo se pravi, jer se posle ova funkcija poziva
    // u samoj prodavnici kako bi vratila ukupnu cenu datog proizvoda za ukupnu kolicinu
    vratiUkupnuCenu()
    {
        return this.cena * this.kolicina;
    }

}
