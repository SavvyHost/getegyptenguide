import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useMediaQuery, Theme } from "@mui/material";
import { CalendarTodayOutlined } from "@mui/icons-material";

interface DatePickerInputProps {
  selectedDate: dayjs.Dayjs | null;
  onDateChange: (date: dayjs.Dayjs | null) => void;
  isOpen?: boolean;
  onClose?: () => void;
  mobileWidth?: string;
  laptopWidth?: string;
  height?: string;
  labelProps?: {
    fontSize?: string;
    color?: string;
    transform?: string;
  };
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selectedDate,
  onDateChange,
  isOpen = false,
  onClose,
  mobileWidth = "100%",
  laptopWidth = "400px",
  height = "56px",
  labelProps = {
    fontSize: "19px",
    color: "rgba(0, 0, 0, 0.6)",
    transform: "translate(14px, 16px) scale(1)",
  },
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(isOpen);
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(!selectedDate);
  const isLaptop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    setIsDatePickerOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsLabelVisible(!selectedDate);
  }, [selectedDate]);

  const handleDateChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue && newValue.isValid()) {
      onDateChange(newValue);
      setIsDatePickerOpen(false);
      onClose?.();
    }
  };

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLabelVisible(false);
    setIsDatePickerOpen(true);
  };

  const handleClosePicker = () => {
    setIsDatePickerOpen(false);
    if (!selectedDate) {
      setIsLabelVisible(true);
    }
    onClose?.();
  };

  const shouldDisableDate = (date: dayjs.Dayjs) => {
    return date.isBefore(dayjs().startOf("day"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        slots={{
          openPickerIcon: CalendarTodayOutlined,
        }}
        label={isLabelVisible ? "Select Date" : ""}
        value={selectedDate}
        onChange={handleDateChange}
        open={isDatePickerOpen}
        onClose={handleClosePicker}
        desktopModeMediaQuery="(min-width: 0px)"
        format="MM/DD/YYYY"
        shouldDisableDate={shouldDisableDate}
        slotProps={{
          textField: {
            onClick: handleInputClick,
            onKeyDown: (e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            },
            onFocus: (e) => {
              e.target.blur();
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
                border: "2px solid #C0C0C0",
                "&:hover": {
                  border: "2px solid #111827",
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
                cursor: "pointer",
                caretColor: "transparent",
                userSelect: "none",
                "-webkit-user-select": "none",
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
            InputProps: {
              readOnly: true,
              disableUnderline: true,
            },
          },
          popper: {
            sx: {
              "& .MuiPaper-root": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
              },
            },
          },
          field: {
            readOnly: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerInput;
