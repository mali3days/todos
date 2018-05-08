
export const getFormData = () => {
    const form = document.getElementsByClassName("ajax-form")[0];
    const input = document.getElementsByClassName("info-input")[0];
    const name = input.value;
    return name !== "" ? { name } : null
}