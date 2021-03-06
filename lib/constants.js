// enumy
KWESTIA_STATUS = {
    DELIBEROWANA: "deliberowana",
    ARCHIWALNA: "archiwalna",
    ADMINISTROWANA : "administrowana",
    GLOSOWANA: "głosowana",
    REALIZOWANA: "realizowana",
    KOSZ: "kosz",
    OSOBOWA: "osobowa",
    HIBERNOWANA: "hibernowana",
    STATUSOWA: "statusowa",//o nadanie statusu doradcy na honorowego
    OCZEKUJACA:"oczekująca",//oczekuje na akceptacje zaproszenia na honorowego
    ZREALIZOWANA: "zrealizowana"
};

KWESTIA_TYPE={
  "ACCESS_HONOROWY":"czlonkowstwo honorowe",
  "ACCESS_ZWYCZAJNY":"czlonkowstwo zwyczajne",
  "ACCESS_DORADCA":"czlonkowstwo doradcze",
  "GLOBAL_PARAMETERS_CHANGE": "zmiana parametrów",
   "BASIC":"podstawowa"
};

KWESTIA_ACTION={
  "INVITATION_HONOROWY_REJECTED":"Zaproszony odrzucił chęć aplikowania na stanowisko Członka Honorowego",
  "INVITATION_WAITING_TIME_EXPIRED":"Czas oczekiwania na odpowiedź ze strony zaproszonego minął",
  "DELIBERATION_EXPIRED":"Czas deliberacji kwestii minął",
  "NEGATIVE_PRIORITY":"Siła priorytetu w realizacjii była mniejsza od priorytetu w deliberacji (i) głosowaniu *(-1)",
  "NEGATIVE_PRIORITY_VOTE":"Siła priorytetu w głosowaniu była mniejsza od 1",
  "SPECIAL_COMMENT_BIN" :"Wartość priorytetu i kworum w komentarzu specjalnym o tym zdecydowały"
};

SENDING_EMAIL_PROBLEMS={
  "NO_ACTVATION_LINK": "Użytkownik nie mógł aktywować konta, ponieważ z powodu błędu serwera pocztowego nie otrzymał linka aktywacyjnego" ,
  "NO_INVITATION_HONOROWY":  "Użytkownik nie mógł odpowiedzieć na zaproszenie, ponieważ ponieważ z powodu błędu serwera pocztowego nie otrzymał wiaodmości email z linkiem potwierdzającym chęć przynależenia do organizacji"
};

DISCUSSION_OPTIONS = {
    POST_CHARACTERS_DISPLAY: 300,
    POST_ANSWER_CHARACTERS_DISPLAY: 200
};

KWORUM_TYPES = {
    ZWYKLA: "zwykla",
    STATUTOWA: "statutowa"
};

POSTS_TYPES = {
    //domyślna wartość -> komentarz zwykły
    DEFAULT: "default",
    //komentarz, który oznacza chęć przeniesienia kwestii do archiwum
    ARCHIWUM: "archiwum",
    //komentarz, który oznacza chęć przeniesienia do kosza
    KOSZ: "kosz",
    //komentarz, który oznacza chęć przeniesienia kwestii z archiwum do deliberacji
    DELIBERACJA: "deliberacja",
    //komentarz, który oznacza chęć przeniesienia kwesti z realizacji na zrealizowane
    ZREALIZOWANA: "zrealizowana",
    RAPORT: "raport"
};

LANGUAGES = {
    DEFAULT_LANGUAGE: "pl"
}

USERTYPE = {
    ADMIN: "admin",
    CZLONEK : "członek",
    DORADCA : "doradca",
    WSPARCIE: "wsparcie",
    HONOROWY: "honorowy",
    ZWIESZONY:"zawieszony",
    USUNIETY:"usunięty",
    GOSC: "gość"
};

