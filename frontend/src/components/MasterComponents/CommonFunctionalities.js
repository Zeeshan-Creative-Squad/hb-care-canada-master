export const showAlertMessage = (message, type) => {
  let color = "";
  switch (type) {
    case "success":
      color = "green";
      break;
    case "fail":
      color = "red";
      break;
    default:
      color = "black";
      break;
  }

  const alertDiv = document.createElement("div");
  alertDiv.textContent = message;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "5%";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translate(-50%, -50%)";
  alertDiv.style.color = "#fff";
  alertDiv.style.backgroundColor = color;
  alertDiv.style.padding = "10px";
  alertDiv.style.borderRadius = "5px";
  alertDiv.style.zIndex = "9999";

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 1500);
};