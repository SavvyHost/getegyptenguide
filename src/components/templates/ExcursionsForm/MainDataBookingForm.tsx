<<<<<<< HEAD
import { Form, Formik } from "formik";
import { Minus, Plus, Users, Calendar } from "lucide-react";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@/components/atoms/UI/Spinner";
import DatePickerInput from "@/components/atoms/SearchExcursions/DataPickerInput";
import { notify } from "@/utils/toast";
import { useMutate } from "@/hooks/UseMutate";
import BookingModal from "./BookingModal";
import Thanks from "@/components/molecules/Thanks";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const MainDataBookingForm = ({
  DetailTour,
  isDatePickerOpen = false,
  onStateChange,
=======
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Minus, Plus, X } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import dayjs from "dayjs";
import { Modal, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Spinner } from "@/components/atoms/UI/Spinner";
import SelectNationality from "@/components/molecules/selects/SelectNationality";
import BaseInputField from "@/components/molecules/formik-fields/BaseInputField";
import DatePickerInput from "@/components/atoms/SearchExcursions/DataPickerInput";
import { notify } from "@/utils/toast";
import { useMutate } from "@/hooks/UseMutate";

const MainDataBookingForm = ({
  DetailTour,
  setIsThanksVisible,
  isDatePickerOpen = false,
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
}) => {
  const { mutate, isPending } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      setIsThanksVisible(true);
      setIsModalOpen(false);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

<<<<<<< HEAD
  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, "day"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openPassengers, setOpenPassengers] = useState(false);
  const [bookingStep, setBookingStep] = useState("initial");
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceDetails, setPriceDetails] = useState({});
  const [ageGroupDetails, setAgeGroupDetails] = useState({});
  const [hasSetPassengers, setHasSetPassengers] = useState(false);
  const [isThanksVisible, setIsThanksVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [hasAppliedPassengers, setHasAppliedPassengers] = useState(false);

  useEffect(() => {
    if (isDatePickerOpen) {
      setIsDatePickerVisible(true);
      setBookingStep("date");
    }
  }, [isDatePickerOpen]);

  useEffect(() => {
    if (onStateChange) {
      onStateChange({
        selectedDate,
        hasSetPassengers,
        totalPrice,
        handleBookNowClick: () => handleBookNowClick(),
        isModalOpen,
        setIsModalOpen,
      });
    }
  }, [selectedDate, hasSetPassengers, totalPrice, isModalOpen]);

  const handleDateChange = (newDate) => {
    if (newDate && newDate.isValid()) {
      setSelectedDate(newDate);
      setIsDatePickerVisible(false);
      // Only open passengers if it hasn't been applied yet
      if (!hasAppliedPassengers) {
        setOpenPassengers(true);
        setBookingStep("passengers");
      }
    }
=======
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openPassengers, setOpenPassengers] = useState(false);
  const [showValidationAlert, setShowValidationAlert] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceDetails, setPriceDetails] = useState({});

  const handleDateChange = (newDate) => {
    setOpenPassengers(!openPassengers);
    setSelectedDate(newDate);
    setShowValidationAlert(false);
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  };

  const initialValues = {
    name: "",
    email: "",
    nationality_id: "",
    phone: "",
    start_at: "",
    num_of_adults: 2,
    num_of_children: 0,
    num_of_infants: 0,
    tour_id: DetailTour?.id,
    duration: "1",
    phone_code: "+20",
  };

  const calculateTotalPrice = (values) => {
    const { min_price, discounts } = DetailTour || {};
    const { num_of_adults, num_of_children, num_of_infants } = values;

<<<<<<< HEAD
    const adultPrice = (num_of_adults * min_price).toFixed(2);
    const childrenPrice = (num_of_children * (min_price * 0.5)).toFixed(2);
    const infantsPrice = (num_of_infants * 0).toFixed(2);
=======
    const adultPrice = (num_of_adults * min_price).toFixed(2); // Format to 2 decimal places
    const childrenPrice = (num_of_children * (min_price * 0.7)).toFixed(2); // Format to 2 decimal places
    const infantsPrice = (num_of_infants * (min_price * 0.5)).toFixed(2); // Format to 2 decimal places
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94

    const total = (
      parseFloat(adultPrice) +
      parseFloat(childrenPrice) +
      parseFloat(infantsPrice)
<<<<<<< HEAD
    ).toFixed(2);

=======
    ).toFixed(2); // Calculate total and format to 2 decimal places
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    setTotalPrice(total);
    setPriceDetails({
      adultPrice,
      childrenPrice,
      infantsPrice,
      total,
<<<<<<< HEAD
      discount: (discounts || 0).toFixed(2),
    });

    setAgeGroupDetails({
      adults: num_of_adults,
      children: num_of_children,
      infants: num_of_infants,
    });
  };

  const handleBookNowClick = () => {
    if (!hasSetPassengers || totalPrice === 0) {
      setIsDatePickerVisible(true);
      setBookingStep("date");
      return;
    }

    setBookingStep("details");
=======
      discount: (discounts || 0).toFixed(2), // Format discount to 2 decimal places
    });
  };

  const handleOpenModal = (values) => {
    if (!selectedDate) {
      setShowValidationAlert(true);
      notify("error", "Please select a date and Passengers before proceeding.");
      return;
    }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    setIsModalOpen(true);
  };

  const handleConfirmBooking = (values) => {
    const month = selectedDate ? selectedDate.format("MMM") : "";
    mutate({
      ...values,
      phone: values.phone.slice(2),
      start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
      month: month,
    });
  };

