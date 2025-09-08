import { Badge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useForm, Controller } from "react-hook-form";
import DialogBox from "./DialogBox";
import { useDispatch } from "react-redux";
import { resetCart } from "@/Features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const PaymentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      state: "",
      postalCode: "",
      country: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Badge>1</Badge>
              <span className="ml-2">Shipping Address</span>
            </div>
            <form
              onSubmit={handleSubmit(() => onSubmit())}
              className="space-y-12"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: "First name is required",
                      minLength: {
                        value: 3,
                        message: "First Name must be at least 3 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <Input placeholder="First Name" {...field} />
                    )}
                  />

                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{
                      required: "Last name is required",
                      minLength: {
                        value: 3,
                        message: "Last Name must be at least 3 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <Input placeholder="Last Name" {...field} />
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Controller
                    name="streetAddress"
                    control={control}
                    rules={{
                      required: "Street address is required",
                      minLength: {
                        value: 3,
                        message:
                          "Street address must be at least 3 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <Input placeholder="Street Address" {...field} />
                    )}
                  />
                  {errors.streetAddress && (
                    <p className="text-red-500">
                      {errors.streetAddress.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Controller
                    name="state"
                    control={control}
                    rules={{
                      required: "State is required",
                      minLength: {
                        value: 3,
                        message: "State must be at least 3 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <Input placeholder="State" {...field} />
                    )}
                  />
                  {errors.state && (
                    <p className="text-red-500">{errors.state.message}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Controller
                    name="postalCode"
                    control={control}
                    rules={{
                      required: "Postal Code is required",
                      minLength: {
                        value: 3,
                        message: "Postal Code must be at least 3 characters.",
                      },
                      maxLength: {
                        value: 12,
                        message:
                          "Postal Code can't be more than 12 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <Input placeholder="Postal Code" {...field} />
                    )}
                  />
                  {errors.postalCode && (
                    <p className="text-red-500">{errors.postalCode.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Controller
                    name="country"
                    control={control}
                    rules={{
                      required: "Country is required",
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="Country"
                        className="col-span-2"
                        {...field}
                      />
                    )}
                  />
                  {errors.country && (
                    <p className="text-red-500">{errors.country.message}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Badge>2</Badge>
                  <span className="ml-2">Payment Method</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Controller
                      name="cardNumber"
                      control={control}
                      rules={{
                        required: "Card Number is required.",
                        minLength: {
                          value: 16,
                          message: "Card Number must be 16 digits.",
                        },
                        maxLength: {
                          value: 16,
                          message: "Card Number must be 16 digits.",
                        },
                        pattern: {
                          value: /^\d{16}$/,
                          message: "Invalid Card Number.",
                        },
                      }}
                      render={({ field }) => (
                        <Input
                          placeholder="Card Number"
                          className="col-span-2"
                          {...field}
                        />
                      )}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500">
                        {errors.cardNumber.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Controller
                      name="expiry"
                      control={control}
                      rules={{
                        required: "Expiry Date is required.",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                          message: "Invalid Expiry Date (MM/YY).",
                        },
                      }}
                      render={({ field }) => (
                        <Input placeholder="MM/YY" {...field} />
                      )}
                    />
                    {errors.expiry && (
                      <p className="text-red-500">{errors.expiry.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Controller
                      name="cvv"
                      control={control}
                      rules={{
                        required: "CVV is required.",
                        minLength: {
                          value: 3,
                          message: "CVV must be 3 or 4 digits.",
                        },
                        maxLength: {
                          value: 4,
                          message: "CVV must be 3 or 4 digits.",
                        },
                        pattern: {
                          value: /^\d+$/,
                          message: "CVV must contain only digits.",
                        },
                      }}
                      render={({ field }) => (
                        <Input placeholder="CVV" {...field} />
                      )}
                    />
                    {errors.cvv && (
                      <p className="text-red-500">{errors.cvv.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid place-content-center">
                <Button type="submit" className="px-6">
                  Pay
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
        {openDialog && (
          <DialogBox
            onClose={() => {
              setOpenDialog(false);
              reset();
              dispatch(resetCart());
              navigate("/");
            }}
          />
        )}
      </Card>
    </>
  );
};

export default PaymentForm;
