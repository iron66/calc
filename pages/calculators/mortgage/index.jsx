import { useCalculator } from '@/hooks';
import { Button, Input } from '@/ui';

const Page = () => {
  const { ready, calculate, models, results } = useCalculator({
    variables: {
      initialFee: { required: true, type: 'number' }, // первоначальный взнос,
      propertyValue: { required: true, type: 'number' }, // стоимость недвижимости,
      interestRate: { required: true, type: 'number' }, // процентная ставка (в год)
      creditTerm: { required: true, type: 'number' }, // срок кредита в месяцах
    },
    formulas: {
      monthlyPayment: (
        { creditTerm, interestRate, initialFee, propertyValue },
        { amountOfCredit }
      ) => {
        const r = interestRate / 100 / 12;
        const x = Math.pow(1 + r, creditTerm);

        return (
          amountOfCredit({ initialFee, propertyValue }) * ((r * x) / (x - 1))
        );
      },
      amountOfCredit: ({ propertyValue, initialFee }) =>
        propertyValue - initialFee,
      overpayment: (variables, formulas) =>
        formulas.monthlyPayment(variables, formulas) * variables.creditTerm -
        formulas.amountOfCredit(variables, formulas),
    },
    options: {
      showAsterisk: true,
    },
  });

  return (
    <>
      первоначальный взнос: <Input {...models.initialFee}/>
      <br />
      стоимость недвижимости: <Input {...models.propertyValue}/>
      <br />
      процентная ставка (в год): <Input {...models.interestRate}/>
      <br />
      срок кредита в месяцах: <Input {...models.creditTerm}/>
      <br />
      <Button onClick={calculate} disabled={!ready}>
        Расчитать
      </Button>
      сумма кредита: {results.amountOfCredit}
      платеж: {results.monthlyPayment}
      переплата: {results.overpayment}
    </>
  );
};

export default Page;
