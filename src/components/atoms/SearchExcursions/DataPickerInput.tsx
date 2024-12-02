<<<<<<< HEAD
=======
// DatePickerInput.tsx
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useMediaQuery, Theme } from "@mui/material";
<<<<<<< HEAD
import { CalendarTodayOutlined } from "@mui/icons-material";
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94

interface DatePickerInputProps {
  selectedDate: dayjs.Dayjs | null;
  onDateChange: (date: dayjs.Dayjs | null) => void;
<<<<<<< HEAD
  isOpen?: boolean;
  onClose?: () => void;
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  mobileWidth?: string;
  laptopWidth?: string;
  height?: string;
  labelProps?: {
    fontSize?: string;
    color?: string;
    transform?: string;
  };
<<<<<<< HEAD
=======
  isOpen?: boolean; // New prop to control date picker opening
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selectedDate,
  onDateChange,
<<<<<<< HEAD
  isOpen = false,
  onClose,
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  mobileWidth = "100%",
  laptopWidth = "400px",
  height = "56px",
  labelProps = {
    fontSize: "19px",
    color: "rgba(0, 0, 0, 0.6)",
    transform: "translate(14px, 16px) scale(1)",
  },
<<<<<<< HEAD
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(isOpen);
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(!selectedDate);
  const isLaptop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    setIsDatePickerOpen(isOpen);
=======
  isOpen = false, // Default value for isOpen prop
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(true);
  const isLaptop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  // Effect to handle external opening of date picker
  useEffect(() => {
    if (isOpen) {
      setIsDatePickerOpen(true);
      setIsLabelVisible(false);
    }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  }, [isOpen]);

  useEffect(() => {
    setIsLabelVisible(!selectedDate);
  }, [selectedDate]);

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
<<<<<<< HEAD
    if (newValue && newValue.isValid()) {
      onDateChange(newValue);
      setIsDatePickerOpen(false);
      onClose?.();
    }
  };

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
=======
    onDateChange(newValue);
    setIsDatePickerOpen(false);
  };

  const handleInputClick = () => {
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
    setIsLabelVisible(false);
    setIsDatePickerOpen(true);
  };

  const handleClosePicker = () => {
    setIsDatePickerOpen(false);
    if (!selectedDate) {
      setIsLabelVisible(true);
    }
<<<<<<< HEAD
    onClose?.();
  };

  const shouldDisableDate = (date: dayjs.Dayjs) => {
    return date.isBefore(dayjs().startOf("day"));
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
<<<<<<< HEAD
        slots={{
          openPickerIcon: CalendarTodayOutlined,
        }}
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        label={isLabelVisible ? "Select Date" : ""}
        value={selectedDate}
        onChange={handleDateChange}
        open={isDatePickerOpen}
<<<<<<< HEAD
        onClose={handleClosePicker}
        desktopModeMediaQuery="(min-width: 0px)"
        format="MM/DD/YYYY"
        shouldDisableDate={shouldDisableDate}
=======
        onOpen={handleInputClick}
        onClose={handleClosePicker}
        desktopModeMediaQuery="(min-width: 0px)"
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        slotProps={{
          textField: {
            onClick: handleInputClick,
            onKeyDown: (e) => {
<<<<<<< HEAD
              e.preventDefault();
              e.stopPropagation();
              return false;
            },
            onFocus: (e) => {
              e.target.blur();
=======
              if (e.key === "Enter") {
                handleInputClick();
              }
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
            },
            sx: {
              width: isLaptop ? laptopWidth : mobileWidth,
              height,
              "& .MuiInputBase-root": {
                height: "100%",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: "0.4rem",
<<<<<<< HEAD
                border: "2px solid #C0C0C0",
                "&:hover": {
                  border: "2px solid #111827",
=======
                border: "2px solid #cccccc",
                "&:hover": {
                  border: "2px solid #D1D5DB",
                  backgroundColor: "#E5E7EB",
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
                },
                "&.Mui-focused": {
                  border: "2px solid #9CA3AF",
                },
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": {
                height: "100%",
                padding: "0 18px",
<<<<<<< HEAD
                cursor: "pointer",
                caretColor: "transparent",
                userSelect: "none",
                "-webkit-user-select": "none",
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
              },
              "& .MuiInputLabel-root": {
                ...labelProps,
                "&.MuiInputLabel-shrink": {
                  transform: "translate(14px, -6px) scale(0.75)",
                },
              },
            },
            fullWidth: false,
            variant: "outlined",
<<<<<<< HEAD
            InputProps: {
              readOnly: true,
              disableUnderline: true,
            },
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
          },
          popper: {
            sx: {
              "& .MuiPaper-root": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
              },
            },
          },
<<<<<<< HEAD
          field: {
            readOnly: true,
          },
=======
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
