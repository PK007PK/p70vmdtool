# Iban-Defender

**Live:**
https://iban-defender.netlify.app

**Repozytorium:**
https://github.com/PK007PK/p70vmdtool

## Opis ogólny aplikacji

Aplikacja ma na celu ułatwienie manualnych kontroli zgodności danych bankowych w SAPAch firmy z dokumentami przekazanymi przez jej dostawców. Jest eksperymentem który ma na celu sprawdzenie, czy web development może okazać się użytecznym uzupełnieniem dużych programów typu SAP.

Istnieją w firmach procedury, w ramach których zespoły VMD (Vendor Master Data) muszą sprawdzać, czy dane bankowe dostawcy w systemie lub w systemach finansowych są zgodne z dokumentami dostarczonymi przez dostawcę oraz wewnętrznie poprawne i spójne. Taka kontrola odbywa się “manualnie”. Nie można jej zautomatyzować bo chodzi o to, aby kontrolę wykonał człowiek. Pracownik VMD musi wykonać ją osobiście. Aplikacja jest więc tylko narzędziem, które ma mu to ułatwić.

Praca ta jest żmudna, mało ergonomiczna i męcząca. Prowadząc kontrolę kolejnych dostawców pracownik ulega znużeniu i wraz z każdym kolejnym kontrolowanym dostawcą rośnie szansa popełnienia błędu i przepuszczenia niepoprawnych danych.

## Aplikacja ma na celu:

- podniesienia ergonomii pracy pracownika,
- podniesienie jakości pracy pracownika,
- dostarczenie pracownikowi szeregu usprawnień ułatwiających jego pracę..

Aplikacja przystosowana jest do pracy z SAP, zarówno w wersji desktopowej, jak również przeglądarkowej.

## Technologia

- React;
- Typescript;
- CRA;
- Styled Components;
- elementy programowania obiektowego;

## Wymagania

Aplikacja jest użyteczna wyłącznie na dużych ekranach. Optymalne jest 27 cali i następujący układ okienek na ekranie:

Dane bankowe wykorzystane na screenach są oczywiście fejkowe.

![ScreenShot](/readme-images/z10.jpg?raw=true)

Aplikacja ma charakter frontendowy. Dane do aplikacji wprowadzane są poprzez skopiowanie ich z systemu finansowego lub dokumentu dostarczonego przez dostawcę i skopiowanie ich do aplikacji poprzez kliknięcie odpowiednich buttonów. Dlatego też przy pierwszym skorzystaniu z aplikacji konieczne jest zaakceptowanie dostępu przeglądarki do clipboardu.

![ScreenShot](/readme-images/z1.jpg?raw=true)

## Funkcjonalność

1. Aplikacja sygnalizuje kolorami, czy bank details (bank key, bank account, iban, bic) skopiowane z dodatkowego systemu finansowego i bank details skopiowane z dokumentu dostarczonego przez dostawcę są takie same jak bank details w głównym systemie finansowym firmy.

Tak wygląda aplikacja kiedy wszystko jest dobrze:
![ScreenShot](/readme-images/z5.jpg?raw=true)

A tak wygląda aplikacja kiedy dane nie są takie same:
![ScreenShot](/readme-images/z6.jpg?raw=true)

Biały kolor kafelka i czerwona czcionka oznacza, że dany znak jest inny, niż odpowiadający mu znak w głównym systemie finansowym.

2. Skopiowanie dowolnego stringa do clipboardu i kliknięcie w odpowiedni button spowoduje skopiowanie stringa do buttona.

![ScreenShot](/readme-images/z2.jpg?raw=true)

3. Skopiowany do buttona tekst podlega rozbiciu na poszczególne znaki, które umieszczone zostają w dużych kwadratach. Ma to na celu zmniejszenie obciążenia wzroku pracownika i ułatwienia porównywania poszczególnych znaków. Tak zaprezentowany ciąg znaków (np numer rachunku bankowego) jest znacznie bardziej ergonomiczny w odbiorze. Łatwo się na to patrzy, więc można łatwo wychwycić nieprawidłowości lub stwierdzić, że wszystko jest ok.

4. OCR skopiowanego tekstu. Stringi możemy kopiować pojedynczo do poszczególnych buttonów tak jak opisano wcześniej i czasem jest to przydatne. Jednak aby przyspieszyć korzystanie z aplikacji kopiujemy do niej całą zawartość Bank Details z transakcji FK03 w SAP, a aplikacja rozpoznaje które dane ma skopiowane do odpowiednich buttonów.

