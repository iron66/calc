import { useCalculator } from '@/hooks';
import { Button, Input } from '@/ui';

const Page = () => {
  const { models, calculate, results, ready } = useCalculator({
    variables: {
      weight: { required: true, type: 'number' },
      height: { required: true, type: 'number' },
      age: { required: false, type: 'number' },
    },
    formulas: {
      index: (variables) => {
        return variables.weight / Math.pow(variables.height / 100, 2);
      },
    },
    options: {
      showAsterisk: true,
    },
  });

  return (
    <>
      вес: <Input {...models.weight} />
      <br />
      рост: <Input {...models.height} />
      <br />
      возраст: <Input {...models.age} />
      <br />
      <Button onClick={calculate} disabled={!ready}>
        Расчитать
      </Button>
      индекс массы тела: {results.index}
    </>
  );
};

export default Page;
