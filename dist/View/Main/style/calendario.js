flatpickr("#DD", {
    minDate: "today",
    maxDate: "dd/mm/2026",
    allowInput: true,
    "disable": [
        function(date) {
            return (date.getDay() === 0 || date.getDay() === 6);

        }
    ],
    "locale": {
        "firstDayOfWeek": 0
    },
    inline: true
});