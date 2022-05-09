import { Prodavnica } from "./Prodavnica.js";
import { Proizvod } from "./Proizvod.js";

const P = new Prodavnica("Idea");

P.dodajProizvod(new Proizvod(123,"Mis",200,30));
P.dodajProizvod(new Proizvod(456,"Tastatura",150,20));
P.dodajProizvod(new Proizvod(789,"Monitor",800,50));

P.crtaj(document.body);