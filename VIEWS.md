# Dashboard

- `/`
  - statystyki dzisiejszych zamówien (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabele z lista rezerwacji oraz wydarzeń
    - kazda kolumna = 1 stolik
    - kazdy wiersz = 30 minut
    - ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolu,nach zamiast dni są rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacjie dotyczące rezerwacji
  - musi umozliwiać edycję i zapisanie zmian
- `/tables/booking/new `
  - analogicznie do powyzszej, tylko bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyzszej, dla eventów
- `/tables/events/new `
  - analogicznie do powyzszej, dla eventóe, tylko bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach rózne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostepne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcją i ceną)
  - kwota zamówienia
- `waiter/order/:id`
  - jak powyzsza

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności zamówienia
  - lista musi zawierac:
    - numer stolika (lub zamowienia zdalnego )
    - pelne informacje dotyczace zamowionych dań
  - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane
