import { Badge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useForm } from "react-hook-form";
import DialogBox from "./DialogBox";
import { useDispatch } from "react-redux";
import { resetCart } from "@/Features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import FormController from "./FormController";

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
      city: "",
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
                <FormController
                  name="firstName"
                  control={control}
                  type="text"
                  placeholder="First Name"
                  required="First name is required"
                  minLength={{
                    value: 3,
                    message: "First Name must be at least 3 characters.",
                  }}
                  errors={errors}
                />
                <FormController
                  name="lastName"
                  control={control}
                  type="text"
                  placeholder="Last Name"
                  minLength={{
                    value: 3,
                    message: "Last Name must be at least 3 characters.",
                  }}
                  errors={errors}
                />

                <FormController
                  name="city"
                  control={control}
                  type="text"
                  placeholder="City Name"
                  required="City name is required"
                  minLength={{
                    value: 3,
                    message: "City name must be at least 3 characters.",
                  }}
                  errors={errors}
                />

                <FormController
                  name="streetAddress"
                  control={control}
                  type="text"
                  placeholder="Street Address"
                  required="Street Address is required"
                  minLength={{
                    value: 3,
                    message: "Street Address must be at least 3 characters.",
                  }}
                  errors={errors}
                />
                <FormController
                  name="state"
                  control={control}
                  type="text"
                  placeholder="State"
                  required="State is required"
                  minLength={{
                    value: 3,
                    message: "State must be at least 3 characters.",
                  }}
                  errors={errors}
                />

                <FormController
                  name="postalCode"
                  control={control}
                  type="text"
                  placeholder="Postal Code"
                  required="Postal Code is required"
                  minLength={{
                    value: 3,
                    message: "Postal Code be at least 3 characters.",
                  }}
                  maxLength={{
                    value: 12,
                    message: "Postal Code can't be more than 12 characters.",
                  }}
                  errors={errors}
                />

                <FormController
                  name="country"
                  control={control}
                  type="text"
                  placeholder="Country"
                  required="Country is required"
                  minLength={{
                    value: 4,
                    message: "Country name must be at least 4 characters.",
                  }}
                  errors={errors}
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Badge>2</Badge>
                  <span className="ml-2">Payment Method</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormController
                    name="cardNumber"
                    control={control}
                    type="password"
                    placeholder="Card Number"
                    required="Card Number is required"
                    className="col-span-2"
                    minLength={{
                      value: 16,
                      message: "Card Number must be 16 digits.",
                    }}
                    maxLength={{
                      value: 16,
                      message: "Card Number must be 16 digits.",
                    }}
                    pattern={{
                      value: /^\d{16}$/,
                      message: "Invalid Card Number.",
                    }}
                    errors={errors}
                  />
                  <FormController
                    name="expiry"
                    control={control}
                    required="Expiry Date is required."
                    placeholder="Expiry Date (MM/YY)"
                    type="text"
                    pattern={{
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Invalid Expiry Date (MM/YY).",
                    }}
                    errors={errors}
                  />
                  <FormController
                    name="cvv"
                    control={control}
                    type="password"
                    placeholder="CVV"
                    required="CVV is required."
                    minLength={{
                      value: 3,
                      message: "CVV must be 3 or 4 digits.",
                    }}
                    maxLength={{
                      value: 4,
                      message: "CVV must be 3 or 4 digits.",
                    }}
                    pattern={{
                      value: /^\d+$/,
                      message: "CVV must contain only digits.",
                    }}
                    errors={errors}
                  />
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
