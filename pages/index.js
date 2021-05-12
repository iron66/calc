import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Calculators list:</h1>
        <ul>
          <li>
            <Link href="/calculators/credit">Кредитный калькулятор</Link>
          </li>
          <li>
            <Link href="/calculators/bodyweight">Индекс массы тела</Link>
          </li>
          <li>
            <Link href="/calculators/calories">Калькулятор калорий</Link>
          </li>
          <li>
            <Link href="/calculators/mortgage">Ипотечный калькулятор</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
