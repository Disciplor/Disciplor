document.addEventListener("DOMContentLoaded", function () {
  let entries = [];
  let customFields = [];

  // Function to display entries
  function displayEntries() {
    const ul = document.querySelector("#entries");
    ul.innerHTML = "";

    entries.sort((a, b) => (a.date < b.date ? -1 : 1));
    entries.forEach((entry) => {
      const li = document.createElement("li");
      const customFieldValues = customFields
        .map((field) => `${field.name}: ${entry[field.name]}`)
        .join(", ");
      li.textContent = `${entry.date}: ${entry.text} (${customFieldValues})`;
      ul.appendChild(li);
    });
  }

  // Function to add a custom field
  function addCustomField() {
    const fieldNameInput = document.querySelector("#custom-field-name");
    const fieldTypeSelect = document.querySelector("#custom-field-type");

    const fieldName = fieldNameInput.value;
    const fieldType = fieldTypeSelect.value;

    if (fieldName) {
      if (fieldType === "text") {
        customFields.push({ name: fieldName, type: fieldType });
      } else if (fieldType === "dropdown") {
        const options = [];
        // Add dropdown options, adjust as needed
        options.push("Option 1");
        options.push("Option 2");
        customFields.push({ name: fieldName, type: fieldType, options });
      }

      displayCustomFields();
      fieldNameInput.value = "";
    }
  }

  // Rest of your code (Add Entry, Export to XLSX, etc.)

  // Add Custom Field Button
  const addCustomFieldButton = document.querySelector("#add-custom-field");
  addCustomFieldButton.addEventListener("click", addCustomField);
});
