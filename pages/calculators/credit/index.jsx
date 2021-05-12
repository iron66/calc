import { useCalculator } from '@/hooks';
import { Button, Input } from '@/ui';

 const Page = () => {
  const { models, calculate, results, ready } = useCalculator({
    variables: {
      amountOfCredit: { required: true, type: 'number' }, // запрашиваемая сумма займа,
      interestRate: { required: true, type: 'number' }, // процентная ставка (в год)
      R: { required: true, type: 'number' }, // срок кредита в месяцах
    },
    formulas: {
      monthlyPayment: ({ amountOfCredit, interestRate, R }) => {
        const r = interestRate / 100 / 12;
        const x = Math.pow(1 + r, R);

        return amountOfCredit * ((r * x) / (x - 1));
      },
      overpayment: (variables, formulas) =>
        formulas.monthlyPayment(variables, formulas) * variables.R -
        variables.amountOfCredit,
    },
    options: {
      showAsterisk: true,
    },
  });

  return (
    <>
      запрашиваемая сумма займа: <Input {...models.amountOfCredit}/>
      <br />
      процентная ставка (в год): <Input {...models.interestRate}/>
      <br />
      срок кредита в месяцах:  <Input {...models.R}/>
      <br />
      <Button onClick={calculate} disabled={!ready}>
        Расчитать
      </Button>
      платеж: {results.monthlyPayment}
      переплата: {results.overpayment}
    </>
  );
};

export default Page;
