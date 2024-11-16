import React, { useState } from "react";
import BaseInputField from "@/components/molecules/formik-fields/BaseInputField";
import SelectMonth from "@/components/molecules/selects/SelectMonth";
import SelectNationality from "@/components/molecules/selects/SelectNationality";
import { Form, Formik } from "formik";
import { Minus, Plus } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import Dropdown from "./Dropdown";
import { useMutate } from "@/hooks/UseMutate";
import dayjs from "dayjs";
import { Spinner } from "../UI/Spinner";
import { notify } from "@/utils/toast";
import PickerBook from "./PickerBook";

function MainDataBookingForm({ DetailTour, setIsThanksVisible }) {
  const { mutate, isPending } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      setIsThanksVisible(true);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    fornoneata: true,
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [rangeDays, setRangeDays] = useState(DetailTour?.duration || 1);

  const handleDateChange = (date, days) => {
    setSelectedDate(date ? dayjs(date) : null);
    setRangeDays(days);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-none p-4 border border-gray-300">
        <Formik
          initialValues={{
            name: "",
            email: "",
            nationality_id: "",
            month: "",
            phone: "",
            start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
            num_of_adults: 1,
            num_of_children: 0,
            num_of_infants: 0,
            tour_id: DetailTour?.id,
            duration: DetailTour?.duration || 1,
            phone_code: "+20",
          }}
          onSubmit={(values) =>
            mutate({
              ...values,
              phone: values?.phone.slice(2),
              start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
            })
          }
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <Dropdown
                  items={[]}
                  selectedItem={DetailTour?.destination}
                  onSelect={() => {}}
                  placeholder="Where"
                  isDropdownOpen={false}
                  setIsDropdownOpen={() => {}}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <BaseInputField
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="block w-full border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                />
                <BaseInputField
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="block w-full border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <SelectNationality
                  name="nationality_id"
                  placeholder="Nationality"
                />
                <div className="flex flex-col space-y-2">
                  <PhoneInput
                    international
                    placeholder="Your Number"
                    value={values.phone}
                    onChange={(value) => setFieldValue("phone", value)}
                    defaultCountry="EG"
                    className="phone-input-container block w-full my-3 mt-2 pb-2 p-1 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="mt-2">
                  <PickerBook
                    onDateChange={handleDateChange}
                    setFieldValue={setFieldValue}
                    minDuration={DetailTour?.duration || 1}
                    initialDuration={DetailTour?.duration || 1}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <SelectMonth name="month" placeholder="Select Month" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Adults", name: "num_of_adults" },
                  { label: "Children", name: "num_of_children" },
                  { label: "Infants", name: "num_of_infants" },
                ].map(({ label, name }) => (
                  <div key={label} className="flex flex-col">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {label}
                    </label>
                    <div className="flex items-center justify-between border border-gray-300 rounded-none shadow-sm">
                      <button
                        type="button"
                        onClick={() =>
                          setFieldValue(name, Math.max(0, values[name] - 1))
                        }
                        className="p-2 hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-center min-w-[2rem]">
                        {values[name]}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFieldValue(name, values[name] + 1)}
                        className="p-2 hover:bg-gray-100 active:bg-gray-200 transition duration-150"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  placeholder="Tell us More Details"
                  className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full p-3 bg-primary-light text-white rounded-none hover:bg-primary-dark transition duration-150"
                >
                  {isPending ? <Spinner /> : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default MainDataBookingForm;