NOTIFICATION_TYPE = {
    HONOROWY_INVITATION: "Zaproszenie do Aplikowania na stanowisko Członka Honorowego",
    NEW_ISSUE: "Pojawienie się nowej Kwestii",
    ISSUE_NO_PRIORITY:"Brak aktywności w Kwestii",
    ISSUE_NO_PRIORITY_REALIZATION:"Brak aktywności w Kwestii w Realizacjii",
    MESSAGE_FROM_USER:"Wiadomość od użytkownika",
    LOOBBING_MESSAGE:"Lobbowanie Kwestii",
    APPLICATION_CONFIRMATION: "Przyjęcie wniosku aplikacyjnego",
    APPLICATION_ACCEPTED: "Pozytywne rozpatrzenie wniosku aplikacyjnego",
    APPLICATION_REJECTED: "Odrzucenie wniosku aplikacyjnego",
    VOTE_BEGINNING:"Rozpoczęcie głosowania Kwestii",
    LACK_OF_REALIZATION_REPORT: "Komunikat o braku Raportu Realizacyjnego",
    FIRST_LOGIN_DATA: "Wysłanie danych do logowania do nowo utworzonego konta",
    RESET_PASSWORD: "Wysłanie linku do resetowania hasła"
};

RADKING = {
    DODANIE_KWESTII: 10,
    WYCOFANIE_KWESTII_DO_ARCHIWUM: -20,
    WYCOFANIE_KWESTII_DO_KOSZA: -40,
    DODANIE_KOMENTARZA: 5,
    DODANIE_ODNIESIENIA: 2,
    WYJSCIE_Z_ZESPOLU_REALIZACYJNEGO: -30,
    NADANIE_PRIORYTETU: 1,
    AWANS_KWESTII_DO_REALIZACJI: 20,
    UDZIAL_W_ZESPOLE_REALIZACYJNYM: 10,
    ZLOZENIE_RAPORTU_REALIZACYJNEGO: 5
};

