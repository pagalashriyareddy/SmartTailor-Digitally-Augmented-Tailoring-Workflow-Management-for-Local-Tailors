function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.style.display = 'block';
  setTimeout(() => popup.style.display = 'none', 3000);
}

function submitOrder() {
  showPopup("Order submitted successfully!");
}

function saveMeasurements() {
  showPopup("Measurements saved successfully!");
}

function estimateMeasurements() {
  const imageInput = document.getElementById("bodyImageInput");
  const resultDiv = document.getElementById("estimatedResults");

  if (imageInput.files.length === 0) {
    alert("Please upload a photo first.");
    return;
  }

  const filename = imageInput.files[0].name;
  resultDiv.innerHTML = `<p><strong>Estimated from ${filename}:</strong></p>
    <ul>
      <li><strong>Shoulder:</strong> 17 inches</li>
      <li><strong>Waist:</strong> 30 inches</li>
      <li><strong>Chest:</strong> 36 inches</li>
    </ul>
    <p><em>(Note: This is a mock result. Actual AI estimation requires backend model.)</em></p>`;
}