<<<<<<< HEAD
  const handlePassengersClick = () => {
    // Always toggle the passenger selection when clicked
    setOpenPassengers(!openPassengers);
  };

=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  return (
    <div className="relative">
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, setFieldValue }) => (
<<<<<<< HEAD
          <Form className="space-y-3">
            <div className="bg-white">
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-primary-dark mr-2" />
                <h3 className="text-lg font-medium">Select Date</h3>
              </div>
              <DatePickerInput
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                isOpen={isDatePickerVisible}
                onClose={() => {
                  setIsDatePickerVisible(false);
                  if (bookingStep === "initial" || bookingStep === "date") {
                    setBookingStep("initial");
                  }
                }}
                mobileWidth="100%"
                laptopWidth="100%"
              />
            </div>

            <div className="bg-white">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-primary-dark mr-2" />
                <h3 className="text-lg font-medium">Select Passengers</h3>
              </div>
              <div
                className={`cursor-pointer bg-white border-2 ${
                  openPassengers ? "border-accent-yellow" : "border-gray-400"
                } p-3 rounded-lg transition-colors hover:border-accent-yellow`}
                onClick={handlePassengersClick}
              >
                <span className="text-gray-700">
                  {values.num_of_adults} Adults, {values.num_of_children}{" "}
                  Children, {values.num_of_infants} Infants
=======
          <Form>
            {showValidationAlert && ""}

            <DatePickerInput
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              isOpen={isDatePickerOpen} // Pass the prop to DatePickerInput
              mobileWidth="100%"
              laptopWidth="100%"
              height="40px"
              labelProps={{
                fontSize: "19px",
                color: "smoke",
                transform: "translate(14px, 8px) scale(1)",
              }}
            />

            <div className="mt-4 relative">
              <div
                className="hover:bg-gray-100 cursor-pointer bg-white border-2 border-gray-300 p-2 flex flex-wrap justify-around items-center text-base font-semibold rounded-lg text-gray-500"
                onClick={() => setOpenPassengers(!openPassengers)}
              >
                <span className="break-words w-full">
                  Adults: {values.num_of_adults}, Children:{" "}
                  {values.num_of_children}, Infants: {values.num_of_infants}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                </span>
              </div>

              {openPassengers && (
<<<<<<< HEAD
                <div className="mt-3 bg-white rounded-lg border border-gray-200 p-4 shadow-lg">
=======
                <div className="absolute top-full left-0 right-0 z-10 bg-white p-4 rounded-md shadow-md mt-2">
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                  {[
                    {
                      label: "Adults (17-99)",
                      name: "num_of_adults",
                      min: 1,
                      max: 15,
                      initial: 2,
                    },
                    {
                      label: "Children (3-16)",
                      name: "num_of_children",
                      min: 0,
                      max: 15,
                      initial: 0,
                    },
                    {
                      label: "Infants (0-2)",
                      name: "num_of_infants",
                      min: 0,
                      max: 15,
                      initial: 0,
                    },
                  ].map(({ label, name, min, max, initial }) => (
                    <div
                      key={label}
<<<<<<< HEAD
                      className="flex justify-between items-center py-3 border-b last:border-0"
                    >
                      <div>
                        <span className="font-medium text-gray-900">
                          {label}
                        </span>
                        <div className="text-sm text-gray-500">
                          Min: {min}, Max: {max}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
=======
                      className="flex justify-between items-center mb-4"
                    >
                      <div>
                        <span>{label}</span>
                        <div className="text-sm text-gray-500">
                          Minimum: {min}, Maximum: {max}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue(name, Math.max(min, values[name] - 1))
                          }
<<<<<<< HEAD
                          className="w-8 h-8 rounded-full bg-gray-100 text-primary-dark flex items-center justify-center hover:bg-orange-50 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {values[name] ?? initial}
                        </span>
=======
                          className="p-2 bg-gray-100 text-green-600 rounded-full flex items-center justify-center focus:outline-none hover:bg-green-200 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span>{values[name] ?? initial}</span>
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue(name, Math.min(max, values[name] + 1))
                          }
<<<<<<< HEAD
                          className="w-8 h-8 rounded-full bg-gray-100 text-primary-dark flex items-center justify-center hover:bg-orange-50 transition-colors"
=======
                          className="p-2 bg-gray-100 text-green-600 rounded-full flex items-center justify-center focus:outline-none hover:bg-green-200 transition-colors"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
<<<<<<< HEAD
                  <button
                    onClick={() => {
                      setOpenPassengers(false);
                      calculateTotalPrice(values);
                      setHasSetPassengers(true);
                      setHasAppliedPassengers(true);
                      setBookingStep("review");
                    }}
                    type="button"
                    className="mt-4 w-full p-3 bg-primary-dark text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
                  >
                    Apply
                  </button>
=======
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setOpenPassengers(false);
                        calculateTotalPrice(values);
                      }}
                      type="button"
                      className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-900 transition duration-150"
                    >
                      Apply
                    </button>
                  </div>
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                </div>
              )}
            </div>

            {totalPrice > 0 && (
<<<<<<< HEAD
              <div className="bg-white rounded-lg shadow-sm border p-4 border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Price Summary
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Adults ({ageGroupDetails.adults})</span>
                    <span className="font-medium">
                      ${priceDetails.adultPrice}
                    </span>
                  </div>
                  {ageGroupDetails.children > 0 && (
                    <div className="flex justify-between items-center">
                      <span>Children ({ageGroupDetails.children})</span>
                      <span className="font-medium">
                        ${priceDetails.childrenPrice}
                      </span>
                    </div>
                  )}
                  {ageGroupDetails.infants > 0 && (
                    <div className="flex justify-between items-center">
                      <span>Infants ({ageGroupDetails.infants})</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Free
                      </span>
                    </div>
                  )}
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-primary-dark">
                        ${priceDetails.total}
                      </span>
                    </div>
                  </div>
=======
              <div className="mt-4 p-4 border rounded-md bg-gray-100">
                <h3 className="text-lg font-semibold text-gray-700">
                  Price Summary
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Adults: ${priceDetails.adultPrice}</li>
                  <li>Children: ${priceDetails.childrenPrice}</li>
                  <li>Infants: ${priceDetails.infantsPrice}</li>
                </ul>
                <div className="flex justify-between font-bold mt-3 text-gray-800">
                  <span>Total Price:</span>
                  <span>${priceDetails.total}</span>
                </div>
                <div className="text-sm text-gray-500">
                  Discount: ${priceDetails.discount}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                </div>
              </div>
            )}

