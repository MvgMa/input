import './assets/styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>React Basics: Практичне завдання</h1>

      <p>
        Завдання полягає в тому, щоб, вивчивши структуру коду нижче, знайти
        спосіб значно його поліпшити шляхом винесення повторюваних частин до
        окремих компонентів (див. папку <code>components</code>) з відповідними
        модифікаціями коду там, де це необхідно.
      </p>

      <p>
        Для зручності набір даних для першої та другої книжкових полиць вже
        підготовлено у файлі <code>misc/sampleData.js</code>, також немає
        потреби в написанні стилів &mdash; все необхідне оформлення вже
        реалізоване.
      </p>

      <p>
        Критерієм успішного виконання завдання є проходження всіх автотестів
        (всі "зелені").
      </p>

      {/* ========== Початок зони редагування =============== */}

      <section className="bookshelf">
        <h2>Перша книжкова полиця</h2>

        <div className="bookshelf__container">
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">An Ancient Saga</span>
              <span className="book__year">1362</span>
              <span className="book__author">Jarl Jarlsson</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">Medieval Ballad</span>
              <span className="book__year">1680</span>
              <span className="book__author">Silvio di Grappa</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">Blue Book</span>
              <span className="book__year">1990</span>
              <span className="book__author">The Cap</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bookshelf">
        <h2>Друга книжкова полиця</h2>

        <div className="bookshelf__container">
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">Another Book</span>
              <span className="book__year">2022</span>
              <span className="book__author">Lorem</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">Something Was Burning</span>
              <span className="book__year">1812</span>
              <span className="book__author">Aujourd'ui</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
          <div className="book">
            <img
              className="book__cover"
              alt="Whatever"
              src="https://picsum.photos/200/300"
            />
            <div className="book__summary">
              <span className="book__title">Something Is Burning</span>
              <span className="book__year">2022</span>
              <span className="book__author">Coast Guarding</span>
            </div>
            <div className="book__actions">
              <button>Купити</button>
              <button>До списку бажань</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Кінець зони редагування =============== */}
    </div>
  );
}
