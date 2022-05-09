export class Prodavnica {

    // Klasican konstruktor za postavljanje imena prodavnice i inicijalizacija 'praznog' niza
    constructor(ime_prodavnice)
    {
        this.ime_prodavnice = ime_prodavnice;
        this.niz_proizvoda = new Array(); // Pravimo novi niz u kome ce biti smesteni svi proizvodi sa svojim atributima
    }

    // Funkcija za dodavanje proizvoda u niz (dodavanje samog 'Proizvoda' u 'Prodavnicu')
    dodajProizvod(proizvod)
    {
        this.niz_proizvoda.push(proizvod);  // sa 'push' dodajemo proizvod u gore kreirani niz
    }

    crtaj(host)
    {
        if(!host)
            throw new error("Ne postoji roditeljski element na kojem bi se moglo crtati!");            
        
        const tabela = document.createElement("table");
        host.appendChild(tabela);

        this.niz_proizvoda.forEach(el=>this.crtajRedProizvoda(el, tabela));

        // for(let i=0 ; i<this.niz_proizvoda.length ; i++)
        // {
        //     this.crtajRedProizvoda(this.niz_proizvoda[i], tabela);
        // }

    }

    crtajRedProizvoda(proizvod_iz_niza, tabela)
    {
        const red_proizvoda = document.createElement("tr");
        tabela.appendChild(red_proizvoda);

        // Polja za sifru, naziv, cenu i kolicinu

        let polje_za_sifru = document.createElement("td");
        polje_za_sifru.innerHTML = proizvod_iz_niza.sifra;
        red_proizvoda.appendChild(polje_za_sifru);

        let polje_za_naziv = document.createElement("td");
        polje_za_naziv.innerHTML = proizvod_iz_niza.naziv;
        red_proizvoda.appendChild(polje_za_naziv);

        let polje_za_cenu = document.createElement("td");
        polje_za_cenu.innerHTML = proizvod_iz_niza.cena;
        red_proizvoda.appendChild(polje_za_cenu);

        let polje_za_kolicinu = document.createElement("td");
        polje_za_kolicinu.innerHTML = proizvod_iz_niza.kolicina;
        polje_za_kolicinu.className = "Kolicina";
        red_proizvoda.appendChild(polje_za_kolicinu);

        let polje_za_ukupnu_cenu = document.createElement("td");
        polje_za_ukupnu_cenu.innerHTML = proizvod_iz_niza.vratiUkupnuCenu();
        polje_za_ukupnu_cenu.className = "UkupnaCena";
        red_proizvoda.appendChild(polje_za_ukupnu_cenu);

        // dugmici

        let polje_za_dugmad = document.createElement("td");
        red_proizvoda.appendChild(polje_za_dugmad);

        this.nacrtajDugme("+", proizvod_iz_niza, polje_za_dugmad);
        this.nacrtajDugme("-", proizvod_iz_niza, polje_za_dugmad);

    }

    nacrtajDugme(simbolNaDugmetu, proizvod_iz_niza, roditeljsko_polje_za_dugmad)
    {
        let dugme = document.createElement("button");
        dugme.innerHTML = simbolNaDugmetu;
        roditeljsko_polje_za_dugmad.appendChild(dugme);

        dugme.onclick = (ev) => 
        { 
            this.akcijaNaPritisakZaDugme(dugme, proizvod_iz_niza); 
        }

    }


    akcijaNaPritisakZaDugme(dugme, proizvod_iz_niza)
    {
        if(dugme.innerHTML === "+")
        
            proizvod_iz_niza.kolicina++;
        
        else if(dugme.innerHTML === "-")
        
            proizvod_iz_niza.kolicina--;
        
            
        const roditelj = dugme.parentNode.parentNode; // druga opcija je proslediti referencu na red ovoj metodi
        const kol = roditelj.querySelector(".Kolicina");
       
        kol.innerHTML=proizvod_iz_niza.kolicina;
        const uc= roditelj.querySelector(".UkupnaCena");
        uc.innerHTML=proizvod_iz_niza.vratiUkupnuCenu();
        

    }





}