<<<<<<< HEAD
            {!openPassengers && (
              <Button
                variant="contained"
                onClick={handleBookNowClick}
                className="w-full py-3 bg-primary-dark hover:bg-primary-light text-lg font-medium rounded-lg transition-colors"
              >
                {isPending ? (
                  <Spinner size="sm" className="mr-2" />
                ) : hasSetPassengers && totalPrice > 0 ? (
                  "Book Now"
                ) : (
                  "Check Total Price"
                )}
              </Button>
            )}
            {isModalOpen && (
              <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                values={values}
                setFieldValue={setFieldValue}
                onConfirm={handleConfirmBooking}
                isPending={isPending}
              />
            )}

            {isThanksVisible && (
              <Thanks
                onClose={() => setIsThanksVisible(false)}
                message="Thank you for your booking! We'll be in touch soon."
              />
            )}
          </Form>
        )}
      </Formik>
      <ToastContainer />
=======
            <Button
              variant="contained"
              onClick={() => handleOpenModal(values)}
              className="mt-4 w-full bg-primary-light hover:bg-primary-dark"
            >
              Book Now
            </Button>

            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              aria-labelledby="confirm-modal-title"
              aria-describedby="confirm-modal-description"
              className="flex items-end justify-center md:items-center md:p-4"
            >
              <div
                className={`relative w-full md:h-auto md:max-w-2xl bg-white rounded-t-xl md:rounded-xl transform transition-transform duration-300 ease-out ${
                  isModalOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {/* Drag indicator for mobile */}
                <div className="md:hidden w-12 h-1.5 bg-gray-300 rounded-full mx-auto my-3"></div>

                {/* Main content with fixed height and scrolling */}
                <div className="flex flex-col h-[60vh] md:h-auto">
                  {/* Header - Fixed */}
                  <div className="flex justify-between items-center pb-3 lg:p-5 border-b text-center">
                    <h2 className="text-xl ml-4 font-semibold text-gray-900">
                      Confirm Your Details
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                      aria-label="Close modal"
                    >
                      <X
                        size={24}
                        className="text-gray-600 hover:text-red-600"
                      />
                    </button>
                  </div>

                  {/* Scrollable content area */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <div className="space-y-4">
                      <BaseInputField
                        name="name"
                        label="Name"
                        placeholder="Name"
                        type="text"
                        value={values.name}
                        onChange={(e) => setFieldValue("name", e.target.value)}
                      />
                      <BaseInputField
                        name="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        value={values.email}
                        onChange={(e) => setFieldValue("email", e.target.value)}
                      />
                      <SelectNationality
                        name="nationality_id"
                        label="Nationality"
                        placeholder="Nationality"
                        value={values.nationality_id}
                        onChange={(value) =>
                          setFieldValue("nationality_id", value)
                        }
                      />
                      <div className="space-y-2">
                        <p className="text-base text-gray-600">Phone Number</p>
                        <PhoneInput
                          placeholder="Enter Your Number"
                          value={values.phone}
                          onChange={(value) => setFieldValue("phone", value)}
                          defaultCountry="EG"
                          className="w-full p-3 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer - Fixed at bottom */}
                  <div className="flex-none border-t bg-white p-6">
                    <div className="flex gap-3 max-w-full">
                      <Button
                        variant="contained"
                        onClick={() => handleConfirmBooking(values)}
                        className="flex-1 bg-primary-light hover:bg-primary-dark"
                      >
                        Confirm
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
      {isPending && <Spinner />}
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    </div>
  );
};

export default MainDataBookingForm;
