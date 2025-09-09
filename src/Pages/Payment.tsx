import PaymentForm from "@/Components/PaymentForm";
import { OrderSummary } from "@/Components/ui/OrderSummary";

const Payment = () => {
  return (
    <>
      <main className="grid gap-10 px-24 py-12">
        <OrderSummary finalPay={true} />
        <PaymentForm />
      </main>
    </>
  );
};

export default Payment;