TXV = {
    R: "r.",
    DN: "dn.",
    BY: " przez ",
    MIN: " min, ",
    SEC: " sek",
    INFO: "Info",
    DATA: "Data",
    FIELD: "Pole",
    CANCEL: "Anuluj",
    SYSTEM_NAME: "SDD",
    CAN_NOT_BE_EMPTY: " nie może być puste!",
    REALIZ_DATE: "Data realizacji",
    CREATION_DATE: "Data utworzenia",
    OK: "OK",
    I_AGREE: "Zgadzam się",
    RESIGNS: "Rezygnuję",
    UWAGA: "Uwaga",
    ORG_NAME: "Nazwa organizacji",
    TERITORY: "Terytorium",
    CONTACT: "Kontakt",
    CONTACTS: "Kontakty",
    STATUT: "Statut",
    VOTE_TIME: "Czas głosowania(w godzinach)",
    WAITING_TIME: "Czas wyczekiwania kwestii i komentarzy specjalnych (w dniach)",
    MAX_ISSUE_IN_VOTING: "Maksymalna ilość kwestii w głosowaniu",
    FREQ_ADD_ISSUE: "Częstotliwość dodania kwestii (w minutach)",
    FREQ_ADD_COMM: "Częstotliwość dodania komentarza (w minutach)",
    FREQ_ADD_REFER: "Częstotliwość dodania odniesienia (w minutach)",
    FREQ_ADD_REPPO: "Okres składania Raportów Realizacyjnych (w dniach)",
    YOU_INT_CHANGE: "Zamierzasz dokonać następujących zmian: ",
    I_SUGG_CH_CONT: "Proponuję zmianę zawartości w ",
    WITH_THE_VALUE: " z wartości",
    ON: "na",
    NAZ_KWESTI: "Nazwa Kwestii",
    FIRST_MEM_IMPL_TEAM_EXIS: "Jest już pierwszy członek ZR.",
    RAPORT: "Raport",
    BRAK_RAP: "Brak aktualnego Raportu Realizacyjnego",
    RR_EXSIST: "Przepraszamy,istnieje już Raport Realizacyjny w wybranym okresie",
    OPCJE: "Opcje",
    START_REAL: "Start realizacji",
    UCHWALA_NR: "Uchwała nr",
    DOTYCZY: "Dotyczy Kwestii",
    MOVE_TO_ARCH: "Proponuję przenieść tę Kwestię do Archiwum! Proszę o dyskusję i nadanie priorytetu.",
    MOVE_TO_DELIB: "Proponuję przenieść tę Kwestię do Deliberacji! Proszę o dyskusję i nadanie priorytetu.",
    MOVE_TO_TRASH: "Proponuję przenieść tę Kwestię do Kosza!  Proszę o dyskusję i nadanie priorytetu.",
    OPIS: "Opis",
    STAN_OSOB: "Stan osobowy",
    OBECNYCH: "Obecnych",
    GLOS_ZA: "Głosujących za",
    GL_PRZEC: "Głosujących przeciw",
    WSTRZ_SIE: "Wstrzymujących się",
    ZESP_REAL: "Zespół Realizacyjny",
    REGUL_ORG: "Regulamin organizacji ",
    APPLYING: "Aplikowanie - ",
    APPLY_SYSTEM: "Aplikacja o przyjęcie do systemu jako ",
    ACCESS_EXIST: "Został już złożony wniosek na podany adres email!",
    USER_EXIST: "Istnieje już w systemie podany użytkownik!",
    ERROR: "Błąd: ",
    ALERT_LOG1: "Z powodu błędu serwera pocztowego link z danymi do logowania ",
    ALERT_LOG2: "nie został wysłany. Aby zalogować się do systemu możesz ",
    ALERT_LOG3: "skorzystać z opcji przypomnienia hasła",
    ALERT_LOG4: "Email nie został wysłany,spróbuj ponownie.",
    SUCCESS: "Sukces",
    LINK_CHAN_PASS: "Link do zmiany hasła został wysłany",
    TOKEN_HAS_EXPIRED: "Token już wygasł",
    ORD_MEMBER: "Członka Zwyczajnego",
    CZL_HONOROWEGO: "Członka Honorowego",
    INVITATION_TO_APPLY: "Zaproszenie do aplikowania na Członka Honorowego w ",
    CONFIRM_OF_RECE: "Potwierdzenie przyjęcia aplikacji w charakterze ",
    REJECT_OF_APLIC: "Odrzucenie aplikacji w charakterze ",
    POSITIVE_CONSIDER: "Pozytywne rozpatrzenie wniosku aplikacyjnego w charakterze ",
    DATA_LOGGING: "Dane logowania do systemu ",
    RESET_ACCES_PASS: "Resetowanie hasła dostępu do systemu ",
    COUNSELOR: "Doradcy",
    APPL_HONOR_MEMBER: "Aplikowanie na Członka Honorowego",
    BEGAN_VOTING_ISSUE: "Rozpoczęto głosowanie Kwestii",
    HONORABLE: "Szanowny",
    H_COULD: "mógł",
    DEAR: "Szanowna",
    D_COULD: "mogła",
    MR_MRS: "Szanowny/a ",
    HD_COULD: "mógł/mogła",
    ZZ_NOT_COMPLETE: "Przepraszamy!Aby zgłosić Członka Honorowego Zespół Realizacyjny ds Osób musi byś skompletowany!",
    ABY_DOSTEP_UZUP: "Aby uzyskać dostęp, należy uzupełnić wymagane pola.",
    EM_DOES_NOT: "Podany adres email nie istnieje w systemie",
    REG_NOT_POSS: "Rejestracja nie możliwa. Skorzystaj z procedury dołączania do systemu.",
    PRIORITY: "Priorytet",
    VAL_OF_PRIORITY: "Wartość priorytetu",
    GIVING_PRIORITY: "Nadanie priorytetu ",
    YOU_GAVE_PRIOR: "Nadałeś już priorytet o tej wadze w tym komentarzu",
    SHORT_NAME: "Skrót",
    NAME: "Nazwa",
    F_NAME: "Imię",
    L_NAME: "Nazwisko",
    CITY: "Miasto",
    DO_STORE: "Zapisz",
    DO_NOT_EMPTY: "Formularz nie może zawierać pustych pól!",
    INCOR_LOGIN_DET: "Niepoprawne dane logowania",
    FILL_FORM_CORR: "Uzupelnij poprawnie pola formularza.",
    YOUR_LOGIN: "Twój login: ",
    HELLO: "Witaj ",
    FILL_SUBJ_TYPE: "Uzupełnij temat i rodzaj",
    GIVEN_TOPIC_EXISTS: "Podany temat już istnieje",
    FIELD_TOPIC_CNBE: "Pole temat nie może być puste",
    GIVEN_TYPE_EXISTS: "Podany rodzaj dla tego tematu już istnieje",
    FIELD_TYPE_CNBE: "Pole rodzaj nie może być puste",
    FIELD_CONT_CNBE: "Pole treści email nie może być puste!",
    GIVEN_ISSUE_EXISTS: "Istnieje już kwestia o podanej nazwie!",
    LACK_OF_ACTIVITY: "Nie odnotowaliśmy Twojej aktywności w następującej Kwestii: ",
    GO_BACK: "Wstecz",
    STAT_SYSTEM: "Statystyki systemu",
    NR_OF_USERS: "Liczba użytkowników",
    USERS: "Użytkownicy",
    NR_OF_PARAMS: "Liczba parametrów",
    PARAMS: "Parametry",
    NR_OF_TYPES: "Liczba rodzajów",
    TITLE: "Tytuł",
    AUTHOR: "Autor",
    TEMAT: "Temat",
    THREADS: "Tematy",
    RODZAJ: "Rodzaj",
    TYPES: "Rodzaje",
    NUMBER: "Liczba",
    REPORTS: "Raporty",
    ISSUES: "Kwestie",
    DATE_OF_INTRO: "Data wprowadzenia",
    STATUS: "Status",
    SYSTEMOWA: "systemowa",
    TECHNICAL: "techniczna",
    QUORUM: "Kworum",
    DATE_OF_VOTE: "Data głosowania",
    IF_SEND_WITHOUT: "Czy wysłać email bez ",
    SUBJECT_AND_CONTENT: "tematu i treści?",
    SUBJECT2: "tematu?",
    EMAIL_CONTENT: "Treść email: ",
    ENCOURAGE: "Zachęć użytkowników do akcjii w Twojej kwestii",
    MESS_TO_MEMBER: "Wiadomość do członków",
    ADD_NEW_ISSUE: "Dodano nową kwestię",
    SEND: "Wyślij",
    SEND_ERROR: "Przepraszamy,wystąpił błąd podczas wysyłania.",
    NOT_POSS_LESS24: "Nie można lobbować za kwestią częściej niż co 24h",
    GL_PAR_CHANGE1: "cofnięcia zmiany parametru globalnego",
    GL_PAR_CHANGE2: "cofnięcia zmian wywołanych przez kwestię",
    GL_PAR_CHANGE3: "usunięcia/zawieszenia użytkownika systemu",
    GL_PAR_CHANGE4: "Przepraszamy, istnieje już kwestia dotycząca zmiany parametru globalnego!",
    GL_PAR_CHANGE5: "Propozycja zmiany parametru globalnego  przez ",
    GL_PAR_CHANGE6: "Propozycja zmiany parametru globalnego",
    LOAD_LANG: "Załadowano język",
    NO_DESCR: "Brak opisu",
    FUTURE_FUNCTION: "Funkcja przyszłościowa. Jej implementacja będzie stanowiła połączenie takich, jak ten, Systemów w sieć. Obecnie jeszcze nie jest to oprogramowane.",
    ADOPT: "Przyjęcie",
    STATUTORY: "Statutowe",
    ORGANIZATIONAL: "Organizacyjne",
    INTERNAL_AFFAIRS: "Dotyczy wszelkich spraw wewnętrznej organizacji naszej społeczności. Wszyskkich użytkowników tej instancji systemu.",
    ZR_PERSONS: "Zespół Realizacyjny ds. Osób",
    SUPPORT_MY_ISSUE: "Proszę o wsparcie mojej kwestii",
    GL_PAR_INFO: "Przepraszamy, na tym etapie system nie obsługuje ewentualnego ",
    PERSON: " osoby",
    PERSONS: " osób",
    MEMBER: " członków",
    MEMBERS: " członka",
    NO_EXIT_INFO1: "Przepraszamy! Funkcjonalność systemu nie pozwala na opuszczenie Zespołu Realiazacyjnego ds. Osób",
    NO_EXIT_INFO2: "Przepraszamy! Jesteś jedynym członkiem tego ZR. Nie możesz opuścić go dopóki masz pod swoją opieką uchwały",
    REALIZ_TEAM_FOR: "Zespół Realizacyjny ds. ",
    NAME_OF_TEAM: "Nazwa Zespołu",
    SPECIF_OF_TEAM: "Skład Zespołu",
    FILL_NAME_OF_TEAM: "Uzupełnij nazwę ZR",
    NAME_OF_TEAM_EXIST: "Istnieje już ZR o podanej nazwie.",
    PASS_A_RESOLUTION: "Podjęto uchwałę"
};
