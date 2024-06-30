type FormElements = HTMLFormControlsCollection & {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
    terms: HTMLInputElement;
};

interface ContactForm extends HTMLFormElement {
    readonly elements: FormElements;
}

const getElement = (id: string): HTMLElement | null =>
    document.getElementById(id);

const showElement = (element: HTMLElement): void =>
    element.classList.remove("hidden");
const hideElement = (element: HTMLElement): void =>
    element.classList.add("hidden");

const setElementContent = (element: HTMLElement, content: string): void => {
    element.innerHTML = content;
};

const displaySuccessMessage = (message: string): void => {
    const formContainer = getElement("form-container");
    const successMessage = getElement("success-message");
    if (formContainer && successMessage) {
        hideElement(formContainer);
        setElementContent(successMessage, `<p class="text-center text-xl green-text">${message}</p>`);
        showElement(successMessage);
    }
};

const displayErrorMessage = (message: string): void => {
    const errorMessage = getElement("error-message");
    if (errorMessage) {
        setElementContent(errorMessage, `<p class="text-center text-xl">${message}</p>`);
        showElement(errorMessage);
    }
};

const isFormValid = (form: ContactForm): boolean => {
    const {name, email, message, terms} = form.elements;
    return (
        [name, email, message].every((field) => field.value.trim() !== "") &&
        terms.checked
    );
};

const submitForm = async (form: ContactForm): Promise<Response> => {
    const data = new FormData(form);
    return fetch(form.action, {
        method: form.method,
        body: data,
        headers: {Accept: "application/json"},
        mode: 'cors',
    });
};

const handleSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();

    const form = event.target as ContactForm;
    const formContainer = getElement("form-container");
    const errorMessage = getElement("error-message");

    if (!formContainer || !errorMessage) {
        console.error("Required DOM elements not found");
        return;
    }

    if (!isFormValid(form)) {
        displayErrorMessage("Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία");
        return;
    }

    try {
        hideElement(errorMessage);
        const response = await submitForm(form);

        if (response.ok) {
            form.reset();
            displaySuccessMessage("Το μήνυμά σας στάλθηκε επιτυχώς!");
        } else {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || "Form submission failed");
        }
    } catch (error) {
        let errorMessage = "Παρουσιάστηκε πρόβλημα κατά την αποστολή της φόρμας. Παρακαλώ δοκιμάστε ξανά.";
        if (error instanceof Error) {
            console.error("Error submitting form:", error.message);
            if (error.message.includes("NetworkError") || error.message.includes("Failed to fetch")) {
                errorMessage = "Πρόβλημα δικτύου. Παρακαλώ ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.";
            }
        } else {
            console.error("Unknown error:", error);
        }
        displayErrorMessage(errorMessage);
    }
};

const form = getElement("contact-form") as ContactForm | null;
form?.addEventListener("submit", handleSubmit);