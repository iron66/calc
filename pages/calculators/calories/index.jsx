import { useCalculator } from '@/hooks';
import { Button, Input } from '@/ui';

const Page = () => {
  const { models, calculate, results, ready } = useCalculator({
    variables: {
        weight: { required: true, type: 'number' }, // вес
        height: { required: true, type: 'number' }, // рост
        age: { required: true, type: 'number' }, // возраст
    },
    formulas: {
      calories: ({ weight, height, age }) => {
        const weightKoef = 10;
        const heightKoef = 6.25;
        const ageKoef = 5;
        const totalKoef = 161;

        return (weightKoef * weight) + (heightKoef * height) - (ageKoef * age) -  totalKoef;
      }      
    },
    options: {
      showAsterisk: true,
    },
  });

  return (
    <>
      ваш вес: <Input {...models.weight}/>
      <br />
      ваш рост: <Input {...models.height}/>
      <br />
      ваш возраст:  <Input {...models.age}/>
      <br />
      <Button onClick={calculate} disabled={!ready}>
        Расчитать
      </Button>
      кол-во калорий: {results.calories}
    </>
  );
};

export default Page;