Jeżeli skopiujesz tekst:

Proin euismod nunc eget pharetra egestas.
Bank Account 0532013000
Suspendisse vitae dui sed ipsum tincidunt pretium vel id odio.
IBAN DE89370400440532013000
Morbi fermentum arcu ac lorem tempor fermentum.
SWIFT/BIC COBADEFF3701
Praesent at neque id mi suscipit luctus.”

… i klikniesz “OCR paste” danego systemu finansowego, z tekstu zostaną wybrane tylko odpowiednie informacje i wklejone jak na screenie poniżej. Uzupełniając wszystkie elementy składowe bank details. Czyli kopiujemy komplet danych z SAPa i przeklejamy je jednym kliknięciem do aplikacji.

![ScreenShot](/readme-images/z3.jpg?raw=true)

5. Kolory ułatwiają interpretację danych. Aplikacja wykrywa w IBANie ciąg znaków tożsamy z Bank key i Bank account i koloruje je w odmienny sposób. Jednym spojrzeniem możemy zatem ocenić, czy Bank key i bank account zawierają się w IBANie. Dodatkowo jeżeli tak właśnie jest dostajemy stosowny komunikat na ten temat pod Ibanem (“Bank key detected”, “Bank account detected”). Jest to marker który pozwala błyskawicznie i bez wysiłku zidentyfikować wiele potencjalnych nieprawidłowości.

6. Możliwość odsłuchu danych. Często zdarza się, że danych bankowych przesłanych przez dostawcę nie da się łatwo skopiować (bo jest to np skan czy pdf bez możliwości kopiowania) do aplikacji. W takim przypadku pracownik patrząc na przesłany przez dostawcę dokument może sobie jednocześnie kliknąć odsłuch dowolnego elementu w aplikacji (np ibana w głównym systemie finansowym) i słuchając aplikacji patrzeć na dokument, sprawdzając czy dane są takie same.

7. Każdy element bank details ma swoje menu:

- odsłuch (aplikacja może nam przeczytać zawartość danego buttona);
- kopiowanie zawartości buttona do clipboardu;

Dodatkowo w bank account mamy przycisk Del “-”. W określonych sytuacjach możemy zaakceptować fakt że bank account zawiera kreskę, której nie ma w IBANie. Po podjęciu takiej decyzji możemy kliknąć usunięcie kreski z Bank account aby aplikacja wykonała pozostałe testy (przydatne np przy kontach belgijskich, węgierskich).

![ScreenShot](/readme-images/z8.jpg?raw=true)

Pozycja IBAN głównego systemu finansowego zawiera dodatkowo następujące opcje:

- SwiftRef - otwiera okienko SwiftRefa i wkleja do niego jednocześnie IBAN z naszej aplikacji, do weryfikacji przez SWIFTref,
- BankCodes - otwiera okienko https://bank.codes/ gdzie przykładowo możemy ustalić kod BIC,
- BCodeN - otwiera https://bank-code.net/ i wysyła tam nasz IBAN, który jest tam weryfikowany.

![ScreenShot](/readme-images/z9.jpg?raw=true)

8. Aplikacja po podstawieniu IBANa w głównym systemie finansowym wysyła go do api OpenIban.com i wyświetla kod BIC, jeżeli został on rozpoznany. Może się okazać że BIC w naszej aplikacji i systemie finansowym jest inny niż zwrócony przez api. Wtedy pracownik musi się nad tym zastanowić i zbadać problem.

9. Każde wklejenie danych do buttona powoduje wyczyszczenie clipboardu, aby uniknąć błędu polegającego na porównywaniu tego samego kopiowania i wklejenia z tym samym kopiowaniem i wklejaniem.

10. Automatyczne komentarze. Wiele problemów które wychodzą w trakcie kontroli jest bardzo powtarzalnych. Aby przyśpieszyć pracę aplikacja zawiera automatyczne komentarze które możemy skopiować i wysłać innym osobom w firmie celem poprawy stwierdzonych błędów.

![ScreenShot](/readme-images/z7.jpg?raw=true)

Kontrola poprawności danych bankowych w systemach finansowych nie należy do najbardziej fascynujących zagadnień na świecie, więc jeżeli dotarłeś do końca tego opisu to serdecznie dziękuję Ci za zainteresowanie moim narzędziem.
